'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const footerLinks = [
  {
    title: 'Product',
    links: [
      { name: 'Overview', href: '/' },
      { name: 'Technology', href: '/technology' },
      { name: 'Roadmap', href: '/roadmap' },
      { name: 'Ecosystem', href: '/ecosystem' },
    ],
  },
  {
    title: 'Developers',
    links: [
      { name: 'Documentation', href: '/documentation' },
      { name: 'API Reference', href: '/api' },
      { name: 'GitHub', href: 'https://github.com' },
      { name: 'Discord', href: 'https://discord.gg' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/careers' },
      { name: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              >
                Entanglux
              </motion.span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              Next-generation blockchain technology powered by AI and quantum-resistant cryptography.
            </p>
          </div>

          {/* Navigation */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
                {section.title}
              </h3>
              <ul className="mt-4 space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-base text-gray-500 hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400">
              &copy; {new Date().getFullYear()} Entanglux Blockchain. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-gray-500">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gray-500">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 