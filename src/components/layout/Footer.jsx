import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const navLinks = [
  { name: 'Advertise', href: '#' },
  { name: 'Venue Partners', href: '#' },
  { name: 'Principal Agents', href: '#' },
  { name: 'Contact', href: '#' },
  { name: 'Blogs', href: '#' },
  { name: 'Terms', href: '#' },
  { name: 'Privacy Policy', href: '#' },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: '#' },
  { icon: <FaInstagram />, href: '#' },
  { icon: <FaLinkedinIn />, href: '#' },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black">
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        <div className="flex flex-col gap-4">
          <div className="w-[150px] relative h-[40px]">
            <Image
              src="/assets/logo-web.png"
              alt="Dolphin Logo"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} className="hover:underline">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex gap-4 mt-2">
            {socialLinks.map((social, index) => (
              <Link key={index} href={social.href} className="text-black hover:text-gray-700 text-xl">
                {social.icon}
              </Link>
            ))}
          </div>

          <div className="text-sm text-gray-700 mt-2">
            <p>© 2025 All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
