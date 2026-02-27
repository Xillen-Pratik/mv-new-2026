"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type SubMenuItem = { name: string; href: string };
type SubMenuItemWithChildren = SubMenuItem & { children?: SubMenuItem[] };

const featuresItems: SubMenuItemWithChildren[] = [
  { name: 'Design', href: '#' },
  { name: 'Functionalities', href: '#' },
  { name: 'Push Notifications', href: '#' },
  { name: 'Launch', href: '#' },
  { name: 'Support', href: '#' },
];

const industriesItems: SubMenuItemWithChildren[] = [
  { name: 'Fashion & Apparel', href: '#' },
  {
    name: 'Beauty & Personal Care',
    href: '#',
    children: [{ name: 'Personal Care', href: '#' }],
  },
  { name: 'Electronics', href: '#' },
  { name: 'Toy and Gifts', href: '#' },
  { name: 'Health and Fitness', href: '#' },
  { name: 'Grocery and Quick Order', href: '#' },
  { name: 'Food Order', href: '#' },
  { name: 'Furniture and Home Decor', href: '#' },
];

type NavLink =
  | { name: string; href: string }
  | { name: string; href: string; submenu: SubMenuItemWithChildren[] };

const navLinks: NavLink[] = [
  { name: 'Features', href: '#', submenu: featuresItems },
  { name: 'Industries', href: '#', submenu: industriesItems },
  { name: 'Pricing', href: '#' },
  { name: 'Integrations', href: '#' },
  { name: 'Case Studies', href: '#' },
  { name: 'Blog', href: '#' },
];

function hasSubmenu(link: NavLink): link is NavLink & { submenu: SubMenuItemWithChildren[] } {
  return 'submenu' in link && Array.isArray(link.submenu);
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openNested, setOpenNested] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [mobileNested, setMobileNested] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const closeDropdowns = () => {
    setOpenDropdown(null);
    setOpenNested(null);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        closeDropdowns();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full bg-black border-b border-slate-800 shadow-sm transition-all">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center shrink-0">
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
        <div ref={dropdownRef} className="hidden lg:flex items-center gap-3">
          {navLinks.map((link) => {
            if (hasSubmenu(link)) {
              const isOpen = openDropdown === link.name;
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.name)}
                  onMouseLeave={() => {
                    setOpenDropdown(null);
                    setOpenNested(null);
                  }}
                >
                  <button
                    type="button"
                    className={`text-slate-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-1 py-2 px-2 rounded-md ${
                      isOpen ? 'text-white' : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpenDropdown(isOpen ? null : link.name);
                      setOpenNested(null);
                    }}
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div
                      className="absolute top-full left-0 pt-1 min-w-[220px] transition-opacity duration-200"
                      role="menu"
                    >
                      <div className="bg-slate-900/95 backdrop-blur border border-slate-700 rounded-xl shadow-xl shadow-black/20 py-2">
                        {link.submenu.map((item: SubMenuItemWithChildren) => {
                          const hasNested = item.children?.length;
                          const isNestedOpen = openNested === item.name;
                          return (
                            <div key={item.name} className="relative">
                              {hasNested ? (
                                <>
                                  <div
                                    className="flex items-center justify-between px-4 py-2.5 text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
                                    onMouseEnter={() => setOpenNested(item.name)}
                                  >
                                    <span className="text-sm font-medium">{item.name}</span>
                                    <ChevronRight className="w-4 h-4 shrink-0 ml-2" />
                                  </div>
                                  {isNestedOpen && item.children && (
                                    <div
                                      className="ml-2 mt-0.5 mb-1 border-l border-slate-700 pl-2"
                                      onMouseLeave={() => setOpenNested(null)}
                                    >
                                      {item.children.map((child: SubMenuItem) => (
                                        <Link
                                          key={child.name}
                                          href={child.href}
                                          className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800/80 rounded-lg transition-colors"
                                        >
                                          {child.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  href={item.href}
                                  className="block px-4 py-2.5 text-sm text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
                                  onClick={closeDropdowns}
                                >
                                  {item.name}
                                </Link>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-white text-sm font-medium transition-colors py-2 px-2 rounded-md"
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <Link
            href="#"
            className="text-sm font-semibold text-white hover:text-primary transition-colors"
          >
            Log In
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-md transition-all shadow-lg hover:shadow-primary/25"
          >
            Start Your Free Trial
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden text-white p-2 rounded-md hover:bg-slate-800 transition-colors"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[height] duration-300 ease-out ${
          mobileOpen ? 'max-h-[calc(100vh-5rem)]' : 'max-h-0'
        }`}
      >
        <div className="container mx-auto px-4 py-4 border-t border-slate-800 bg-black overflow-y-auto max-h-[calc(100vh-6rem)]">
          {navLinks.map((link) => {
            if (hasSubmenu(link)) {
              const isAccordionOpen = mobileAccordion === link.name;
              return (
                <div key={link.name} className="border-b border-slate-800 last:border-0">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between py-4 text-left text-slate-300 hover:text-white font-medium transition-colors"
                    onClick={() =>
                      setMobileAccordion((a) => (a === link.name ? null : link.name))
                    }
                  >
                    {link.name}
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isAccordionOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-200 ease-out ${
                      isAccordionOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pt-1 pb-4 pl-4 space-y-1">
                      {link.submenu.map((item: SubMenuItemWithChildren) => {
                        const hasNested = item.children?.length;
                        const isNestedOpen = mobileNested === item.name;
                        if (hasNested) {
                          return (
                            <div key={item.name}>
                              <button
                                type="button"
                                className="w-full flex items-center justify-between py-2.5 pr-2 text-sm text-slate-300 hover:text-white transition-colors"
                                onClick={() =>
                                  setMobileNested((n) => (n === item.name ? null : item.name))
                                }
                              >
                                {item.name}
                                <ChevronRight
                                  className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                                    isNestedOpen ? 'rotate-90' : ''
                                  }`}
                                />
                              </button>
                              <div
                                className={`overflow-hidden transition-all duration-200 ${
                                  isNestedOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}
                              >
                                <div className="pl-5 mt-1 border-l border-slate-800/60">
                                  {item.children?.map((child: SubMenuItem) => (
                                    <Link
                                      key={child.name}
                                      href={child.href}
                                      className="block py-2 pl-3 text-sm text-slate-400 hover:text-white hover:bg-slate-900/60 transition-colors"
                                      onClick={() => setMobileOpen(false)}
                                    >
                                      {child.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        }
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block py-2.5 text-sm text-slate-400 hover:text-white hover:bg-slate-900/60 rounded-md transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={link.name}
                href={link.href}
                className="block py-4 text-slate-300 hover:text-white font-medium transition-colors border-b border-slate-800"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <div className="flex flex-col gap-3 pt-4">
            <Link
              href="#"
              className="text-sm font-semibold text-white hover:text-primary transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              Log In
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-primary hover:bg-primary-hover rounded-md transition-all"
              onClick={() => setMobileOpen(false)}
            >
              Start Your Free Trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
