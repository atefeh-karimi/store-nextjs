"use client";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import { all_products } from "@/public/assets/data";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { Menu, Transition } from "@headlessui/react";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const sortOptions = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];
export default function Stores() {
  const [products, setProducts] = useState(all_products);
  const [activefilter, setActiveFilter] = useState();
  const [querySearch, setQuerySearch] = useState();
  const sortByRating = (a, b) => b.rating - a.rating;
  const sortByReviewCount = (a, b) => b.reviewCount - a.reviewCount;
  const sortByLowToHighPrice = (a, b) => a.price - b.price;
  const sortByHighToLowPrice = (a, b) => b.price - a.price;

  const handleFilterClick = (filterName) => {
    setActiveFilter(filterName);
    const newProducts = [...products];
    let sortedProducts;
    switch (filterName) {
      case "Best Rating":
        sortedProducts = newProducts.sort(sortByRating);
        break;
      case "Most Popular":
        sortedProducts = newProducts.sort(sortByReviewCount);
        break;
      case "Price: Low to High":
        sortedProducts = newProducts.sort(sortByLowToHighPrice);
        break;
      case "Price: High to Low":
        sortedProducts = newProducts.sort(sortByHighToLowPrice);
        break;
      default:
        sortedProducts = newProducts;
    }
    setProducts([...sortedProducts]);
  };
  const handleSearchClick = () => {
    if (querySearch) {
      const searchedProduct = all_products.filter((product) => {
        return product.name.toLowerCase().includes(querySearch.toLowerCase());
      });
      setProducts(searchedProduct);
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      handleSearchClick();
    }
  };

  const handleSearchChange = (e) => {
    setQuerySearch(e.target.value);
    if (e.target.value === "") {
      setProducts(all_products);
    }
  };

  return (
    <div className="max-w-2xl min-h-screen px-4 pt-12 pb-16 mx-auto lg:px-8 sm:px-6 sm:pb-24 sm:pt-16 lg:max-w-7xl ">
      <section className="pt-4 " aria-labelledby="filter-heading">
        <div className="flex items-center justify-between w-full pb-4 border-b border-gray-200">
          <h2 id="filter-heading" className="sr-only">
            Filters
          </h2>
          {/* search input  */}
          <div className="w-2/3">
            <div className="relative flex items-center mt-2">
              <input
                type="text"
                name="search"
                id="search"
                value={querySearch}
                onChange={handleSearchChange}
                onKeyDown={handleEnterKey}
                className="block px-2 w-full rounded-md border-0 py-1.5 pr-14 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
              />
              <button
                onClick={handleSearchClick}
                className="absolute rounded-r-md bg-indigo-500 inset-y-0 text-white px-3 right-0 flex py-1.5 "
              >
                <MagnifyingGlassIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
          {/* sort button */}
          <div className="justify-end ">
            <Menu
              as="div"
              className="relative inline-block mr-3 text-left lg:mr-0"
            >
              <div>
                <Menu.Button className="inline-flex justify-center text-sm font-medium text-gray-700 group hover:text-gray-900">
                  Sort
                  <ChevronDownIcon
                    className="flex-shrink-0 w-5 h-5 ml-1 -mr-1 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
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
                <Menu.Items className="absolute z-10 w-40 mt-6 origin-top-right bg-white rounded-md shadow-2xl lg:mt-2 right-3 lg:right-0 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <button
                            type="button"
                            onClick={() => handleFilterClick(option.name)}
                            className={classNames(
                              option.name === activefilter
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm w-full text-left"
                            )}
                          >
                            {option.name}
                          </button>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </section>
      <section aria-labelledby="products-heading" className="pt-12 sm:pt-16 ">
        <h2 id="products-heading" className="sr-only">
          Products
        </h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <a key={product.id} href={product.href} className="group">
              <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width="0"
                  height="0"
                  sizes="100vh"
                  className="object-cover object-center w-full h-full group-hover:opacity-75"
                />
              </div>
              <div className="flex items-center justify-between mt-4">
                <h3 className="text-sm text-gray-700">{product.name}</h3>

                <p className="text-lg font-medium text-gray-900 ">
                  ${product.price}
                </p>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={classNames(
                        product.rating > rating
                          ? "text-yellow-400"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  {product.reviewCount} reviews
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
