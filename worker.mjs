import openNextWorker from './.open-next/worker.js';
import { serveVideo } from './lib/serve-video.mjs';
export * from './.open-next/worker.js';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (url.pathname !== '/media/building-maintenance.mp4') {
      return openNextWorker.fetch(request, env, ctx);
    }
    if (url.protocol === 'http:' || url.hostname === 'www.promanagebuilders.com' ||
        url.hostname === 'promanage-builders.mail-82f.workers.dev') {
      url.protocol = 'https:';
      url.hostname = 'promanagebuilders.com';
      url.port = '';
      return Response.redirect(url.href, 308);
    }
    return serveVideo(request, env.ASSETS);
  },
};
