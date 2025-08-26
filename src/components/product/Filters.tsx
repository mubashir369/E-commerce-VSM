// src/app/products/components/Filters.tsx
"use client"

import { useState } from "react";
import { FaStar } from "react-icons/fa";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

type FiltersProps = {
  onFilterChange: (filters: {
    categories?: string[];
    subCategories?: string[];
    price?: [number, number];
    rating?: number;
    sizes?: string[];
    colors?: string[];
  }) => void;
};

export default function Filters({ onFilterChange }: FiltersProps) {
  const [categories, setCategories] = useState<string[]>([]);
  const [subCategories, setSubCategories] = useState<string[]>([]);
  const [price, setPrice] = useState<[number, number]>([0, 10000]);
  const [rating, setRating] = useState<number | undefined>();
  const [sizes, setSizes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);

  const categoryOptions = ["Men", "Women", "Kids", "Home"];
  const subCategoriesMap: Record<string, string[]> = {
    Men: ["Pant", "Shirt", "T-Shirt", "Inners", "Wallet", "Tie", "Watch"],
    Women: ["Saree", "Top", "Churidar", "Lahanga", "Necklace", "Earrings"],
    Kids: ["Pant", "Shirt", "T-Shirt"],
    Home: ["Decor", "Mug"],
  };

  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
  const colorOptions = ["Red", "Gold", "White", "Black", "Brown"];

  const toggleSelection = (
    value: string,
    list: string[],
    setter: (v: string[]) => void
  ) => {
    const newList = list.includes(value)
      ? list.filter((v) => v !== value)
      : [...list, value];
    setter(newList);
    onFilterChange({
      categories,
      subCategories,
      price,
      rating,
      sizes,
      colors,
      [setter === setCategories
        ? "categories"
        : setter === setSubCategories
        ? "subCategories"
        : setter === setSizes
        ? "sizes"
        : "colors"]: newList,
    });
  };

  const handlePriceChange = (min: number, max: number) => {
    const newPrice: [number, number] = [min, max];
    setPrice(newPrice);
    onFilterChange({ categories, subCategories, price: newPrice, rating, sizes, colors });
  };

  const handleRatingChange = (stars: number) => {
    setRating(stars);
    onFilterChange({ categories, subCategories, price, rating: stars, sizes, colors });
  };

  return (
    <div className="space-y-6 text-gray-800">
      {/* Category */}
      <div className="bg-red-50 p-3 rounded-lg shadow-sm">
        <h3 className="font-bold text-red-700 mb-2">Categories</h3>
        <div className="space-y-1">
          {categoryOptions.map((cat) => (
            <label key={cat} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={categories.includes(cat)}
                onChange={() => toggleSelection(cat, categories, setCategories)}
                className="mr-2 accent-red-600"
              />
              {cat}
            </label>
          ))}
        </div>
      </div>

      {/* Sub-Category */}
      {categories.length > 0 && (
        <div className="bg-red-50 p-3 rounded-lg shadow-sm">
          <h3 className="font-bold text-red-700 mb-2">Sub-Categories</h3>
          <div className="space-y-1">
            {categories.flatMap((cat) => subCategoriesMap[cat] || []).map((sub) => (
              <label key={sub} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={subCategories.includes(sub)}
                  onChange={() => toggleSelection(sub, subCategories, setSubCategories)}
                  className="mr-2 accent-red-600"
                />
                {sub}
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Price */}
      <div>
  <h3 className="font-semibold text-red-700 mb-2">Price Range</h3>
  <div className="px-2">
    <Slider
      range
      min={0}
      max={50000}
      step={500}
      value={price}
      onChange={(value: number | number[]) => {
        if (Array.isArray(value)) {
          setPrice([value[0], value[1]]);
          onFilterChange({ categories, subCategories, price: [value[0], value[1]], rating, sizes, colors });
        }
      }}
      trackStyle={[{ backgroundColor: "#FFD700", height: 6 }]}   // Gold color track
      handleStyle={[
        { borderColor: "#B91C1C", backgroundColor: "#B91C1C" },  // Red handles
        { borderColor: "#B91C1C", backgroundColor: "#B91C1C" }
      ]}
      railStyle={{ backgroundColor: "#e5e7eb", height: 6 }}     // Gray background rail
    />
    <div className="flex justify-between mt-2 text-sm text-gray-700">
      <span>₹{price[0]}</span>
      <span>₹{price[1]}</span>
    </div>
  </div>
</div>
       {/* Colors */}
      <div className="bg-red-50 p-3 rounded-lg shadow-sm">
        <h3 className="font-bold text-red-700 mb-2">Colors</h3>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((color) => (
            <div
              key={color}
              className={`w-8 h-8 rounded-full border-2 cursor-pointer flex items-center justify-center ${
                colors.includes(color) ? "ring-2 ring-red-600" : ""
              }`}
              style={{ backgroundColor: color.toLowerCase() }}
              onClick={() => toggleSelection(color, colors, setColors)}
            />
          ))}
        </div>
      </div>

     

      {/* Sizes */}
      <div className="bg-red-50 p-3 rounded-lg shadow-sm">
        <h3 className="font-bold text-red-700 mb-2">Sizes</h3>
        <div className="flex flex-wrap gap-2">
          {sizeOptions.map((size) => (
            <button
              key={size}
              onClick={() => toggleSelection(size, sizes, setSizes)}
              className={`px-3 py-1 border rounded-lg text-sm font-semibold ${
                sizes.includes(size)
                  ? "bg-red-600 text-white border-red-600"
                  : "bg-white border-red-300 text-red-700"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
       {/* Rating */}
      <div className="bg-red-50 p-3 rounded-lg shadow-sm">
        <h3 className="font-bold text-red-700 mb-2">Rating</h3>
        <div className="space-y-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <div
              key={star}
              className={`flex items-center cursor-pointer ${
                rating === star ? "opacity-100" : "opacity-60"
              }`}
              onClick={() => handleRatingChange(star)}
            >
              {Array.from({ length: star }).map((_, i) => (
                <FaStar key={i} className="text-yellow-500 mr-1" />
              ))}
            </div>
          ))}
        </div>
      </div>

     
    </div>
  );
}
