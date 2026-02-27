"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';

type TabData = {
  id: string;
  label: string;
  firstheading: string;
  heading: string;
  subheading: string;
  features: string[];
  whyItMatters: string;
  ctaText: string;
  imageSrc: string;
  bgColor: string;
  accentColor: string;
};

const tabs: TabData[] = [
  {
    id: 'beauty',
    label: 'Beauty & Cosmetics',
    firstheading: 'BEAUTY & SKINCARE',
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
    imageSrc: '/images/image 506.svg',
    bgColor: 'bg-[#FFF0F1]',
    accentColor: '#FC5D7B',
  },
  {
    id: 'grocery',
    label: 'Grocery & Food',
    firstheading: 'GROCERY FOOD',
    heading: 'YOUR APP BECOMES A QUICK COMMERCE DELIVERY APP',
    subheading: 'UTILITY FEATURES',
    features: [
      'Geolocation-Based Ordering',
      'Zone-Based Delivery Management',
      'Real-Time Order Tracking',
      'Quick Reorder',
      'Location-Aware Address Book'
    ],
    whyItMatters: "Food is a high-frequency purchase. Make reordering so easy they never think about going to a competitor.",
    ctaText: 'SEE GROCERY CASE STUDY',
    imageSrc: '/images/image 507.svg',
    bgColor: 'bg-[#E8FDEF]',
    accentColor: '#16AF3F',
  },
  {
    id: 'fashion',
    label: 'Fashion & Apparel',
    firstheading: 'FASHION & APPAREL',
    heading: 'YOUR APP BECOMES A PERSONAL STYLING ASSISTANT',
    subheading: 'UTILITY FEATURES',
    features: [
      'Style Quiz & Recommendations',
      'Wishlist with Back-in-Stock Alerts',
      'Size Guide with Fit Predictor',
      'New Arrival Alerts by Style'
    ],
    whyItMatters: "Quick Commerce isn't just for the giants. Give independent Grocery brands the same delivery experience.",
    ctaText: 'See Fashion & APPAREL CASE STUDY',
    imageSrc: '/images/image 508.svg',
    bgColor: 'bg-[#EEEBFF]',
    accentColor: '#5C41FF',
  },
  {
    id: 'health',
    label: 'Healthcare & Wellness',
    firstheading: 'HEALTHCARE & WELLNESS',
    heading: 'YOUR APP BECOMES A WELLNESS TRACKER + SHOP',
    subheading: 'UTILITY FEATURES',
    features: [
      'Supplement Reminder',
      'Wellness Goal Tracker',
      'Reorder Predictions',
      'Content Hub (Recipes/Workouts)'
    ],
    whyItMatters: "Health & wellness products are consumed daily. Your app should remind customers to use what they've bought.",
    ctaText: 'See HEALTHCARE & WELLNESS CASE STUDY',
    imageSrc: '/images/image 509.svg',
    bgColor: 'bg-[#E3FCF8]',
    accentColor: '#10A385',
  },
  {
    id: 'electronics',
    label: 'Electronics',
    firstheading: 'ELECTRONICS',
    heading: 'YOUR APP BECOMES A PRODUCT SETUP AND SUPPORT HUB',
    subheading: 'UTILITY FEATURES',
    features: [
      'Setup Guides & How-TO Videos',
      'Warranty Tracker',
      'Accessory Recommendations',
      'Support Chat Integration'
    ],
    whyItMatters: "Electronics customers need help after the purchase. Be there for setup and support.",
    ctaText: 'SEE ELECTRONICS CASE STUDY',
    imageSrc: '/images/ELECTRONICS.svg',
    bgColor: 'bg-[#E5F1FF]',
    accentColor: '#0F6FE7',
  },
  {
    id: 'your-industry',
    label: 'Your Industry',
    firstheading: 'YOUR INDUSTRY',
    heading: 'YOUR VISION, OUR TECH: CUSTOM SOLUTIONS FOR YOUR INDUSTRY',
    subheading: 'UTILITY FEATURES',
    features: [
      'Build tools that fit your unique business logic.',
      'Connect with your existing CRM or ERP software.',
      'Designed to grow as your industry demands evolve.',
      'Custom analytics tailored to your KPIs.'
    ],
    whyItMatters: "Don't settle for 'one-size-fits-all'. Whether you are in Real Estate, Education, or Manufacturing, we build specialized utility tools that solve your specific challenges and enhance operational efficiency.",
    ctaText: 'CONSULT OUR EXPERTS',
    imageSrc: '/images/Background+Border+Shadow.svg',
    bgColor: 'bg-[#ECECEF]',
    accentColor: '#5C41FF',
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
        <div className="mb-12 -mx-4 md:mx-0">
          <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-100 scrollbar-track-transparent">
            <div className="flex flex-nowrap justify-start md:justify-center gap-2 md:gap-4 px-2 md:px-0">
              {tabs.map((tab) => {
                const isActive = activeTabId === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTabId(tab.id)}
                    className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all border whitespace-nowrap ${
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
          </div>
        </div>

        {/* Tab Content: left 300px, right 650px, 56px gap */}
        <div className={`relative rounded-[2.5rem] p-8 lg:p-16 overflow-hidden transition-all duration-500 min-h-[600px] shadow-lg ${activeTab.bgColor}`}>
          <div className="grid grid-cols-1 lg:grid-cols-[300px_650px] gap-[56px] items-center w-max max-w-full mx-auto">
            {/* Left: 300px, image only */}
            <div className={`w-full lg:w-[300px] flex justify-center transition-all duration-500 ease-in-out ${activeTab ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <Image
                src={activeTab.imageSrc}
                alt={activeTab.label}
                width={300}
                height={634}
                className="object-contain w-full max-w-[300px] h-auto"
              />
            </div>

            {/* Right: 650px, heading, utility features, why it matters, CTA */}
            <div className={`w-full lg:w-[650px] space-y-6 transition-all duration-500 ease-in-out ${activeTab ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div>
                <span className="font-bold text-xs tracking-widest uppercase mb-2 block" style={{ color: activeTab.accentColor }}>
                  {activeTab.firstheading}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight uppercase">
                  {activeTab.heading}
                </h3>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-100">
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

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm border border-slate-100">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-2">
                  WHY IT MATTERS
                </h4>
                <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                  {activeTab.whyItMatters}
                </p>
              </div>

              <button className="inline-flex items-center text-sm font-bold tracking-wide uppercase group pt-1 hover:opacity-90" style={{ color: activeTab.accentColor }}>
                {activeTab.ctaText}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" style={{ color: activeTab.accentColor }} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
