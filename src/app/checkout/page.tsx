"use client";

import { useState } from "react";
import rawProducts from "../../data/products.json";
import branches from "@/data/branch.json";

// CartItem interface
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CheckoutPage() {
  const [orderType, setOrderType] = useState<"delivery" | "collect">("delivery");

  // Delivery form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [postalCode, setPostalCode] = useState("");

  // Collect from shop state
  const [branch, setBranch] = useState("");
  const [collectDate, setCollectDate] = useState("");
  const [collectTime, setCollectTime] = useState("");

  // Pick first 3 items from products.json
  const cartItems: CartItem[] = rawProducts.slice(0, 3).map((p) => ({
    id: p.id,
    name: p.name,
    price: p.price,
    quantity: 1,
    image: p.image,
  }));

  const totalPrice =
    cartItems?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;

  const handlePlaceOrder = () => {
    if (orderType === "delivery") {
      console.log("Delivery Order", {
        name,
        email,
        phone,
        address,
        city,
        state,
        postalCode,
        cartItems,
      });
    } else {
      console.log("Collect from Shop Order", {
        name,
        phone,
        branch,
        collectDate,
        collectTime,
        cartItems,
      });
    }
    alert("Order placed successfully!");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-900">Checkout</h1>

      {/* Order Type Selector */}
      <div className="mb-6 flex gap-4">
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            orderType === "delivery"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-900"
          }`}
          onClick={() => setOrderType("delivery")}
        >
          Delivery
        </button>
        <button
          className={`px-4 py-2 rounded-lg font-semibold ${
            orderType === "collect"
              ? "bg-red-600 text-white"
              : "bg-gray-200 text-gray-900"
          }`}
          onClick={() => setOrderType("collect")}
        >
          Collect from Shop
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="bg-white shadow p-6 rounded-lg">
          {orderType === "delivery" ? (
            <>
              <h2 className="text-lg font-semibold mb-4 text-gray-900">
                Shipping Details
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-black placeholder:text-gray-400"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-black placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-black placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-black placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="City"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-black placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="State"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-black placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Postal Code"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-black placeholder:text-gray-400"
                />
              </form>
            </>
          ) : (
            <>
              <h2 className="text-lg font-semibold mb-4 text-gray-900">
                Collect from Shop
              </h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-black placeholder:text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-black placeholder:text-gray-400"
                />

                {/* Branch Selection */}
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full border rounded px-3 py-2 text-black"
                >
                  <option value="">Select Branch</option>
                  {branches.map((b) => (
                    <option key={b.email} value={b.name}>
                      {b.place} - {b.name}
                    </option>
                  ))}
                </select>

                {/* Date & Time in one line */}
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={collectDate}
                    onChange={(e) => setCollectDate(e.target.value)}
                    className="w-1/2 border rounded px-3 py-2 text-black"
                  />
                  <input
                    type="time"
                    value={collectTime}
                    onChange={(e) => setCollectTime(e.target.value)}
                    className="w-1/2 border rounded px-3 py-2 text-black"
                  />
                </div>
              </form>
            </>
          )}
        </div>

        {/* Order Summary */}
        <div className="bg-white shadow p-6 rounded-lg flex flex-col">
          <h2 className="text-lg font-semibold mb-4 text-gray-900">
            Order Summary
          </h2>
          <div className="flex-1 space-y-4 overflow-y-auto max-h-[400px]">
            {(cartItems || []).map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border rounded-lg p-3"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{item.name}</h3>
                  <p className="text-gray-900">₹{item.price}</p>
                  <p className="text-gray-900 text-sm">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-semibold text-gray-900">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
