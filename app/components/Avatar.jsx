"use client";
import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Avatar({ user, onLogout }) {
  const fullName = user ? user.first_name + " " + user.last_name : "";

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex items-center justify-center w-full gap-4 lg:px-5 py-1.5 text-sm font-medium text-white sm:px-2 sm:bg-indigo-600 rounded-md sm:shadow-sm focus:outline-none focus:ring-0 focus:ring-offset-0">
          <p className="hidden sm:block ">{fullName}</p>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-28 rtl:right-0 lg:right-0 ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  as="button"
                  onClick={onLogout}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "group gap-2 flex items-center px-4 py-2 text-sm w-full"
                  )}
                >
                  <ArrowRightOnRectangleIcon
                    className="w-5 h-5 text-gray-600 "
                    aria-hidden="true"
                  />
                  <span>Log out</span>
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
