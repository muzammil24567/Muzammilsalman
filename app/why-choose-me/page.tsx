import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Zap, Award } from 'lucide-react';

export default function WhyChooseMePage() {
  const features = [
    {
      icon: <Zap className="w-6 h-6 text-[#a3e635]" />,
      title: "Fast Asset Production",
      desc: "High-quality visual graphics aur asset production scale par minutes mein ready."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#a3e635]" />,
      title: "Pixel Perfect Consistency",
      desc: "Aapke brand identity ke exact colors aur guidelines ke mutabik reliable execution."
    },
    {
      icon: <Award className="w-6 h-6 text-[#a3e635]" />,
      title: "Professional Branding",
      desc: "Digital layout designing aur specific visual aesthetics mein professional experience."
    }
  ];

  return (
    <section className="min-h-screen w-full bg-black text-white py-24 px-6 max-w-6xl mx-auto flex flex-col justify-center">
      <div className="text-center mb-16">
        <span className="text-xs font-semibold text-[#a3e635] tracking-widest uppercase">Features</span>
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2">Why <span className="text-[#a3e635]">Choose Me</span></h2>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
          MuzDesigner premium features jo aapke digital workflows ko fast aur clear banate hain.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {features.map((item, index) => (
          <div key={index} className="p-6 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-[#a3e635]/40 transition-all duration-300">
            <div className="p-3 bg-zinc-800/60 rounded-xl w-fit mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Link href="/contact" className="text-sm font-semibold text-[#a3e635] hover:underline">
          Let's talk about your project &rarr;
        </Link>
      </div>
    </section>
  );
}