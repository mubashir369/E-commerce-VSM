"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, Heart } from "lucide-react";
import AuthModal from "@/components/ui/AuthModal"; 
import CartDrawer from "../ui/CartDrawer";
import WishlistDrawer from "../ui/WishlistDrawer";

export default function Navbar() {
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false); 
  const [isCartOpen, setIsCartOpen] = useState(false); 
  const [showAuthModal, setShowAuthModal] = useState(false);

  // 🔹 Replace with real auth/session logic
  const isLoggedIn = true;
  const user = {
    name: "Mubashir",
    profilePic: "/branch/vsm.jpeg", // keep a default pic in /public
  };

  // Dummy cart data (replace later with real state from context / API)
    const wishlistItems = [
    {
      id: 101,
      name: "Classic Watch",
      price: 150,
      image: "/products/9.jpg",
    },
    {
      id: 102,
      name: "Handbag",
      price: 200,
      image: "/products/11.jpg",
    },
  ];
  const cartItems = [
    {
      id: 6,
      name: "Leather Wallet",
      category: "Men",
      subCategory: "Wallet",
      description: "Premium red leather wallet with multiple compartments.",
      mrp: 60,
      offerPrice: 50,
      price: 50,
      purchasePrice: 40,
      rating: 4.6,
      reviews: 15,
      image: "/products/8.jpg",
      gallery: [
        "/products/8.jpg",
        "/products/11.jpg",
        "/products/12.jpg",
        "/products/13.jpg",
        "/products/14.jpg",
      ],
      sizes: ["One Size"],
      colors: ["Red", "Brown", "Black"],
      customerReviews: [
        {
          user: "Sameer T.",
          rating: 5,
          comment: "Leather quality is great, feels durable.",
        },
        {
          user: "Deepak K.",
          rating: 4,
          comment: "Good wallet, but stitching could be better.",
        },
      ],
      quantity: 1, // ✅ added for cart
    },
    {
      id: 7,
      name: "Designer Earrings",
      category: "Women",
      subCategory: "Earrings",
      description: "Gold-plated designer earrings with red gemstone accents.",
      mrp: 120,
      offerPrice: 90,
      price: 90,
      purchasePrice: 70,
      rating: 4.9,
      reviews: 22,
      image: "/products/6.jpg",
      gallery: [
        "/products/6.jpg",
        "/products/15.jpg",
        "/products/16.jpg",
        "/products/17.jpg",
        "/products/18.jpg",
      ],
      sizes: ["One Size"],
      colors: ["Gold", "Red"],
      customerReviews: [
        {
          user: "Pooja R.",
          rating: 5,
          comment: "Super pretty, perfect for parties!",
        },
        {
          user: "Anjali M.",
          rating: 5,
          comment: "Looks even better than the pictures!",
        },
      ],
      quantity: 2, // ✅ added for cart
    },
    {
      id: 8,
      name: "Silk Tie",
      category: "Men",
      subCategory: "Tie",
      description: "Luxury silk tie in gold and red tones for formal events.",
      mrp: 40,
      offerPrice: 30,
      price: 30,
      purchasePrice: 20,
      rating: 4.3,
      reviews: 8,
      image: "/products/7.jpg",
      gallery: [
        "/products/7.jpg",
        "/products/19.jpg",
        "/products/20.webp",
        "/products/21.webp",
        "/products/kids1.webp",
      ],
      sizes: ["One Size"],
      colors: ["Red", "Gold", "Black"],
      customerReviews: [
        {
          user: "Ramesh S.",
          rating: 4,
          comment: "Good quality tie, very stylish.",
        },
        {
          user: "Karthik P.",
          rating: 5,
          comment: "Loved it! Looks premium with my suit.",
        },
      ],
      quantity: 1, // ✅ added for cart
    },
  ];

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
                  <button
        onClick={() => setIsWishlistOpen(true)}
        className="relative text-white hover:text-yellow-400"
      >
        ❤️
        <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {wishlistItems.length}
        </span>
      </button>

      {/* Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        items={wishlistItems}
      />

                  {/* Cart */}
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative text-white hover:text-yellow-400"
                  >
                    🛒
                    <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItems.reduce(
                        (total, item) => total + (item.quantity || 1),
                        0
                      )}
                    </span>
                  </button>

                  {/* Cart Drawer */}
                  <CartDrawer
                    isOpen={isCartOpen}
                    onClose={() => setIsCartOpen(false)}
                    items={cartItems}
                  />

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
       <div className="md:hidden fixed top-4 right-4 flex gap-4 z-50">
  <div className="md:hidden fixed top-4 right-16 flex gap-4 z-50">
  {isLoggedIn ? (
    <>
      {/* Cart */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative text-white hover:text-yellow-400"
      >
        🛒
        <span className="absolute -top-2 -right-2 bg-yellow-400 text-red-700 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {cartItems.length}
        </span>
      </button>

      {/* Profile */}
      <Link href="/profile">
        <Image
          src={user.profilePic}
          alt={user.name}
          width={32}
          height={32}
          className="rounded-full border border-white"
        />
      </Link>
    </>
  ) : (
    <button
      onClick={() => setShowAuthModal(true)}
      className="px-3 py-1 bg-white text-red-700 rounded-lg font-semibold hover:bg-gray-200"
    >
      Login
    </button>
  )}
</div>
</div>

{/* Mobile Menu Dropdown */}
{isOpen && (
  <div className="md:hidden fixed inset-0 z-50 bg-red-700 bg-opacity-95 backdrop-blur-sm">
    {/* Close Button */}
    <button
      className="absolute top-4 right-4 text-white text-2xl"
      onClick={() => setIsOpen(false)}
    >
      ✕
    </button>

    <div className="flex flex-col p-8 gap-6 mt-10">
      <Link href="/" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
        Home
      </Link>
      <Link href="/branches" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
        Branches
      </Link>
      <Link href="/products" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
        Products
      </Link>
      <Link href="/about" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
        About Us
      </Link>
      <Link href="/contact" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
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
          <Link href="/wishlist" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
            Wishlist
          </Link>
          <Link href="/cart" onClick={() => setIsOpen(false)} className="text-white hover:text-yellow-400">
            Cart
          </Link>
          <Link href="/profile" onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-white hover:text-yellow-400">
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
        <AuthModal
          isOpen={showAuthModal}
          onClose={() => setShowAuthModal(false)}
        />
      )}
    </>
  );
}
