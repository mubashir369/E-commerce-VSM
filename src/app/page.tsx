"use client";

import Products from "@/components/product/Products";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 py-32 text-white bg-cover bg-center"
        style={{ backgroundImage: "url('/carousel-1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        <div className="relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Welcome to <span className="text-yellow-400">Kyries Ventures</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Your trusted marketplace. Shop from our branches across Kerala with
            quality products and faster delivery.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/branches"
              className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
            >
              Choose Branch
            </Link>
            <Link
              href="/products"
              className="bg-white text-red-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section with horizontal scroll */}
      <Products />

      {/* Call to Action Section */}
      <section className="bg-red-700 text-white text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          Start Shopping with Kyries Ventures
        </h2>
        <p className="mb-6">
          Explore our wide range of products from multiple branches and enjoy
          seamless shopping.
        </p>
        <Link
          href="/products"
          className="bg-yellow-400 text-black px-8 py-3 rounded-xl font-semibold hover:bg-yellow-300 transition"
        >
          Shop Now
        </Link>
      </section>
    </main>
  );
}
