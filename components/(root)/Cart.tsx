"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useFormSteps } from "@/store/useStore";
import Link from "next/link";



const Cart = () => {
    const { cart, total, isCartOpen, deleteProduct, totalAmount, updateCartQuentity, setIsCartOpen } = useFormSteps();
    // console.log(isCartOpen, cart);

    return (
        <Transition.Root show={isCartOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => {
                setIsCartOpen(false)
            }}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-[#030303]/50 bg-opacity-75 transition-opacity" />
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
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-[#030303] shadow-xl text-white">

                                        <div className=" overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-white">
                                                    My Cart
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={() => setIsCartOpen(false)
                                                        }
                                                    >
                                                        <span className="absolute -inset-0.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon
                                                            className="h-6 w-6 text-white"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        {
                                            cart.length > 0 ? <div className="flex-1 flex flex-col justify-between items-center">
                                                <div className="mt-8">
                                                    <div className="flow-root">
                                                        <ul
                                                            role="list"
                                                            className="-my-6 divide-y divide-gray-200"
                                                        >
                                                            {cart.map((product) => (
                                                                <li key={product.id} className="flex py-6">
                                                                    <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                        <Image
                                                                            src={product.thumbnail}
                                                                            alt={product.title}
                                                                            width={100}
                                                                            height={100}
                                                                            className="h-full w-full object-cover object-center"
                                                                        />
                                                                    </div>

                                                                    <div className="ml-4 flex flex-1 flex-col">
                                                                        <div>
                                                                            <div className="flex flex-col gap-3 items-start justify-between text-base font-medium text-white">
                                                                                <h3>
                                                                                    <Link href={""}>
                                                                                        {product.title}
                                                                                    </Link>
                                                                                </h3>
                                                                                <p className="ml-4">{product.price}</p>
                                                                            </div>

                                                                        </div>
                                                                        <div className="flex flex-1 items-end justify-between text-sm">
                                                                            <div className="flex items-center gap-2 p-2  text-[19px] px-3 justify-between rounded-full border w-[100px]">
                                                                                <p className="cursor-pointer text-bold"
                                                                                    onClick={() => {
                                                                                        updateCartQuentity("decrement", product.id)
                                                                                        totalAmount()
                                                                                    }}
                                                                                >-</p> <h1>{product.quentity}</h1> <p className="cursor-pointer text-bold" onClick={() => {
                                                                                    updateCartQuentity("increment", product.id)
                                                                                    totalAmount()
                                                                                }}>+</p>
                                                                            </div>

                                                                            <div className="flex">
                                                                                <button
                                                                                    type="button"
                                                                                    className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                                    onClick={() => {
                                                                                        deleteProduct(product.id)
                                                                                        totalAmount()
                                                                                    }}
                                                                                >
                                                                                    Remove
                                                                                </button>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>


                                                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                                    <div className="flex justify-between text-base font-medium text-white">
                                                        <p>Subtotal</p>
                                                        <p>${total}</p>
                                                    </div>
                                                    <p className="mt-0.5 text-sm text-white">
                                                        Shipping and taxes calculated at checkout.
                                                    </p>
                                                    <div className="mt-6">
                                                        <a
                                                            href="#"
                                                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                        >
                                                            Checkout
                                                        </a>
                                                    </div>
                                                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                        <p>
                                                            or{" "}
                                                            <button
                                                                type="button"
                                                                className="font-medium text-indigo-600 hover:text-indigo-500"

                                                            >
                                                                Continue Shopping
                                                                <span aria-hidden="true"> &rarr;</span>
                                                            </button>
                                                        </p>
                                                    </div>
                                                </div></div> : <div className="flex flex-1 items-center flex-col justify-center gap-3 mt-[-200px]">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon" className="h-20"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"></path></svg>
                                                <h1 className="text-2xl font-bold capitalize">Your cart is empty.</h1>
                                            </div>
                                        }
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

export default Cart;
