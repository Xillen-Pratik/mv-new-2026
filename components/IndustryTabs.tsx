"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

type TabData = {
  id: string;
  label: string;
  heading: string;
  subheading: string;
  features: string[];
  whyItMatters: string;
  ctaText: string;
  imageSrc: string; // Placeholder for now, can be swapped with real screenshots
  bgColor: string; // Background color for the content area
};

const tabs: TabData[] = [
  {
    id: 'beauty',
    label: 'Beauty & Cosmetics',
    heading: 'YOUR APP BECOMES A DAILY SKINCARE COMPANION',
    subheading: 'UTILITY FEATURES',
    features: [
      'AI Skin Analysis from Photo',
      'Personalized Product Recs',
      'Skincare Routine Reminders',
      'Before/After Progress Tracker',
      'Product Ingredient Scanner'
    ],
    whyItMatters: "Your customers don't just buy skincare they follow routines. Give them a reason to open your app every morning.",
    ctaText: 'SEE BEAUTY & SKINCARE CASE STUDY',
    imageSrc: '/images/mm1xac6f-5ox8odn.png',
    bgColor: 'bg-[#FFF5F5]', // Light pink
  },
  {
    id: 'grocery',
    label: 'Grocery & Food',
    heading: 'FROM CRAVINGS TO CHECKOUT IN SECONDS',
    subheading: 'UTILITY FEATURES',
    features: [
      'One-Tap Reorder',
      'Recipe Hub & Shopping List',
      'Subscription Box Builder',
      'Delivery Tracking Integration',
      'Dietary Preference Filter'
    ],
    whyItMatters: "Food is a high-frequency purchase. Make reordering so easy they never think about going to a competitor.",
    ctaText: 'SEE GROCERY CASE STUDY',
    imageSrc: '/images/mm1xac6f-g35y8ex.png',
    bgColor: 'bg-[#F0FDF4]', // Light green
  },
  {
    id: 'fashion',
    label: 'Fashion & Apparel',
    heading: 'THE ULTIMATE PERSONAL STYLIST IN THEIR POCKET',
    subheading: 'UTILITY FEATURES',
    features: [
      'Virtual Try-On (AR)',
      'Style Quiz & Personalized Feed',
      'Back-in-Stock Push Notifications',
      'Visual Search & Lookbooks',
      'Size Recommender'
    ],
    whyItMatters: "Fashion is about expression. Help them find their perfect look and they'll reward you with loyalty.",
    ctaText: 'SEE FASHION CASE STUDY',
    imageSrc: '/images/mm1xac6f-g05npow.png',
    bgColor: 'bg-[#F5F3FF]', // Light purple
  },
  {
    id: 'health',
    label: 'Healthcare & Wellness',
    heading: 'MORE THAN JUST SUPPLEMENTS: A WELLNESS HUB',
    subheading: 'UTILITY FEATURES',
    features: [
      'Custom Vitamin Packs Quiz',
      'Hydration & Habit Tracker',
      'Subscription Management Portal',
      'Exclusive Wellness Content',
      'Expert Consultation Booking'
    ],
    whyItMatters: "Wellness is a journey. Be the partner that helps them reach their goals, not just the store that sells them pills.",
    ctaText: 'SEE HEALTH CASE STUDY',
    imageSrc: '/images/mm1xac6f-7q8chy7.png',
    bgColor: 'bg-[#ECFEFF]', // Light cyan
  },
  {
    id: 'electronics',
    label: 'Electronics',
    heading: 'TECH SUPPORT & GUIDES AT THEIR FINGERTIPS',
    subheading: 'UTILITY FEATURES',
    features: [
      'Product Compatibility Checker',
      'Warranty Registration & Tracking',
      'Setup Guides & Video Tutorials',
      'Trade-In Value Calculator',
      'Exclusive Early Access Drops'
    ],
    whyItMatters: "Tech purchases are research-heavy. Simplify the decision process and support them after the sale.",
    ctaText: 'SEE ELECTRONICS CASE STUDY',
    imageSrc: '/images/mm1xac6f-mytsr3j.png', // Reusing placeholder, need specific one if available
    bgColor: 'bg-[#F8FAFC]', // Light slate
  },
  {
    id: 'your-industry',
    label: 'Your Industry',
    heading: 'TAILORED SOLUTIONS FOR ANY BUSINESS MODEL',
    subheading: 'UTILITY FEATURES',
    features: [
      'Custom Feature Development',
      'API Integrations',
      'Loyalty Program Migration',
      'Internationalization Support',
      'Enterprise SLA'
    ],
    whyItMatters: "Every business is unique. We build the specific tools your customers need to stay engaged.",
    ctaText: 'CONTACT OUR STRATEGY TEAM',
    imageSrc: '/images/mm1xac6f-1ls4l4z.png', // Reusing placeholder
    bgColor: 'bg-[#FFFFFF] border border-slate-100', // White with border
  },
];

export default function IndustryTabs() {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-indigo-600 text-xs font-bold tracking-wider uppercase mb-4">
            BUILT FOR YOUR INDUSTRY
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            Industry-Specific Features That Make Your <br className="hidden md:block" />
            App Indispensable
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTabId === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  isActive
                    ? 'bg-[#5D5CDE] text-white border-[#5D5CDE] shadow-md'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className={`relative rounded-[2.5rem] p-8 lg:p-16 overflow-hidden transition-all duration-500 min-h-[600px] ${activeTab.bgColor}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Phone Image */}
            <div className={`relative transition-all duration-500 ease-in-out transform ${activeTab ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
               <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] bg-black rounded-[3rem] border-[8px] border-black shadow-2xl overflow-hidden ring-1 ring-black/5">
                 <Image
                   key={activeTab.imageSrc} // Force re-render for animation
                   src={activeTab.imageSrc}
                   alt={activeTab.label}
                   fill
                   className="object-cover animate-in fade-in zoom-in duration-500"
                 />
                 {/* Notch */}
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-black rounded-b-xl z-20" />
               </div>
            </div>

            {/* Right: Content */}
            <div className={`space-y-8 transition-all duration-500 ease-in-out ${activeTab ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              
              <div>
                <span className="text-pink-500 font-bold text-xs tracking-widest uppercase mb-2 block">
                   {activeTab.label.toUpperCase()}
                </span>
                <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight uppercase">
                  {activeTab.heading}
                </h3>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
                  {activeTab.subheading}
                </h4>
                <ul className="space-y-3">
                  {activeTab.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-700 text-base">
                      <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100/50">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  WHY IT MATTERS
                </h4>
                <p className="text-slate-600 leading-relaxed">
                  {activeTab.whyItMatters}
                </p>
              </div>

              <div className="pt-2">
                <button className="inline-flex items-center text-sm font-bold text-pink-500 hover:text-pink-600 tracking-wide uppercase group">
                  {activeTab.ctaText}
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
