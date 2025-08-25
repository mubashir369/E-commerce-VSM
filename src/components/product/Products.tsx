"use client";

import { useRef } from "react";
import Image from "next/image";
import productsData from "@/data/products.json";

interface Product {
  id: number;
  name: string;
  description: string;
  mrp: number;
  offerPrice: number;
  price: number;
  rating: number; // out of 5
  reviews?: number;
  image: string;
}

export default function Products() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        stars.push(<span key={i} className="text-yellow-400">&#9733;</span>); // filled star
      } else if (i - rating < 1) {
        stars.push(<span key={i} className="text-yellow-400">&#9733;</span>); // partial star (optional)
      } else {
        stars.push(<span key={i} className="text-gray-300">&#9733;</span>); // empty star
      }
    }
    return stars;
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 relative">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-8">
        Featured Products
      </h2>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-red-700 text-white p-3 rounded-full shadow-lg hover:bg-red-600 z-10"
      >
        &#8592;
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-red-700 text-white p-3 rounded-full shadow-lg hover:bg-red-600 z-10"
      >
        &#8594;
      </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 py-4 scrollbar-thin scrollbar-thumb-red-400 scrollbar-track-gray-200"
      >
        {productsData.map((product: Product) => (
          <div
            key={product.id}
            className="flex-shrink-0 w-64 bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition-transform cursor-pointer"
          >
            <Image
              src={product.image}
              alt={product.name}
              width={250}
              height={250}
              className="rounded-xl mb-4"
            />
            <h3 className="text-lg font-semibold text-red-600 mb-1">{product.name}</h3>
            <p className="text-gray-600 mb-2 text-sm">{product.description}</p>

            {/* Rating */}
            <div className="flex items-center mb-2">
              {renderStars(product.rating)}
              {product.reviews && (
                <span className="text-gray-500 text-sm ml-2">({product.reviews})</span>
              )}
            </div>

            {/* Price */}
            <div className="text-center">
              <p className="text-gray-400 line-through">{`$${product.mrp}`}</p>
              <p className="text-yellow-500 font-bold text-lg">{`$${product.offerPrice}`}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
