import React from 'react';
import Link from 'next/link';

export default function ProcessPage() {
  const steps = [
    { num: "01", title: "Discovery & Strategy", desc: "Aapke design requirement aur dynamic media scope ko samajhna." },
    { num: "02", title: "Asset Generation", desc: "AI workflows aur custom tools se high-quality graphics model taiyar karna." },
    { num: "03", title: "Refinement & Details", desc: "Background color adjustments, focal zooming, aur clear outputs fix karna." },
    { num: "04", title: "Final Delivery", desc: "Vercel live sync aur scalable visual assets production file formats handover karna." }
  ];

  return (
    <section className="min-h-screen w-full bg-black text-white py-24 px-6 max-w-6xl mx-auto flex flex-col justify-center">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold text-[#a3e635] tracking-widest uppercase">Workflow</span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2">My Design <span className="text-[#a3e635]">Process</span></h2>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          Idea se lekar pixel-perfect deployment tak ka systematic tarika.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative mb-12">
        {steps.map((step, index) => (
          <div key={index} className="p-6 bg-zinc-900/20 border border-zinc-800/80 rounded-2xl relative group hover:bg-zinc-900/40 transition-colors">
            <span className="text-4xl font-black text-zinc-800 group-hover:text-[#a3e635]/20 transition-colors absolute top-4 right-4">{step.num}</span>
            <h3 className="text-lg font-bold text-white mt-4 mb-2">{step.title}</h3>
            <p className="text-zinc-400 text-xs leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/portfolio" className="text-sm font-semibold text-[#a3e635] hover:underline">
          View my recent works &rarr;
        </Link>
      </div>
    </section>
  );
}