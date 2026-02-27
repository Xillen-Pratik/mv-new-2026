"use client";

import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Alex Bestall",
    role: "Founder at Rightsify Music",
    image: "/images/Alex.svg",
    content: "I'm really pleased with the mobile app designed for my music store. It has a professional look and is incredibly user-friendly. I would wholeheartedly recommend the MobiVogue team.",
    stars: 5,
  },
  {
    id: 2,
    name: "Scott",
    role: "Franchise owner from US",
    image: "/images/Scott.svg",
    content: "I’ve worked with the MobiVogue team to convert over 3 of our Shopify stores into a unified mobile app for our franchise network. Their quick response time and dependable technical support have been key reasons we’ve continued partnering with them.",
    stars: 5,
  },
  {
    id: 3,
    name: "Founder",
    role: "French Bonkerz",
    image: "/images/French-bonkerz.svg",
    content: "My Shopify store went live in just a week, and within two days, MobiVogue had my mobile app up and running! The app looks stunning and works seamlessly with my store",
    stars: 5,
  },
  {
    id: 4,
    name: "Anil Mendpara",
    role: "Founder & CEO, Hamercop",
    image: "/images/Anil.svg",
    content: "We are using MobiVogue team to create mobile app for our business. I must say they are outstanding in turning my Shopify store into mobile app and helping me to increase my ROI.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: 'center',
      skipSnaps: false,
      containScroll: false,
      duration: 35,
    },
    [Autoplay({ delay: 4000, stopOnMouseEnter: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  return (
    <section className="py-20 lg:py-24 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Merchants Who Turned Their Apps Into Daily Habits
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join thousands of Shopify brands that are building stronger relationships with their customers through their own mobile app.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden px-4" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial, index) => {
                 const isSelected = index === selectedIndex;
                 return (
                <div
                  key={testimonial.id}
                  className={`flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4 py-10`}
                >
                  <div className={`h-full rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 ${
                    isSelected 
                      ? 'bg-gradient-to-r from-[#4D49B1] via-[#4C3AD080] to-[#5C41FF33] border border-[#5C41FF4D] scale-110 z-10 shadow-2xl shadow-indigo-900/20' 
                      : 'bg-[#1F293780] border border-[#374151] scale-95 opacity-60'}`}>
                    <Quote className="absolute top-6 right-6 text-slate-700 w-8 h-8 group-hover:text-purple-500/20 transition-colors" />
                    
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.stars)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>

                    <p className="text-slate-300 mb-8 italic leading-relaxed">
                      &quot;{testimonial.content}&quot;
                    </p>

                    <div className="flex items-center gap-4 mt-auto">
                      <div className="w-12 h-12 rounded-full bg-slate-700 relative overflow-hidden border-2 border-slate-600">
                         <Image 
                           src={testimonial.image} 
                           alt={testimonial.name}
                           fill
                           className="object-cover"
                         />
                      </div>
                      <div>
                        <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-slate-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          </div>

          <button 
            onClick={scrollPrev}
            className="absolute top-1/2 -left-4 lg:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-700 transition-colors z-20 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={scrollNext}
            className="absolute top-1/2 -right-4 lg:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-white flex items-center justify-center hover:bg-slate-700 transition-colors z-20 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="flex justify-center gap-2 mt-10">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === selectedIndex ? 'bg-purple-500 w-8' : 'bg-slate-600 hover:bg-slate-500'
                }`}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
