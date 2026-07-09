"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Quote, X } from "lucide-react";
import { cn } from "@/lib/utils";

// ===== Types and Interfaces =====
export interface iTestimonial {
	name: string;
	designation: string;
	description: string;
	profileImage: string;
}

// ===== Real Information Data =====
const realTestimonials: iTestimonial[] = [
	{
		name: "Nizal Ahmed",
		designation: "Founder, Retail Brand",
		description: "Muzammil transformed our brand identity completely. The blend of AI and design gave us visuals that feel years ahead of our competitors.",
		profileImage: "N"
	},
	{
		name: "Salman Waheed",
		designation: "Marketing Lead",
		description: "Every deliverable was premium, on-brand, and delivered fast. Our social engagement jumped noticeably after the new design system.",
		profileImage: "S"
	},
	{
		name: "Wahaj Sheikh",
		designation: "Startup Co-Founder",
		description: "Working with Muzammil felt like having a creative director and an AI specialist in one. Highly recommended for any growing business.",
		profileImage: "W"
	}
];

// ===== Custom Hooks =====
const useOutsideClick = (
	ref: React.RefObject<HTMLDivElement | null>,
	onOutsideClick: () => void,
) => {
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (!ref.current || ref.current.contains(event.target as Node)) {
				return;
			}
			onOutsideClick();
		};

		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
	}, [ref, onOutsideClick]);
};

// ===== Main Component =====
export default function TestimonialSection() {
	const carouselRef = React.useRef<HTMLDivElement>(null);
	const [canScrollLeft, setCanScrollLeft] = React.useState(false);
	const [canScrollRight, setCanScrollRight] = React.useState(true);

	const checkScrollability = () => {
		if (carouselRef.current) {
			const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
			setCanScrollLeft(scrollLeft > 0);
			setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
		}
	};

	const handleScrollLeft = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: -350, behavior: "smooth" });
		}
	};

	const handleScrollRight = () => {
		if (carouselRef.current) {
			carouselRef.current.scrollBy({ left: 350, behavior: "smooth" });
		}
	};

	return (
		<div className="w-full max-w-6xl mx-auto select-none overflow-hidden bg-black py-4">
			{/* Carousel Wrapper (Heading Has Been Removed From Here) */}
			<div className="relative w-full">
				<div
					className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] py-6"
					ref={carouselRef}
					onScroll={checkScrollability}
				>
					<div className="flex flex-row justify-start gap-6 px-4 mx-auto">
						{realTestimonials.map((testimonial, index) => (
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: 0.1 * index }}
								key={index}
							>
								<TestimonialCard testimonial={testimonial} />
							</motion.div>
						))}
					</div>
				</div>

				{/* Arrow Controls */}
				<div className="flex justify-center md:justify-end gap-3 mt-4 px-4">
					<button
						className="h-11 w-11 rounded-full bg-neutral-950 border border-neutral-900 flex items-center justify-center disabled:opacity-20 hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300 group"
						onClick={handleScrollLeft}
						disabled={!canScrollLeft}
					>
						<ArrowLeft className="h-4 w-4 text-neutral-400 group-hover:text-[#39FF14] transition-colors" />
					</button>
					<button
						className="h-11 w-11 rounded-full bg-neutral-950 border border-neutral-900 flex items-center justify-center disabled:opacity-20 hover:border-[#39FF14] hover:bg-[#39FF14]/10 transition-all duration-300 group"
						onClick={handleScrollRight}
						disabled={!canScrollRight}
					>
						<ArrowRight className="h-4 w-4 text-neutral-400 group-hover:text-[#39FF14] transition-colors" />
					</button>
				</div>
			</div>
		</div>
	);
}

// ===== Card Component =====
const TestimonialCard = ({ testimonial }: { testimonial: iTestimonial }) => {
	const [isExpanded, setIsExpanded] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleCollapse = () => setIsExpanded(false);

	useEffect(() => {
		const handleEscapeKey = (event: KeyboardEvent) => {
			if (event.key === "Escape") handleCollapse();
		};
		if (isExpanded) {
			window.addEventListener("keydown", handleEscapeKey);
		}
		return () => window.removeEventListener("keydown", handleEscapeKey);
	}, [isExpanded]);

	useOutsideClick(containerRef, handleCollapse);

	return (
		<>
			<AnimatePresence>
				{isExpanded && (
					<div className="fixed inset-0 h-screen w-screen overflow-hidden z-50 flex items-center justify-center p-4">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="backdrop-blur-xl bg-black/80 fixed inset-0"
						/>
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							ref={containerRef}
							className="w-full max-w-2xl bg-neutral-950 border border-neutral-800 shadow-[0_0_50px_rgba(57,255,20,0.15)] z-[60] p-8 md:p-10 rounded-3xl relative"
						>
							<button
								className="absolute top-4 right-4 h-9 w-9 rounded-full flex items-center justify-center bg-neutral-900 border border-neutral-800 hover:border-[#39FF14] transition-colors group"
								onClick={handleCollapse}
							>
								<X className="h-4 w-4 text-neutral-400 group-hover:text-[#39FF14]" />
							</button>
							<Quote className="h-10 w-10 text-[#39FF14] opacity-80 mb-4" />
							<p className="text-neutral-200 text-lg md:text-xl leading-relaxed font-normal">
								"{testimonial.description}"
							</p>
							<div className="mt-6 pt-6 border-t border-neutral-900 flex items-center gap-4">
								<div className="w-12 h-12 rounded-full bg-neutral-900 border border-[#39FF14]/30 flex items-center justify-center text-[#39FF14] font-bold">
									{testimonial.profileImage}
								</div>
								<div>
									<h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
									<p className="text-neutral-500 text-sm">{testimonial.designation}</p>
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

			{/* Main Card View */}
			<motion.div
				onClick={() => setIsExpanded(true)}
				className="cursor-pointer text-left rounded-3xl bg-neutral-950 border border-neutral-900 hover:border-neutral-800 transition-all duration-300 h-[380px] w-80 md:w-[360px] p-8 flex flex-col justify-between relative group hover:shadow-[0_0_30px_rgba(57,255,20,0.05)]"
				whileHover={{ y: -4 }}
			>
				<div>
					{/* Icon Quote Neon */}
					<div className="text-[#39FF14] mb-6">
						<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-quote rotate-180 opacity-90"><path d="M16 3a5 5 0 0 0-4.44 7.28A5 5 0 1 0 21 10a5 5 0 0 0-5-7Z"/><path d="M5 3a5 5 0 0 0-4.44 7.28A5 5 0 1 0 10 10a5 5 0 0 0-5-7Z"/></svg>
					</div>

					{/* Description */}
					<p className="text-neutral-300 text-[15px] leading-relaxed line-clamp-5 font-normal">
						"{testimonial.description}"
					</p>
				</div>

				{/* Footer Client Profile */}
				<div className="flex items-center gap-4 mt-4">
					{/* Initials Placeholder */}
					<div className="w-11 h-11 rounded-full bg-[#39FF14]/10 border border-[#39FF14]/20 flex items-center justify-center text-[#39FF14] text-base font-bold font-mono group-hover:bg-[#39FF14] group-hover:text-black transition-all duration-300">
						{testimonial.profileImage}
					</div>
					<div>
						<h4 className="text-white font-bold text-base tracking-wide transition-colors group-hover:text-[#39FF14]">
							{testimonial.name}
						</h4>
						<p className="text-neutral-500 text-xs font-medium mt-0.5">
							{testimonial.designation}
						</p>
					</div>
				</div>
			</motion.div>
		</>
	);
}