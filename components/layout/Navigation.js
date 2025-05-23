'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      {/* GST Info Bar */}
      <div className="bg-blue-800 text-white py-1">
        <div className="container mx-auto px-4 flex justify-end">
          <p className="text-sm font-medium">GSTIN: 24DSBPK8043K1ZM</p>
        </div>
      </div>
      
      {/* Main Navigation */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/images/logo.png" 
              alt="Ocean Construction" 
              width={180} 
              height={50}
              priority
              className="h-auto w-auto max-h-12"
            />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-800 hover:text-blue-700 transition duration-300 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-800 hover:text-blue-700 transition duration-300 font-medium">
              About
            </Link>
            <Link href="/services" className="text-gray-800 hover:text-blue-700 transition duration-300 font-medium">
              Services
            </Link>
            <Link href="/projects" className="text-gray-800 hover:text-blue-700 transition duration-300 font-medium">
              Projects
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-700 transition duration-300 font-medium">
              Contact
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-800 hover:text-blue-700 transition duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-800 hover:text-blue-700 transition duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-800 hover:text-blue-700 transition duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="text-gray-800 hover:text-blue-700 transition duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/projects" 
                className="text-gray-800 hover:text-blue-700 transition duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-800 hover:text-blue-700 transition duration-300 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
