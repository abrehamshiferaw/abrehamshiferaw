# ABREHAM WONDIMU SHIFERAW
**Addis Ababa, Ethiopia** • Open to Remote / Hybrid / Relocation  
**Email:** abrishwon9@gmail.com • **GitHub:** [github.com/abrehamshiferaw](https://github.com/abrehamshiferaw) • **LinkedIn:** [linkedin.com/in/abrishwon](https://www.linkedin.com/in/abrishwon) • **Portfolio:** [abrehamshiferaw.github.io](https://abrehamshiferaw.github.io)

---

## PROFESSIONAL SUMMARY
Senior Full-Stack & AI Integration Engineer with 5+ years of experience architecting high-throughput web applications, edge AI systems, and developer-facing SDKs across TypeScript, Python, Next.js, and Rust. Proven track record engineering production AI cost-governance engines (Toka SDK), hybrid post-quantum cryptographic financial gateways (VaultX), and multi-modal computer vision tracking pipelines (ArcFace + YOLOv8 + OSNet). Adept at taking complex mathematical and algorithmic systems from research to horizontally scalable, containerized cloud services with strict security and reliability standards.

---

## TECHNICAL SKILLS INDEX

- **Languages:** TypeScript, JavaScript (ESNext/Node.js), Python 3, Dart, Rust, PHP, SQL (PostgreSQL), HTML5/CSS3, C/Assembly
- **AI, ML & Computer Vision:** PyTorch, Ultralytics YOLOv8, ArcFace Embeddings, OSNet (ReID), BoT-SORT Tracking, OpenCV, TensorFlow.js (`@tensorflow/tfjs`), Face-API, Tesseract OCR, SymPy, Prompt Engineering & Model Routing
- **LLM SDKs & AI Gateway:** OpenAI API, Anthropic Claude API, Google Gemini SDK (`@google/genai`), DeepSeek API, Semantic Caching, Token Budget Enforcers, FinOps, Context Window Optimization
- **Web & Mobile Frameworks:** Next.js 15 (App Router, Server Actions, SSR/SSG), React 19, React Native, Expo Router, Redux Toolkit, Zustand, Flutter, FastAPI, Flask, Express.js, Tailwind CSS v4, Motion
- **Databases & Cloud Infrastructure:** PostgreSQL, Supabase (RLS, Auth), Firebase / Firestore, Redis, Docker, Git, CI/CD (GitHub Actions), Vercel, Linux/Unix Internals
- **Security & Systems Architecture:** Post-Quantum Cryptography (NIST ML-KEM-768, ML-DSA-65, X25519 Hybrid), ISO-8583 Banking Protocols, HMAC-SHA256 Webhook Verification, Microkernel Design, Bare-Metal OS Primitives

---

## PROFESSIONAL EXPERIENCE & MAJOR ENGINEERING PROJECTS

### Principal Architect & Creator | Toka AI Cost Optimization SDK
*Open Source / Developer Tooling* | `TypeScript`, `Node.js`, `Jest`, `Multi-Model LLM APIs`, `CLI` | **2024 – Present**
- Engineered an open-source TypeScript SDK and CLI enabling engineering teams to trace token consumption, simulate request pricing, and enforce real-time monthly budget caps across multi-provider LLMs (OpenAI, Anthropic, Gemini, DeepSeek).
- Architected a pluggable `MultiProvider` gateway with automated fallback routing that downgrades non-critical background queries from heavy foundation models to cost-efficient alternatives, reducing enterprise LLM operational costs by up to 55%.
- Built a sub-millisecond in-memory and Redis-compatible prompt caching layer that intercepts duplicate context windows and system prompts, reducing token overhead on repetitive queries by 90%.
- Packaged complete developer distribution with typed configurations, automated smoke testing suites, and published binary commands (`bin/toka`) achieving zero runtime dependency bloat.

### Lead Cryptographic & Systems Engineer | VaultX (Post-Quantum Gateway)
*Financial Infrastructure Project* | `React 19`, `Express`, `TypeScript`, `@noble/post-quantum`, `Vite 8` | **2024 – Present**
- Architected a hybrid Classical + Post-Quantum Cryptographic (PQC) perimeter gateway terminating NIST-standardized `ML-KEM-768` (Kyber) and `ML-DSA-65` (Dilithium) alongside classical `X25519` key agreements.
- Designed an automated payload translation layer converting cryptographically verified post-quantum transaction tokens into ACID-compliant legacy ISO-8583 banking settlement records, enabling legacy mainframes to interoperate without core rewrites.
- Implemented cryptographic replay resistance utilizing cryptographically secure monotonically increasing nonces and ephemeral session caching, maintaining sub-45ms end-to-end latency during benchmark stress tests.
- Built an executive observability dashboard using React 19 and Framer Motion displaying real-time cipher negotiation metrics, key size overhead telemetry, and cryptographic downgrade-attack alarms.

### Computer Vision & AI Research Engineer | Intelligent Surveillance System (ISS)
*Postgraduate Engineering Research* | `Python`, `PyTorch`, `YOLOv8`, `ArcFace`, `OSNet`, `BoT-SORT`, `OpenCV` | **2023 – 2024**
- Designed and benchmarked a multi-modal biometric surveillance pipeline integrating real-time object detection (YOLOv8), multi-object spatio-temporal tracking (BoT-SORT), and deep facial feature extraction (ArcFace).
- Overcame identity fragmentation caused by extreme angles, facial occlusion, and lighting changes by training an OSNet deep metric Person Re-Identification (ReID) model that recovers identities across camera leave and re-entry events.
- Formulated an identity fusion algorithm that dynamically balances facial cosine distance against whole-body metric visual vectors, improving re-identification precision across complex video feeds by 34% compared to baseline facial recognition.
- Conducted full automated evaluation pipelines processing 1080p multi-camera footage at real-time inference speeds without requiring external cloud databases.

### Senior Mobile & Full-Stack Engineer | Attendo & Telebirr Platforms
*Enterprise Mobile & Fintech Solutions* | `React Native`, `Expo Router`, `Next.js`, `TensorFlow.js`, `Supabase`, `Firebase` | **2023 – Present**
- Implemented edge-based facial verification directly inside an Expo React Native mobile application utilizing `@tensorflow/tfjs` and `@vladmandic/face-api`, executing biometric verification locally within 300ms.
- Built strict anti-spoofing and geofenced attendance validation combining mobile hardware GPS telemetry, biometric liveness detection, and Supabase Row Level Security (RLS) data persistence.
- Developed a cross-platform mobile and web monorepo for the Telebirr payment ecosystem, standardizing transaction APIs, dynamic balance updates, and biometric authentication with 99.9% uptime.
- Spearheaded Next.js server actions and API route handlers enforcing HMAC-SHA256 signature validation for merchant webhook processing and instant settlement notifications.

---

## OPEN-SOURCE PACKAGES & CONTRIBUTIONS

- **`geez-numerals-converter` (npm):** Authored and published a zero-dependency npm library translating Hindu-Arabic numbers (1 to 100,000,000) into Ge'ez numerals with complete bidirectional mathematical accuracy; adopted across Ethiopian software solutions.
- **`Ethiopian-calendar`:** Created a deterministic calendar transformation engine based on Julian Day Numbers (JDN) computing 13 Ethiopian solar months, leap years, and moveable ecclesiastical feast calculations.
- **`telegram-mini-app` (Starter Foundation):** Released a production-ready Next.js 15 + React 19 starter kit for Telegram Mini Apps featuring native `@twa-dev/sdk` bindings, Redux state hydration, and secure server validation.
- **`sentinelOS`:** Implemented a bare-metal experimental OS kernel in Rust and C exploring low-level interrupt handling, memory paging, and process isolation.

---

## EDUCATION

**Bachelor of Science (B.Sc.) in Computer Engineering / Software Engineering**  
Addis Ababa University / Institute of Technology, Ethiopia • [Graduation Year: 2023 / 2024]  
*Thesis:* Multi-Modal Biometric Identity Fusion: Real-Time Person Re-Identification (OSNet) and ArcFace Tracking in Video Feeds.

---

## CERTIFICATIONS & CONTINUOUS LEARNING

- Deep Learning & Advanced Computer Vision with PyTorch (Self-Directed Research & Implementation)
- Enterprise Full-Stack Architecture & Microservices (Next.js, FastAPI, Node.js)
- Modern Cryptography & Post-Quantum Algorithms (NIST PQC Standards Implementation)
