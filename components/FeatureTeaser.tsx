import Image from 'next/image';
import { Check, X } from 'lucide-react';

export default function FeatureTeaser() {
  return (
    <section className="py-20 lg:py-24 bg-[#F9FAFB]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <span className="text-sm font-bold tracking-wider text-green-500 uppercase mb-3 block">
          THE SOLUTION: UTILITY COMMERCE
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 max-w-2xl mx-auto leading-tight">
          What If Your Shopify Mobile App Did More Than Just Sell?
        </h2>
        <p className="text-lg text-slate-600 mb-16 max-w-2xl mx-auto">
          Every Shopify mobile app builder gives you a drag-and-drop editor and push notifications,
          That&apos;s table stakes. The real question is: will your customers open the app next week? If
          it&apos;s just a product catalog with a buy button, probably not
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Box 1 - Before (Old Way) */}
          <div className="relative rounded-[2rem] border border-slate-100 shadow-xl overflow-hidden bg-white p-8 lg:p-12 flex flex-col">
            {/* Label */}
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-md bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wide">
                BEFORE (OLD WAY)
              </span>
            </div>
            
            {/* Image */}
            <div className="relative w-full aspect-[4/3] mb-10">
               <Image
                 src="/images/mm1xac6f-um75dyw.png" // Updated image from screenshot
                 alt="Before: Old Way"
                 fill
                 className="object-contain"
               />
            </div>

            {/* Negative Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 mt-auto text-left">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <h4 className="text-sm font-bold text-slate-700">Product Catalog on a Phone Screen</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6">Just a version your website.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <X className="w-4 h-4 text-red-500 shrink-0" />
                   <h4 className="text-sm font-bold text-slate-700">Opened 2x Per Month</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6">Customers Only open it when they need to buy.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <X className="w-4 h-4 text-red-500 shrink-0" />
                   <h4 className="text-sm font-bold text-slate-700">Retention Drops 90%</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6">Users install ,Browsers once and delete.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <X className="w-4 h-4 text-red-500 shrink-0" />
                   <h4 className="text-sm font-bold text-slate-700">Depended on Ads</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6">You have to pay to get then back.</p>
              </div>
            </div>
          </div>

          {/* Box 2 - After (Utility Commerce) */}
          <div className="relative rounded-[2rem] border-2 border-[#5c41ff] shadow-2xl overflow-hidden bg-[#F3F0FF] p-8 lg:p-12 flex flex-col">
             {/* Label */}
             <div className="text-center mb-8">
              <span className="inline-block px-4 py-1.5 rounded-md bg-white text-[#5c41ff] text-xs font-bold uppercase tracking-wide shadow-sm">
                AFTER (UTILITY COMMERCE)
              </span>
            </div>

            {/* Image */}
            <div className="relative w-full aspect-[4/3] mb-10">
               <Image
                 src="/images/mm1xac6f-mw7mz66.png" // Updated image from screenshot
                 alt="After: Utility Commerce"
                 fill
                 className="object-contain"
               />
            </div>

             {/* Positive Points */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 mt-auto text-left">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Check className="w-4 h-4 text-[#5c41ff] shrink-0" />
                  <h4 className="text-sm font-bold text-slate-900">Commerce + Daily use Tools</h4>
                </div>
                <p className="text-xs text-slate-600 pl-6">Just a version your website.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <Check className="w-4 h-4 text-[#5c41ff] shrink-0" />
                   <h4 className="text-sm font-bold text-slate-900">Opened Daily</h4>
                </div>
                <p className="text-xs text-slate-600 pl-6">Customers open it to track, analyze, and discover.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <Check className="w-4 h-4 text-[#5c41ff] shrink-0" />
                   <h4 className="text-sm font-bold text-slate-900">Habitual Engagement</h4>
                </div>
                <p className="text-xs text-slate-600 pl-6">Utility features keep users hooked without ads.</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                   <Check className="w-4 h-4 text-[#5c41ff] shrink-0" />
                   <h4 className="text-sm font-bold text-slate-900">Organic Growth</h4>
                </div>
                <p className="text-xs text-slate-600 pl-6">Revenue grows from habitual engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
