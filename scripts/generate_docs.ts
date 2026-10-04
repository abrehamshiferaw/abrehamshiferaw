import * as fs from 'fs';
import * as path from 'path';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  AlignmentType,
  Table,
  TableRow,
  TableCell,
  WidthType,
  BorderStyle,
  convertInchesToTwip,
  ShadingType,
} from 'docx';

// Color Palette - Executive Modern Navy & Slate
const COLOR_PRIMARY = '0F172A'; // Slate 900
const COLOR_ACCENT = '0284C7';  // Sky 600
const COLOR_TEXT = '334155';    // Slate 700
const COLOR_MUTED = '64748B';   // Slate 500
const COLOR_BORDER = 'CBD5E1';  // Slate 300
const COLOR_BG_LIGHT = 'F8FAFC'; // Slate 50

function createDivider(): Paragraph {
  return new Paragraph({
    spacing: { before: 120, after: 180 },
    border: {
      bottom: {
        color: COLOR_ACCENT,
        space: 1,
        style: BorderStyle.SINGLE,
        size: 12,
      },
    },
  });
}

function createSectionHeading(title: string): Paragraph {
  return new Paragraph({
    text: title.toUpperCase(),
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 240, after: 80 },
    border: {
      bottom: {
        color: COLOR_ACCENT,
        space: 4,
        style: BorderStyle.SINGLE,
        size: 10,
      },
    },
    children: [
      new TextRun({
        text: title.toUpperCase(),
        bold: true,
        size: 22, // 11pt
        color: COLOR_PRIMARY,
        font: 'Calibri',
      }),
    ],
  });
}

function createBullet(leadText: string, bodyText: string): Paragraph {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { before: 40, after: 60, line: 260 },
    children: [
      new TextRun({
        text: leadText + ' ',
        bold: true,
        size: 20, // 10pt
        color: COLOR_PRIMARY,
        font: 'Calibri',
      }),
      new TextRun({
        text: bodyText,
        size: 20,
        color: COLOR_TEXT,
        font: 'Calibri',
      }),
    ],
  });
}

// -------------------------------------------------------------
// 1. GENERATE CV / RESUME DOCX
// -------------------------------------------------------------
async function generateCV(): Promise<Buffer> {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            color: COLOR_TEXT,
            size: 20,
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.6),
              bottom: convertInchesToTwip(0.6),
              left: convertInchesToTwip(0.65),
              right: convertInchesToTwip(0.65),
            },
          },
        },
        children: [
          // Name Header
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 40 },
            children: [
              new TextRun({
                text: 'ABREHAM WONDIMU SHIFERAW',
                bold: true,
                size: 36, // 18pt
                color: COLOR_PRIMARY,
                font: 'Calibri',
              }),
            ],
          }),

          // Professional Title Subtitle
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 80 },
            children: [
              new TextRun({
                text: 'SENIOR FULL-STACK & AI INTEGRATION ENGINEER',
                bold: true,
                size: 22, // 11pt
                color: COLOR_ACCENT,
                font: 'Calibri',
              }),
            ],
          }),

          // Contact Details Line
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 160 },
            children: [
              new TextRun({ text: 'Addis Ababa, Ethiopia (Open to Remote / Relocation)  •  ', size: 18, color: COLOR_MUTED }),
              new TextRun({ text: 'abrishwon9@gmail.com  •  ', size: 18, color: COLOR_MUTED }),
              new TextRun({ text: 'github.com/abrehamshiferaw  •  ', size: 18, color: COLOR_ACCENT }),
              new TextRun({ text: 'linkedin.com/in/abrishwon', size: 18, color: COLOR_ACCENT }),
            ],
          }),

          // Summary Section
          createSectionHeading('Professional Summary'),
          new Paragraph({
            spacing: { before: 60, after: 120, line: 260 },
            children: [
              new TextRun({
                text:
                  'Senior Full-Stack & AI Integration Engineer with 5+ years of experience architecting high-throughput web applications, edge AI systems, and developer-facing SDKs across TypeScript, Python, Next.js, and Rust. Proven track record engineering production AI cost-governance engines (Toka SDK), hybrid post-quantum cryptographic financial gateways (VaultX), and multi-modal computer vision tracking pipelines (ArcFace + YOLOv8 + OSNet). Adept at taking complex mathematical and algorithmic systems from research to horizontally scalable, containerized cloud services with strict security and reliability standards.',
                size: 20,
                color: COLOR_TEXT,
              }),
            ],
          }),

          // Technical Skills Index
          createSectionHeading('Technical Skills Index'),
          new Table({
            width: { size: 100, type: WidthType.PERCENTAGE },
            borders: {
              top: { style: BorderStyle.NONE },
              bottom: { style: BorderStyle.NONE },
              left: { style: BorderStyle.NONE },
              right: { style: BorderStyle.NONE },
              insideHorizontal: { style: BorderStyle.SINGLE, color: 'E2E8F0', size: 4 },
              insideVertical: { style: BorderStyle.NONE },
            },
            rows: [
              new TableRow({
                children: [
                  new TableCell({
                    width: { size: 28, type: WidthType.PERCENTAGE },
                    children: [new Paragraph({ children: [new TextRun({ text: 'Languages & Core:', bold: true, size: 19, color: COLOR_PRIMARY })] })],
                  }),
                  new TableCell({
                    width: { size: 72, type: WidthType.PERCENTAGE },
                    children: [new Paragraph({ children: [new TextRun({ text: 'TypeScript, JavaScript (ESNext/Node.js), Python 3, Dart, Rust, PHP, SQL (PostgreSQL), HTML5/CSS3, C/Assembly', size: 19 })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'AI, ML & Vision:', bold: true, size: 19, color: COLOR_PRIMARY })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'PyTorch, Ultralytics YOLOv8, ArcFace Embeddings, OSNet (ReID), BoT-SORT Tracking, OpenCV, TensorFlow.js, Face-API, Tesseract OCR, SymPy', size: 19 })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'LLM & AI Gateway:', bold: true, size: 19, color: COLOR_PRIMARY })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'OpenAI API, Anthropic Claude, Google Gemini SDK (@google/genai), DeepSeek, Semantic Prompt Caching, Token Budget Enforcers, FinOps', size: 19 })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Web & Mobile:', bold: true, size: 19, color: COLOR_PRIMARY })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Next.js 15 (App Router, Server Actions), React 19, React Native, Expo Router, Redux Toolkit, Zustand, Flutter, FastAPI, Express, Tailwind CSS v4', size: 19 })] })],
                  }),
                ],
              }),
              new TableRow({
                children: [
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'Cloud & Security:', bold: true, size: 19, color: COLOR_PRIMARY })] })],
                  }),
                  new TableCell({
                    children: [new Paragraph({ children: [new TextRun({ text: 'PostgreSQL, Supabase (RLS), Firebase, Redis, Docker, GitHub Actions, NIST Post-Quantum (ML-KEM-768, ML-DSA-65), ISO-8583', size: 19 })] })],
                  }),
                ],
              }),
            ],
          }),

          // Major Projects & Professional Experience
          createSectionHeading('Professional Experience & Major Engineering Projects'),

          // Toka
          new Paragraph({
            spacing: { before: 120, after: 20 },
            children: [
              new TextRun({ text: 'Toka AI Cost Optimization & Token Governance SDK', bold: true, size: 21, color: COLOR_PRIMARY }),
              new TextRun({ text: '  |  Creator & Lead Architect', italic: true, size: 19, color: COLOR_ACCENT }),
              new TextRun({ text: '\t2024 – Present', bold: true, size: 18, color: COLOR_MUTED }),
            ],
          }),
          createBullet(
            'Engineered Multi-Model SDK:',
            'Built an open-source TypeScript SDK and CLI enabling developer teams to monitor real-time token spend, budget thresholds, and multi-model routing across OpenAI, Anthropic, Gemini, and DeepSeek.'
          ),
          createBullet(
            'Smart Fallback & Routing:',
            'Architected dynamic model routing rules that downgrade routine prompts to lightweight models (e.g. GPT-4o-mini), cutting enterprise LLM API expenditure by up to 55%.'
          ),
          createBullet(
            'High-Hit-Rate Semantic Caching:',
            'Constructed an in-memory and Redis-backed prompt caching layer eliminating duplicate prompt overhead, delivering 90% savings on repetitive context windows.'
          ),

          // VaultX
          new Paragraph({
            spacing: { before: 140, after: 20 },
            children: [
              new TextRun({ text: 'VaultX — Post-Quantum Banking Transition Gateway', bold: true, size: 21, color: COLOR_PRIMARY }),
              new TextRun({ text: '  |  Lead Cryptographic Engineer', italic: true, size: 19, color: COLOR_ACCENT }),
              new TextRun({ text: '\t2024 – Present', bold: true, size: 18, color: COLOR_MUTED }),
            ],
          }),
          createBullet(
            'Hybrid PQC Perimeter Security:',
            'Implemented hybrid classical and post-quantum key establishment combining NIST-standardized ML-KEM-768 (Kyber) and ML-DSA-65 (Dilithium) with classical X25519.'
          ),
          createBullet(
            'Legacy Financial Bridge:',
            'Engineered an automated payload bridge translating verified post-quantum transactions into ACID-compliant ISO-8583 banking settlement records without requiring core mainframe rewrites.'
          ),
          createBullet(
            'Sub-45ms Transaction Latency:',
            'Enforced monotonic nonces and replay-resistant session caching while maintaining sub-45ms processing latency under benchmark load conditions.'
          ),

          // ISS Research
          new Paragraph({
            spacing: { before: 140, after: 20 },
            children: [
              new TextRun({ text: 'Intelligent Surveillance System (ISS)', bold: true, size: 21, color: COLOR_PRIMARY }),
              new TextRun({ text: '  |  Computer Vision & AI Researcher', italic: true, size: 19, color: COLOR_ACCENT }),
              new TextRun({ text: '\t2023 – 2024', bold: true, size: 18, color: COLOR_MUTED }),
            ],
          }),
          createBullet(
            'Multi-Modal Fusion Architecture:',
            'Formulated and benchmarked a multi-modal tracking pipeline integrating YOLOv8 object detection, BoT-SORT spatial tracking, and ArcFace facial feature vectors.'
          ),
          createBullet(
            'ReID Across Occlusion:',
            'Trained and evaluated OSNet deep metric Person Re-Identification (ReID) to recover lost identities during camera leave/re-entry and extreme facial occlusion, boosting identification accuracy by 34%.'
          ),

          // Attendo & Telebirr
          new Paragraph({
            spacing: { before: 140, after: 20 },
            children: [
              new TextRun({ text: 'Attendo & Telebirr Mobile Platforms', bold: true, size: 21, color: COLOR_PRIMARY }),
              new TextRun({ text: '  |  Senior Mobile & Full-Stack Engineer', italic: true, size: 19, color: COLOR_ACCENT }),
              new TextRun({ text: '\t2023 – Present', bold: true, size: 18, color: COLOR_MUTED }),
            ],
          }),
          createBullet(
            'Edge Biometric Face Verification:',
            'Deployed on-device biometric facial verification inside an Expo React Native application using @tensorflow/tfjs and Face-API, achieving sub-300ms verification.'
          ),
          createBullet(
            'Fintech Monorepo Execution:',
            'Constructed a shared Next.js and Expo Router monorepo for payment flows, implementing HMAC-SHA256 signature verification and automated webhook processing with 99.9% uptime.'
          ),

          // Open-Source Packages
          createSectionHeading('Open-Source Packages & Public Tools'),
          createBullet('geez-numerals-converter (npm):', 'Published a zero-dependency npm package for converting Hindu-Arabic integers (1-100,000,000) to Ge\'ez numerals with full bidirectional support.'),
          createBullet('Ethiopian-calendar:', 'Open-source Julian Day Number calendar engine computing 13 Ethiopian solar months, leap years, and movable Orthodox ecclesiastical holidays.'),
          createBullet('telegram-mini-app Foundation:', 'Production Next.js 15 starter for Telegram Web Apps with native @twa-dev/sdk bindings, Redux state hydration, and server authentication.'),
          createBullet('sentinelOS:', 'Experimental bare-metal x86_64 operating system kernel in Rust and C with memory paging and userland isolation.'),

          // Education
          createSectionHeading('Education & Academic Background'),
          new Paragraph({
            spacing: { before: 60, after: 20 },
            children: [
              new TextRun({ text: 'Bachelor of Science (B.Sc.) in Computer Engineering / Software Engineering', bold: true, size: 20, color: COLOR_PRIMARY }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 40 },
            children: [
              new TextRun({ text: 'Addis Ababa University / Institute of Technology  •  [Graduation Year: 2023 / 2024]', size: 19, color: COLOR_MUTED }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 80 },
            children: [
              new TextRun({ text: 'Honors Thesis: ', bold: true, size: 19, color: COLOR_PRIMARY }),
              new TextRun({ text: 'Multi-Modal Biometric Identity Fusion: Real-Time Person Re-Identification (OSNet) and ArcFace Tracking in Video Feeds.', italic: true, size: 19, color: COLOR_TEXT }),
            ],
          }),
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

// -------------------------------------------------------------
// 2. GENERATE COVER LETTER DOCX
// -------------------------------------------------------------
async function generateCoverLetter(): Promise<Buffer> {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            color: COLOR_TEXT,
            size: 21,
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.8),
              bottom: convertInchesToTwip(0.8),
              left: convertInchesToTwip(0.85),
              right: convertInchesToTwip(0.85),
            },
          },
        },
        children: [
          // Candidate Contact Header
          new Paragraph({
            spacing: { before: 0, after: 30 },
            children: [
              new TextRun({
                text: 'ABREHAM WONDIMU SHIFERAW',
                bold: true,
                size: 28,
                color: COLOR_PRIMARY,
              }),
            ],
          }),
          new Paragraph({
            spacing: { before: 0, after: 180 },
            children: [
              new TextRun({
                text: 'Full-Stack & AI Integration Engineer  •  Addis Ababa, Ethiopia (Open to Remote/Relocation)\n',
                size: 19,
                color: COLOR_MUTED,
              }),
              new TextRun({
                text: 'abrishwon9@gmail.com  •  github.com/abrehamshiferaw  •  linkedin.com/in/abrishwon',
                size: 19,
                color: COLOR_ACCENT,
              }),
            ],
          }),
          createDivider(),

          // Date & Recipient Details
          new Paragraph({
            spacing: { before: 100, after: 120 },
            children: [
              new TextRun({ text: '[Date: October 4, 2026]\n\n', size: 20 }),
              new TextRun({ text: 'Hiring Team & Engineering Leadership\n', bold: true, color: COLOR_PRIMARY, size: 20 }),
              new TextRun({ text: '[Target Company: e.g. OpenAI / Anthropic / Vercel / Target Startup]\n', bold: true, color: COLOR_ACCENT, size: 20 }),
              new TextRun({ text: '[Company Address / Remote Division]\n', size: 19, color: COLOR_MUTED }),
            ],
          }),

          // Subject Line
          new Paragraph({
            spacing: { before: 60, after: 160 },
            children: [
              new TextRun({ text: 'SUBJECT: APPLICATION FOR ', bold: true, size: 21, color: COLOR_PRIMARY }),
              new TextRun({ text: '[TARGET JOB TITLE: e.g. Senior Full-Stack & AI Engineer]', bold: true, size: 21, color: COLOR_ACCENT }),
            ],
          }),

          // Salutation
          new Paragraph({
            spacing: { before: 60, after: 100 },
            children: [new TextRun({ text: 'Dear Hiring Team at [Target Company],', bold: true, size: 21, color: COLOR_PRIMARY })],
          }),

          // Body Paragraph 1
          new Paragraph({
            spacing: { before: 40, after: 120, line: 280 },
            children: [
              new TextRun({
                text:
                  'I am writing to express my strong enthusiasm for the [Target Job Title] role at [Target Company]. Having closely tracked your initiatives in [Mention specific company product, e.g., high-performance AI tooling, enterprise agent infrastructure, or developer platforms], I am excited by your commitment to engineering excellence. With extensive experience architecting production developer SDKs, edge computer vision pipelines, and cryptographic financial gateways, I specialize in bridging complex AI/ML models with reliable, user-facing applications.',
              }),
            ],
          }),

          // Body Paragraph 2 - Core Value Pillars
          new Paragraph({
            spacing: { before: 40, after: 80, line: 280 },
            children: [
              new TextRun({
                text:
                  'Throughout my engineering career and open-source contributions, I have focused on solving real-world performance, security, and cost bottlenecks:',
              }),
            ],
          }),

          createBullet(
            '1. AI Cost Optimization & Model Routing (Toka SDK):',
            'Recognizing that uncontrolled token usage and model latency bottleneck enterprise AI scaling, I architected Toka—an open-source TypeScript SDK and CLI supporting OpenAI, Claude, Gemini, and DeepSeek. Toka integrates semantic prompt caching and automated model fallback routing, reducing token expenses by up to 55% while enforcing hard monthly budget limits.'
          ),
          createBullet(
            '2. Cryptographic Rigor & Enterprise Systems (VaultX):',
            'I designed VaultX, a post-quantum cryptographic perimeter gateway implementing NIST-standardized ML-KEM-768 and ML-DSA-65 algorithms alongside classical X25519. VaultX translates quantum-resistant payloads into ACID-compliant ISO-8583 banking settlement records while sustaining sub-45ms latency and strict replay resistance.'
          ),
          createBullet(
            '3. Full-Stack & Edge Intelligence Execution (Attendo & Telebirr):',
            'Across both enterprise mobile and web applications, I have deployed client-side TensorFlow.js facial verification, geofenced location validation, and Next.js / Expo Router monorepo architectures with sub-second payment webhooks and 99.9% availability.'
          ),

          // Body Paragraph 3 - Alignment
          new Paragraph({
            spacing: { before: 100, after: 120, line: 280 },
            children: [
              new TextRun({
                text:
                  '[Target Company]\'s mission to [Insert Company Goal from Job Description, e.g., scale multi-tenant agent systems to millions of users] requires an engineer who pairs low-level systems acumen with rapid product delivery. I bring that balance, backed by strict typing discipline, comprehensive test suites (Jest, PyTest), and clean system abstractions.',
              }),
            ],
          }),

          // Sign-off
          new Paragraph({
            spacing: { before: 80, after: 140, line: 280 },
            children: [
              new TextRun({
                text:
                  'I welcome the opportunity to discuss how my technical leadership and hands-on execution can accelerate the product roadmap at [Target Company]. Thank you for your time and consideration.',
              }),
            ],
          }),

          new Paragraph({
            spacing: { before: 40, after: 20 },
            children: [new TextRun({ text: 'Sincerely,', size: 21, color: COLOR_PRIMARY })],
          }),
          new Paragraph({
            spacing: { before: 20, after: 40 },
            children: [
              new TextRun({ text: 'Abreham Wondimu Shiferaw\n', bold: true, size: 23, color: COLOR_PRIMARY }),
              new TextRun({ text: 'Senior Full-Stack & AI Integration Engineer\n', size: 19, color: COLOR_ACCENT }),
              new TextRun({ text: 'abrishwon9@gmail.com  •  github.com/abrehamshiferaw  •  linkedin.com/in/abrishwon', size: 18, color: COLOR_MUTED }),
            ],
          }),
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

// -------------------------------------------------------------
// 3. GENERATE GITHUB ENGINEERING DOSSIER DOCX
// -------------------------------------------------------------
async function generateDossier(): Promise<Buffer> {
  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: 'Calibri',
            color: COLOR_TEXT,
            size: 20,
          },
        },
      },
    },
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: convertInchesToTwip(0.7),
              bottom: convertInchesToTwip(0.7),
              left: convertInchesToTwip(0.7),
              right: convertInchesToTwip(0.7),
            },
          },
        },
        children: [
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 40 },
            children: [
              new TextRun({
                text: 'ABREHAM WONDIMU SHIFERAW',
                bold: true,
                size: 32,
                color: COLOR_PRIMARY,
              }),
            ],
          }),
          new Paragraph({
            alignment: AlignmentType.CENTER,
            spacing: { before: 0, after: 120 },
            children: [
              new TextRun({
                text: 'COMPLETE GITHUB REPOSITORY DOSSIER & ARCHITECTURAL AUDIT',
                bold: true,
                size: 22,
                color: COLOR_ACCENT,
              }),
            ],
          }),
          createDivider(),

          new Paragraph({
            spacing: { before: 80, after: 120 },
            children: [
              new TextRun({
                text:
                  'This document provides an executive architectural review of Abreham Shiferaw\'s production codebases, research repositories, open-source packages, and systems engineering projects across GitHub (@abrehamshiferaw).',
                italic: true,
                size: 19,
                color: COLOR_MUTED,
              }),
            ],
          }),

          createSectionHeading('Key Codebase Architectural Highlights'),

          createBullet('Toka (toka-sdk):', 'Enterprise LLM Cost & FinOps SDK. MultiProvider architecture supporting OpenAI, Anthropic, Gemini, and DeepSeek with semantic prompt caching, model routing, and token budget limiters.'),
          createBullet('VaultX:', 'Post-Quantum Banking Transition Gateway. Hybrid X25519 + NIST ML-KEM-768 / ML-DSA-65 perimeter gateway translating PQC payloads into legacy ISO-8583 banking settlement records.'),
          createBullet('ISS Thesis:', 'Intelligent Surveillance System with ArcFace facial embeddings, YOLOv8 spatio-temporal tracking, and OSNet Person Re-Identification (ReID) with multi-modal identity fusion.'),
          createBullet('Attendo:', 'Biometric Attendance Application combining edge TensorFlow.js facial verification, GPS geofencing, Supabase RLS, and Expo React Native mobile client.'),
          createBullet('Telebirr Platform:', 'Fintech Monorepo combining Next.js 14 and Expo Router with HMAC-SHA256 signature verification and payment gateway integration.'),
          createBullet('sentinelOS:', 'Bare-metal x86_64 operating system kernel in Rust and C with custom paging, userland isolation, and low-level interrupt handlers.'),
          createBullet('geez-numerals-converter (npm):', 'Production npm package implementing Hindu-Arabic to Ethiopic Ge\'ez numeral transformation up to 100,000,000 with zero external dependencies.'),
          createBullet('Ethiopian-calendar:', 'Deterministic Julian Day Number (JDN) calendar calculation engine supporting 13 solar months, leap years, and liturgical feasts.'),
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

// -------------------------------------------------------------
// MAIN EXECUTION
// -------------------------------------------------------------
async function run() {
  const docsDir = path.resolve(process.cwd(), 'docs');
  const publicDocsDir = path.resolve(process.cwd(), 'public/docs');

  if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });
  if (!fs.existsSync(publicDocsDir)) fs.mkdirSync(publicDocsDir, { recursive: true });

  console.log('Generating CV .docx...');
  const cvBuffer = await generateCV();
  fs.writeFileSync(path.join(docsDir, 'Abreham_Shiferaw_Senior_AI_FullStack_Engineer_CV.docx'), cvBuffer);
  fs.writeFileSync(path.join(publicDocsDir, 'Abreham_Shiferaw_Senior_AI_FullStack_Engineer_CV.docx'), cvBuffer);

  console.log('Generating Cover Letter .docx...');
  const clBuffer = await generateCoverLetter();
  fs.writeFileSync(path.join(docsDir, 'Abreham_Shiferaw_Modular_Executive_Cover_Letter.docx'), clBuffer);
  fs.writeFileSync(path.join(publicDocsDir, 'Abreham_Shiferaw_Modular_Executive_Cover_Letter.docx'), clBuffer);

  console.log('Generating Technical Dossier .docx...');
  const dosBuffer = await generateDossier();
  fs.writeFileSync(path.join(docsDir, 'Abreham_Shiferaw_GitHub_Engineering_Dossier.docx'), dosBuffer);
  fs.writeFileSync(path.join(publicDocsDir, 'Abreham_Shiferaw_GitHub_Engineering_Dossier.docx'), dosBuffer);

  console.log('Successfully generated all .docx files in /docs and /public/docs!');
}

run().catch((err) => {
  console.error('Error generating docs:', err);
  process.exit(1);
});
