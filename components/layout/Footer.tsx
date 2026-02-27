import Link from 'next/link';
import Image from 'next/image';

const socialIcons = [
  { name: 'LinkedIn', href: '#', src: '/images/linkedin.svg' },
  { name: 'Facebook', href: '#', src: '/images/facebook.svg' },
  { name: 'Instagram', href: '#', src: '/images/instagram.svg' },
  { name: 'X', href: '#', src: '/images/X.svg' },
];

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
              {socialIcons.map(({ name, href, src }) => (
                <Link key={name} href={href} className="w-9 h-9 rounded-full bg-white flex items-center justify-center overflow-hidden" aria-label={name}>
                  <Image src={src} alt={name} width={30} height={30} className="object-contain" />
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 min-w-0 flex flex-col sm:flex-row sm:justify-between lg:justify-end gap-[32px] sm:gap-[100px] lg:gap-[140px] lg:pl-12 xl:pl-16">
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
