import React from 'react';
import Link from 'next/link';

// Agar aapne abhi tak lib/data.ts set nahi ki, to hum data isi file mein rakh rahe hain taaki error na aaye
const blogPosts = [
  {
    slug: "power-of-minimalist-logo-design",
    title: "The Power of Minimalism in Modern Logo Design",
    excerpt: "Ek brand identity ko simple aur memorable kese banaya jaye? Aaiye branding aur logo design ke hidden psychology ko samajhte hain.",
    date: "July 01, 2026",
  },
  {
    slug: "dynamic-media-and-ai-graphics",
    title: "The Future of AI-Powered Graphic & Visual Design",
    excerpt: "Design workflows mein AI tools ko use karke asset production aur dynamic image formatting ko high-quality aur scale kese karein.",
    date: "June 25, 2026",
  }
];

// 'export default' hona lazmi hai taaki Next.js ko component mil sake
export default function BlogPage() {
  return (
    <section className="min-h-screen w-full bg-black text-slate-100 py-24 px-6 max-w-6xl mx-auto">
      
      {/* Header Info */}
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest text-[#a3e635] uppercase">
          MuzDesigner Insights
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 text-white">
          My <span className="text-[#a3e635]">Blog</span>
        </h1>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          Graphic design, branding strategies, aur technical design tools par mere perspectives.
        </p>
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post) => (
          <article 
            key={post.slug} 
            className="p-6 md:p-8 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-[#a3e635]/50 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <span className="text-xs text-[#a3e635] font-medium">{post.date}</span>
              <h2 className="text-2xl font-bold text-white hover:text-[#a3e635] transition-colors duration-200 mt-2">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-slate-400 text-sm mt-3 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-zinc-800/60">
              <Link 
                href={`/blog/${post.slug}`} 
                className="text-sm font-semibold text-[#a3e635] hover:text-white inline-flex items-center gap-1 transition-all duration-200"
              >
                Read Full Article &rarr;
              </Link>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
}