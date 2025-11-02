'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CG</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                CareerGuide
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </Link>
            <Link href="/careers" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Career Paths
            </Link>
            <Link href="/assessment" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Assessment
            </Link>
            <Link href="/resources" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Resources
            </Link>
            <Link href="/dashboard" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Dashboard
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/auth/login"
              className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/careers"
              className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md"
            >
              Career Paths
            </Link>
            <Link
              href="/assessment"
              className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md"
            >
              Assessment
            </Link>
            <Link
              href="/resources"
              className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md"
            >
              Resources
            </Link>
            <Link
              href="/dashboard"
              className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md"
            >
              Dashboard
            </Link>
            <Link
              href="/auth/login"
              className="block px-3 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-md"
            >
              Login
            </Link>
            <Link
              href="/auth/register"
              className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-500 text-white rounded-md text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
