"use client";

import React, { useState } from 'react';

export default function StartProjectPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Your submission / form logic goes here
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col justify-center items-center px-6 py-16 font-sans">
      <div className="w-full max-w-xl space-y-10">
        
        {/* Header Section */}
        <div className="space-y-3 text-center sm:text-left">
          <p className="text-[#9eff1a] font-mono tracking-widest uppercase text-xs">
            // Let's Build Something Great
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Start a Project
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Have an idea or a concept you want to bring to reality? Fill out the details below, and let's make it happen.
          </p>
        </div>

        {/* Form Section */}
        {submitted ? (
          <div className="bg-[#111111] border border-zinc-800 p-8 rounded-2xl text-center space-y-3">
            <h3 className="text-[#9eff1a] text-xl font-bold">Message Sent!</h3>
            <p className="text-gray-400 text-sm">Thanks for reaching out. I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Your Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-[#121212] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9eff1a] transition-colors"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-[#121212] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9eff1a] transition-colors"
                placeholder="john@example.com"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 block">Project Details</label>
              <textarea 
                rows={5}
                required
                className="w-full bg-[#121212] border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#9eff1a] transition-colors resize-none"
                placeholder="Tell me a bit about what you are looking to build..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>

            {/* Merged Button from image_6e1632.png */}
            <div className="pt-2 flex justify-center sm:justify-start">
              <button 
                type="submit" 
                className="inline-flex items-center gap-2 bg-[#9eff1a] text-black font-bold px-7 py-3.5 rounded-full hover:bg-[#8ee517] transition-all duration-200 text-[15px] tracking-tight group"
              >
                Start a Project
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="3" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                  className="mt-[1px] transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}