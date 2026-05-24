const TOOLS = [
  // ===== AI Image Generation =====
  {
    id: "sd-webui",
    name: "Stable Diffusion WebUI",
    category: "image",
    description: "The most popular local AI image generator by AUTOMATIC1111. Text-to-image, image-to-image, ControlNet, LoRA, and hundreds of community plugins. The Swiss Army knife of AI art.",
    downloadUrl: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.8,
    tags: ["AI Art", "Text-to-Image", "Stable Diffusion"],
    featured: true
  },
  {
    id: "comfyui",
    name: "ComfyUI",
    category: "image",
    description: "Node-based workflow AI image generator. Build complex image generation pipelines visually. More efficient than WebUI for batch processing and advanced workflows.",
    downloadUrl: "https://github.com/comfyanonymous/ComfyUI",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.7,
    tags: ["AI Art", "Node Workflow", "Batch"],
    featured: true
  },
  {
    id: "fooocus",
    name: "Fooocus",
    category: "image",
    description: "One-click AI image generator that's beginner-friendly. Built-in style presets, no complex parameters. Powered by SDXL underneath but as simple as Midjourney.",
    downloadUrl: "https://github.com/lllyasviel/Fooocus",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.6,
    tags: ["AI Art", "Beginner Friendly", "One-click"],
    featured: true
  },
  {
    id: "invokeai",
    name: "InvokeAI",
    category: "image",
    description: "Professional AI art studio with canvas editing, layer system, ControlNet, and upscaling. Perfect for fine-tuning generated images with inpainting and outpainting.",
    downloadUrl: "https://github.com/invoke-ai/InvokeAI",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["AI Art", "Canvas Editor", "Professional"],
    featured: false
  },
  {
    id: "sd-forge",
    name: "SD WebUI Forge",
    category: "image",
    description: "Optimized fork of AUTOMATIC1111's WebUI with lower VRAM usage and faster generation. Supports all major plugins while being more efficient.",
    downloadUrl: "https://github.com/lllyasviel/stable-diffusion-webui-forge",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["AI Art", "Performance", "Low VRAM"],
    featured: false
  },
  {
    id: "draw-things",
    name: "Draw Things",
    category: "image",
    description: "Run Stable Diffusion on iPhone/iPad/Mac. Optimized for Apple Silicon, works offline. Supports ControlNet and LoRA. No expensive GPU needed, M1+ chips run it smoothly.",
    downloadUrl: "https://drawthings.ai",
    pricing: "Free",
    platforms: ["macOS", "iOS"],
    rating: 4.4,
    tags: ["AI Art", "Apple", "Mobile"],
    featured: false
  },
  {
    id: "kohya-ss",
    name: "Kohya\'s GUI",
    category: "image",
    description: "LoRA/DreamBooth model training with a graphical interface. Train custom AI art models to replicate specific characters, objects, or art styles.",
    downloadUrl: "https://github.com/bmaltais/kohya_ss",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "Linux"],
    rating: 4.3,
    tags: ["Model Training", "LoRA", "DreamBooth"],
    featured: false
  },

  // ===== Local LLMs =====
  {
    id: "ollama",
    name: "Ollama",
    category: "llm",
    description: "Run local LLMs with one command. Supports Llama, Mistral, Qwen, DeepSeek, and hundreds more. Desktop app + CLI. OpenAI-compatible API. The #1 local LLM tool.",
    downloadUrl: "https://ollama.ai",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.8,
    tags: ["Local LLM", "One-click", "OpenAI Compatible"],
    featured: true
  },
  {
    id: "lm-studio",
    name: "LM Studio",
    category: "llm",
    description: "Desktop app for running local LLMs with a beautiful GUI. Browse HuggingFace models, download with one click, and chat offline. Built-in model search and performance benchmarking.",
    downloadUrl: "https://lmstudio.ai",
    pricing: "Free",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.7,
    tags: ["Local LLM", "GUI", "Offline"],
    featured: true
  },
  {
    id: "gpt4all",
    name: "GPT4All",
    category: "llm",
    description: "Run LLMs on any computer - no GPU needed, runs on just 4GB RAM. Enterprise-grade data privacy. The most accessible local LLM for everyday users.",
    downloadUrl: "https://gpt4all.io",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["Local LLM", "Low Spec", "Privacy"],
    featured: true
  },
  {
    id: "text-gen-webui",
    name: "Text Generation WebUI",
    category: "llm",
    description: "The most feature-rich local LLM web interface by oobabooga. Supports GGUF/GPTQ/AWQ formats, LoRA fine-tuning, training, and inference. For power users.",
    downloadUrl: "https://github.com/oobabooga/text-generation-webui",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["Local LLM", "Web UI", "Advanced"],
    featured: false
  },
  {
    id: "jan",
    name: "Jan",
    category: "llm",
    description: "Minimalist open-source local LLM desktop app. Built-in model hub, one-click download. Supports NVIDIA/AMD/Apple Silicon acceleration. Privacy-first design.",
    downloadUrl: "https://jan.ai",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["Local LLM", "Desktop", "Minimalist"],
    featured: false
  },
  {
    id: "chatbox",
    name: "Chatbox",
    category: "llm",
    description: "Cross-platform AI chat desktop client. Supports local models and cloud APIs. Beautiful UI, conversation management, prompt templates, Markdown rendering.",
    downloadUrl: "https://chatboxai.app",
    pricing: "Free",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["Chat Client", "Cross-Platform", "Beautiful UI"],
    featured: false
  },
  {
    id: "lobe-chat",
    name: "Lobe Chat",
    category: "llm",
    description: "Modern AI chat framework supporting multiple providers (GPT/Claude/Ollama etc.). Built-in plugin system, knowledge base, and role marketplace. Self-host or use desktop.",
    downloadUrl: "https://github.com/lobehub/lobe-chat",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["AI Chat", "Multi-Model", "Plugin System"],
    featured: false
  },
  {
    id: "open-webui",
    name: "Open WebUI",
    category: "llm",
    description: "Enhanced web interface for Ollama (formerly Ollama WebUI). RAG knowledge base, document upload, multi-user management, model management. Perfect for teams.",
    downloadUrl: "https://github.com/open-webui/open-webui",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.6,
    tags: ["Ollama", "Knowledge Base", "Team"],
    featured: true
  },

  // ===== AI Audio & Speech =====
  {
    id: "whisper",
    name: "Whisper (OpenAI)",
    category: "audio",
    description: "OpenAI's open-source speech recognition system supporting 99 languages. Run locally for high-accuracy transcription. Generate subtitles from audio/video files.",
    downloadUrl: "https://github.com/openai/whisper",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.7,
    tags: ["Speech Recognition", "Transcription", "Subtitles"],
    featured: true
  },
  {
    id: "whisperx",
    name: "WhisperX",
    category: "audio",
    description: "Enhanced Whisper with speaker diarization, accurate timestamps, and batch processing. Much faster than vanilla Whisper for long audio and multi-speaker scenarios.",
    downloadUrl: "https://github.com/m-bain/whisperX",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["Speech Recognition", "Speaker Diarization", "Fast"],
    featured: false
  },
  {
    id: "rvc",
    name: "RVC (Voice Conversion)",
    category: "audio",
    description: "Real-time voice conversion - change your voice to anyone's voice. Train custom voice models. Widely used for AI covers, live streaming, and dubbing.",
    downloadUrl: "https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["Voice Conversion", "AI Cover", "Real-time"],
    featured: false
  },
  {
    id: "bark",
    name: "Bark (Suno)",
    category: "audio",
    description: "Suno's open-source text-to-speech model that generates incredibly realistic human speech. Supports tone, emotion, pauses, and non-verbal sounds like laughter.",
    downloadUrl: "https://github.com/suno-ai/bark",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.2,
    tags: ["TTS", "Emotional Speech", "Realistic"],
    featured: false
  },
  {
    id: "audio-separator",
    name: "Audio Separator",
    category: "audio",
    description: "AI-powered audio source separation. Split music into vocals, drums, bass, piano, and other stems. Based on Meta's Demucs model with impressive quality.",
    downloadUrl: "https://github.com/nomadkaraoke/python-audio-separator",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["Audio Separation", "Stem Extraction", "Demucs"],
    featured: false
  },

  // ===== AI Video Generation =====
  {
    id: "svd",
    name: "Stable Video Diffusion",
    category: "video",
    description: "Stability AI's open-source image-to-video model. Turn any image into a short video clip. Controllable frame rate and motion intensity. Run locally on your GPU.",
    downloadUrl: "https://github.com/Stability-AI/generative-models",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.2,
    tags: ["Video Generation", "Image-to-Video", "Stability AI"],
    featured: true
  },
  {
    id: "animatediff",
    name: "AnimateDiff",
    category: "video",
    description: "Animation plugin for Stable Diffusion that generates coherent videos. Supports multiple motion modes, compatible with ControlNet and LoRA. #1 choice for AI animators.",
    downloadUrl: "https://github.com/guoyww/AnimateDiff",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["AI Animation", "Video Generation", "Stable Diffusion"],
    featured: true
  },
  {
    id: "money-printer",
    name: "MoneyPrinterTurbo",
    category: "video",
    description: "AI-powered short video generator. Input text, it auto-matches stock footage, generates voiceover, and adds subtitles. Perfect for content creators and social media.",
    downloadUrl: "https://github.com/harry0703/MoneyPrinterTurbo",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["Short Video", "Auto-Generate", "Content Creation"],
    featured: false
  },

  // ===== AI Coding Assistants =====
  {
    id: "continue",
    name: "Continue.dev",
    category: "code",
    description: "Open-source AI code assistant for VS Code and JetBrains. Connect to local models (Ollama/LM Studio) or cloud APIs. Code completion, chat debugging, and refactoring.",
    downloadUrl: "https://github.com/continuedev/continue",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.6,
    tags: ["Code Assistant", "VS Code", "Local Model"],
    featured: true
  },
  {
    id: "tabbyml",
    name: "TabbyML",
    category: "code",
    description: "Self-hosted AI code assistant. Completely private deployment. Supports multiple code models with code completion and chat. Enterprise-grade privacy protection.",
    downloadUrl: "https://github.com/TabbyML/tabby",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["Code Assistant", "Self-hosted", "Privacy"],
    featured: false
  },
  {
    id: "cody",
    name: "Cody (Sourcegraph)",
    category: "code",
    description: "AI coding assistant by Sourcegraph with deep codebase understanding. Code navigation, auto-fix, unit test generation. Free tier is powerful enough for daily use.",
    downloadUrl: "https://sourcegraph.com/cody",
    pricing: "Free",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["Code Assistant", "Code Understanding", "Auto-Fix"],
    featured: true
  },
  {
    id: "codegpt",
    name: "CodeGPT",
    category: "code",
    description: "Cross-platform AI coding assistant supporting VS Code, JetBrains, Cursor. Supports local models and major APIs. Code explanation, optimization, and generation.",
    downloadUrl: "https://codegpt.co",
    pricing: "Free",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.2,
    tags: ["Code Assistant", "Cross-Platform", "Multi-IDE"],
    featured: false
  },
  {
    id: "aider",
    name: "Aider",
    category: "code",
    description: "AI pair programming in the terminal. Directly edits your code files. Git integration with auto-commits. Works with local models or cloud APIs. Developer favorite.",
    downloadUrl: "https://github.com/paul-gauthier/aider",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["Code Assistant", "Terminal", "Git Integration"],
    featured: true
  },

  // ===== AI Photo & Face Processing =====
  {
    id: "facefusion",
    name: "FaceFusion",
    category: "photo",
    description: "Industry-leading AI face swapping and processing tool. Real-time face swap, face enhancement, age transformation, expression control. Web interface included.",
    downloadUrl: "https://github.com/facefusion/facefusion",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["Face Swap", "Face Processing", "Real-time"],
    featured: true
  },
  {
    id: "gfpgan",
    name: "GFPGAN",
    category: "photo",
    description: "AI face restoration for old/blurry photos. Repair damaged faces, enhance details, and upscale resolution. Photo-grade quality, perfect for restoring vintage photos.",
    downloadUrl: "https://github.com/TencentARC/GFPGAN",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["Photo Restoration", "Face Enhancement", "Upscale"],
    featured: true
  },
  {
    id: "codeformer",
    name: "CodeFormer",
    category: "photo",
    description: "Face restoration tool by NUS. Performs exceptionally well on heavily degraded images. More natural results than GFPGAN in some scenarios.",
    downloadUrl: "https://github.com/sczhou/CodeFormer",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["Face Restoration", "Enhancement", "Academic"],
    featured: false
  },
  {
    id: "rembg",
    name: "Rembg (Background Remover)",
    category: "photo",
    description: "AI background removal tool. CLI + Python library. Supports images and video. Batch processing capable. Quality close to commercial product remove.bg.",
    downloadUrl: "https://github.com/danielgatis/rembg",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["Background Removal", "Batch", "CLI"],
    featured: false
  },

  // ===== OCR & Translation =====
  {
    id: "umi-ocr",
    name: "Umi-OCR",
    category: "ocr",
    description: "Offline OCR tool with excellent Chinese & English recognition. Screenshot OCR, batch image recognition, PDF recognition. No internet needed. Privacy guaranteed.",
    downloadUrl: "https://github.com/hiroi-sora/Umi-OCR",
    pricing: "Free (Open Source)",
    platforms: ["Windows"],
    rating: 4.6,
    tags: ["OCR", "Offline", "Chinese OCR"],
    featured: true
  },
  {
    id: "paddle-ocr",
    name: "PaddleOCR",
    category: "ocr",
    description: "Baidu's open-source OCR toolkit supporting 80+ languages. High accuracy with table recognition and layout analysis. Python SDK and CLI included.",
    downloadUrl: "https://github.com/PaddlePaddle/PaddleOCR",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["OCR", "Multi-Language", "Table Recognition"],
    featured: true
  },
  {
    id: "easyocr",
    name: "EasyOCR",
    category: "ocr",
    description: "Lightweight OCR engine supporting 80+ languages. Python library that can be integrated in just a few lines. GPU acceleration supported. Good Chinese recognition.",
    downloadUrl: "https://github.com/JaidedAI/EasyOCR",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["OCR", "Lightweight", "Multi-Language"],
    featured: false
  },
  {
    id: "libre-translate",
    name: "LibreTranslate",
    category: "ocr",
    description: "Free open-source machine translation system for self-hosting. Supports 30+ languages. API compatible with Google Translate format. Fully offline, privacy protected.",
    downloadUrl: "https://github.com/LibreTranslate/LibreTranslate",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.2,
    tags: ["Translation", "Self-hosted", "Privacy"],
    featured: false
  },

  // ===== All-in-One & Wrappers =====
  {
    id: "pinokio",
    name: "Pinokio",
    category: "allinone",
    description: "One-click AI app installer and browser. Hundreds of AI apps built-in (SD, ComfyUI, Ollama, etc.). Click to install and run. Perfect AI entry point for beginners.",
    downloadUrl: "https://pinokio.computer",
    pricing: "Free",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.6,
    tags: ["All-in-One", "One-Click", "App Manager"],
    featured: true
  },
  {
    id: "sd-next",
    name: "SD.Next",
    category: "allinone",
    description: "Modern fork of AUTOMATIC1111 WebUI. Integrated more features, simplified installation, more model format support. All-in-one Stable Diffusion package.",
    downloadUrl: "https://github.com/vladmandic/automatic",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["All-in-One", "Stable Diffusion", "One-Click"],
    featured: false
  },
  {
    id: "one-api",
    name: "One-API",
    category: "allinone",
    description: "Unified AI API management dashboard. Aggregate OpenAI, Claude, local models into one interface. Quota management, key management, and logging. Self-hosted.",
    downloadUrl: "https://github.com/songquanpeng/one-api",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["API Management", "Aggregation", "Self-hosted"],
    featured: false
  },
  {
    id: "easy-diffusion",
    name: "Easy Diffusion",
    category: "allinone",
    description: "The simplest AI art all-in-one package. Download and run - zero configuration. Built-in model management. Made for users with zero technical background.",
    downloadUrl: "https://easydiffusion.github.io",
    pricing: "Free (Open Source)",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.2,
    tags: ["All-in-One", "Simple", "AI Art"],
    featured: false
  }
];

const CATEGORIES = {
  image: {
    name: "AI Image Generation",
    icon: "image",
    description: "Local AI art tools for text-to-image and model training",
    color: "purple"
  },
  llm: {
    name: "Local LLMs & Chat",
    icon: "message-square",
    description: "Run AI language models locally on your computer",
    color: "blue"
  },
  audio: {
    name: "AI Audio & Speech",
    icon: "music-note",
    description: "Speech recognition, voice conversion, TTS, audio separation",
    color: "red"
  },
  video: {
    name: "AI Video",
    icon: "video",
    description: "AI video generation, animation, and auto video creation",
    color: "pink"
  },
  code: {
    name: "AI Coding Assistants",
    icon: "code-slash",
    description: "Local code completion, debugging, and auto-programming",
    color: "green"
  },
  photo: {
    name: "AI Photo & Face",
    icon: "camera",
    description: "Face swap, photo restoration, background removal, face enhancement",
    color: "amber"
  },
  ocr: {
    name: "OCR & Translation",
    icon: "file-text",
    description: "Offline text recognition, translation, and document processing",
    color: "teal"
  },
  allinone: {
    name: "All-in-One & Wrappers",
    icon: "package",
    description: "AI software bundles, one-click installers, desktop wrappers",
    color: "indigo"
  }
};
