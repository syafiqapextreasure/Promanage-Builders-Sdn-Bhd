export const PROMANAGE_CONTACT = {
  companyName: 'PROMANAGE BUILDERS SDN BHD',
  registrationNumber: '202401013030 (1558880-H)',
  managingDirector: 'Benedict Tan',
  phoneDisplay: '+60 16 328 1581',
  phoneRaw: '60163281581',
  email: 'promanagebuilders1558880h@gmail.com',
  address: 'No. 38, Jalan SE03, Sunway Eastwood, Equine Park, 43300 Seri Kembangan, Selangor',
  streetAddress: 'No. 38, Jalan SE03, Sunway Eastwood, Equine Park',
  addressLocality: 'Seri Kembangan',
  addressRegion: 'Selangor',
  postalCode: '43300',
  googleMapsUrl: 'https://maps.google.com/?q=No.+38,+Jalan+SE03,+Sunway+Eastwood,+Equine+Park,+43300+Seri+Kembangan,+Selangor'
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultText =
    "Hello Benedict Tan / Promanage Builders, I would like to enquire about your interior design, renovation, and construction services.";
  const textToSend = customMessage ? customMessage.trim() : defaultText;
  return `https://wa.me/${PROMANAGE_CONTACT.phoneRaw}?text=${encodeURIComponent(textToSend)}`;
}

export function formatWhatsAppEnquiryDraft(data: {
  name: string;
  service: string;
  location: string;
  message: string;
  budget?: string;
}): string {
  let draft = `*Enquiry for Promanage Builders Sdn Bhd*\n`;
  draft += `Name: ${data.name.trim()}\n`;
  draft += `Service: ${data.service}\n`;
  draft += `Project Location: ${data.location.trim()}\n`;
  if (data.budget && data.budget.trim()) {
    draft += `Estimated Budget: ${data.budget.trim()}\n`;
  }
  draft += `Details: ${data.message.trim()}`;
  return draft;
}
