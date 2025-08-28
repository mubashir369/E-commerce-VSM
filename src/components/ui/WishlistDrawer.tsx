"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { X, Trash } from "lucide-react";

interface WishlistItem {
  id: number;
  name: string;
  image: string;
  price: number;
}

interface WishlistDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: WishlistItem[];
  onRemove?: (id: number) => void;
  onMoveToCart?: (id: number) => void;
}

export default function WishlistDrawer({
  isOpen,
  onClose,
  items,
  onRemove,
  onMoveToCart,
}: WishlistDrawerProps) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Background overlay */}
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

        {/* Drawer panel */}
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
                        Wishlist
                      </Dialog.Title>
                      <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    {/* Wishlist items */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {items.length === 0 ? (
                        <p className="text-gray-500 text-center">
                          Your wishlist is empty.
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
                            </div>

                            {/* Move to Cart */}
                            {onMoveToCart && (
                              <button
                                onClick={() => onMoveToCart(item.id)}
                                className="text-sm text-blue-600 hover:underline mr-2"
                              >
                                Move to Cart
                              </button>
                            )}

                            {/* Remove */}
                            <button
                              onClick={() => onRemove && onRemove(item.id)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <Trash size={18} />
                            </button>
                          </div>
                        ))
                      )}
                    </div>
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
