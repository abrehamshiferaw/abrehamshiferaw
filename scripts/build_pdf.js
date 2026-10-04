import { generatePdfCv } from './generate_pdf_cv.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const root = path.resolve(__dirname, '..');

async function main() {
  const publicPath = path.join(root, 'public', 'docs', 'Abreham_Shiferaw_Senior_AI_FullStack_Engineer_CV.pdf');
  const docsPath = path.join(root, 'docs', 'Abreham_Shiferaw_Senior_AI_FullStack_Engineer_CV.pdf');

  console.log('Generating PDF to public/docs...');
  await generatePdfCv(publicPath);
  console.log('Generating PDF to docs/...');
  await generatePdfCv(docsPath);
  console.log('PDF CV generated successfully!');
}

main().catch(err => {
  console.error('Failed to generate PDF:', err);
  process.exit(1);
});
