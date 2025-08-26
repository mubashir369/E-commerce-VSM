// src/components/Footer.tsx
"use client"

import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Customer Service */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">Customer Service</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-red-500">Track your order</a></li>
            <li><a href="#" className="hover:text-red-500">Returns</a></li>
            <li><a href="#" className="hover:text-red-500">Contact Us</a></li>
            <li><a href="#" className="hover:text-red-500">Return Policy</a></li>
            <li><a href="#" className="hover:text-red-500">Privacy Policy</a></li>
          </ul>
        </div>

        {/* About Kyries Ventures */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">About Kyries Ventures</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">About Us</a></li>
            <li><a href="#" className="hover:text-red-500">Our Showrooms</a></li>
            <li><a href="#" className="hover:text-red-500">Blog</a></li>
            <li><a href="#" className="hover:text-red-500">Career</a></li>
          </ul>
        </div>

        {/* My Account */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">My Account</h2>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">Shopping Bag</a></li>
            <li><a href="#" className="hover:text-red-500">Wishlist</a></li>
            <li><a href="#" className="hover:text-red-500">Order History</a></li>
            <li><a href="#" className="hover:text-red-500">Payment</a></li>
            <li><a href="#" className="hover:text-red-500">Seller Login</a></li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-4">For Support</h2>
          <p className="mb-2"><strong>Email:</strong> kyriesventuresllp@gmail.com</p>
          <p className="mb-2"><strong>Phone:</strong> 9387310066</p>
          <p className="mb-4"><strong>Address:</strong> C.H PLAZA, NEAR MADRASSA, JUBILEE ROAD, PERINTHALMANNA, MALAPPURAM – 679 322</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-red-500"><FaInstagram size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-red-500"><FaLinkedinIn size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-red-500"><FaFacebookF size={22} /></a>
            <a href="#" className="text-gray-400 hover:text-red-500"><FaYoutube size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} Kyries Ventures. All rights reserved.
      </div>
    </footer>
  )
}
