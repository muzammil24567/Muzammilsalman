export const stats = [
  { value: 3, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '+', label: 'Projects Completed' },
  { value: 40, suffix: '+', label: 'Happy Clients' },
  { value: 12, suffix: '+', label: 'Industries Served' },
]

export const services = [
  {
    title: 'Brand Identity',
    desc: 'Complete visual identities — logos, color systems, and guidelines that make brands unforgettable.',
  },
  {
    title: 'Social Media Design',
    desc: 'Scroll-stopping content kits and templates engineered for engagement and consistency.',
  },
  {
    title: 'AI Image Creation',
    desc: 'Custom AI-generated visuals and concept art tailored precisely to your brand language.',
  },
  {
    title: 'Marketing Graphics',
    desc: 'Campaign creatives, ads, and promotional assets designed to convert attention into action.',
  },
  {
    title: 'Business Posters & Flyers',
    desc: 'Premium print and digital collateral that communicates with clarity and impact.',
  },
  {
    title: 'LinkedIn & Facebook Branding',
    desc: 'Professional profile branding, banners, and covers that elevate your online presence.',
  },
]

export const serviceTags = [
  'Brand Identity',
  'Social Media Design',
  'Marketing Graphics',
  'Business Posters',
  'Flyers',
  'Banners',
  'AI Image Creation',
  'AI Visual Concepts',
  'LinkedIn Branding',
  'Facebook Covers',
  'Business Graphics',
  'Advertising Creatives',
]

export type Project = {
  title: string
  category: string
  image: string
  type: 'Personal' | 'Client'
}

export const projects: Project[] = [
  { title: 'Nova Brand System', category: 'Branding', image: '/work-branding.png', type: 'Client' },
  { title: 'Pulse Social Kit', category: 'Social Media', image: '/work-social.png', type: 'Client' },
  { title: 'Neural Concepts', category: 'AI Design', image: '/work-ai.png', type: 'Personal' },
  { title: 'Summit Event Poster', category: 'Posters', image: '/work-poster.png', type: 'Client' },
  { title: 'Launch Campaign Banner', category: 'Banners', image: '/work-banner.png', type: 'Client' },
  { title: 'Creator Thumbnails', category: 'Thumbnails', image: '/work-thumbnail.png', type: 'Personal' },
  { title: 'Corporate Flyer Set', category: 'Flyers', image: '/work-flyer.png', type: 'Client' },
  { title: 'Vivid Ad Creatives', category: 'Marketing', image: '/work-social.png', type: 'Client' },
  { title: 'Aether Identity', category: 'Branding', image: '/work-branding.png', type: 'Personal' },
]

export const projectCategories = [
  'All',
  'Branding',
  'Social Media',
  'AI Design',
  'Business Graphics',
  'Posters',
  'Flyers',
  'Marketing',
  'Banners',
  'Thumbnails',
]

export const skills = [
  { name: 'Artificial Intelligence', level: 95 },
  { name: 'Graphic Design', level: 96 },
  { name: 'Photoshop', level: 92 },
  { name: 'Canva', level: 94 },
  { name: 'Branding', level: 90 },
  { name: 'Creativity', level: 97 },
  { name: 'Communication', level: 88 },
  { name: 'Video Editing', level: 70 },
]

export const testimonials = [
  {
    name: 'Nizal Ahmed',
    role: 'Founder, Retail Brand',
    quote:
      'Muzammil transformed our brand identity completely. The blend of AI and design gave us visuals that feel years ahead of our competitors.',
  },
  {
    name: 'Salman Waheed',
    role: 'Marketing Lead',
    quote:
      'Every deliverable was premium, on-brand, and delivered fast. Our social engagement jumped noticeably after the new design system.',
  },
  {
    name: 'Wahaj Sheikh',
    role: 'Startup Co-Founder',
    quote:
      'Working with Muzammil felt like having a creative director and an AI specialist in one. Highly recommended for any growing business.',
  },
]

export const blogPosts = [
  {
    slug: 'ai-changing-graphic-design',
    title: 'How AI Is Reshaping Modern Graphic Design',
    category: 'Artificial Intelligence',
    excerpt:
      'AI is not replacing designers — it is supercharging them. Here is how I use AI to deliver premium work faster.',
    date: 'Mar 2026',
  },
  {
    slug: 'building-memorable-brands',
    title: 'The Anatomy of a Memorable Brand Identity',
    category: 'Branding',
    excerpt:
      'A great brand is more than a logo. Explore the core elements that make brands instantly recognizable.',
    date: 'Feb 2026',
  },
  {
    slug: 'design-that-drives-growth',
    title: 'Design That Actually Drives Business Growth',
    category: 'Business Growth',
    excerpt:
      'Beautiful design means nothing without results. Learn how strategic visuals convert audiences into customers.',
    date: 'Feb 2026',
  },
  {
    slug: 'marketing-visuals-that-convert',
    title: 'Marketing Visuals That Convert in 2026',
    category: 'Marketing',
    excerpt:
      'The visual trends and psychological principles behind creatives that stop the scroll and drive action.',
    date: 'Jan 2026',
  },
  {
    slug: 'ai-tools-every-designer',
    title: 'AI Tools Every Designer Should Know',
    category: 'Technology',
    excerpt:
      'A practical roundup of the AI tools I rely on to accelerate ideation, production, and delivery.',
    date: 'Jan 2026',
  },
  {
    slug: 'learning-design-fast',
    title: 'The Fastest Way to Learn Design in the AI Era',
    category: 'Learning',
    excerpt:
      'How to build real design skills quickly by combining fundamentals with AI-assisted practice.',
    date: 'Dec 2025',
  },
]

export const tools = [
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Canva Pro',
  'Midjourney',
  'DALL·E',
  'Figma',
  'ChatGPT',
  'Firefly',
  'CapCut',
  'Stable Diffusion',
]

export const social = {
  email: 'muzammilsalman95@gmail.com',
  facebook: 'https://www.facebook.com/profile.php?id=61581464200119',
  instagram: 'https://www.instagram.com/muzammil_salman_/',
  linkedin: 'https://www.linkedin.com/in/muzammil-salman/',
}
