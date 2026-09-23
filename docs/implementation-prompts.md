# Professional Profile Optimization — Implementation Prompt Pack

This document is the **first-stage deliverable** for the profile optimization project. It contains five independently executable prompts for a coding or research agent working inside the `abrehamshiferaw` GitHub profile repository. The prompts are deliberately evidence-first: they tell the next agent to inspect source material before publishing claims and to mark unknowns as `[VERIFY]` rather than guessing.

## Operating rules for every phase

Use these rules in addition to the phase-specific instructions below:

1. Work from the checked-out repository and preserve unrelated user changes. Run `git status --short --branch` before editing and again before reporting completion.
2. Treat `docs/profile.md` as the canonical source of truth. If it does not exist, create it. If it exists, preserve useful verified information and update it rather than creating competing profile documents.
3. Inspect the current `README.md`, `resume_enhanced.md`, all existing files under `docs/`, and relevant repository READMEs/code before deciding what is factual.
4. Use the actual project repositories and available first-party evidence as the primary source. Candidate repositories include:
   - `https://github.com/abrehamshiferaw/genixai`
   - `https://github.com/abrehamshiferaw/attendo`
   - `https://github.com/abrehamshiferaw/algoraz-workspace`
   - any other repositories demonstrably owned by `abrehamshiferaw` or `abrishwo` and relevant to the profile.
5. A statement is not verified merely because it appears in an old README or resume. Distinguish implemented code, documented claims, planned work, prototypes, and independently verifiable production evidence.
6. Never invent employment dates, clients, users, revenue, performance measurements, ratings, downloads, certifications, responsibilities, production status, or technology proficiency. Use `[VERIFY]` with a short explanation whenever evidence is insufficient.
7. Do not publish secrets, private contact data not already intentionally public, access tokens, credentials, or private screenshots. Redact sensitive material in reports.
8. Do not keyword-stuff. Prefer specific, readable combinations of role, technology, product, and problem.
9. Keep changes reviewable. Do not redesign the whole repository, rename repositories, rewrite unrelated project code, or alter external accounts in these phases.
10. At the end of the phase, report: what was inspected; what changed; what remains; facts requiring verification; files changed; validation performed; and the recommended next phase.

---

## PHASE A — Positioning Foundation

### Copy-paste prompt

> You are implementing **Phase A — Positioning Foundation** for Abreham Wondimu Shiferaw's professional developer profile. Work inside the checked-out GitHub profile repository. This phase is limited to professional identity and positioning; do not perform the full skills, project, repository SEO, or final audit work yet.
>
> ### Inspect first
>
> 1. Run `git status --short --branch`.
> 2. Read `README.md`, `resume_enhanced.md`, every existing file in `docs/`, and any existing `docs/profile.md`.
> 3. Inspect the relevant GitHub repositories and their README files, beginning with GenixAI, Attendo, and `algoraz-workspace`. Use repository history/code only as evidence where useful.
> 4. Inspect any uploaded Afriwork screenshots, PDFs, or other profile documents available in the workspace. If none are present, say so; do not infer exact Afriwork field names or limits from memory.
> 5. If internet access is available, verify current Afriwork field names and character limits from an authoritative source, recording the source and access date. If verification is not possible, label the field name or limit `[VERIFY]`.
>
> ### Positioning decisions
>
> Establish one coherent identity with three specialized presentations:
>
> - Primary: **Senior Full-Stack & AI Engineer**.
> - Secondary: **Backend & AI Engineer**.
> - Secondary: **Senior React Native / Mobile Engineer**.
>
> Position the person as building web, mobile, SaaS, backend, and AI-powered products, but include only specialties supported by inspected evidence. Do not reduce the identity to a generic “Full-Stack Developer.” Do not use unsupported superlatives, guaranteed outcomes, or unverified scale claims.
>
> ### Modify
>
> Create or update `docs/profile.md` with a clearly labeled **Professional Profile Source of Truth** and a Phase A changelog. Include:
>
> - full name and professional name variation;
> - primary title, short headline, one-line positioning, and specialties;
> - Afriwork main CV title, headline, About Me, field of work, services, primary career direction, and target job categories;
> - exact Afriwork field mappings when observed, using `FIELD`, `RECOMMENDED VALUE`, `CHARACTER LIMIT`, `SEO/MATCHING PURPOSE`, `EVIDENCE`, and `ALTERNATIVE` subsections;
> - CV #2 positioning for Backend & AI and CV #3 positioning for Mobile;
> - explicit boundaries between verified facts and `[VERIFY]` items;
> - a short “not in scope for Phase A” note.
>
> Keep the copy concise, natural, recruiter-readable, and easy to paste into a profile form. Preserve useful existing files; do not rewrite the public README as part of this phase unless a minimal link to the canonical document is necessary and clearly justified.
>
> ### Do not modify
>
> Do not optimize the skills list, assign skill levels, rewrite project descriptions, change repository metadata, claim production metrics, or audit all platforms. Do not delete existing resume material merely because it is unverified; identify it for later verification instead.
>
> ### Verify and report
>
> Check that the file exists, contains all Phase A sections, has no fabricated claims, and has a changelog. Run a Markdown-friendly inspection such as `sed`/`rg` and `git diff --check`. Report inspected sources, changed files, unresolved `[VERIFY]` items, and the recommended next phase: Phase B.

---

## PHASE B — Skills, Experience & Matching

### Copy-paste prompt

> You are implementing **Phase B — Skills, Experience & Matching** for Abreham Wondimu Shiferaw's profile. Start by reading the operating rules above and the current `docs/profile.md`. This phase must build on Phase A and must not silently replace its positioning.
>
> ### Inspect first
>
> 1. Run `git status --short --branch` and review the Phase A changelog.
> 2. Inspect `README.md`, `resume_enhanced.md`, all profile docs, and the source repositories that provide evidence for technologies and responsibilities.
> 3. For each proposed technology or capability, record whether evidence is present in current code, configuration, documentation, a dated work history, or only an old unverified claim.
> 4. Identify duplicate, outdated, inflated, or irrelevant skills. Treat languages such as English, Amharic, Python, JavaScript, Dart, Java, and C/C++ separately from programming technologies; do not list programming languages as spoken languages.
>
> ### Optimize
>
> Improve `docs/profile.md` for:
>
> - Afriwork skills and defensible skill levels;
> - technology ordering for the main, Backend & AI, and Mobile CV variants;
> - experience descriptions using evidence-based action and responsibility language;
> - backend, AI/LLM, mobile, full-stack, SaaS, API, database, authentication, security, and product-engineering matching terms;
> - service keywords and natural ATS terminology without repetition;
> - education, certifications, and languages, with `[VERIFY]` for claims that need documentation.
>
> For every skill, add or maintain an evidence note and classify it as **primary**, **secondary**, **emerging**, or **remove from public positioning**. Assign a level only when the inspected evidence supports it; otherwise use `[VERIFY LEVEL]`. Prefer “built,” “implemented,” “integrated,” or “worked with” over “expert” unless independently supported.
>
> For each experience item, separate verified responsibility from unverified impact metrics. Never turn a resume bullet into a verified outcome without corroboration. Preserve dates only when supported and flag contradictions rather than choosing a date arbitrarily.
>
> ### Modify
>
> Update `docs/profile.md`, retaining Phase A and adding a Phase B changelog, an evidence-backed skills matrix, the three CV-specific skill orderings, matching keywords, and revised experience/education/certification/language copy. Do not make external Afriwork changes in this phase.
>
> ### Do not modify
>
> Do not create project case studies, rewrite the GitHub README, change GitHub repository topics/descriptions, or publish unsupported metrics. Do not duplicate the same keyword unnaturally across every section.
>
> ### Verify and report
>
> Validate every primary skill against a source, check for accidental keyword stuffing and contradictory dates, run `git diff --check`, and confirm that `docs/profile.md` remains internally consistent. Report unresolved claims, files changed, evidence gaps, and recommend Phase C.

---

## PHASE C — Projects, Portfolio & Credibility

### Copy-paste prompt

> You are implementing **Phase C — Projects, Portfolio & Credibility**. Read the operating rules, the current `docs/profile.md`, and the Phase A/B changelog before making changes. This phase is a repository- and evidence-based project portfolio audit, not a creative rewrite based on the supplied project names alone.
>
> ### Inspect first
>
> Inspect each available flagship project repository, README, package/configuration files, directory structure, and relevant implementation code:
>
> - GenixAI;
> - Attendo;
> - Hirevo / LinkorAI in `algoraz-workspace`;
> - DineIn;
> - Neba / ISS;
> - VaultX;
> - other repositories that are verified as relevant.
>
> Record the inspected commit or branch, inspection date, and the evidence type. Identify actual technologies, implemented functionality, architecture, integrations, deployment evidence, screenshots, demos, app-store links, and metrics. Explicitly distinguish **implemented**, **documented**, **planned**, **prototype**, and **unverified**.
>
> ### Modify
>
> Update `docs/profile.md` with a Project Portfolio section for every project that has enough evidence. For each project include:
>
> - project name and one-line positioning;
> - concise description and problem addressed;
> - what was actually built;
> - technologies verified in source;
> - role, only where supported;
> - verified achievements or metrics, otherwise `Not verified`;
> - repository link;
> - live, App Store, and Play Store links only when checked and attributable;
> - portfolio keywords;
> - recruiter-facing description;
> - concise Afriwork copy;
> - GitHub portfolio copy;
> - evidence status and `[VERIFY]` notes.
>
> Determine project ordering separately for the main CV, Backend & AI CV, and Mobile CV. Use relevance and evidence strength rather than popularity or assumed business impact. Describe VaultX cautiously as a research/development project where that is what the evidence shows. Do not convert roadmap items into completed features.
>
> Add a Phase C changelog and a concise evidence ledger that lets a reviewer trace important claims to a repository, file, commit, public link, or verification request.
>
> ### Do not modify
>
> Do not modify project source code, invent screenshots, claim production status from a README alone, or add user/revenue/download/performance figures without evidence. Do not rewrite all project READMEs yet; Phase D owns repository SEO and README improvements.
>
> ### Verify and report
>
> Confirm every flagship entry has all required fields or an explicit `Not verified`/`[VERIFY]` marker. Validate links where possible, run `git diff --check`, and report repositories unavailable for inspection, missing evidence, changed files, and recommended Phase D.

---

## PHASE D — GitHub Profile & Repository SEO

### Copy-paste prompt

> You are implementing **Phase D — GitHub Profile & Repository SEO**. Treat the current `docs/profile.md` as the canonical content plan and preserve its evidence boundaries. This phase may improve the public profile README and important repository READMEs, but must not fabricate claims or change application code.
>
> ### Inspect first
>
> 1. Read `README.md`, `docs/profile.md`, `resume_enhanced.md`, and the Phase A–C changelogs.
> 2. Inspect the current profile owner/repository names, public repository descriptions, topics, default branches, existing READMEs, links, images, and available demos using GitHub's public metadata or the configured GitHub CLI.
> 3. Identify which repositories are strong enough to recommend for pinning and which should be deprioritized. Do not equate repository activity or name recognition with evidence quality.
>
> ### Plan and modify
>
> First add to `docs/profile.md` an exact GitHub strategy containing:
>
> - recommended GitHub headline and bio;
> - complete profile README opening, technology stack, featured projects, verified links, contact/work-with-me section, and SEO keywords;
> - repository-by-repository recommended description, topics, README structure, SEO keywords, screenshot/demo recommendations, portfolio positioning, pin recommendation, and archive/deprioritize recommendation;
> - internal-link plan between the profile README and flagship repositories;
> - a list of claims intentionally omitted because they require verification.
>
> Then improve the actual profile README only with copy supported by `docs/profile.md`. Keep the opening scannable and professional. Use semantic headings and natural phrases such as role + technology + product/problem combinations. Remove unsupported superlatives, guarantees, visa/legal eligibility assertions, and unverified metrics from the public narrative rather than carrying them forward. Retain contact links only after checking that they are intentionally public and valid.
>
> If repository metadata or other READMEs are changed, keep each change narrowly scoped: description, topics, title/headings where necessary, architecture/setup/usage sections, verified screenshots or demos, and links. Do not alter source code, release artifacts, issue settings, access controls, billing, or security settings. Do not archive or delete repositories in this phase; only document recommendations unless the user separately requests an account change.
>
> ### Verify and report
>
> Render or inspect Markdown, check links where possible, search for unsupported metrics and exaggerated phrases, run `git diff --check`, and ensure every public claim can be traced to `docs/profile.md`. Report exact files changed, repository metadata that remains recommendation-only, link failures, and recommend Phase E.

---

## PHASE E — Final Conversion & Consistency Audit

### Copy-paste prompt

> You are implementing **Phase E — Final Conversion & Consistency Audit**. This is the final review phase. Read every prior changelog and treat `docs/profile.md` as the authoritative source. Do not add new claims merely to make the profile sound stronger.
>
> ### Audit
>
> Audit all available material across Afriwork-ready copy, GitHub, LinkedIn/portfolio references when present, project READMEs, and the profile repository. Check:
>
> - names and professional name variations;
> - title, headline, specialties, and the three-CV positioning;
> - technology names and ordering;
> - skills and defensible levels;
> - experience, dates, education, certifications, and languages;
> - project names, descriptions, roles, links, metrics, and status;
> - Afriwork field mapping, character limits, services, and matching keywords;
> - GitHub bio, profile README, repository descriptions/topics, featured repositories, and internal links;
> - contact paths, public URLs, SEO readability, and conversion clarity.
>
> ### Correct
>
> Remove duplicated wording, weak or generic positioning, irrelevant technologies, unsupported claims, outdated claims, exaggerated language, keyword stuffing, contradictory dates, inconsistent project names, unverified metrics presented as facts, and unnecessary buzzwords. Where a conflict cannot be resolved from evidence, preserve the safer statement and mark the issue `[VERIFY]` with the conflicting sources.
>
> Ensure the final canonical document contains the required structure:
>
> 1. Professional Identity.
> 2. Afriwork Main CV.
> 3. Afriwork CV #2 — Backend & AI.
> 4. Afriwork CV #3 — Mobile.
> 5. Project Portfolio.
> 6. GitHub Profile.
> 7. GitHub Repository Optimization.
> 8. Personal SEO.
> 9. Consistency Matrix.
> 10. Claims Requiring Verification.
>
> Every important Afriwork field must use the exact mapping labels `FIELD`, `RECOMMENDED VALUE`, `CHARACTER LIMIT`, `SEO/MATCHING PURPOSE`, `EVIDENCE`, and `ALTERNATIVE` where applicable. Add a final changelog entry and a final audit summary stating what was verified, what remains unresolved, and what must be manually copied or reviewed by the profile owner.
>
> ### Do not modify
>
> Do not claim guaranteed rankings, invitations, employment, revenue, scale, or production status. Do not submit forms, change account security/ownership/billing, archive or delete repositories, or publish external profile edits as part of this repository phase. Do not remove evidence merely because it is inconvenient; mark it clearly and retain it in the verification section when useful.
>
> ### Verify and report
>
> Run a final `git status --short --branch`, `git diff --check`, Markdown inspection, link checks where possible, and searches for `[VERIFY]`, unsupported metric patterns, duplicate headings, and contradictory names/dates. Confirm that `docs/profile.md` is complete and that the public README agrees with it. Produce a concise completion report with inspected sources, changed files, remaining manual actions, unresolved claims, and the final recommended copy/paste order.

---

## Dependency and execution order

Run the phases in order. **Phase A** establishes the identity and prevents generic or contradictory positioning. **Phase B** uses that identity to rank defensible skills and rewrite matching language. **Phase C** supplies the evidence-backed project portfolio that supports those claims. **Phase D** turns the approved positioning and project evidence into GitHub-facing content and repository recommendations. **Phase E** is a final consistency and conversion gate; it should be run only after the preceding phases have produced their changelogs and evidence notes.

Each phase is independently reviewable, but later phases depend on the canonical `docs/profile.md` produced by earlier phases. A phase may leave `[VERIFY]` markers in place rather than guessing. The profile owner should manually verify unresolved employment, certification, metric, production, link, and Afriwork-form claims before copying them into a public profile.

## Source and scope note

This prompt pack implements the requested first response: five implementation-grade prompts. It does **not** claim that the full Afriwork or GitHub optimization has already been completed. The prompts are designed to be run inside the repository in separate, reviewable phases.

## Changelog

- **2026-09-23:** Added the five-phase, evidence-first implementation prompt pack. No existing profile claims were promoted to verified facts, and no external profile or repository metadata was changed by this deliverable.
