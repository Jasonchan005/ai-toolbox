const PROMPTS = [
  // ===== Writing & Content =====
  {
    id: "blog-post",
    title: "Blog Post Writer",
    category: "writing",
    description: "Generate a complete blog post with outline, introduction, body sections, and conclusion on any topic.",
    prompt: "Write a comprehensive blog post about [topic]. Include:\n- An attention-grabbing headline\n- An engaging introduction that hooks the reader\n- 3-5 main sections with subheadings\n- Bullet points or numbered lists where appropriate\n- A conclusion with key takeaways\n- A call-to-action at the end\n\nTone: conversational yet professional. Length: 1500-2000 words.",
    tags: ["blog", "content", "SEO", "article"],
    featured: true
  },
  {
    id: "social-media",
    title: "Social Media Caption Generator",
    category: "writing",
    description: "Create engaging social media captions for any platform - Instagram, Twitter, LinkedIn, or Facebook.",
    prompt: "Write [number] social media captions for [platform] about [topic/product]. Each caption should be [tone] in tone and include:\n- A hook in the first line\n- 2-3 hashtags\n- A call-to-action\n- Emojis where appropriate\n\nPlatform-specific requirements:\n- Instagram: Keep under 2200 characters, visual-focused\n- Twitter/X: Under 280 characters, punchy\n- LinkedIn: Professional, 150-300 characters\n- Facebook: Conversational, 80-150 characters",
    tags: ["social media", "marketing", "copywriting"],
    featured: true
  },
  {
    id: "email-newsletter",
    title: "Email Newsletter Writer",
    category: "writing",
    description: "Write engaging email newsletters that drive opens, clicks, and conversions.",
    prompt: "Write an email newsletter about [topic]. Include:\n\nSubject line: [3 options with different approaches]\nPreview text: 1 sentence\n\nBody:\n- Friendly greeting\n- Hook/opening story\n- Main content (2-3 short sections)\n- Value proposition\n- Call-to-action button\n- Friendly sign-off\n\nKeep it conversational. Length: 300-500 words. Use short paragraphs.",
    tags: ["email", "newsletter", "marketing"],
    featured: false
  },
  {
    id: "product-description",
    title: "Product Description Writer",
    category: "writing",
    description: "Create compelling product descriptions that highlight features, benefits, and drive sales.",
    prompt: "Write a product description for [product name]. Product is a [brief description]. Target audience: [target audience].\n\nStructure:\n- Headline: benefit-driven, max 10 words\n- Opening paragraph: address the customer's pain point\n- Features section: 3-5 key features with icons/emojis\n- Benefits section: how each feature improves their life\n- Social proof: \"Join [number] happy customers\"\n- Call-to-action: clear next step\n\nTone: [tone - e.g., professional, playful, luxury]. Format it for an e-commerce product page.",
    tags: ["ecommerce", "copywriting", "sales"],
    featured: false
  },
  {
    id: "rewrite-paragraph",
    title: "Text Rewriter & Improver",
    category: "writing",
    description: "Rewrite any text to improve clarity, tone, or style while preserving the original meaning.",
    prompt: "Rewrite the following text to make it [goal - e.g., more professional, clearer, more concise, more engaging]. Preserve all key information and factual accuracy.\n\nOriginal text:\n\"[paste text here]\"\n\nRequirements:\n- Maintain the original message and key points\n- Improve sentence structure and flow\n- Use active voice where possible\n- Keep paragraphs short and scannable\n- Output only the rewritten version, no explanations",
    tags: ["editing", "proofreading", "rewriting"],
    featured: false
  },
  {
    id: "ad-copy",
    title: "Ad Copy Generator",
    category: "writing",
    description: "Generate high-converting ad copy for Google Ads, Facebook Ads, or social media advertising.",
    prompt: "Create [number] ad copy variations for [platform] advertising [product/service]. Target audience: [audience]. Key selling points: [points].\n\nFor each variation, provide:\n- Headline (max 30 chars)\n- Description (max 90 chars)\n- Call-to-action button text\n\nAlso include:\n- 3 display URL options\n- 5 relevant keywords for targeting\n- Best time to run the ad\n\nFocus on benefits, not features. Use emotional triggers appropriate for the audience.",
    tags: ["advertising", "PPC", "marketing"],
    featured: false
  },

  // ===== Coding & Development =====
  {
    id: "code-generator",
    title: "Code Generator",
    category: "coding",
    description: "Generate code snippets in any programming language for any functionality.",
    prompt: "Write [programming language] code for [functionality]. Requirements:\n- [specific requirement 1]\n- [specific requirement 2]\n- [specific requirement 3]\n\nPlease include:\n- Clear comments explaining each section\n- Error handling\n- Input validation where applicable\n- A brief usage example at the end\n\nOptimize for readability and performance.",
    tags: ["code", "development", "snippet"],
    featured: true
  },
  {
    id: "debug-assistant",
    title: "Debug Assistant",
    category: "coding",
    description: "Identify and fix bugs in your code with detailed explanations.",
    prompt: "I'm getting an error in my code and need help debugging it.\n\nProgramming language: [language]\n\nCode:\n```\n[paste your code here]\n```\n\nError message:\n```\n[paste error message here]\n```\n\nWhat I've tried:\n- [what you've tried so far]\n\nExpected behavior:\n[describe what should happen]\n\nActual behavior:\n[describe what actually happens]\n\nPlease:\n1. Identify the root cause\n2. Explain why it's happening\n3. Provide the corrected code\n4. Suggest how to prevent this in the future",
    tags: ["debug", "troubleshooting", "error"],
    featured: true
  },
  {
    id: "code-review",
    title: "Code Reviewer",
    category: "coding",
    description: "Get a thorough code review with suggestions for improvement.",
    prompt: "Review the following code for potential issues and improvements:\n\n```\n[paste your code here]\n```\n\nPlease analyze:\n1. **Security vulnerabilities** - SQL injection, XSS, authentication issues\n2. **Performance bottlenecks** - slow queries, memory leaks, N+1 problems\n3. **Code quality** - readability, maintainability, naming conventions\n4. **Best practices** - design patterns, SOLID principles, language idioms\n5. **Potential bugs** - edge cases, type errors, race conditions\n\nFor each issue found:\n- Rate severity (Critical/Major/Minor)\n- Explain why it's a problem\n- Provide the fix",
    tags: ["code review", "quality", "best practices"],
    featured: false
  },
  {
    id: "refactor-code",
    title: "Code Refactorer",
    category: "coding",
    description: "Refactor messy code into clean, well-structured code.",
    prompt: "Refactor the following code to be more maintainable, readable, and efficient:\n\n```\n[paste your code here]\n```\n\nTarget language: [language]\n\nPlease:\n1. Break down large functions into smaller, focused ones\n2. Improve naming conventions\n3. Add type hints/annotations where appropriate\n4. Extract magic numbers/strings into constants\n5. Add meaningful comments for complex logic\n6. Suggest a better file/module structure if applicable\n\nExplain each change and why it improves the code.",
    tags: ["refactoring", "clean code", "architecture"],
    featured: false
  },
  {
    id: "test-writer",
    title: "Unit Test Writer",
    category: "coding",
    description: "Automatically generate unit tests for your functions and classes.",
    prompt: "Write comprehensive unit tests for the following code using [testing framework]:\n\n```\n[paste your code here]\n```\n\nCover the following test cases:\n1. Normal/expected inputs\n2. Edge cases (empty inputs, boundary values)\n3. Error handling (invalid inputs, exceptions)\n4. Performance (if applicable)\n\nFollow the Arrange-Act-Assert pattern. Include descriptive test names and comments explaining what each test verifies.",
    tags: ["testing", "unit test", "quality assurance"],
    featured: false
  },
  {
    id: "api-endpoint",
    title: "API Endpoint Designer",
    category: "coding",
    description: "Design RESTful API endpoints with request/response schemas and documentation.",
    prompt: "Design a RESTful API endpoint for [functionality].\n\nRequirements:\n- [requirement 1]\n- [requirement 2]\n\nPlease provide:\n\n1. **Endpoint**: HTTP method + URL path\n2. **Request headers**: authentication, content-type, etc.\n3. **Request body schema**: JSON structure with types and descriptions\n4. **Response schema**: success and error response structures\n5. **Status codes**: all possible return codes with meanings\n6. **Rate limiting**: if applicable\n7. **Example**: curl command showing how to call it\n\nFollow REST best practices and use consistent naming conventions.",
    tags: ["API", "REST", "backend"],
    featured: false
  },

  // ===== Learning & Education =====
  {
    id: "explain-simply",
    title: "Explain Like I'm 5",
    category: "learning",
    description: "Complex topics explained in simple terms that anyone can understand.",
    prompt: "Explain [complex topic] as if I'm 5 years old. Use simple words, analogies, and everyday examples.\n\nStructure:\n- Start with a relatable everyday analogy\n- Break down the core idea into 3 simple points\n- Use a short story or example to illustrate\n- End with a one-sentence summary\n\nAvoid jargon. If you must use a technical term, explain it immediately. Make it memorable and fun.",
    tags: ["teaching", "simple", "analogy"],
    featured: true
  },
  {
    id: "study-guide",
    title: "Study Guide Creator",
    category: "learning",
    description: "Create structured study guides for any subject with summaries, key terms, and practice questions.",
    prompt: "Create a study guide for [subject/topic]. Target level: [beginner/intermediate/advanced].\n\nInclude:\n1. **Topic overview**: brief summary (2-3 sentences)\n2. **Key concepts**: numbered list with explanations\n3. **Important terms**: vocabulary list with definitions\n4. **Study questions**: 5-10 practice questions with answers\n5. **Memory aids**: mnemonics or visual associations\n6. **Common mistakes**: pitfalls to avoid\n7. **Further resources**: suggested readings or practice materials\n\nFormat with clear headings for easy scanning and review.",
    tags: ["study", "exam prep", "notes"],
    featured: true
  },
  {
    id: "tutorial-plan",
    title: "Tutorial Lesson Planner",
    category: "learning",
    description: "Plan a step-by-step tutorial or lesson on any topic.",
    prompt: "Create a step-by-step tutorial plan for teaching [topic]. Target audience: [audience]. Time available: [duration].\n\nStructure:\n1. **Learning objectives** - what will they know by the end?\n2. **Prerequisites** - what should they already know?\n3. **Materials needed** - tools, software, supplies\n4. **Lesson outline** - broken into [number] steps with time estimates\n5. **Hands-on exercise** - a practical task for each step\n6. **Checkpoints** - questions to verify understanding\n7. **Troubleshooting** - common issues and solutions\n8. **Extension** - what to try next\n\nMake it engaging with real-world examples.",
    tags: ["teaching", "tutorial", "curriculum"],
    featured: false
  },
  {
    id: "flashcards",
    title: "Flashcard Generator",
    category: "learning",
    description: "Generate flashcards for effective memorization of any subject.",
    prompt: "Create [number] flashcards for [subject/topic]. \n\nFormat each flashcard as:\n**Front**: [question or term]\n**Back**: [answer or definition]\n\nCover these key areas:\n1. Core concepts and definitions\n2. Important dates/figures (if applicable)\n3. Relationships between ideas\n4. \"Why\" questions (deeper understanding)\n5. Application scenarios\n\nInclude a mix of:\n- Recall questions (what is X?)\n- Explanation questions (why does X happen?)\n- Comparison questions (how is X different from Y?)",
    tags: ["memorization", "study", "review"],
    featured: false
  },

  // ===== Business & Marketing =====
  {
    id: "business-plan",
    title: "Business Plan Outline",
    category: "business",
    description: "Generate a comprehensive business plan outline for any business idea.",
    prompt: "Create a business plan outline for a [type of business] business. \n\nInclude sections for:\n\n1. **Executive Summary** - what to include (write this section last)\n2. **Company Description** - mission, vision, values\n3. **Market Analysis** - industry overview, target market, competition\n4. **Organization & Management** - structure, team, advisors\n5. **Products/Services** - what you offer, pricing model\n6. **Marketing & Sales** - channels, strategies, customer acquisition\n7. **Financial Projections** - revenue model, costs, break-even analysis\n8. **Funding Request** - amount needed, use of funds\n9. **Appendix** - supporting documents\n\nFor each section, provide:\n- Key questions to answer\n- Data/research needed\n- Estimated length\n- Example sentence starters",
    tags: ["startup", "planning", "entrepreneurship"],
    featured: true
  },
  {
    id: "cold-email",
    title: "Cold Email Writer",
    category: "business",
    description: "Write effective cold emails that get responses and conversions.",
    prompt: "Write a cold email to [recipient role/title] at [company name] about [purpose - e.g., partnership, job opportunity, sales].\n\nRequirements:\n- Subject line: under 50 characters, intriguing but not clickbait\n- Personalization: mention something specific about their company\n- Value proposition: clearly state what's in it for them\n- Social proof: mention relevant credentials or mutual connections\n- Call-to-action: single, low-friction next step\n- Length: under 150 words\n\nTone: professional but warm. Avoid overly formal language.\n\nProvide 3 variations with different angles.",
    tags: ["email", "outreach", "sales"],
    featured: true
  },
  {
    id: "swot-analysis",
    title: "SWOT Analysis Generator",
    category: "business",
    description: "Conduct a thorough SWOT analysis for any business, product, or idea.",
    prompt: "Perform a SWOT analysis for [company/product/idea] in the [industry] industry.\n\nFor each quadrant, provide:\n\n**Strengths** (Internal, Positive):\n- 5 specific strengths\n- What advantages do they have?\n- What do they do well?\n\n**Weaknesses** (Internal, Negative):\n- 5 specific weaknesses\n- What could they improve?\n- What resources are they lacking?\n\n**Opportunities** (External, Positive):\n- 5 specific opportunities\n- What market trends can they leverage?\n- What new technologies or changes benefit them?\n\n**Threats** (External, Negative):\n- 5 specific threats\n- What are competitors doing?\n- What market/regulatory changes could harm them?\n\nEnd with 3 actionable strategic recommendations based on this analysis.",
    tags: ["strategy", "analysis", "planning"],
    featured: false
  },
  {
    id: "meeting-agenda",
    title: "Meeting Agenda Planner",
    category: "business",
    description: "Create structured meeting agendas that keep teams focused and productive.",
    prompt: "Create a meeting agenda for a [type of meeting - e.g., team standup, client presentation, strategy session]. Duration: [time].\n\nStructure:\n1. **Meeting objective**: one sentence\n2. **Pre-read/prep**: what attendees should prepare\n3. **Agenda items** (timed):\n   - Item 1 ([time] min) - Lead: [person]\n   - Item 2 ([time] min) - Lead: [person]\n   - etc.\n4. **Decision points**: what needs to be decided\n5. **Action items**: who does what by when\n6. **Next meeting**: date and preliminary topics\n\nFor each agenda item, specify:\n- Format (presentation, discussion, workshop)\n- Desired outcome (inform, decide, brainstorm)\n- Materials needed",
    tags: ["meeting", "productivity", "teamwork"],
    featured: false
  },

  // ===== Communication =====
  {
    id: "professional-email",
    title: "Professional Email Writer",
    category: "communication",
    description: "Write professional emails for any business scenario.",
    prompt: "Write a professional email for [scenario - e.g., following up after an interview, declining a job offer, requesting time off, introducing yourself to a client].\n\nSender: [your name/role]\nRecipient: [recipient name/role]\nTone: [professional, warm, formal, direct]\n\nInclude:\n- Clear subject line\n- Appropriate greeting\n- Purpose stated in first paragraph\n- Necessary details in 2-3 short paragraphs\n- Call-to-action or next steps\n- Professional closing with signature\n\nFormat with proper spacing between paragraphs for readability.",
    tags: ["email", "professional", "workplace"],
    featured: true
  },
  {
    id: "negotiation-script",
    title: "Negotiation Script",
    category: "communication",
    description: "Prepare persuasive talking points for salary, contract, or business negotiations.",
    prompt: "Help me prepare for a [type of negotiation - e.g., salary negotiation, contract terms, vendor pricing] with [counterparty].\n\nMy position: [your position/goal]\nTheir likely position: [what they want]\nKey leverage points: [your advantages]\n\nPlease provide:\n\n1. **Opening statement** - set the tone, state your position\n2. **Key talking points** - 3-5 arguments with supporting data\n3. **Anticipated objections** - what they might say and how to respond\n4. **Walk-away terms** - what's non-negotiable\n5. **Closing strategy** - how to seal the deal\n\nBATNA (Best Alternative): [your backup plan]\n\nTone: confident but collaborative.",
    tags: ["negotiation", "persuasion", "communication"],
    featured: false
  },
  {
    id: "feedback-template",
    title: "Constructive Feedback Writer",
    category: "communication",
    description: "Give constructive feedback that's honest, helpful, and well-received.",
    prompt: "Write constructive feedback for [situation - e.g., a colleague's presentation, a direct report's performance, a team member's code review].\n\nUse the SBI Model:\n1. **Situation** - when/where it happened\n2. **Behavior** - what specifically they did\n3. **Impact** - how it affected you/the team/the result\n\nThen provide:\n- What worked well (2-3 specific points)\n- What could be improved (1-2 specific suggestions)\n- A positive closing that reinforces confidence\n\nTone: supportive and specific. Avoid generalizations like \"you always\" or \"you never.\" Focus on behaviors, not personality.",
    tags: ["feedback", "management", "leadership"],
    featured: false
  },

  // ===== Research & Analysis =====
  {
    id: "summary-article",
    title: "Article Summarizer",
    category: "analysis",
    description: "Summarize long articles, papers, or reports into concise key points.",
    prompt: "Summarize the following [article/text] and extract the key information:\n\n```\n[paste text here]\n```\n\nProvide:\n\n1. **One-sentence summary**: the core message\n2. **Key takeaways**: 3-5 bullet points\n3. **Supporting evidence**: main data points or arguments\n4. **Implications**: why this matters\n5. **Related concepts**: what to read next\n\nLength: Keep the summary under 20% of the original text length. Prioritize actionable insights over descriptive content.",
    tags: ["summary", "research", "reading"],
    featured: true
  },
  {
    id: "data-interpreter",
    title: "Data Analyst",
    category: "analysis",
    description: "Analyze data sets, identify patterns, and extract actionable insights.",
    prompt: "Analyze the following data and provide actionable insights:\n\n```\n[paste your data - CSV, table, or description]\n```\n\nPlease provide:\n\n1. **Overview**: what does this data show at a glance?\n2. **Key metrics**: averages, totals, ranges, percentages\n3. **Patterns & trends**: what's increasing, decreasing, or unusual\n4. **Correlations**: relationships between different data points\n5. **Outliers**: data points that don't fit the pattern\n6. **Recommendations**: 3-5 data-driven actions\n7. **Visualization suggestions**: what charts would best represent this data?",
    tags: ["data", "analytics", "insights"],
    featured: true
  },
  {
    id: "pro-con",
    title: "Pros & Cons Analyzer",
    category: "analysis",
    description: "Make better decisions with structured pros and cons analysis.",
    prompt: "Analyze the pros and cons of [decision/choice]. Context: [brief background on the situation].\n\nStructure:\n\n**Arguments FOR** (minimum 5):\n1. [point] - Impact: [high/medium/low] - Confidence: [high/medium/low]\n2. ...\n\n**Arguments AGAINST** (minimum 5):\n1. [point] - Impact: [high/medium/low] - Confidence: [high/medium/low]\n2. ...\n\n**Risk analysis**:\n- Best case scenario:\n- Worst case scenario:\n- Most likely outcome:\n\n**Recommendation**: Based on the analysis, what should I do? Why? What are the first 3 steps to execute this decision?",
    tags: ["decision making", "analysis", "thinking"],
    featured: false
  },

  // ===== Creative Writing =====
  {
    id: "story-idea",
    title: "Story Idea Generator",
    category: "creative",
    description: "Generate creative story ideas with plots, characters, and settings.",
    prompt: "Generate [number] story ideas based on [genre/theme/prompt].\n\nFor each idea, provide:\n1. **Logline**: one sentence that captures the core story\n2. **Main character**: name, age, occupation, key personality trait\n3. **Setting**: time period, location, atmosphere\n4. **Inciting incident**: what starts the story\n5. **Central conflict**: internal and external struggles\n6. **Character arc**: how the protagonist changes\n7. **Opening scene**: a teaser paragraph\n8. **Thematic question**: what the story asks the reader\n\nBonus: suggest a title for each idea.\n\nGenre: [genre]. Tone: [tone].",
    tags: ["writing", "fiction", "brainstorming"],
    featured: true
  },
  {
    id: "poem-writer",
    title: "Poem Writer",
    category: "creative",
    description: "Write poems in any style - haiku, sonnet, free verse, or rhyming.",
    prompt: "Write a [style] poem about [topic].\n\nStyle: [haiku/sonnet/free verse/rhyming/limerick]\nTone: [tone - e.g., melancholy, joyful, reflective]\nLength: [number] lines OR [number] stanzas\n\nTheme/mood to convey:\n[describe the feeling or message]\n\nInclude these words/elements:\n- [word 1]\n- [word 2]\n- [element, e.g., a metaphor about the ocean]\n\nThe poem should have a consistent rhythm and, if applicable, rhyme scheme.",
    tags: ["poetry", "creative", "literature"],
    featured: false
  },
  {
    id: "dialogue-scene",
    title: "Dialogue Writer",
    category: "creative",
    description: "Write natural, character-driven dialogue for scenes and scripts.",
    prompt: "Write a dialogue scene between [character A description] and [character B description] about [topic/conflict].\n\nSetting: [where it takes place]\nTime: [time of day/period]\nMood: [emotional tone]\n\nCharacter A's goal: [what they want]\nCharacter B's goal: [what they want]\n\nRequirements:\n- Show, don't tell - reveal character through their words\n- Each character should have a distinct voice\n- Include subtext (what's not being said)\n- Build tension through the exchange\n- End with a shift in the relationship or situation\n\nLength: 30-50 lines of dialogue with minimal narration.",
    tags: ["script", "fiction", "character"],
    featured: false
  },

  // ===== Roleplay & Persona =====
  {
    id: "career-coach",
    title: "Career Coach",
    category: "roleplay",
    description: "Get professional career advice, resume tips, and interview coaching.",
    prompt: "Act as my career coach. I'm currently [current situation - e.g., looking for a job, considering a career change, preparing for a promotion]. My background: [brief professional background].\n\nPlease help me with:\n1. **Career assessment**: what are my strongest career paths?\n2. **Resume/CV tips**: how to present my experience better\n3. **Interview prep**: common questions and how to answer them\n4. **Skill gaps**: what should I learn next?\n5. **Networking strategy**: who to reach out to and how\n6. **Timeline**: realistic milestones for the next 3-6 months\n\nBe honest and direct. Don't just tell me what I want to hear.",
    tags: ["career", "mentoring", "professional development"],
    featured: true
  },
  {
    id: "language-tutor",
    title: "Language Tutor",
    category: "roleplay",
    description: "Practice any language with a personal AI tutor that corrects and teaches.",
    prompt: "Act as my [language] tutor. My current level: [beginner/intermediate/advanced].\n\nToday I want to practice [specific topic - e.g., ordering food, business meetings, casual conversation].\n\nPlease:\n1. Start a conversation on this topic in [language]\n2. If I make mistakes, gently correct me and explain why\n3. Introduce 3-5 new vocabulary words related to the topic\n4. Ask me questions to keep me speaking\n5. At the end, give me a summary of:\n   - New words I learned\n   - Mistakes I made\n   - Areas to focus on next time\n\nSpeak to me mostly in [language], but use [your language] for explanations when needed.",
    tags: ["language", "practice", "learning"],
    featured: true
  },
  {
    id: "therapy-journal",
    title: "Journaling & Reflection Guide",
    category: "roleplay",
    description: "Guided journaling prompts for self-reflection and personal growth.",
    prompt: "Act as a guided journaling coach. I want to reflect on [topic - e.g., a challenging situation, a goal I'm working toward, a relationship].\n\nGuide me through:\n\n1. **Check-in**: How am I feeling right now? (1-10 scale)\n2. **The situation**: What happened? (describe factually)\n3. **My reaction**: How did I respond?\n4. **Deeper layer**: What's really going on beneath the surface?\n5. **Reframing**: What's another way to look at this?\n6. **Gratitude**: What's one thing I can appreciate about this?\n7. **Action**: What's one small step I can take today?\n8. **Closing**: What do I want to remember about this?\n\nAsk me one question at a time and respond to my answers before moving to the next.",
    tags: ["mindfulness", "reflection", "wellness"],
    featured: false
  },
  // ===== Additional Prompts =====
  {
    id: "resume-review",
    title: "Resume & CV Optimizer",
    category: "roleplay",
    description: "Get your resume reviewed and optimized for job applications and ATS systems.",
    prompt: "Review my resume and suggest improvements. My target role: [job title]. Industry: [industry].\n\nResume content:\n```\n[paste your resume here]\n```\n\nPlease:\n1. Overall assessment (strengths/weaknesses)\n2. ATS compatibility check\n3. Bullet point improvements (make them more impactful)\n4. Keywords I'm missing\n5. Suggested summary/objective rewrite\n6. Format and layout suggestions\n\nBe specific. Give me exact rewrites, not general advice.",
    tags: ["resume", "job search", "career"],
    featured: false
  },
  {
    id: "microsoft-excel",
    title: "Excel Formula Expert",
    category: "learning",
    description: "Get help with Excel formulas, functions, and spreadsheet automation.",
    prompt: "I need help with an Excel formula. What I'm trying to do: [describe your goal].\n\nMy data looks like:\n- Column A: [description]\n- Column B: [description]\n- Column C: [description]\n\nDesired output: [what result you want]\n\nWhat I've tried: [any formula you've attempted]\n\nPlease provide:\n1. The formula I should use\n2. A step-by-step explanation of how it works\n3. Alternative approaches if applicable\n4. Common errors to watch out for",
    tags: ["Excel", "spreadsheet", "formula"],
    featured: false
  },
  {
    id: "cover-letter",
    title: "Cover Letter Writer",
    category: "communication",
    description: "Write tailored cover letters for job applications that stand out.",
    prompt: "Write a cover letter for a [job title] position at [company name].\n\nMy background:\n- [key experience 1]\n- [key experience 2]\n- [key skill]\n\nCompany info: [what you know about the company]\n\nRequirements:\n- Address the hiring manager directly\n- Connect my experience to their needs\n- Show enthusiasm without being generic\n- Keep it to 3-4 short paragraphs\n- Include a call to action\n\nTone: professional but personable.",
    tags: ["cover letter", "job application", "career"],
    featured: false
  },
  {
    id: "interview-questions",
    title: "Interview Question Generator",
    category: "business",
    description: "Generate relevant interview questions for any role or industry.",
    prompt: "Generate [number] interview questions for a [job title] position at a [type of company] company.\n\nJob description:\n[paste job description]\n\nCategorize the questions:\n1. **Behavioral** (tell me about a time...)\n2. **Technical/Skills** (how would you...)\n3. **Situational** (what would you do if...)\n4. **Culture fit** (why do you want to work here?)\n\nFor each question, provide:\n- What to look for in a good answer\n- Red flags to watch out for\n- Follow-up questions",
    tags: ["hiring", "interview", "HR"],
    featured: false
  },
  {
    id: "seo-content",
    title: "SEO Content Brief Writer",
    category: "writing",
    description: "Create detailed content briefs for SEO-optimized articles and blog posts.",
    prompt: "Create a content brief for an article targeting the keyword: [target keyword]. Target audience: [audience description].\n\nInclude:\n1. **Working title**: 3 options\n2. **Meta description**: max 160 chars, include keyword\n3. **Target keywords**: primary + 3-5 secondary keywords\n4. **Search intent**: informational/commercial/transactional\n5. **Outline**: H2 and H3 headings with brief descriptions\n6. **Key points to cover**: 5-7 bullet points\n7. **FAQ ideas**: 3-5 questions to answer\n8. **Internal linking suggestions**: related topics\n9. **Word count recommendation**: based on top 10 search results\n10. **Tone and style guidelines",
    tags: ["SEO", "content strategy", "keyword research"],
    featured: false
  },
  {
    id: "python-script",
    title: "Python Script Generator",
    category: "coding",
    description: "Generate Python scripts for automation, data processing, and web scraping.",
    prompt: "Write a Python script to [describe the task].\n\nRequirements:\n- Input: [describe input format]\n- Output: [describe expected output]\n- Libraries allowed: [any preferences, or 'standard library only']\n\nPlease include:\n1. The complete script with imports\n2. Clear comments explaining each section\n3. Error handling for common edge cases\n4. A usage example at the bottom\n5. Requirements.txt or dependency list\n\nOptimize for readability first, performance second.",
    tags: ["Python", "automation", "script"],
    featured: false
  },
  {
    id: "contract-review",
    title: "Contract Clause Explainer",
    category: "analysis",
    description: "Get plain-English explanations of legal contract clauses and terms.",
    prompt: "Explain the following contract clause in plain English:\n\n```\n[paste the clause here]\n```\n\nPlease:\n1. **Simple translation**: what this clause means in plain English\n2. **Key obligations**: what each party must do\n3. **Risks**: what to watch out for\n4. **Negotiation points**: what could be changed\n5. **Red flags**: language that should raise concern\n6. **Industry standard**: is this clause typical or unusual?\n\nNote: I understand this is not legal advice. I will consult a lawyer for final review.",
    tags: ["legal", "contract", "analysis"],
    featured: false
  },
  {
    id: "travel-planner",
    title: "Travel Itinerary Planner",
    category: "learning",
    description: "Plan detailed travel itineraries with activities, restaurants, and logistics.",
    prompt: "Plan a [number]-day trip to [destination].\n\nTravel details:\n- Travelers: [solo/couple/family with kids age X/friends]\n- Interests: [culture/food/nature/shopping/adventure/relaxation]\n- Budget: [budget/mid-range/luxury]\n- Arrival: [date and time]\n- Departure: [date and time]\n- Accommodation: [already booked? area?]\n\nFor each day, provide:\n- Morning activity\n- Lunch recommendation\n- Afternoon activity\n- Dinner recommendation\n- Evening option\n\nAlso include:\n- Transportation tips between locations\n- Estimated costs for activities\n- Weather considerations\n- Booking recommendations (what to reserve in advance)\n- Backup plans for bad weather",
    tags: ["travel", "vacation", "itinerary"],
    featured: false
  },
  {
    id: "book-summary",
    title: "Book Summarizer",
    category: "analysis",
    description: "Get concise summaries of non-fiction books with key takeaways and action items.",
    prompt: "Summarize the book \"[book title]\" by [author].\n\nProvide:\n1. **One-paragraph overview**: what's the book about?\n2. **Core thesis**: the main argument or premise\n3. **Key frameworks/concepts**: 3-5 big ideas from the book\n4. **Memorable examples/stories**: 2-3 illustrative anecdotes\n5. **Actionable takeaways**: 5 things I can implement today\n6. **Who should read this**: is this book right for me?\n7. **Related books**: what to read next\n\nFormat: concise, scannable bullet points. Skip fluff and filler. Focus on what's practically useful.",
    tags: ["books", "reading", "self-improvement"],
    featured: false
  },
  {
    id: "grant-proposal",
    title: "Grant & Funding Proposal Writer",
    category: "business",
    description: "Write compelling grant proposals and funding applications.",
    prompt: "Write a grant proposal for [project/organization name].\n\nProject description: [brief description]\nFunding amount requested: [$ amount]\nFunding organization: [grantor name]\nProblem being solved: [describe the problem]\nTarget beneficiaries: [who benefits]\n\nInclude:\n1. **Executive summary**: 2-3 sentences\n2. **Problem statement**: why this matters now\n3. **Project description**: what you'll do\n4. **Methodology**: how you'll do it\n5. **Measurable outcomes**: how you'll measure success\n6. **Budget overview**: where the money goes\n7. **Organization background**: why you're qualified\n\nTone: professional, confident, mission-driven.",
    tags: ["funding", "nonprofit", "writing"],
    featured: false
  },
  {
    id: "video-script",
    title: "Video Script Writer",
    category: "creative",
    description: "Write engaging video scripts for YouTube, TikTok, or social media content.",
    prompt: "Write a [duration] video script about [topic] for [platform - YouTube/TikTok/Instagram Reels]. Target audience: [audience].\n\nScript structure:\n\n**Hook** (first 3-5 seconds): grab attention\n**Intro** (10-15%): what this video is about\n**Main content** (60-70%): 3-5 key points with examples\n**CTA** (10-15%): like/subscribe/comment/click link\n**Outro** (5%): summary and tease next video\n\nFor each section, provide:\n- Visual/on-screen action\n- Narration/text\n- Timing\n\nTone: [educational/entertaining/inspirational/casual].\nInclude timestamp markers for editing.",
    tags: ["video", "YouTube", "content creation"],
    featured: false
  },
  {
    id: "pitch-deck",
    title: "Pitch Deck Outline",
    category: "business",
    description: "Structure a compelling investor pitch deck for your startup or business idea.",
    prompt: "Create a pitch deck outline for [company/product name].\n\nBusiness: [one-line description]\nProblem: [what problem you solve]\nSolution: [your solution]\nTarget market: [market size and segment]\nBusiness model: [how you make money]\nCompetition: [key competitors]\n\nOutline 10 slides:\n1. **Title slide**: company name, tagline, presenter info\n2. **Problem**: the pain point (with story/example)\n3. **Solution**: your product/service (with demo/screenshot)\n4. **Market size**: TAM/SAM/SOM\n5. **Why now**: timing and market trends\n6. **Business model**: pricing, unit economics\n7. **Traction**: users, revenue, growth metrics\n8. **Team**: founder backgrounds and why you're the right team\n9. **Competition**: competitive advantage / moat\n10. **Ask**: how much, what for, milestones\n\nFor each slide: key message, data points, visual suggestions.",
    tags: ["startup", "fundraising", "investor"],
    featured: false
  }
];

const PROMPT_CATEGORIES = {
  writing: {
    name: "Writing & Content",
    icon: "pencil",
    description: "Blog posts, social media, emails, copywriting, and editing prompts",
    color: "blue"
  },
  coding: {
    name: "Coding & Development",
    icon: "code",
    description: "Code generation, debugging, refactoring, and testing prompts",
    color: "green"
  },
  learning: {
    name: "Learning & Education",
    icon: "book",
    description: "Study guides, tutorials, explanations, and flashcards",
    color: "orange"
  },
  business: {
    name: "Business & Marketing",
    icon: "briefcase",
    description: "Business plans, sales, strategy, and meeting prompts",
    color: "purple"
  },
  communication: {
    name: "Communication",
    icon: "message-square",
    description: "Emails, feedback, negotiation, and professional writing",
    color: "teal"
  },
  analysis: {
    name: "Research & Analysis",
    icon: "search",
    description: "Data analysis, summarization, pros/cons, and research",
    color: "red"
  },
  creative: {
    name: "Creative Writing",
    icon: "feather",
    description: "Stories, poems, dialogue, and creative ideas",
    color: "pink"
  },
  roleplay: {
    name: "Roleplay & Persona",
    icon: "users",
    description: "Career coaching, language tutoring, fitness, and mentoring",
    color: "indigo"
  }
};
