import React from 'react';
import Link from 'next/link';

export default function FAQsPage() {
  const faqList = [
    { q: "Aap kis tarah ke design tools use karte hain?", a: "Main dynamic media assets production ke liye advanced generative AI tools, digital layout frameworks, aur standard branding custom software workflows use karta hoon." },
    { q: "Kiya graphics high resolution mein download ho sakti hain?", a: "Ji bilkul! Meri website par active jitne assets hain sab maximum high-quality zoom control aur dynamic media clearance ke sath code optimized hain." },
    { q: "MuzDesigner ke sath project start karne ka tarika kiya hai?", a: "Aap direct Contact page se ya WhatsApp button link par click karke details share kar sakte hain, hum same day scope lock karke dev production shuru kar dete hain." }
  ];

  return (
    <section className="min-h-screen w-full bg-black text-white py-24 px-6 max-w-4xl mx-auto flex flex-col justify-center">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold text-[#a3e635] tracking-widest uppercase">Questions</span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2">Frequently Asked <span className="text-[#a3e635]">FAQs</span></h2>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          Common sawaalat jo aapko mere work procedure ko samajhne mein madad karenge.
        </p>
      </div>

      <div className="space-y-4 mb-12">
        {faqList.map((faq, index) => (
          <div key={index} className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-xl">
            <h3 className="text-md font-bold text-white flex items-center gap-2">
              <span className="text-[#a3e635]">&bull;</span> {faq.q}
            </h3>
            <p className="text-zinc-400 text-sm mt-3 pl-4 border-l border-zinc-800 leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <p className="text-zinc-500 text-sm">
          Koi aur sawaal hai? <Link href="/contact" className="text-[#a3e635] hover:underline font-semibold">Direct Message karein</Link>
        </p>
      </div>
    </section>
  );
}