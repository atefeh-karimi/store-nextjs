"use client";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { Fragment } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Select({
  list,
  name,
  value = "",
  handleSelect,
  className = "",
}) {
  const handleOnChange = (fieldSelected) => {
    handleSelect(fieldSelected.label, name);
  };

  return (
    <div>
      {/* fields select */}
      <div className={` bg-white ${className}`}>
        <Listbox
          value={value.length ? value : list[1]?.label}
          onChange={handleOnChange}
        >
          {({ open }) => (
            <>
              <div className="relative mt-1">
                <Listbox.Button className=" relative  w-full cursor-default rounded-md bg-white py-1.5 pr-3 pl-10 text-right text-gray-900  ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                    <ChevronDownIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="block truncate ">
                    {value.length ? value : list[0].label}
                  </span>
                </Listbox.Button>

                <Transition
                  show={open}
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {list.map((item, Idx) => (
                      <Listbox.Option
                        key={item.label + Idx}
                        className={({ active }) =>
                          classNames(
                            active
                              ? "bg-indigo-700 text-white"
                              : "text-gray-900",
                            "relative cursor-default select-none py-2 pl-3 pr-9"
                          )
                        }
                        value={item}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "block truncate"
                              )}
                            >
                              {item.label}
                            </span>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? "text-white" : "text-indigo-600",
                                  "absolute inset-y-0 right-0 flex items-center pr-4"
                                )}
                              >
                                <CheckIcon
                                  className="w-5 h-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
}
