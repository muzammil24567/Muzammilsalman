import React from 'react';
import { ArrowUpRight } from 'lucide-react'; 

export default function ContactPage() {
  const socialLinks = [
    { name: "WhatsApp", url: "https://wa.me/923398878717", user: "+92 339 8878717", color: "text-green-500" },
    { name: "Behance Portfolio", url: "https://www.behance.net/muzammilsalman", user: "muzammilsalman", color: "text-blue-500" },
    { name: "LinkedIn", url: "https://linkedin.com/in/muzammilsalman", user: "Muzammil Salman", color: "text-sky-400" },
    { name: "Email Address", url: "mailto:muzammilsalman95@gmail.com", user: "muzammilsalman95@gmail.com", color: "text-[#a3e635]" }
  ];

  return (
    <section className="min-h-screen w-full bg-black text-slate-100 py-24 px-6 max-w-6xl mx-auto flex flex-col justify-center">
      
      {/* Upper Headline */}
      <div className="text-center mb-16">
        <span className="text-xs font-semibold tracking-widest text-[#a3e635] uppercase">
          Get In Touch
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mt-2 text-white">
          Let's Build Something <span className="text-[#a3e635]">Epic</span>
        </h1>
        <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Logo design, visual brand identities, ya production assets formatting ke liye direct connect karein.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side: Live Action Messaging Buttons */}
        <div className="lg:col-span-5 space-y-4">
          <h2 className="text-xl font-bold text-white mb-6 tracking-wide">Direct Hubs</h2>
          
          {socialLinks.map((link) => (
            <a 
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 bg-zinc-900/40 rounded-xl border border-zinc-800 hover:border-[#a3e635]/40 transition-all duration-300 group"
            >
              <div className="flex flex-col">
                <span className="text-xs font-medium text-zinc-500 uppercase">{link.name}</span>
                <span className="text-sm font-semibold text-white mt-1 group-hover:text-[#a3e635] transition-colors">
                  {link.user}
                </span>
              </div>
              <div className={`p-2 rounded-lg bg-zinc-800/60 ${link.color} group-hover:scale-110 transition-transform`}>
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </a>
          ))}
        </div>

        {/* Right Side: Form Container */}
        <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800 p-8 rounded-2xl">
          <h2 className="text-xl font-bold text-white mb-6 tracking-wide">Drop a Message</h2>
          
          <form className="space-y-5">
            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">Your Name</label>
              <input 
                type="text" 
                placeholder="Muzammil" 
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#a3e635] text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="client@example.com" 
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#a3e635] text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-colors"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-zinc-400 mb-2">Project Requirement</label>
              <textarea 
                rows={4}
                placeholder="Describe your design asset or branding scope..." 
                className="w-full bg-zinc-900 border border-zinc-800 focus:border-[#a3e635] text-white rounded-xl px-4 py-3.5 text-sm outline-none transition-colors resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#a3e635] text-black font-bold py-4 rounded-xl text-sm tracking-wide hover:bg-white hover:text-black transition-colors duration-300 flex items-center justify-center gap-2"
            >
              Send Message &rarr;
            </button>
          </form>
        </div>

      </div>

    </section>
  );
}