"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, Heart } from "lucide-react";
import AuthModal from "@/components/ui/AuthModal"; // ✅ adjust path

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // 🔹 Replace with real auth/session logic
  const isLoggedIn = true;
  const user = {
    name: "Mubashir",
    profilePic: "/profile.jpg", // keep a default pic in /public
  };

  return (
    <>
      <nav className="bg-red-700 shadow-md fixed w-full top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo/logo.png"
                alt="Kyries Ventures"
                width={220}
                height={55}
                priority
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 items-center">
              <Link
                href="/"
                className="text-white hover:text-yellow-400 font-medium"
              >
                Home
              </Link>
              <Link
                href="/branches"
                className="text-white hover:text-yellow-400 font-medium"
              >
                Branches
              </Link>
              <Link
                href="/products"
                className="text-white hover:text-yellow-400 font-medium"
              >
                Products
              </Link>
              <Link
                href="/about"
                className="text-white hover:text-yellow-400 font-medium"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="text-white hover:text-yellow-400 font-medium"
              >
                Contact
              </Link>

              {/* Conditional Auth Section */}
              {!isLoggedIn ? (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="px-4 py-2 bg-white text-red-700 rounded-lg font-semibold hover:bg-gray-200"
                >
                  Login
                </button>
              ) : (
                <div className="flex items-center gap-5">
                {/* Wishlist */}
<Link
  href="/wishlist"
  className="relative text-white hover:text-yellow-400"
>
  <Heart size={22} />
  {/* Badge */}
  <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
    3 {/* dynamically replace with wishlist count */}
  </span>
</Link>

{/* Cart */}
<Link
  href="/cart"
  className="relative text-white hover:text-yellow-400"
>
  <ShoppingCart size={22} />
  {/* Badge */}
  <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
    1 {/* dynamically replace with cart count */}
  </span>
</Link>


                  {/* Profile Pic */}
                  <Link href="/profile">
                    <Image
                      src={user.profilePic}
                      alt={user.name}
                      width={38}
                      height={38}
                      className="rounded-full border-2 border-white cursor-pointer"
                    />
                  </Link>
                </div>
              )}
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
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-yellow-400"
              >
                Home
              </Link>
              <Link
                href="/branches"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-yellow-400"
              >
                Branches
              </Link>
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-yellow-400"
              >
                Products
              </Link>
              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-yellow-400"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-yellow-400"
              >
                Contact
              </Link>

              {!isLoggedIn ? (
                <button
                  onClick={() => {
                    setIsOpen(false);
                    setShowAuthModal(true);
                  }}
                  className="text-white hover:text-yellow-400 text-left"
                >
                  Login
                </button>
              ) : (
                <>
                  <Link
                    href="/wishlist"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-yellow-400"
                  >
                    Wishlist
                  </Link>
                  <Link
                    href="/cart"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:text-yellow-400"
                  >
                    Cart
                  </Link>
                  <Link
                    href="/profile"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 text-white hover:text-yellow-400"
                  >
                    <Image
                      src={user.profilePic}
                      alt={user.name}
                      width={32}
                      height={32}
                      className="rounded-full border border-white"
                    />
                    <span>{user.name}</span>
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* 🔹 Auth Modal */}
      {showAuthModal && (
        <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      )}
    </>
  );
}
