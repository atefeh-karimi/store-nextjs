"use client";
import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BuildingStorefrontIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { navigation } from "@/public/assets/headerNavigation";
import { useCartContext } from "../context";
import Avatar from "./Avatar";
import { Skeleton } from "antd";
export default function Header() {
  const [open, setOpen] = useState(false);
  const { cartItems, onLogout } = useCartContext();

  const getUserInfo = () => {
    if (typeof window !== "undefined") {
      const userString = localStorage.getItem("user");
      if (userString) {
        try {
          const user = JSON.parse(userString);
          return user;
        } catch (error) {
          console.log(error);
        }
      }
      return null;
    }
  };

  const user = getUserInfo();

  const renderAuthBox = () => {
    let result = <Skeleton active />;
    if (user) {
      result = <Avatar user={user} onLogout={onLogout} />;
    } else {
      result = (
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
          <Link
            href="/sign-in"
            className="text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Sign in
          </Link>
          <span className="w-px h-6 bg-gray-200" aria-hidden="true" />
          <Link
            href="/sign-up"
            className="text-sm font-medium text-gray-700 hover:text-gray-800"
          >
            Create account
          </Link>
        </div>
      );
    }
    return result;
  };

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex flex-col w-full max-w-xs pb-12 overflow-y-auto bg-white shadow-xl">
                <div className="flex px-4 pt-5 pb-2">
                  <button
                    type="button"
                    className="relative inline-flex items-center justify-center p-2 -m-2 text-gray-400 rounded-md"
                    onClick={() => setOpen(false)}
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                {/* navigation  in mobile*/}
                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  {navigation.pages.map((page) => (
                    <div key={page.name} className="flow-root">
                      <Link
                        href={page.href}
                        onClick={() => setOpen(false)}
                        className="block p-2 -m-2 font-medium text-gray-900"
                      >
                        {page.name}
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Sign in - create account */}
                <div className="px-4 py-6 space-y-6 border-t border-gray-200">
                  <div className="flow-root">
                    <Link
                      href="/sing-in"
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Sign in
                    </Link>
                  </div>
                  <div className="flow-root">
                    <Link
                      href="sign-up"
                      className="block p-2 -m-2 font-medium text-gray-900"
                    >
                      Create account
                    </Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <header className="relative z-50 bg-white">
        <nav aria-label="Top" className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="border-b border-gray-200">
            <div className="flex items-center h-16">
              <button
                type="button"
                className="relative p-2 text-gray-400 bg-white rounded-md lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="w-6 h-6" aria-hidden="true" />
              </button>

              {/* Logo */}
              <div className="flex ml-4 text-indigo-500 lg:ml-0">
                <Link href="/">
                  <span className="sr-only">store logo</span>
                  <BuildingStorefrontIcon className="w-8 h-8" />
                </Link>
              </div>

              {/*  menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {/* items menu */}
                  {navigation.pages.map((page) => (
                    <Link
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </Link>
                  ))}
                </div>
              </Popover.Group>

              <div className="flex items-center ml-auto">
                {renderAuthBox()}
                {/* Cart */}
                <div className="flow-root ml-4 lg:ml-6">
                  <Link
                    href="/cart"
                    className="flex items-center p-2 -m-2 group"
                  >
                    <ShoppingBagIcon
                      className="relative flex-shrink-0 w-6 h-6 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                    {cartItems.length ? (
                      <span className="absolute z-40 flex items-center justify-center w-4 text-xs font-semibold text-white rounded-full bg-lime-600 top-3 right-6 ">
                        {cartItems.length}
                      </span>
                    ) : (
                      ""
                    )}

                    <span className="sr-only">items in cart, view bag</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
