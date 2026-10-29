// Workers Assets can ignore Range and return the complete MP4. Supply real
// single-byte ranges so video players can load metadata and seek reliably.
// This handler is scoped to the existing 6.4 MB maintenance video.
export async function serveVideo(request, assets) {
  if (!['GET', 'HEAD'].includes(request.method)) {
    return new Response(null, { status: 405, headers: { Allow: 'GET, HEAD' } });
  }
  const assetHeaders = new Headers(request.headers);
  assetHeaders.delete('range');
  assetHeaders.delete('if-range');
  assetHeaders.set('accept-encoding', 'identity');
  const asset = await assets.fetch(new Request(request.url, { method: 'GET', headers: assetHeaders }));
  if (asset.status !== 200) return asset;
  const headers = new Headers(asset.headers);
  headers.set('Accept-Ranges', 'bytes');
  if (request.method === 'HEAD') {
    const length = headers.get('content-length');
    if (length === null) headers.set('Content-Length', String((await asset.arrayBuffer()).byteLength));
    else await asset.body?.cancel();
    return new Response(null, { status: 200, headers });
  }
  const ifRange = request.headers.get('if-range');
  const etag = headers.get('etag');
  const modified = headers.get('last-modified');
  const validatorMatches = !ifRange ||
    (!!etag && !etag.startsWith('W/') && ifRange === etag) ||
    (!!modified && Number.isFinite(Date.parse(ifRange)) && Date.parse(modified) <= Date.parse(ifRange));
  const range = validatorMatches && /^bytes=(\d*)-(\d*)$/.exec(request.headers.get('range') || '');
  // Multiple or malformed ranges may be ignored and served as a complete file.
  if (!range || (!range[1] && !range[2])) return new Response(asset.body, { status: 200, headers });
  const bytes = await asset.arrayBuffer();
  const size = bytes.byteLength;
  const suffix = range[1] === '';
  const start = suffix ? Math.max(0, size - Number(range[2])) : Number(range[1]);
  const end = suffix || range[2] === '' ? size - 1 : Math.min(Number(range[2]), size - 1);
  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) ||
      (suffix && Number(range[2]) === 0) || start >= size || start > end) {
    headers.set('Content-Range', `bytes */${size}`);
    headers.set('Content-Length', '0');
    return new Response(null, { status: 416, headers });
  }
  headers.set('Content-Range', `bytes ${start}-${end}/${size}`);
  headers.set('Content-Length', String(end - start + 1));
  return new Response(bytes.slice(start, end + 1), { status: 206, headers });
}
