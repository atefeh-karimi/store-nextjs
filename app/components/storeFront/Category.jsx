import Image from "next/image";
import Link from "next/link";
import React from "react";

function Category() {
  return (
    <section aria-labelledby="category-heading" className="bg-gray-50">
      <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="category-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Shop by Category
          </h2>
          <Link
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:grid-rows-2 sm:gap-x-6 lg:gap-8">
          <div className="relative overflow-hidden rounded-lg group aspect-h-1 aspect-w-2 sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-featured-category.jpg"
              alt="Two models wearing women's black cotton crewneck tee and off-white cotton crewneck tee."
              width="0"
              height="0"
              sizes="100vh"
              className="object-cover object-center w-full h-full group-hover:opacity-75"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 z-50 opacity-50 bg-gradient-to-b from-transparent to-black"
            />
            <div className="absolute bottom-0 z-50 flex items-end p-6 sm:inset-0 ">
              <div>
                <h3 className="font-semibold text-white">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    New Arrivals
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white ">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group aspect-h-1 aspect-w-2 sm:aspect-none sm:relative sm:h-full">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
              alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters."
              width="0"
              height="0"
              sizes="100vh"
              className="relative object-cover object-center w-full h-full group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 z-50 opacity-50 bg-gradient-to-b from-transparent to-black"
            />
            <div className="absolute bottom-0 z-50 flex items-end p-6 sm:inset-0 ">
              <div>
                <h3 className="font-semibold text-white">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    Accessories
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg group aspect-h-1 aspect-w-2 sm:aspect-none sm:relative sm:h-full">
            <Image
              src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
              alt="Walnut desk organizer set with white modular trays, next to porcelain mug on wooden desk."
              width="0"
              height="0"
              sizes="100vh"
              className="object-cover object-center w-full h-full group-hover:opacity-75 sm:absolute sm:inset-0 sm:h-full sm:w-full"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 z-50 opacity-50 bg-gradient-to-b from-transparent to-black"
            />
            <div className="absolute bottom-0 z-50 flex items-end p-6 sm:inset-0 ">
              <div>
                <h3 className="font-semibold text-white">
                  <Link href="#">
                    <span className="absolute inset-0" />
                    Workspace
                  </Link>
                </h3>
                <p aria-hidden="true" className="mt-1 text-sm text-white">
                  Shop now
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all categories
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Category;
