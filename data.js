const TOOLS = [
  // ===== AI绘画生成 =====
  {
    id: "sd-webui",
    name: "Stable Diffusion WebUI",
    category: "image",
    description: "最流行的AI绘画本地工具，AUTOMATIC1111开发。支持文生图、图生图、ControlNet精确控制、LoRA微调模型。拥有最丰富的社区插件生态，几乎任何AI绘画功能都能找到插件实现。",
    downloadUrl: "https://github.com/AUTOMATIC1111/stable-diffusion-webui",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.8,
    tags: ["AI绘画", "文生图", "Stable Diffusion", "插件丰富"],
    featured: true
  },
  {
    id: "comfyui",
    name: "ComfyUI",
    category: "image",
    description: "基于节点工作流的AI绘画工具，用可视化连线方式构建图像生成流程。生成效率极高，适合批量处理和复杂工作流。进阶用户必备，可精确控制每一步处理。",
    downloadUrl: "https://github.com/comfyanonymous/ComfyUI",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.7,
    tags: ["AI绘画", "节点工作流", "批量处理"],
    featured: true
  },
  {
    id: "fooocus",
    name: "Fooocus",
    category: "image",
    description: "一键安装的AI绘画工具，对新手极度友好。内置多种风格预设，无需复杂参数设置。底层基于Stable Diffusion，但操作简单到像用网页版Midjourney。",
    downloadUrl: "https://github.com/lllyasviel/Fooocus",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.6,
    tags: ["AI绘画", "新手友好", "一键安装"],
    featured: true
  },
  {
    id: "invokeai",
    name: "InvokeAI",
    category: "image",
    description: "专业级AI绘画工作台，集成画布编辑、图层系统、ControlNet、放大功能。支持在画布上局部重绘和扩展，适合需要精细修改的创作者。",
    downloadUrl: "https://github.com/invoke-ai/InvokeAI",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["AI绘画", "画布编辑", "专业工具"],
    featured: false
  },
  {
    id: "sd-forge",
    name: "SD WebUI Forge",
    category: "image",
    description: "AUTOMATIC1111 WebUI的优化分支，显存占用更低、生成速度更快。底层大量重构优化，适合显存有限的用户，同样支持所有主流插件。",
    downloadUrl: "https://github.com/lllyasviel/stable-diffusion-webui-forge",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["AI绘画", "性能优化", "低显存"],
    featured: false
  },
  {
    id: "draw-things",
    name: "Draw Things",
    category: "image",
    description: "在iPhone/iPad/Mac上本地运行Stable Diffusion的App。苹果芯片优化，离线使用，支持ControlNet和LoRA。无需昂贵GPU，M1以上芯片就能流畅运行。",
    downloadUrl: "https://drawthings.ai",
    pricing: "免费",
    platforms: ["macOS", "iOS"],
    rating: 4.4,
    tags: ["AI绘画", "苹果设备", "移动端"],
    featured: false
  },
  {
    id: "kohya-ss",
    name: "Kohya\'s GUI / EasyTrain",
    category: "image",
    description: "LoRA/DreamBooth模型训练工具，图形化界面。可训练自己的AI绘画模型，定制特定人物、物品或画风。社区最主流的训练工具。",
    downloadUrl: "https://github.com/bmaltais/kohya_ss",
    pricing: "免费开源",
    platforms: ["Windows", "Linux"],
    rating: 4.3,
    tags: ["模型训练", "LoRA", "DreamBooth"],
    featured: false
  },

  // ===== 本地大模型对话 =====
  {
    id: "ollama",
    name: "Ollama",
    category: "llm",
    description: "一键运行本地大模型，支持Llama、Mistral、Qwen、DeepSeek等数百种模型。命令行+桌面版，API兼容OpenAI格式。最受欢迎的本地大模型工具，新手首选。",
    downloadUrl: "https://ollama.ai",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.8,
    tags: ["大模型", "本地运行", "LLM", "一键部署"],
    featured: true
  },
  {
    id: "lm-studio",
    name: "LM Studio",
    category: "llm",
    description: "带图形界面的本地大模型运行工具。浏览HuggingFace模型库、一键下载、对话聊天。内置模型搜索和性能测试，完全离线运行。",
    downloadUrl: "https://lmstudio.ai",
    pricing: "免费",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.7,
    tags: ["大模型", "本地运行", "GUI", "离线"],
    featured: true
  },
  {
    id: "gpt4all",
    name: "GPT4All",
    category: "llm",
    description: "在普通电脑上就能运行的本地大模型。无需GPU，4GB内存即可运行。提供企业级数据本地处理能力，私密安全。",
    downloadUrl: "https://gpt4all.io",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["大模型", "低配置", "隐私安全"],
    featured: true
  },
  {
    id: "text-gen-webui",
    name: "Text Generation WebUI",
    category: "llm",
    description: "功能最全的本地大模型Web界面，oobabooga开发。支持各种模型格式(GGUF/GPTQ/AWQ)、LoRA微调、训练、推理。进阶用户首选。",
    downloadUrl: "https://github.com/oobabooga/text-generation-webui",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["大模型", "Web界面", "全面功能"],
    featured: false
  },
  {
    id: "jan",
    name: "Jan",
    category: "llm",
    description: "极简风格的本地大模型桌面端，开箱即用。内置模型市场，一键下载使用。支持NVIDIA/AMD/Apple Silicon加速。关注隐私和保护用户数据。",
    downloadUrl: "https://jan.ai",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["大模型", "桌面端", "极简"],
    featured: false
  },
  {
    id: "chatbox",
    name: "Chatbox",
    category: "llm",
    description: "跨平台AI对话桌面客户端，支持本地模型和云端API。界面精美，支持对话管理、提示词模板、Markdown渲染。国产开源软件。",
    downloadUrl: "https://chatboxai.app",
    pricing: "免费",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["对话客户端", "跨平台", "国产"],
    featured: false
  },
  {
    id: "lobe-chat",
    name: "Lobe Chat",
    category: "llm",
    description: "现代化AI对话框架，支持多模型提供商(GPT/Claude/Ollama等)。自带插件系统、知识库、角色市场。可自部署或直接用桌面版。",
    downloadUrl: "https://github.com/lobehub/lobe-chat",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["AI对话", "多模型", "插件系统"],
    featured: false
  },
  {
    id: "open-webui",
    name: "Open WebUI",
    category: "llm",
    description: "Ollama的增强Web界面（前身Ollama WebUI）。支持RAG知识库、文档上传、多用户管理、模型管理。适合团队部署本地AI。",
    downloadUrl: "https://github.com/open-webui/open-webui",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.6,
    tags: ["Ollama", "知识库", "Web界面"],
    featured: true
  },

  // ===== AI语音音频 =====
  {
    id: "whisper",
    name: "Whisper (OpenAI)",
    category: "audio",
    description: "OpenAI开源的语音识别系统，支持99种语言。本地运行，准确率极高。可转录音频/视频文件为文字，支持字幕生成。",
    downloadUrl: "https://github.com/openai/whisper",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.7,
    tags: ["语音识别", "转录", "字幕"],
    featured: true
  },
  {
    id: "whisperx",
    name: "WhisperX",
    category: "audio",
    description: "Whisper的增强版，添加说话人分离、精确时间戳对齐、批量处理。比原版Whisper速度快得多，适合处理长音频和多说话人场景。",
    downloadUrl: "https://github.com/m-bain/whisperX",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["语音识别", "说话人分离", "快速"],
    featured: false
  },
  {
    id: "rvc",
    name: "RVC (语音转换)",
    category: "audio",
    description: "实时语音转换工具，可以将你的声音变成任何人的声音。支持训练自己的音色模型。广泛用于AI翻唱、直播变声、配音。",
    downloadUrl: "https://github.com/RVC-Project/Retrieval-based-Voice-Conversion-WebUI",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["语音转换", "变声", "AI翻唱"],
    featured: false
  },
  {
    id: "bark",
    name: "Bark (Suno)",
    category: "audio",
    description: "Suno开源的文本转语音模型，可生成极其逼真的人类语音。支持语气、情感、停顿、非语言声音（如笑声、叹息）。",
    downloadUrl: "https://github.com/suno-ai/bark",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.2,
    tags: ["语音合成", "TTS", "情感语音"],
    featured: false
  },
  {
    id: "audio-separator",
    name: "Audio Separator",
    category: "audio",
    description: "AI音频分离工具，可将音乐分离为人声、鼓、贝斯、钢琴等独立音轨。基于Meta的Demucs模型，效果惊人。",
    downloadUrl: "https://github.com/nomadkaraoke/python-audio-separator",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["音频分离", "伴奏提取", "Demucs"],
    featured: false
  },

  // ===== AI视频生成 =====
  {
    id: "svd",
    name: "Stable Video Diffusion",
    category: "video",
    description: "Stability AI开源的图片转视频模型。输入一张图片，生成短视频片段。可本地运行，支持帧率、运动强度等参数控制。",
    downloadUrl: "https://github.com/Stability-AI/generative-models",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.2,
    tags: ["视频生成", "图生视频", "Stability AI"],
    featured: true
  },
  {
    id: "animatediff",
    name: "AnimateDiff",
    category: "video",
    description: "Stable Diffusion的动画插件/独立工具，生成连贯的视频动画。支持多种运动模式，与ControlNet/LoRA兼容。AI动画创作者首选。",
    downloadUrl: "https://github.com/guoyww/AnimateDiff",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["AI动画", "视频生成", "Stable Diffusion"],
    featured: true
  },
  {
    id: "money-printer",
    name: "MoneyPrinterTurbo",
    category: "video",
    description: "AI自动生成短视频的工具。输入文案，自动匹配视频素材、配音、字幕。适合短视频创作者快速产出内容。国产热门。",
    downloadUrl: "https://github.com/harry0703/MoneyPrinterTurbo",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["短视频", "自动生成", "国产"],
    featured: false
  },

  // ===== AI编程助手 =====
  {
    id: "continue",
    name: "Continue.dev",
    category: "code",
    description: "开源AI编程助手，VS Code和JetBrains插件。连接本地模型(Ollama/LM Studio)或云端API。实现代码补全、对话调试、Refactor。",
    downloadUrl: "https://github.com/continuedev/continue",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.6,
    tags: ["编程助手", "VS Code", "本地模型"],
    featured: true
  },
  {
    id: "tabbyml",
    name: "TabbyML",
    category: "code",
    description: "自部署AI编程助手，完全私有化部署。支持多种代码模型，提供代码补全和对话功能。企业级隐私保护。",
    downloadUrl: "https://github.com/TabbyML/tabby",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["编程助手", "自部署", "隐私"],
    featured: false
  },
  {
    id: "cody",
    name: "Cody (Sourcegraph)",
    category: "code",
    description: "Sourcegraph出品的AI编程助手，深度理解代码仓库上下文。支持代码导航、自动修复、单元测试生成。免费版功能已足够强大。",
    downloadUrl: "https://sourcegraph.com/cody",
    pricing: "免费",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["编程助手", "代码理解", "自动修复"],
    featured: true
  },
  {
    id: "codegpt",
    name: "CodeGPT",
    category: "code",
    description: "跨平台AI编程助手，支持VS Code、JetBrains、Cursor等。支持本地模型和主流API。代码解释、优化、生成全能。",
    downloadUrl: "https://codegpt.co",
    pricing: "免费",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.2,
    tags: ["编程助手", "跨平台", "多IDE"],
    featured: false
  },
  {
    id: "aider",
    name: "Aider",
    category: "code",
    description: "终端中的AI编程助手，直接编辑代码文件。支持Git集成，自动创建提交。连接本地模型或云端API。开发者口碑极好。",
    downloadUrl: "https://github.com/paul-gauthier/aider",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["编程助手", "终端", "Git集成"],
    featured: true
  },

  // ===== AI照片人脸处理 =====
  {
    id: "facefusion",
    name: "FaceFusion",
    category: "photo",
    description: "业界最流行的AI换脸和面部处理工具。支持实时换脸、面部增强、年龄变换、表情控制。提供Web界面操作。",
    downloadUrl: "https://github.com/facefusion/facefusion",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["换脸", "面部处理", "实时"],
    featured: true
  },
  {
    id: "gfpgan",
    name: "GFPGAN",
    category: "photo",
    description: "老照片修复/面部增强工具。利用AI修复模糊人脸、还原细节、增强分辨率。照片级效果，适合修复老旧照片。",
    downloadUrl: "https://github.com/TencentARC/GFPGAN",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["老照片修复", "面部增强", "腾讯"],
    featured: true
  },
  {
    id: "codeformer",
    name: "CodeFormer",
    category: "photo",
    description: "人脸修复增强工具，NUS出品。在极端退化情况下效果极佳。比GFPGAN在某些场景下恢复更自然。",
    downloadUrl: "https://github.com/sczhou/CodeFormer",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["人脸修复", "增强", "学术"],
    featured: false
  },
  {
    id: "rembg",
    name: "Rembg (去背景)",
    category: "photo",
    description: "AI智能去背景工具，命令行+Python库。支持图片和视频去背景，可批量处理。效果接近商业化产品remove.bg。",
    downloadUrl: "https://github.com/danielgatis/rembg",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["去背景", "批量处理", "命令行"],
    featured: false
  },

  // ===== OCR/翻译工具 =====
  {
    id: "umi-ocr",
    name: "Umi-OCR",
    category: "ocr",
    description: "国产免费OCR工具，离线运行。支持截图OCR、批量图片识别、PDF识别。准确率高，支持中英文混合识别。无需联网。",
    downloadUrl: "https://github.com/hiroi-sora/Umi-OCR",
    pricing: "免费开源",
    platforms: ["Windows"],
    rating: 4.6,
    tags: ["OCR", "文字识别", "离线", "国产"],
    featured: true
  },
  {
    id: "paddle-ocr",
    name: "PaddleOCR",
    category: "ocr",
    description: "百度开源的OCR工具包，支持80+种语言。识别精度极高，支持表格识别、版面分析。提供Python SDK和命令行工具。",
    downloadUrl: "https://github.com/PaddlePaddle/PaddleOCR",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.5,
    tags: ["OCR", "多语言", "表格识别", "百度"],
    featured: true
  },
  {
    id: "easyocr",
    name: "EasyOCR",
    category: "ocr",
    description: "轻量级OCR引擎，支持80+语言。Python库，几行代码即可集成。支持GPU加速，中文识别效果优秀。",
    downloadUrl: "https://github.com/JaidedAI/EasyOCR",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["OCR", "轻量级", "多语言"],
    featured: false
  },
  {
    id: "libre-translate",
    name: "LibreTranslate",
    category: "ocr",
    description: "免费开源的机器翻译系统，可自部署。支持30+语言的翻译，API兼容Google Translate格式。完全离线，保护隐私。",
    downloadUrl: "https://github.com/LibreTranslate/LibreTranslate",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.2,
    tags: ["翻译", "自部署", "隐私"],
    featured: false
  },

  // ===== 整合包/桌面套壳 =====
  {
    id: "pinokio",
    name: "Pinokio",
    category: "allinone",
    description: "一键安装运行各种AI应用的浏览器/管理器。内置数百种AI应用（Stable Diffusion、ComfyUI、Ollama等），点一下就能安装运行。AI入门首选。",
    downloadUrl: "https://pinokio.computer",
    pricing: "免费",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.6,
    tags: ["整合包", "一键安装", "管理器"],
    featured: true
  },
  {
    id: "sd-next",
    name: "SD.Next",
    category: "allinone",
    description: "Stable Diffusion整合包，AUTOMATIC1111 WebUI的现代化分支。集成更多功能、优化安装流程、支持更多模型格式。一键安装开箱即用。",
    downloadUrl: "https://github.com/vladmandic/automatic",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.3,
    tags: ["整合包", "Stable Diffusion", "一键安装"],
    featured: false
  },
  {
    id: "openclaw",
    name: "OpenClaw (龙虾)",
    category: "allinone",
    description: "开源AI工具箱，集成多种AI能力。社区活跃，插件丰富。支持Windows/macOS/Linux，提供图形化界面操作。",
    downloadUrl: "https://github.com/openclaw/openclaw",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.1,
    tags: ["AI工具箱", "开源", "跨平台"],
    featured: false
  },
  {
    id: "one-api",
    name: "One-API",
    category: "allinone",
    description: "统一的AI API管理面板，将多种AI服务（OpenAI、Claude、本地模型）聚合到一个接口。支持配额管理、密钥管理、日志监控。",
    downloadUrl: "https://github.com/songquanpeng/one-api",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.4,
    tags: ["API管理", "聚合", "自部署"],
    featured: false
  },
  {
    id: "easy-diffusion",
    name: "Easy Diffusion",
    category: "allinone",
    description: "最简单的AI绘画整合包，无需任何配置。下载即用，内置模型管理。适合完全没有技术背景的用户。",
    downloadUrl: "https://easydiffusion.github.io",
    pricing: "免费开源",
    platforms: ["Windows", "macOS", "Linux"],
    rating: 4.2,
    tags: ["整合包", "简单易用", "AI绘画"],
    featured: false
  },
  {
    id: "amazing-ai",
    name: "AmazingAI (整合包)",
    category: "allinone",
    description: "国人制作的AI工具整合包，集成Stable Diffusion、ComfyUI、Ollama等主流工具。一键部署，汉化界面，降低AI使用门槛。",
    downloadUrl: "https://www.bilibili.com/read/cv24842419/",
    pricing: "免费",
    platforms: ["Windows"],
    rating: 4.1,
    tags: ["整合包", "汉化", "国产"],
    featured: false
  },
  {
    id: "openclaw-shell",
    name: "AutoClaw (腾讯系套壳)",
    category: "allinone",
    description: "基于OpenClaw的腾讯系套壳版本（打比方）。集成腾讯混元大模型，优化中文体验。提供桌面端和云端同步。",
    downloadUrl: "https://github.com/openclaw/autoclaw",
    pricing: "免费",
    platforms: ["Windows", "macOS"],
    rating: 3.8,
    tags: ["套壳", "腾讯", "AI助手"],
    featured: false
  }
];

const CATEGORIES = {
  image: {
    name: "AI绘画生成",
    icon: "image",
    description: "本地AI绘图工具，文生图、图生图、模型训练",
    color: "purple"
  },
  llm: {
    name: "本地大模型对话",
    icon: "message-square",
    description: "在电脑上本地运行AI大模型，离线对话",
    color: "blue"
  },
  audio: {
    name: "AI语音音频",
    icon: "music-note",
    description: "语音识别、变声、语音合成、音频分离",
    color: "red"
  },
  video: {
    name: "AI视频生成",
    icon: "video",
    description: "AI生成视频、动画、短视频自动制作",
    color: "pink"
  },
  code: {
    name: "AI编程助手",
    icon: "code-slash",
    description: "代码补全、调试、自动编程的本地工具",
    color: "green"
  },
  photo: {
    name: "AI照片人脸处理",
    icon: "camera",
    description: "换脸、老照片修复、去背景、人脸增强",
    color: "amber"
  },
  ocr: {
    name: "OCR/翻译工具",
    icon: "file-text",
    description: "离线文字识别、翻译、文档处理工具",
    color: "teal"
  },
  allinone: {
    name: "整合包/套壳工具",
    icon: "package",
    description: "AI工具整合包、一键安装、桌面套壳软件",
    color: "indigo"
  }
};
