"use client";

import Image from "next/image";
import branches from "@/data/branch.json";

export default function Branches() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h2 className="text-3xl font-bold text-center text-red-700 mb-12">
        Our Branches
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
        {branches.map((branch, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg border-2 border-gray-300 transition-transform hover:scale-105"
            style={{ maxWidth: "300px" }}
          >
            {branch.logo ? (
              <Image
                src={`${branch.logo}`}
                alt={branch.name}
                width={150}
                height={150}
                className="rounded-xl shadow-md mb-4"
              />
            ) : (
              <Image
                src={`${branch.img}`}
                alt={branch.name}
                width={150}
                height={150}
                className="rounded-xl shadow-md mb-4"
              />
            )}
            {/* Change branch name color and style */}
            <h3 className="text-xl font-semibold mb-2 text-blue-600">{branch.name}</h3>
            <p className="text-gray-600 mb-2 text-center">{branch.place}</p>
            {/* Contact details */}
            <div className="mt-4 text-sm text-gray-800 text-center space-y-2">
              <p><strong>Email:</strong> {branch.email}</p>
              <p><strong>Phone:</strong> {branch.phone}</p>
              <p><strong>Address:</strong> {branch.address}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
