'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiMenu } from 'react-icons/hi';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinkClasses =
    'relative pb-2 border-b-2 border-transparent hover:border-black transition-all duration-300';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header
      className={`w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'fixed bg-white shadow-md'
          : 'absolute bg-transparent text-white'
      }`}
    >
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 py-4 flex justify-between items-center font-sans">
        <div className="flex items-center space-x-2">
          <Image
            src="/assets/logo-web.png"
            alt="Dolphin Logo"
            width={140}
            height={40}
            priority
          />
        </div>

        {/* Desktop Nav */}
        <nav className= {`hidden md:flex space-x-6 text-[14px] ${
        scrolled
          ? 'text-black ' : 'text-white'
    
      }`}>
          <Link href="/" className={navLinkClasses}>
            Agencies & Brands
          </Link>
          <Link href="/" className={navLinkClasses}>
            Venue Partners
          </Link>
          <Link href="/" className={navLinkClasses}>
            Contact Us
          </Link>
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden w-10 h-10 rounded-full bg-black flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <HiMenu className="text-white text-xl" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 pb-4 transition-all duration-300">
          <nav className="flex flex-col space-y-3 text-black text-[14px]">
            <Link href="/" className={navLinkClasses}>
              Agencies & Brands
            </Link>
            <Link href="/" className={navLinkClasses}>
              Venue Partners
            </Link>
            <Link href="/" className={navLinkClasses}>
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
