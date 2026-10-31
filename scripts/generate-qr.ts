import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { CONTACTS } from '../src/config/contacts';

async function generateQRCodes() {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  const tgSvg = await QRCode.toString(CONTACTS.telegram, {
    type: 'svg',
    color: {
      dark: '#0284c7',
      light: '#ffffff'
    },
    margin: 1
  });

  const waSvg = await QRCode.toString(CONTACTS.whatsapp, {
    type: 'svg',
    color: {
      dark: '#16a34a',
      light: '#ffffff'
    },
    margin: 1
  });

  fs.writeFileSync(path.join(publicDir, 'qr-telegram.svg'), tgSvg);
  fs.writeFileSync(path.join(publicDir, 'qr-whatsapp.svg'), waSvg);

  console.log('✅ Generated QR code SVGs for Telegram and WhatsApp in public/');
}

generateQRCodes().catch(err => {
  console.error('Failed to generate QR codes:', err);
  process.exit(1);
});
