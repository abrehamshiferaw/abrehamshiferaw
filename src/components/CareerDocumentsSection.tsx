import React from 'react';
import { FileText, Download, CheckCircle, ExternalLink, Sparkles, ShieldCheck } from 'lucide-react';

export const CareerDocumentsSection: React.FC = () => {
  const docs = [
    {
      title: 'Senior Full-Stack & AI Engineer CV',
      format: 'Word .docx (ATS-Optimized)',
      filename: 'Abreham_Shiferaw_Senior_AI_FullStack_Engineer_CV.docx',
      path: '/docs/Abreham_Shiferaw_Senior_AI_FullStack_Engineer_CV.docx',
      description: '2-page executive resume highlighting Toka SDK, VaultX post-quantum gateway, ISS computer vision research thesis, and full-stack architectures.',
      tags: ['ATS-Passed', 'Clean Layout', 'Metric-Driven'],
    },
    {
      title: 'Modular Executive Cover Letter',
      format: 'Word .docx (Editable Template)',
      filename: 'Abreham_Shiferaw_Modular_Executive_Cover_Letter.docx',
      path: '/docs/Abreham_Shiferaw_Modular_Executive_Cover_Letter.docx',
      description: 'Customizable, high-converting letter featuring dynamic brackets for target company, problem statement, and technical alignment.',
      tags: ['Modular [ ]', 'Targeted', 'Under 350 Words'],
    },
    {
      title: 'GitHub Technical Engineering Dossier',
      format: 'Word .docx (Full Audit)',
      filename: 'Abreham_Shiferaw_GitHub_Engineering_Dossier.docx',
      path: '/docs/Abreham_Shiferaw_GitHub_Engineering_Dossier.docx',
      description: 'In-depth architectural audit of all 11+ repositories covering TypeScript, Python, Next.js, Rust microkernel, and edge AI models.',
      tags: ['11+ Repos', 'Architecture Deep-Dive', 'Verified Codebases'],
    },
  ];

  return (
    <section id="career-docs-section" className="py-14 border-b border-neutral-900 bg-neutral-950/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/30 text-xs font-semibold text-sky-400 mb-2">
              <FileText className="w-3.5 h-3.5" />
              <span>Executive Career Assets</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-100">
              Download Editable .docx CV &amp; Documents
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-md">
            Handcrafted with professional typography, custom margins, and clean section dividers. 100% compatible with Microsoft Word, Google Docs, and ATS scanners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {docs.map((doc) => (
            <div
              key={doc.filename}
              className="p-6 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                    {doc.format}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>

                <h3 className="text-base font-bold text-neutral-100 mb-2">
                  {doc.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {doc.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {doc.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-800 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <a
                  href={doc.path}
                  download={doc.filename}
                  className="w-full py-2.5 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition active:scale-95 shadow-md shadow-sky-600/20"
                >
                  <Download className="w-4 h-4" />
                  <span>Download .docx</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
