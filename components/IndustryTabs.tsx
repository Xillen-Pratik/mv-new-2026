"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Sparkles, Heart, ShoppingBag, Coffee, Home } from 'lucide-react';

type TabData = {
  id: string;
  label: string;
  icon: React.ElementType;
  heading: string;
  subtext: string;
  bullets: string[];
  buttonText: string;
  imageSrc: string; // Placeholder
  color: string;
};

const tabs: TabData[] = [
  {
    id: 'beauty',
    label: 'Beauty & Skincare',
    icon: Sparkles,
    heading: 'Your App Becomes a Daily Skincare Companion',
    subtext: 'Don\'t just sell products. Help customers track their routine, analyze their skin, and get personalized recommendations.',
    bullets: [
      'AI Skin Analysis & Product Matching',
      'Daily Routine Tracker & Reminders',
      'Before & After Progress Photos',
      'Ingredient Glossary & Education'
    ],
    buttonText: 'See Beauty Demo',
    imageSrc: '/images/mm1xac6f-5ox8odn.png', // Placeholder
    color: 'bg-pink-100 text-pink-600 border-pink-200 hover:bg-pink-50',
  },
  {
    id: 'health',
    label: 'Health & Wellness',
    icon: Heart,
    heading: 'More Than Just Supplements: A Wellness Hub',
    subtext: 'Transform one-time buyers into subscribers by offering health tracking, hydration reminders, and expert content.',
    bullets: [
      'Custom Vitamin Packs Quiz',
      'Hydration & Habit Tracker',
      'Subscription Management Portal',
      'Exclusive Wellness Content Library'
    ],
    buttonText: 'See Health Demo',
    imageSrc: '/images/mm1xac6f-7q8chy7.png',
    color: 'bg-green-100 text-green-600 border-green-200 hover:bg-green-50',
  },
  {
    id: 'fashion',
    label: 'Fashion & Apparel',
    icon: ShoppingBag,
    heading: 'The Ultimate Personal Stylist in Their Pocket',
    subtext: 'Create an immersive shopping experience with virtual try-ons, style quizzes, and instant drop notifications.',
    bullets: [
      'Virtual Try-On (AR)',
      'Style Quiz & Personalized Feed',
      'Back-in-Stock Push Notifications',
      'Visual Search & Lookbooks'
    ],
    buttonText: 'See Fashion Demo',
    imageSrc: '/images/mm1xac6f-g05npow.png',
    color: 'bg-purple-100 text-purple-600 border-purple-200 hover:bg-purple-50',
  },
  {
    id: 'food',
    label: 'Food & Beverage',
    icon: Coffee,
    heading: 'From Cravings to Checkout in Seconds',
    subtext: 'Make reordering seamless. Perfect for coffee subscriptions, meal kits, and artisanal snacks.',
    bullets: [
      'One-Tap Reorder',
      'Subscription Box Builder',
      'Recipe Hub & Shopping List',
      'Delivery Tracking Integration'
    ],
    buttonText: 'See Food Demo',
    imageSrc: '/images/mm1xac6f-g35y8ex.png',
    color: 'bg-orange-100 text-orange-600 border-orange-200 hover:bg-orange-50',
  },
  {
    id: 'home',
    label: 'Home & Garden',
    icon: Home,
    heading: 'Design Their Dream Space with Your App',
    subtext: 'Help customers visualize your products in their home with AR and room planners.',
    bullets: [
      'AR Furniture Placement',
      'Room Planner Tools',
      'Plant Care Reminders',
      'Installation Guides & Videos'
    ],
    buttonText: 'See Home Demo',
    imageSrc: '/images/mm1xac6f-g8i4lgn.png',
    color: 'bg-blue-100 text-blue-600 border-blue-200 hover:bg-blue-50',
  },
];

export default function IndustryTabs() {
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold tracking-wider uppercase mb-4 border border-indigo-100">
            Industry Specific Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Features Tailored to Your Industry
          </h2>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTabId === tab.id;
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all border ${
                  isActive
                    ? 'bg-slate-900 text-white border-slate-900 shadow-md transform scale-105'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="relative bg-orange-50/50 rounded-3xl p-8 lg:p-12 border border-orange-100 overflow-hidden transition-all duration-500 min-h-[500px]">
           {/* Peach BG mentioned in prompt */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Image (Phone) */}
            <div className={`relative transition-opacity duration-500 ease-in-out ${activeTab ? 'opacity-100' : 'opacity-0'}`}>
               <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] bg-slate-900 rounded-[3rem] border-8 border-slate-900 shadow-2xl overflow-hidden ring-1 ring-slate-900/5">
                 <Image
                   key={activeTab.imageSrc} // Force re-render for animation
                   src={activeTab.imageSrc}
                   alt={activeTab.label}
                   fill
                   className="object-cover animate-in fade-in zoom-in duration-500"
                 />
               </div>
            </div>

            {/* Right: Content */}
            <div className={`space-y-6 transition-all duration-500 ease-in-out ${activeTab ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${activeTab.color.split(' ')[0]} ${activeTab.color.split(' ')[1]}`}>
                <activeTab.icon className="w-6 h-6" />
              </div>
              
              <h3 className="text-3xl font-bold text-slate-900 leading-tight">
                {activeTab.heading}
              </h3>
              
              <p className="text-lg text-slate-600">
                {activeTab.subtext}
              </p>

              <ul className="space-y-3 pt-4">
                {activeTab.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center text-green-500 shadow-sm text-xs">
                      ✓
                    </div>
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="pt-6">
                <button className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                  {activeTab.buttonText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
