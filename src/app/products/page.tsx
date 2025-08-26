// src/app/products/page.tsx
"use client"

import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import Filters from "../../components/product/Filters"
import rawProducts from "../../data/products.json"
import type { Product } from "../../types/product/product"

const allProducts: Product[] = rawProducts as Product[]

export default function ProductPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(allProducts)
  const [isFilterOpen, setIsFilterOpen] = useState(false) // mobile filter drawer

  const handleFilterChange = (filters: { category?: string; subCategory?: string; price?: [number, number] }) => {
    let result = allProducts;

    if (filters.category) result = result.filter(p => p.category === filters.category);
    if (filters.subCategory) result = result.filter(p => p.subCategory === filters.subCategory);
    if (filters.price) {
      const [min, max] = filters.price;
      result = result.filter(p => p.price >= min && p.price <= max);
    }

    setFilteredProducts(result)
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Filter Sidebar (Desktop) */}
      <aside className="hidden md:block w-64 flex-shrink-0 p-4 border-r border-red-600 
                       fixed top-16 left-0 h-[calc(100vh-4rem)] 
                       overflow-y-auto bg-white z-10">
        <h2 className="text-red-600 font-bold text-xl mb-4">Filters</h2>
        <Filters onFilterChange={handleFilterChange} />
      </aside>

      {/* Products Section */}
<main className="flex-1 p-4 md:ml-64">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {filteredProducts.map(p => (
      <div
        key={p.id}
        className="border border-red-600 p-4 rounded-lg shadow hover:shadow-lg 
                   flex flex-col transition-all bg-white"
      >
        {/* Product Image */}
        <img
          src={p.image}
          alt={p.name}
          className="w-full h-48 object-cover rounded mb-2"
        />

        {/* Product Name */}
        <h3 className="font-bold text-red-600 text-lg text-center">{p.name}</h3>

        {/* Row: Price + Rating */}
        <div className="flex items-center justify-between w-full mt-2">
          {/* MRP + Price */}
          <div className="flex items-center space-x-2">
            {p.mrp && (
              <p className="text-red-500 line-through text-sm">₹{p.mrp}</p>
            )}
            <p className="text-green-600 font-bold text-md">₹{p.price}</p>
          </div>

          {/* Rating */}
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={`text-yellow-500 text-sm ${i < (p.rating || 0) ? "opacity-100" : "opacity-30"}`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Buttons Row */}
        <div className="flex space-x-2 mt-3 w-full">
          <button className="flex-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Buy Now
          </button>
          <button className="flex-1 px-3 py-1 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition">
            Add to Cart
          </button>
        </div>
      </div>
    ))}
  </div>
</main>




      {/* Mobile Filter Button */}
      <button
        className="md:hidden fixed bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full shadow-lg z-20"
        onClick={() => setIsFilterOpen(true)}
      >
        Filter
      </button>

      {/* Mobile Filter Drawer */}
      {isFilterOpen && (
        <div className="fixed inset-0 z-30 flex">
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-40" onClick={() => setIsFilterOpen(false)}></div>

          {/* Drawer */}
          <div className="relative w-64 bg-white h-full shadow-lg p-4">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-red-600"
              onClick={() => setIsFilterOpen(false)}
            >
              <FaTimes size={20} />
            </button>

            <h2 className="text-red-600 font-bold text-xl mb-4">Filters</h2>
            <Filters onFilterChange={handleFilterChange} />
          </div>
        </div>
      )}
    </div>
  )
}
