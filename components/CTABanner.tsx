import Image from 'next/image';
import Link from 'next/link';

export default function CTABanner() {
  return (
    <section className="bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-700 opacity-90 mix-blend-multiply" />
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left text-white max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/30 text-indigo-100 text-xs font-bold tracking-wider uppercase mb-6 border border-indigo-400/50 backdrop-blur-sm">
              Launch in 24 Hours
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              From Shopify Store to Utility Commerce App in 24 Hours
            </h2>
            <p className="text-lg text-indigo-100 mb-8 max-w-lg leading-relaxed">
              Stop leaving money on the table. Join the top 1% of brands that own their customer relationship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-primary bg-white hover:bg-indigo-50 rounded-full transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 min-w-[200px]"
              >
                Get My App Now
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center lg:justify-end">
             {/* Using placeholder image */}
             <div className="relative w-[300px] md:w-[350px] aspect-[9/18] bg-slate-900 rounded-[2.5rem] border-8 border-slate-800 shadow-2xl rotate-6 hover:rotate-0 transition-transform duration-500">
               <Image
                 src="/images/1a32f199-2200-4aa6-826d-cb5bd454f6c2.png" 
                 alt="App Preview"
                 fill
                 className="object-cover rounded-[2rem]"
               />
               
               {/* Floating elements */}
               <div className="absolute -top-12 -right-12 bg-white p-4 rounded-xl shadow-lg animate-bounce-slow delay-75 hidden md:block text-slate-900">
                 <div className="flex items-center gap-2 mb-1">
                   <div className="w-2 h-2 rounded-full bg-green-500" />
                   <span className="text-xs font-bold uppercase text-slate-400">Conversion</span>
                 </div>
                 <p className="text-2xl font-bold">+24%</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
