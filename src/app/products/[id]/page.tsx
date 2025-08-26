// src/app/products/[id]/page.tsx
"use client"

import { useParams } from "next/navigation"
import rawProducts from "../../../data/products.json"
import type { Product } from "../../../types/product/product"
import { useState } from "react"
import { FaHeart } from "react-icons/fa"

const allProducts: Product[] = rawProducts as Product[]

export default function ProductDetailsPage() {
  const { id } = useParams()
  const product = allProducts.find(p => String(p.id) === String(id))

  // Use real gallery from product data
  const gallery = product?.gallery && product.gallery.length > 0
    ? product.gallery
    : [product?.image] // fallback if no gallery
  const [selectedImage, setSelectedImage] = useState(gallery[0])

  // States
  const [isFavorite, setIsFavorite] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  if (!product) {
    return (
      <div className="p-6 text-center text-red-600 font-semibold">
        Product not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 flex flex-col md:flex-row gap-8">
      {/* Left: Image Gallery */}
      <div className="flex-1 flex flex-col items-center">
        {/* Main Image with Fav Button */}
        <div className="w-full max-w-xl relative">
          <img
            src={selectedImage || product.image}
            alt={product.name}
            className="w-full h-[450px] object-contain rounded-lg shadow"
          />

          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow"
          >
            <FaHeart
              className={`text-2xl ${
                isFavorite
                  ? "text-red-600"
                  : "text-red-600 border border-red-600 rounded-full p-[2px]"
              }`}
            />
          </button>
        </div>

        {/* Thumbnails Row */}
        <div className="flex gap-3 mt-4 flex-wrap justify-center">
          {gallery.map((img, i) => (
            <div
              key={i}
              className={`w-20 h-20 border rounded-lg flex items-center justify-center cursor-pointer 
                          ${
                            selectedImage === img
                              ? "border-red-600"
                              : "border-gray-300"
                          }`}
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img || ""}
                alt={`Thumbnail ${i + 1}`}
                className="w-full h-full object-contain rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Right: Details */}
      <div className="flex-1 space-y-5">
        <h1 className="text-2xl md:text-3xl font-bold text-red-600">
          {product.name}
        </h1>

     {/* Price + Rating Row */}
<div className="flex justify-between items-center">
  <div className="flex flex-col">
    <div className="flex items-center space-x-2">
      {product.mrp && (
        <p className="text-red-500 line-through text-lg">₹{product.mrp}</p>
      )}
      <p className="text-green-600 font-bold text-xl">₹{product.price}</p>
    </div>
    {product.mrp && (
      <p className="text-sm text-gray-700 font-semibold">
        ({Math.round(((product.mrp - product.price) / product.mrp) * 100)}% OFF)
      </p>
    )}
  </div>

  {/* Rating */}
  <div className="flex items-center">
    {Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        className={`text-yellow-500 text-lg ${
          i < Math.round(product.rating || 0) ? "opacity-100" : "opacity-30"
        }`}
      >
        ★
      </span>
    ))}
  </div>
</div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-black">Quantity:</span>
          <div className="flex items-center border rounded">
            <button
              className="px-3 py-1 text-red-600 font-bold text-lg"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >
              -
            </button>
            <span className="px-4">{quantity}</span>
            <button
              className="px-3 py-1 text-red-600 font-bold text-lg"
              onClick={() => setQuantity(q => q + 1)}
            >
              +
            </button>
          </div>
        </div>

        {/* Size Selector */}
        {product.sizes && product.sizes.length > 0 && (
          <div>
            <span className="font-bold text-black">Select Size:</span>
            <div className="flex gap-2 mt-2 flex-wrap">
              {product.sizes.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 border rounded ${
                    selectedSize === size
                      ? "bg-red-600 text-white border-red-600"
                      : "border-gray-400 text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Category + Subcategory */}
        <div className="text-gray-700">
          <p>
            <span className="font-medium text-red-600">Category:</span>{" "}
            {product.category}
          </p>
          <p>
            <span className="font-medium text-red-600">Sub-category:</span>{" "}
            {product.subCategory}
          </p>
        </div>

        {/* Description */}
        <p className="text-gray-700">
          {product.description || "No description available."}
        </p>

        {/* Actions */}
        <div className="flex space-x-4 mt-4">
          <button className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">
            Buy Now
          </button>
          <button className="flex-1 px-4 py-2 border border-red-600 text-red-600 rounded hover:bg-red-600 hover:text-white transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
