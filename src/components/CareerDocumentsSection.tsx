import React, { useState } from 'react';
import { FileText, Download, ShieldCheck, Eye, X, CheckCircle, ExternalLink, Sparkles, Award } from 'lucide-react';

export const CareerDocumentsSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const baseUrl = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const docs = [
    {
      id: 'cv',
      title: 'Executive Curriculum Vitae (CV)',
      badge: 'Primary Career Document',
      filename: 'Abreham_Shiferaw_Senior_AI_FullStack_Engineer_CV.docx',
      downloadUrl: `${baseUrl}docs/Abreham_Shiferaw_Senior_AI_FullStack_Engineer_CV.docx`,
      summary:
        'Comprehensive 2-page career profile covering production architectures (Toka SDK, VaultX PQC Gateway, Telebirr, Attendo), postgraduate Computer Vision thesis (ArcFace + YOLOv8 + OSNet), and core technical competencies.',
      tags: ['Senior Full-Stack', 'AI & Vision Pipelines', 'Systems & FinOps', 'Post-Quantum Crypto'],
      highlights: [
        '5+ years building production web platforms, AI SDKs, and edge biometric systems',
        'Creator of Toka SDK (30%-55% LLM cost reduction via prompt caching & model routing)',
        'Architect of VaultX (Hybrid NIST ML-KEM-768/Dilithium + ISO-8583 banking gateway)',
        'B.Sc. Honors Thesis in multi-modal identity fusion & real-time person re-identification',
      ],
    },
    {
      id: 'dossier',
      title: 'Technical Systems Architecture Dossier',
      badge: 'Engineering Deep-Dive',
      filename: 'Abreham_Shiferaw_GitHub_Engineering_Dossier.docx',
      downloadUrl: `${baseUrl}docs/Abreham_Shiferaw_GitHub_Engineering_Dossier.docx`,
      summary:
        'In-depth architectural review across 11+ repositories covering TypeScript SDKs, Python vision pipelines, Next.js monorepos, and a custom bare-metal Rust microkernel.',
      tags: ['11+ Verified Repos', 'System Design Audits', 'Rust Kernel Primitives', 'Edge AI'],
      highlights: [
        'Detailed architectural diagrams and component hierarchies across all active projects',
        'Security analysis, cryptographic agility protocols, and HMAC-SHA256 signature flows',
        'Computer vision metric learning benchmarks and real-time edge inference results',
      ],
    },
    {
      id: 'cover-letter',
      title: 'Engineering Philosophy & Leadership Statement',
      badge: 'Executive Narrative',
      filename: 'Abreham_Shiferaw_Modular_Executive_Cover_Letter.docx',
      downloadUrl: `${baseUrl}docs/Abreham_Shiferaw_Modular_Executive_Cover_Letter.docx`,
      summary:
        'Statement of engineering philosophy, low-level systems discipline, FinOps cost control methodologies, and team leadership profile.',
      tags: ['Engineering Philosophy', 'Problem Solving', 'FinOps', 'Scalability'],
      highlights: [
        'Pragmatic approach to systems design, latency minimization, and security hardening',
        'Track record translating abstract research into high-availability cloud microservices',
        'Modular foundation structured for leadership and senior individual contributor roles',
      ],
    },
  ];

  return (
    <section id="credentials-section" className="py-16 border-b border-neutral-900 bg-neutral-950/80 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-400 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Engineering Credentials</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-neutral-100 tracking-tight">
              Curriculum Vitae &amp; Technical Credentials
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed">
            Direct access to official resumes, architectural dossiers, and engineering credentials. Tailored for engineering leadership, founders, and hiring teams.
          </p>
        </div>

        {/* 3 Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {docs.map((doc) => (
            <div
              key={doc.id}
              className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-neutral-700 transition flex flex-col justify-between shadow-lg hover:shadow-xl group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/30 font-medium">
                    {doc.badge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                <h3 className="text-lg font-bold text-neutral-100 mb-2.5 group-hover:text-sky-300 transition">
                  {doc.title}
                </h3>

                <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                  {doc.summary}
                </p>

                {/* Key Bullet Highlights */}
                <div className="mb-5 space-y-1.5 pt-3 border-t border-neutral-800/80">
                  {doc.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-[11px] text-neutral-400">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800/80 text-neutral-400 border border-neutral-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-neutral-800 flex items-center gap-2">
                <a
                  href={doc.downloadUrl}
                  download={doc.filename}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition active:scale-95 shadow-md shadow-sky-600/20"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Document</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Quick Fact Sheet */}
        <div className="mt-8 p-5 rounded-2xl bg-neutral-900/50 border border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-300 font-medium">
              Available for Senior Full-Stack, AI Systems, and Technical Lead opportunities (Remote or Relocation)
            </span>
          </div>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>Direct Email: <a href="mailto:abrishwon9@gmail.com" className="text-sky-400 hover:underline">abrishwon9@gmail.com</a></span>
            <span className="hidden sm:inline">&bull;</span>
            <a href="https://linkedin.com/in/abrishwon" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline flex items-center gap-1">
              LinkedIn Profile
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
