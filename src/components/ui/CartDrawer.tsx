"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, Trash, Plus, Minus } from "lucide-react";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove?: (id: number) => void;
  onQuantityChange?: (id: number, quantity: number) => void;
}

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemove,
  onQuantityChange,
}: CartDrawerProps) {
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleIncrement = (id: number) => {
    if (!onQuantityChange) return;
    const item = items.find((i) => i.id === id);
    if (item) onQuantityChange(id, item.quantity + 1);
  };

  const handleDecrement = (id: number) => {
    if (!onQuantityChange) return;
    const item = items.find((i) => i.id === id);
    if (item && item.quantity > 1) onQuantityChange(id, item.quantity - 1);
  };

  const handleRemove = (id: number) => {
    if (!onRemove) return;
    onRemove(id);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay with blur */}
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        {/* Cart panel */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-auto bg-white shadow-xl">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b">
                      <Dialog.Title className="text-lg font-semibold text-gray-900">
                        Shopping Cart
                      </Dialog.Title>
                      <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    {/* Cart items */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {items.length === 0 ? (
                        <p className="text-gray-500 text-center">
                          Your cart is empty.
                        </p>
                      ) : (
                        items.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-4 border rounded-lg p-3 relative"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h3 className="font-medium text-gray-900">
                                {item.name}
                              </h3>
                              <p className="text-gray-500">₹{item.price}</p>

                              {/* Quantity controls */}
                              <div className="flex items-center gap-2 mt-2">
                                <button
                                  onClick={() => handleDecrement(item.id)}
                                  className="border rounded p-1 hover:bg-gray-100"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="px-2 text-black font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => handleIncrement(item.id)}
                                  className="border rounded p-1 hover:bg-gray-100"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                            </div>

                            {/* Delete button on the right side */}
                            <button
                              onClick={() => handleRemove(item.id)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 text-red-600 hover:text-red-800"
                            >
                              <Trash size={18} />
                            </button>
                          </div>
                        ))
                      )}
                    </div>

                    {/* Footer */}
                    {items.length > 0 && (
                      <div className="border-t p-4">
                        <div className="flex justify-between font-semibold text-gray-900 mb-4">
                          <span>Total:</span>
                          <span>₹{totalPrice}</span>
                        </div>
                        <Link
                          href="/checkout"
                          onClick={onClose}
                          className="block text-center w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition"
                        >
                          Checkout
                        </Link>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
