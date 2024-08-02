"use client";
import React, { Fragment } from 'react';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import cartPlaceholder from "../../../public/assets/images/dummy-image.png";
import { useCart } from '../context/CartContext';
import { CartItem } from '../context/CartContext';
import Link from 'next/link';

interface CartModalProps {
  open: boolean;
  onClose: () => void;
}

const parsePrice = (price: string): number => {
  const cleanedPrice = price.replace(/[^\d.]/g, "");
  const finalPrice = cleanedPrice.replace(/^\./, "");
  return parseFloat(finalPrice);
};

const getItemSubtotal = (item: CartItem): number => {
  const itemPrice = parsePrice(item.variant.pricing[0].displayPrice);
  return itemPrice * item.quantity;
};

const getTotalPrice = (items: CartItem[]): string => {
  return items.reduce((total, item) => {
    return total + getItemSubtotal(item);
  }, 0).toFixed(2);
};

const CartModal: React.FC<CartModalProps> = ({ open, onClose }) => {
  const { state, dispatch } = useCart();

  const handleRemoveItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', id });
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-lg">
                  <div className="flex h-screen flex-col bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Shopping cart</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            onClick={onClose}
                            className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                          </button>
                        </div>
                      </div>
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {state.items.map((item) => {
                              const itemSubtotal = getItemSubtotal(item);
                              return (
                                <li key={item.id} className="flex py-6">
                                  <div className="h-[100px] w-[110px] flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <Image
                                      src={item.product.primaryImage?.URLs?.original || cartPlaceholder}
                                      alt={item.product.title}
                                      className="h-full w-full object-center"
                                      width={100}
                                      height={100}
                                    />
                                  </div>
                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="#">{item.product.title}</a>
                                        </h3>
                                        <p className="ml-4">Rs. {itemSubtotal.toFixed(2)}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">{item.variant.optionTitle}</p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">Qty {item.quantity}</p>
                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-white shadow-xl w-full bg-[#0d6efd] p-1 rounded-md text-xs"
                                          onClick={() => handleRemoveItem(item.id)}
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total Amount</p>
                        <p>Rs. {getTotalPrice(state.items)}</p>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-black px-6 py-3 text-base font-medium text-white shadow-sm"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-black">
                        <p>
                          or{' '}
                          <Link
                            href={'/'}
                            onClick={onClose}
                            className="font-medium text-black"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </Link>
                        </p>
                      </div>
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
};

export default CartModal;
