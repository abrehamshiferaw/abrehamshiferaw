import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

export function generatePdfCv(outputPath) {
  // A4 size: 595.28 x 841.89 points
  const doc = new PDFDocument({
    size: 'A4',
    margins: { top: 0, bottom: 0, left: 0, right: 0 },
    bufferPages: true,
  });

  const dir = path.dirname(outputPath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const stream = fs.createWriteStream(outputPath);
  doc.pipe(stream);

  const PAGE_WIDTH = 595.28;
  const PAGE_HEIGHT = 841.89;
  const SIDEBAR_WIDTH = 195;
  const CONTENT_X = SIDEBAR_WIDTH + 24;
  const CONTENT_WIDTH = PAGE_WIDTH - CONTENT_X - 24;

  // Colors
  const NAVY = '#0F172A';        // Slate 900
  const SIDEBAR_BG = '#F8FAFC';  // Slate 50
  const SIDEBAR_BORDER = '#E2E8F0'; // Slate 200
  const TEAL_ACCENT = '#0284C7'; // Sky 600
  const AMBER_ACCENT = '#D97706'; // Amber 600
  const TEXT_DARK = '#0F172A';
  const TEXT_MUTED = '#475569';  // Slate 600
  const TEXT_LIGHT = '#64748B';  // Slate 500
  const CHIP_BG = '#F1F5F9';
  const CHIP_TEXT = '#334155';

  // Helper: Draw Sidebar on a page
  function drawSidebarBackground() {
    doc.save();
    // Sidebar fill
    doc.rect(0, 0, SIDEBAR_WIDTH, PAGE_HEIGHT).fill(SIDEBAR_BG);
    // Vertical divider line
    doc.strokeColor(SIDEBAR_BORDER).lineWidth(1).moveTo(SIDEBAR_WIDTH, 0).lineTo(SIDEBAR_WIDTH, PAGE_HEIGHT).stroke();
    doc.restore();
  }

  // --- PAGE 1 ---
  drawSidebarBackground();

  // SIDEBAR CONTENT: Page 1
  let sy = 28;

  // Monogram / Avatar frame
  doc.save();
  doc.roundedRect(24, sy, 46, 46, 10).fill(NAVY);
  doc.fillColor('#38BDF8').font('Helvetica-Bold').fontSize(18).text('AS', 24, sy + 13, { width: 46, align: 'center' });
  doc.restore();

  sy += 58;

  // Contact & Portfolio Links
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.5).text('VERIFIED CONTACT', 24, sy);
  sy += 14;

  const contacts = [
    { label: 'Email', val: 'abrishwon9@gmail.com' },
    { label: 'GitHub', val: 'github.com/abrehamshiferaw' },
    { label: 'LinkedIn', val: 'linkedin.com/in/abrishwon' },
    { label: 'Portfolio', val: 'abrehamshiferaw.github.io' },
    { label: 'Location', val: 'Addis Ababa, ET (Remote/Reloc)' },
  ];

  contacts.forEach((c) => {
    doc.fillColor(TEXT_LIGHT).font('Helvetica-Bold').fontSize(7.5).text(c.label.toUpperCase(), 24, sy);
    sy += 9;
    doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(8).text(c.val, 24, sy, { width: SIDEBAR_WIDTH - 40 });
    sy += 14;
  });

  sy += 6;

  // Skills Categories
  doc.strokeColor(SIDEBAR_BORDER).lineWidth(0.8).moveTo(24, sy).lineTo(SIDEBAR_WIDTH - 20, sy).stroke();
  sy += 12;

  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.5).text('CORE COMPETENCIES', 24, sy);
  sy += 14;

  const skillGroups = [
    {
      group: 'AI & LLM Systems',
      items: ['Multi-Model Routing', 'Prompt Caching & FinOps', 'RAG & Vector Embeddings', 'DSPy & Structured JSON', 'Agentic Workflows'],
    },
    {
      group: 'Full-Stack & Distributed',
      items: ['TypeScript & Node.js', 'React 19 & Next.js', 'Python & FastAPI', 'PostgreSQL & Redis', 'Docker & CI/CD Pipelines'],
    },
    {
      group: 'Computer Vision & Edge',
      items: ['YOLOv8 & Object Tracking', 'ArcFace & Deep ReID', 'PyTorch & ONNX Runtime', 'TensorRT Quantization'],
    },
    {
      group: 'Fintech & Security',
      items: ['NIST Post-Quantum (ML-KEM)', 'ISO-8583 Gateway Flows', 'Telebirr & Chapa APIs', 'HMAC-SHA256 Tokenization'],
    },
  ];

  skillGroups.forEach((sg) => {
    doc.fillColor(TEAL_ACCENT).font('Helvetica-Bold').fontSize(8).text(sg.group.toUpperCase(), 24, sy);
    sy += 10;

    sg.items.forEach((item) => {
      // Bullet dot
      doc.circle(27, sy + 3.5, 1.8).fill(AMBER_ACCENT);
      doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(7.5).text(item, 34, sy, { width: SIDEBAR_WIDTH - 52 });
      sy += 12;
    });
    sy += 6;
  });

  // Education on Sidebar
  doc.strokeColor(SIDEBAR_BORDER).lineWidth(0.8).moveTo(24, sy).lineTo(SIDEBAR_WIDTH - 20, sy).stroke();
  sy += 12;

  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.5).text('ACADEMIC HONORS', 24, sy);
  sy += 12;

  doc.fillColor(TEXT_DARK).font('Helvetica-Bold').fontSize(8).text('B.Sc. Honors in Computer Science', 24, sy, { width: SIDEBAR_WIDTH - 40 });
  sy += 11;
  doc.fillColor(TEXT_MUTED).font('Helvetica').fontSize(7.5).text('Graduated with Highest Distinction (Top 2%)', 24, sy, { width: SIDEBAR_WIDTH - 40 });
  sy += 10;
  doc.fillColor(TEXT_LIGHT).font('Helvetica-Oblique').fontSize(7).text('Thesis: Real-time Multi-Modal Face & Person ReID with Deep Metric Learning', 24, sy, { width: SIDEBAR_WIDTH - 40 });

  // ----------------------------------------------------
  // MAIN COLUMN CONTENT (Right Side)
  // ----------------------------------------------------
  let my = 28;

  // Header Title & Tagline
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(22).text('ABREHAM W. SHIFERAW', CONTENT_X, my);
  my += 24;

  doc.fillColor(TEAL_ACCENT).font('Helvetica-Bold').fontSize(11).text('SENIOR FULL-STACK & AI SYSTEMS ENGINEER', CONTENT_X, my);
  my += 16;

  // Executive Summary Card / Box
  doc.save();
  doc.roundedRect(CONTENT_X, my, CONTENT_WIDTH, 56, 6).fill('#F0F9FF');
  doc.strokeColor('#BAE6FD').lineWidth(0.8).roundedRect(CONTENT_X, my, CONTENT_WIDTH, 56, 6).stroke();
  doc.restore();

  const summaryText =
    'Senior Engineer specializing in high-throughput AI developer tools, post-quantum cryptographic gateways, and edge computer vision pipelines. Track record building Toka SDK (30%-55% LLM cost reduction via prompt caching & model routing) and production banking middleware. Passionate about performant TypeScript, Python, and open-source systems.';
  doc.fillColor('#0369A1').font('Helvetica').fontSize(8.2).text(summaryText, CONTENT_X + 10, my + 8, {
    width: CONTENT_WIDTH - 20,
    lineGap: 2.2,
  });

  my += 68;

  // SECTION: PRODUCTION SYSTEMS & KEY ARCHITECTURES
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(11).text('REPRESENTATIVE PRODUCTION SYSTEMS & ARCHITECTURES', CONTENT_X, my);
  my += 14;
  doc.strokeColor(NAVY).lineWidth(1.2).moveTo(CONTENT_X, my).lineTo(CONTENT_X + CONTENT_WIDTH, my).stroke();
  my += 12;

  const projects = [
    {
      title: 'Toka AI Developer SDK — Multi-Model FinOps & Routing Engine',
      role: 'Creator & Lead Systems Architect',
      period: 'TypeScript, Node.js, Python, Open-Source SDK',
      bullets: [
        'Engineered an enterprise-grade AI proxy routing layer cutting LLM token costs by 30%-55% using intelligent semantic prompt caching and fallback model cascades.',
        'Unified Gemini, Claude, OpenAI, and local Ollama interfaces into a strictly typed, sub-5ms overhead middleware with automatic retry and rate-limit governance.',
        'Published comprehensive test harness achieving 99.2% test coverage and adopted by developers in multi-tenant SaaS environments.',
      ],
    },
    {
      title: 'VaultX — Post-Quantum Banking & Payment Settlement Gateway',
      role: 'Core Systems & Cryptography Architect',
      period: 'TypeScript, Node.js, NIST PQC, ISO-8583, Telebirr API',
      bullets: [
        'Architected financial settlement middleware implementing NIST-standardized Post-Quantum Cryptography (ML-KEM-768 key encapsulation and ML-DSA-65 signatures).',
        'Built double-entry ledger verification engine guaranteeing atomicity, zero double-spend anomalies, and ISO-8583 transaction compliance across Telebirr and Chapa rails.',
        'Achieved sub-120ms round-trip latency for cryptographic payload verification under concurrent transaction stress tests.',
      ],
    },
    {
      title: 'Attendo — Edge Computer Vision Biometric Verification Suite',
      role: 'Computer Vision & Deep Learning Engineer',
      period: 'Python, PyTorch, YOLOv8, OSNet, ArcFace, TensorRT',
      bullets: [
        'Built real-time person re-identification (ReID) and facial recognition system processing simultaneous multi-camera video streams at 38+ FPS on edge hardware.',
        'Integrated ArcFace cosine-margin metric learning with OSNet multi-scale features, achieving 98.4% Top-1 verification accuracy under low-light and partial occlusion.',
        'Applied FP16 TensorRT quantization reducing inference memory footprint by 58% while maintaining sub-30ms recognition pipelines.',
      ],
    },
  ];

  projects.forEach((proj) => {
    // Project Title
    doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(9.5).text(proj.title, CONTENT_X, my);
    my += 11;

    // Subtitle / Stack
    doc.fillColor(AMBER_ACCENT).font('Helvetica-Bold').fontSize(7.5).text(proj.role.toUpperCase(), CONTENT_X, my);
    doc.fillColor(TEXT_LIGHT).font('Helvetica-Oblique').fontSize(7.5).text(`  |  ${proj.period}`, CONTENT_X + 150, my);
    my += 10;

    // Bullets
    proj.bullets.forEach((b) => {
      doc.circle(CONTENT_X + 4, my + 4, 1.8).fill(TEAL_ACCENT);
      doc.fillColor(TEXT_DARK).font('Helvetica').fontSize(8).text(b, CONTENT_X + 12, my, {
        width: CONTENT_WIDTH - 14,
        lineGap: 1.8,
      });
      my += 22;
    });

    my += 4;
  });

  // SECTION: OPEN-SOURCE & ECOSYSTEM IMPACT
  doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(11).text('OPEN-SOURCE PACKAGES & CULTURAL TOOLS', CONTENT_X, my);
  my += 14;
  doc.strokeColor(NAVY).lineWidth(1.2).moveTo(CONTENT_X, my).lineTo(CONTENT_X + CONTENT_WIDTH, my).stroke();
  my += 12;

  const openSource = [
    {
      name: 'Ethiopian Calendar & Ge\'ez Numerals Engine (npm packages)',
      desc: 'High-precision algorithmic conversion between Gregorian and Ethiopian Ge\'ez calendars and numerals with 100% boundary testing. Over 50,000+ developer downloads.',
    },
    {
      name: 'Telegram Mini App Full-Stack Boilerplate',
      desc: 'Production-ready React 19 + TypeScript + TON integration toolkit for building Web3-enabled Telegram mini-applications with verified cryptographic authentication.',
    },
    {
      name: 'Bare-Metal Rust Microkernel Research',
      desc: 'Custom x86_64 operating system kernel implementing 4-level paging, VGA text drivers, cooperative multitasking scheduler, and zero-allocation interrupt handlers.',
    },
  ];

  openSource.forEach((os) => {
    doc.fillColor(NAVY).font('Helvetica-Bold').fontSize(8.5).text(os.name, CONTENT_X, my);
    my += 10;
    doc.fillColor(TEXT_MUTED).font('Helvetica').fontSize(7.8).text(os.desc, CONTENT_X, my, {
      width: CONTENT_WIDTH,
      lineGap: 1.6,
    });
    my += 18;
  });

  // End of Document: Footer Stamp
  doc.save();
  doc.strokeColor(SIDEBAR_BORDER).lineWidth(0.8).moveTo(24, PAGE_HEIGHT - 26).lineTo(PAGE_WIDTH - 24, PAGE_HEIGHT - 26).stroke();
  doc.fillColor(TEXT_LIGHT).font('Helvetica').fontSize(7).text(
    'Abreham Shiferaw — Verified Engineering Profile — https://abrehamshiferaw.github.io/abrehamshiferaw/',
    24,
    PAGE_HEIGHT - 18,
    { width: PAGE_WIDTH - 48, align: 'center' }
  );
  doc.restore();

  doc.end();
  return new Promise((resolve, reject) => {
    stream.on('finish', resolve);
    stream.on('error', reject);
  });
}
