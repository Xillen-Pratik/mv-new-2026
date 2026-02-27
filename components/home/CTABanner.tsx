import Image from 'next/image';
import Link from 'next/link';

/** CTA section: purple background, headline, black CTA button, right-side illustration image. */
export default function CTABanner() {
  return (
    <section className="relative overflow-hidden" style={{ backgroundColor: '#5C41FF' }}>
      <div className="container mx-auto px-4 md:px-6 relative z-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-left text-white max-w-xl">
            <span className="inline-block text-white/90 text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              FAST DEPLOYMENT
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              From Shopify Store to Utility Commerce App in{' '}
              <span className="text-white">24Hours</span>
            </h2>
            <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed">
              Turn your Shopify storefront into a high-performance utility commerce app. Scale your reach, boost retention, and provide a seamless mobile experience—all in just one day.
            </p>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white rounded-lg transition-opacity hover:opacity-95 min-w-[200px]"
              style={{ backgroundColor: '#FFD100' , color: '#000000' }}
            >
              Get My App Now
            </Link>
          </div>

          <div className="relative h-[380px] lg:h-[480px] w-full flex items-center justify-center lg:justify-end">
            <Image
              src="/images/cta-banner.svg"
              alt="MobiVogue app illustration"
              fill
              className="object-contain object-right"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
