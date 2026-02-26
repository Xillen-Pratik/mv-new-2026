import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Instagram, Facebook } from 'lucide-react';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/** Site footer: logo, tagline, social icons (white), link columns aligned right, copyright bar. */
export default function Footer() {
  const productLinks = [
    { name: 'Features', href: '#' },
    { name: 'Industry', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Case Studies', href: '#' },
  ];
  const resourcesLinks = [
    { name: 'Documentation', href: '#' },
    { name: 'API Reference', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'Help Center', href: '#' },
    { name: 'Blog', href: '#' },
  ];
  const companyLinks = [
    { name: 'About Us', href: '#' },
    { name: 'Partners', href: '#' },
    { name: 'Legal', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <footer
      className="text-slate-400 border-t border-b border-blue-500/20"
      style={{ backgroundColor: '#0F111A' }}
    >
      <div className="container mx-auto px-4 md:px-6 py-14 lg:py-16">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 mb-12">
          <div className="max-w-[280px] shrink-0">
            <Link href="/" className="inline-block mb-4">
              <div className="relative w-32 h-8">
                <Image
                  src="/images/mm1xac4b-3tohmyu.svg"
                  alt="Mobivogue"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-300">
              The #1 no-code mobile app builder for Shopify merchants. Turn your store into a powerful mobile app in minutes.
            </p>
            <div className="flex gap-3">
              <Link href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-900" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-900" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-900" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-slate-900" aria-label="X">
                <Twitter className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:justify-between lg:justify-end gap-[100px] sm:gap-[100px] lg:pl-12 xl:pl-16">
            <div className="sm:min-w-[8rem]">
              <h4 className="font-bold text-white mb-5 text-sm">Product</h4>
              <ul className="space-y-3">
                {productLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:min-w-[8rem]">
              <h4 className="font-bold text-white mb-5 text-sm">Resources</h4>
              <ul className="space-y-3">
                {resourcesLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sm:min-w-[8rem]">
              <h4 className="font-bold text-white mb-5 text-sm">Company</h4>
              <ul className="space-y-3">
                {companyLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 Mobivogue All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
