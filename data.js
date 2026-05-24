const TOOLS = [
  // ===== Writing =====
  {
    id: "chatgpt",
    name: "ChatGPT",
    category: "writing",
    description: "The most popular AI chatbot by OpenAI. Powerful for writing, coding, research, and general Q&A. Supports GPT-4o with vision, file upload, and web browsing.",
    pricing: "Freemium",
    url: "https://chat.openai.com",
    tags: ["Chatbot", "Writing", "Coding"],
    featured: true
  },
  {
    id: "claude",
    name: "Claude",
    category: "writing",
    description: "Anthropic's AI assistant known for nuanced, thoughtful responses. Excellent at long-form writing, analysis, and coding with a 200K context window.",
    pricing: "Freemium",
    url: "https://claude.ai",
    tags: ["Chatbot", "Writing", "Analysis"],
    featured: true
  },
  {
    id: "gemini",
    name: "Google Gemini",
    category: "writing",
    description: "Google's multimodal AI model. Integrates with Google Workspace. Strong at research with real-time web access and Google Search grounding.",
    pricing: "Freemium",
    url: "https://gemini.google.com",
    tags: ["Chatbot", "Research", "Multimodal"],
    featured: true
  },
  {
    id: "jasper",
    name: "Jasper",
    category: "writing",
    description: "AI marketing copywriter. Generates blog posts, social media content, ads, and emails. Built for marketing teams with brand voice control.",
    pricing: "$49/mo",
    url: "https://jasper.ai",
    tags: ["Marketing", "Copywriting"],
    featured: false
  },
  {
    id: "copy-ai",
    name: "Copy.ai",
    category: "writing",
    description: "AI-powered copywriting tool for marketing teams. Creates sales copy, email campaigns, product descriptions, and social media posts in seconds.",
    pricing: "Freemium",
    url: "https://copy.ai",
    tags: ["Marketing", "Copywriting"],
    featured: false
  },
  {
    id: "grammarly",
    name: "Grammarly",
    category: "writing",
    description: "AI writing assistant for grammar, clarity, and style. Works across browsers, email, and documents. Now includes AI-powered rewriting and tone adjustment.",
    pricing: "Freemium",
    url: "https://grammarly.com",
    tags: ["Grammar", "Editing"],
    featured: false
  },
  {
    id: "writesonic",
    name: "Writesonic",
    category: "writing",
    description: "AI content creation platform for blogs, ads, and product descriptions. Includes built-in SEO optimization and brand voice customization.",
    pricing: "Freemium",
    url: "https://writesonic.com",
    tags: ["Content", "SEO"],
    featured: false
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    category: "writing",
    description: "AI assistant built into Notion workspace. Summarize notes, generate content, extract action items, and translate text without leaving Notion.",
    pricing: "$10/mo add-on",
    url: "https://notion.so",
    tags: ["Productivity", "Notes"],
    featured: false
  },

  // ===== Image & Design =====
  {
    id: "midjourney",
    name: "Midjourney",
    category: "image",
    description: "Leading AI image generator known for stunning artistic quality. Creates photorealistic images, illustrations, and concept art from text prompts via Discord.",
    pricing: "$10/mo",
    url: "https://midjourney.com",
    tags: ["Art", "Illustration"],
    featured: true
  },
  {
    id: "dall-e",
    name: "DALL-E 3",
    category: "image",
    description: "OpenAI's image generator with exceptional text rendering and prompt accuracy. Integrated into ChatGPT for conversational image creation.",
    pricing: "Pay-per-use",
    url: "https://openai.com/dall-e-3",
    tags: ["Art", "Text-to-Image"],
    featured: true
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    category: "image",
    description: "Open-source AI image generator. Run locally for free or use cloud services. Highly customizable with LoRA models, ControlNet, and extensive community models.",
    pricing: "Free (Open Source)",
    url: "https://stability.ai",
    tags: ["Open Source", "Customizable"],
    featured: true
  },
  {
    id: "canva-ai",
    name: "Canva AI (Magic Studio)",
    category: "image",
    description: "AI-powered design suite. Magic Resize, Magic Eraser, text-to-image, background remover, and AI presentation maker. Perfect for non-designers.",
    pricing: "Freemium",
    url: "https://canva.com",
    tags: ["Design", "Templates"],
    featured: false
  },
  {
    id: "remove-bg",
    name: "Remove.bg",
    category: "image",
    description: "Instantly remove image backgrounds with AI. Batch processing available. API for developers. Free for personal use with daily limits.",
    pricing: "Freemium",
    url: "https://remove.bg",
    tags: ["Background", "Editing"],
    featured: false
  },
  {
    id: "ideogram",
    name: "Ideogram",
    category: "image",
    description: "AI image generator with best-in-class text rendering in images. Creates logos, posters, and designs with accurate typography from text prompts.",
    pricing: "Freemium",
    url: "https://ideogram.ai",
    tags: ["Logo", "Typography"],
    featured: false
  },
  {
    id: "leonardo-ai",
    name: "Leonardo.ai",
    category: "image",
    description: "AI image and game asset generator. Create production-quality game assets, concept art, and textures with fine control over style and composition.",
    pricing: "Freemium",
    url: "https://leonardo.ai",
    tags: ["Game Art", "Assets"],
    featured: false
  },
  {
    id: "photopea",
    name: "Photopea",
    category: "image",
    description: "Free browser-based photo editor that looks and works like Photoshop. Supports PSD files, layers, masks, and AI-powered tools for quick edits.",
    pricing: "Free",
    url: "https://photopea.com",
    tags: ["Photo Editing", "Free"],
    featured: false
  },

  // ===== Video =====
  {
    id: "runway",
    name: "Runway",
    category: "video",
    description: "Professional AI video generation and editing suite. Gen-3 Alpha creates realistic videos from text. Includes motion tracking, green screen, and color grading.",
    pricing: "Freemium",
    url: "https://runwayml.com",
    tags: ["Text-to-Video", "Editing"],
    featured: true
  },
  {
    id: "heygen",
    name: "HeyGen",
    category: "video",
    description: "AI video creation with realistic avatar presenters. Create talking-head videos in 40+ languages. Perfect for marketing, training, and social media content.",
    pricing: "Freemium",
    url: "https://heygen.com",
    tags: ["Avatar", "Presentation"],
    featured: true
  },
  {
    id: "capcut",
    name: "CapCut",
    category: "video",
    description: "Free video editor with AI-powered auto-captions, background removal, and templates. Desktop and mobile. Owned by ByteDance (TikTok's parent company).",
    pricing: "Free",
    url: "https://capcut.com",
    tags: ["Editing", "Free"],
    featured: true
  },
  {
    id: "pika",
    name: "Pika",
    category: "video",
    description: "AI video generator from text and images. Creates short video clips with impressive quality. Simple interface for quick content creation.",
    pricing: "Freemium",
    url: "https://pika.art",
    tags: ["Text-to-Video"],
    featured: false
  },
  {
    id: "descript",
    name: "Descript",
    category: "video",
    description: "Edit videos by editing text transcripts. AI-powered filler word removal, screen recording, podcast editing, and automatic transcription.",
    pricing: "Freemium",
    url: "https://descript.com",
    tags: ["Transcription", "Podcast"],
    featured: false
  },
  {
    id: "synthesia",
    name: "Synthesia",
    category: "video",
    description: "Create professional AI videos with virtual avatars. 230+ languages, 150+ avatars. Used by Fortune 500 companies for training and communications.",
    pricing: "$22/mo",
    url: "https://synthesia.io",
    tags: ["Enterprise", "Avatar"],
    featured: false
  },

  // ===== Code & Development =====
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    category: "code",
    description: "AI pair programmer that suggests code completions and entire functions in real-time. Integrates with VS Code, JetBrains, and Neovim. Powered by OpenAI Codex.",
    pricing: "$10/mo",
    url: "https://github.com/features/copilot",
    tags: ["Code Completion", "IDE"],
    featured: true
  },
  {
    id: "cursor",
    name: "Cursor",
    category: "code",
    description: "AI-first code editor built on VS Code. Chat with your codebase, generate code from natural language, and auto-fix bugs. The hottest AI coding tool in 2026.",
    pricing: "Freemium",
    url: "https://cursor.sh",
    tags: ["IDE", "Chat"],
    featured: true
  },
  {
    id: "v0",
    name: "v0 by Vercel",
    category: "code",
    description: "Generate React/Next.js UI components from text descriptions. AI creates production-ready code with Tailwind CSS. Iterate through chat to refine designs.",
    pricing: "Freemium",
    url: "https://v0.dev",
    tags: ["UI Generation", "React"],
    featured: true
  },
  {
    id: "bolt",
    name: "Bolt.new",
    category: "code",
    description: "Full-stack web app generator in the browser. Describe your app, and Bolt creates, runs, and deploys it instantly. Supports React, Vue, Svelte, and more.",
    pricing: "Freemium",
    url: "https://bolt.new",
    tags: ["Full-Stack", "No-Code"],
    featured: false
  },
  {
    id: "replit",
    name: "Replit AI",
    category: "code",
    description: "Cloud IDE with built-in AI coding assistant. Write, run, and deploy code from the browser. AI helps debug, explain, and generate code across 50+ languages.",
    pricing: "Freemium",
    url: "https://replit.com",
    tags: ["Cloud IDE", "Multi-Language"],
    featured: false
  },
  {
    id: "tabnine",
    name: "Tabnine",
    category: "code",
    description: "AI code assistant that can run on-premises for privacy. Supports all major IDEs. Provides code completions, whole-line, and full-function suggestions.",
    pricing: "Freemium",
    url: "https://tabnine.com",
    tags: ["Privacy", "Code Completion"],
    featured: false
  },

  // ===== Productivity =====
  {
    id: "gamma",
    name: "Gamma",
    category: "productivity",
    description: "AI presentation maker that creates beautiful slides, documents, and webpages from a prompt. No design skills needed. Auto-layouts with smart formatting.",
    pricing: "Freemium",
    url: "https://gamma.app",
    tags: ["Presentations", "Documents"],
    featured: true
  },
  {
    id: "notion",
    name: "Notion",
    category: "productivity",
    description: "All-in-one workspace with AI features. Notes, databases, project management, wikis, and now AI-powered writing, summarization, and task automation.",
    pricing: "Freemium",
    url: "https://notion.so",
    tags: ["Notes", "Project Management"],
    featured: true
  },
  {
    id: "chatpdf",
    name: "ChatPDF",
    category: "productivity",
    description: "Upload a PDF and chat with it using AI. Perfect for research papers, manuals, and long documents. Ask questions and get instant answers with citations.",
    pricing: "Freemium",
    url: "https://chatpdf.com",
    tags: ["PDF", "Research"],
    featured: false
  },
  {
    id: "otter",
    name: "Otter.ai",
    category: "productivity",
    description: "AI meeting assistant that records, transcribes, and summarizes meetings in real-time. Integrates with Zoom, Teams, and Meet. Action item extraction.",
    pricing: "Freemium",
    url: "https://otter.ai",
    tags: ["Transcription", "Meetings"],
    featured: false
  },
  {
    id: "beautiful-ai",
    name: "Beautiful.ai",
    category: "productivity",
    description: "AI-powered presentation software that auto-designs slides as you add content. Smart templates ensure professional layouts every time.",
    pricing: "$12/mo",
    url: "https://beautiful.ai",
    tags: ["Presentations", "Design"],
    featured: false
  },

  // ===== Music & Audio =====
  {
    id: "suno",
    name: "Suno",
    category: "music",
    description: "Create full songs with vocals from text prompts. AI generates music, lyrics, and singing in any genre. The most popular AI music tool with millions of users.",
    pricing: "Freemium",
    url: "https://suno.com",
    tags: ["Music", "Vocals"],
    featured: true
  },
  {
    id: "udio",
    name: "Udio",
    category: "music",
    description: "AI music generator creating high-fidelity songs from text. Known for realistic instrument separation and genre versatility. Strong competitor to Suno.",
    pricing: "Freemium",
    url: "https://udio.com",
    tags: ["Music", "High-Fidelity"],
    featured: true
  },
  {
    id: "elevenlabs",
    name: "ElevenLabs",
    category: "music",
    description: "Best AI voice generator and cloner. Ultra-realistic text-to-speech in 30+ languages. Voice cloning, dubbing, and sound effects. Industry-leading quality.",
    pricing: "Freemium",
    url: "https://elevenlabs.io",
    tags: ["Voice", "Text-to-Speech"],
    featured: true
  },
  {
    id: "mubert",
    name: "Mubert",
    category: "music",
    description: "Generate royalty-free background music for videos, podcasts, and streams. AI creates custom tracks matching your desired mood, genre, and duration.",
    pricing: "Freemium",
    url: "https://mubert.com",
    tags: ["Background Music", "Royalty-Free"],
    featured: false
  },
  {
    id: "audo-studio",
    name: "Audo Studio",
    category: "music",
    description: "AI audio enhancement tool. Remove background noise, enhance speech clarity, and clean up recordings with one click. Great for podcasters and content creators.",
    pricing: "Freemium",
    url: "https://audo.ai",
    tags: ["Noise Removal", "Enhancement"],
    featured: false
  },

  // ===== Research & Data =====
  {
    id: "perplexity",
    name: "Perplexity AI",
    category: "research",
    description: "AI-powered search engine that provides cited answers. Combines real-time web search with AI reasoning. The best tool for research with source transparency.",
    pricing: "Freemium",
    url: "https://perplexity.ai",
    tags: ["Search", "Citations"],
    featured: true
  },
  {
    id: "consensus",
    name: "Consensus",
    category: "research",
    description: "AI-powered academic paper search engine. Find evidence-based answers from scientific papers. Tells you what the research actually says, not what blogs claim.",
    pricing: "Freemium",
    url: "https://consensus.app",
    tags: ["Academic", "Papers"],
    featured: true
  },
  {
    id: "julius-ai",
    name: "Julius AI",
    category: "research",
    description: "Upload data and chat with it using AI. Automatically generates charts, performs statistical analysis, and creates visualizations from spreadsheets and CSV files.",
    pricing: "Freemium",
    url: "https://julius.ai",
    tags: ["Data Analysis", "Visualization"],
    featured: false
  },
  {
    id: "scispace",
    name: "SciSpace",
    category: "research",
    description: "Read and understand research papers faster with AI. Explains complex sections, finds related papers, and extracts key insights from academic literature.",
    pricing: "Freemium",
    url: "https://typeset.io",
    tags: ["Academic", "Papers"],
    featured: false
  },

  // ===== Automation =====
  {
    id: "zapier",
    name: "Zapier",
    category: "automation",
    description: "Connect 6,000+ apps and automate workflows without code. AI-powered workflow builder. Triggers, actions, and multi-step Zaps for any business process.",
    pricing: "Freemium",
    url: "https://zapier.com",
    tags: ["Workflow", "No-Code"],
    featured: true
  },
  {
    id: "make",
    name: "Make (Integromat)",
    category: "automation",
    description: "Visual automation platform with 2,000+ app integrations. More powerful than Zapier for complex workflows with branching, loops, and error handling.",
    pricing: "Freemium",
    url: "https://make.com",
    tags: ["Workflow", "Visual"],
    featured: true
  },
  {
    id: "microsoft-copilot",
    name: "Microsoft Copilot",
    category: "automation",
    description: "AI assistant integrated across Microsoft 365. Use in Word, Excel, PowerPoint, Outlook, and Teams. Summarize docs, create presentations, and draft emails.",
    pricing: "Freemium",
    url: "https://copilot.microsoft.com",
    tags: ["Office", "Microsoft"],
    featured: false
  },

  // ===== Education =====
  {
    id: "khanmigo",
    name: "Khanmigo",
    category: "education",
    description: "AI tutor by Khan Academy. Guides students through problems step-by-step without giving away answers. Covers math, science, coding, and humanities.",
    pricing: "Free",
    url: "https://khanacademy.org/khan-labs",
    tags: ["Tutoring", "K-12"],
    featured: true
  },
  {
    id: "quizlet-ai",
    name: "Quizlet AI",
    category: "education",
    description: "AI-enhanced flashcard and study tool. Generates practice tests, explains concepts, and creates study guides from your notes. Spaced repetition built in.",
    pricing: "Freemium",
    url: "https://quizlet.com",
    tags: ["Flashcards", "Study"],
    featured: false
  },
  {
    id: "duolingo-max",
    name: "Duolingo Max",
    category: "education",
    description: "AI-powered language learning with GPT-4. Roleplay conversations with AI characters and explain-my-answer feature for deeper understanding.",
    pricing: "$29.99/mo",
    url: "https://duolingo.com",
    tags: ["Language", "Learning"],
    featured: false
  }
];

const CATEGORIES = {
  writing: {
    name: "Writing & Chat",
    icon: "pencil-square",
    description: "AI chatbots, writing assistants, and content creation tools",
    color: "blue"
  },
  image: {
    name: "Image & Design",
    icon: "image",
    description: "AI image generation, photo editing, and graphic design",
    color: "purple"
  },
  video: {
    name: "Video & Animation",
    icon: "video",
    description: "AI video creation, editing, and avatar generation",
    color: "pink"
  },
  code: {
    name: "Code & Development",
    icon: "code-slash",
    description: "AI coding assistants, IDE tools, and code generation",
    color: "green"
  },
  productivity: {
    name: "Productivity",
    icon: "bolt",
    description: "AI-powered presentations, meetings, and workflow tools",
    color: "amber"
  },
  music: {
    name: "Music & Audio",
    icon: "music-note",
    description: "AI music generation, voice cloning, and audio enhancement",
    color: "red"
  },
  research: {
    name: "Research & Data",
    icon: "search",
    description: "AI search engines, academic tools, and data analysis",
    color: "teal"
  },
  automation: {
    name: "Automation",
    icon: "gear",
    description: "AI workflow automation and integration platforms",
    color: "indigo"
  },
  education: {
    name: "Education",
    icon: "book",
    description: "AI tutoring, language learning, and study tools",
    color: "orange"
  }
};
