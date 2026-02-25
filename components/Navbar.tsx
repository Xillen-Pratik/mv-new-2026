import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { name: 'Features', href: '#', hasDropdown: true },
    { name: 'Industries', href: '#', hasDropdown: true },
    { name: 'Pricing', href: '#' },
    { name: 'Integrations', href: '#' },
    { name: 'Case Studies', href: '#' },
    { name: 'Blog', href: '#' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-slate-800 shadow-sm transition-all">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="relative w-32 h-8">
            <Image
              src="/images/mm1xac4b-3tohmyu.svg"
              alt="Mobivogue Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-1"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-6">
           <Link
              href="#"
              className="hidden md:inline-flex text-sm font-semibold text-white hover:text-primary transition-colors"
            >
              Log In
            </Link>

          <Link
            href="#"
            className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-md transition-all shadow-lg hover:shadow-primary/25"
          >
            Start Your Free Trial
          </Link>
          
          {/* Mobile Menu Button (Hamburger) - Simplified for now */}
          <button className="lg:hidden text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
