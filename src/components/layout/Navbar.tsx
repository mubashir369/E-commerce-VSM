"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-red-700 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo/logo.png" // place logo in public/logo.png
              alt="Kyries Ventures"
              width={250}  // increased size
              height={60} // increased size
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 items-center">
            <Link href="/" className="text-white hover:text-yellow-400 font-medium">
              Home
            </Link>
            <Link href="/branches" className="text-white hover:text-yellow-400 font-medium">
              Branches
            </Link>
            <Link href="/products" className="text-white hover:text-yellow-400 font-medium">
              Products
            </Link>
            <Link href="/cart" className="text-white hover:text-yellow-400 font-medium">
              Cart
            </Link>
            <Link href="/profile" className="text-white hover:text-yellow-400 font-medium">
              Profile
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-red-700 border-t shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            <Link href="/" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
              Home
            </Link>
            <Link href="/branches" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
              Branches
            </Link>
            <Link href="/products" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
              Products
            </Link>
            <Link href="/cart" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
              Cart
            </Link>
            <Link href="/profile" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
