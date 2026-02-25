import Image from 'next/image';
import Link from 'next/link';
import { Check } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-white py-20 lg:py-24 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="flex flex-col items-start text-left max-w-xl">
            {/* Shopify Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-50 text-slate-600 text-xs font-bold uppercase mb-8 border border-slate-200 tracking-wider">
               <div className="w-15 h-5 relative">
                 <Image
                   src="/images/mm1xac4c-oc9js3e.svg"
                   alt="Shopify"
                   fill
                   className="object-contain"
                 />
               </div>
               <span className="text-slate-500 font-medium border-l border-slate-300 pl-2 ml-1">EXCLUSIVE APP FOR BRANDS ON SHOPIFY</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.15] mb-6">
              Build a Shopify Mobile App Your Customers Actually Use Every Day
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              MobiVogue is the Shopify mobile app builder that goes beyond a 
              storefront mirror. Add AI skin analysis, routine reminders, and Q-
              Commerce to your app retain existing customers daily and attract 
              new ones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <Link 
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-white bg-primary hover:bg-primary-hover rounded-md transition-all shadow-lg hover:shadow-primary/25 min-w-[180px]"
              >
                Start Your Free Trial
              </Link>
              <Link 
                href="#"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-md transition-all min-w-[160px]"
              >
                <svg className="w-5 h-5 mr-2 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Watch Demo
              </Link>
            </div>

            {/* Checkpoints */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm font-medium text-slate-500">
               <div className="flex items-center gap-2">
                 <Check className="w-4 h-4 text-green-500" />
                 No Credit Card Required
               </div>
               <div className="flex items-center gap-2">
                 <Check className="w-4 h-4 text-green-500" />
                 Live in 24 hours
               </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="relative">
            <div className="relative w-full aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border border-slate-100">
              <Image 
                src="/images/mm1xac6e-klo5727.png" 
                alt="Mobivogue Dashboard Preview"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Trusted By Section (Now on the right, below image) */}
            <div className="mt-8 flex items-center justify-center gap-4 text-sm text-slate-500">
              <div className="flex -space-x-3">
                {[
                  '/images/mm1xac6f-g8i4lgn.png',
                  '/images/mm1xac6f-g35y8ex.png',
                  '/images/mm1xac6f-7q8chy7.png'
                ].map((src, i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
                    <Image
                      src={src}
                      alt={`Trusted Merchant ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
              <p className="text-slate-500">Trusted by <span className="font-semibold text-slate-800">1,000+ Shopify Merchants</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
