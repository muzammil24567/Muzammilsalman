import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

// Dummy blog data array (Wahi data jo list page par hai)
const blogPosts = [
  {
    slug: "power-of-minimalist-logo-design",
    title: "The Power of Minimalism in Modern Logo Design",
    date: "July 01, 2026",
    content: "Minimalism sirf ek trend nahi hai, balki modern branding ki bunyad hai. Ek accha logo wahi hota hai jo simple ho aur dekhte hi zehan mein beth jaye. Jab aap negative space aur clean typography use karte hain, to brand ka message bohot sharp ho jata hai. MuzDesigner mein hum hamesha isi strategy ko approach karte hain taaki designs long-lasting aur scalable rahein."
  },
  {
    slug: "dynamic-media-and-ai-graphics",
    title: "The Future of AI-Powered Graphic & Visual Design",
    date: "June 25, 2026",
    content: "AI tools ne graphic production ki speed ko bohot barha diya hai. High-resolution imagery generation, backdrop adjustments, aur specific visual formatting ab minutes ka kaam hai. Ek modern developer aur designer hone ke naate, in AI technologies ko apne structural layout workflows ke sath integrate karna aapko market mein dusron se bohot aage le jata hai."
  }
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  
  // URL ke slug ke mutabik sahi blog dhoondna
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  // Agar galti se koi galat URL kholay to 404 show ho jaye
  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen w-full bg-black text-slate-100 py-24 px-6 max-w-4xl mx-auto">
      {/* Back to Blog Button */}
      <div className="mb-8">
        <Link href="/blog" className="text-sm font-semibold text-[#a3e635] hover:underline inline-flex items-center gap-1">
          &larr; Back to all blogs
        </Link>
      </div>

      {/* Article Header */}
      <header className="mb-12 border-b border-zinc-800 pb-8">
        <span className="text-xs font-semibold text-[#a3e635] uppercase tracking-wider">
          {post.date}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-2 leading-tight">
          {post.title}
        </h1>
      </header>

      {/* Article Content Area */}
      <div className="prose prose-invert max-w-none text-slate-300 text-base md:text-lg leading-relaxed space-y-6">
        <p>{post.content}</p>
        <p className="text-zinc-500 text-sm italic mt-12">
          Written by Muzammil Salman • CEO MuzDesigner
        </p>
      </div>
    </article>
  );
}