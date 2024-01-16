import React from "react";
import Image from "next/image";
import Link from "next/link";
import { favorite_products } from "@/public/assets/data";

function Favorites() {
  return (
    <section aria-labelledby="favorites-heading">
      <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
        <div className="sm:flex sm:items-baseline sm:justify-between">
          <h2
            id="favorites-heading"
            className="text-2xl font-bold tracking-tight text-gray-900"
          >
            Our Favorites
          </h2>
          <Link
            href="#"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 mt-6 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 lg:gap-x-8">
          {favorite_products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="w-full overflow-hidden rounded-lg h-96 sm:aspect-h-3 sm:aspect-w-2 group-hover:opacity-75 sm:h-auto">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width="0"
                  height="0"
                  sizes="100vh"
                  className="object-cover object-center w-full h-full "
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                <Link href={product.href}>
                  <span className="absolute inset-0" />
                  {product.name}
                </Link>
              </h3>
              <p className="mt-1 text-sm text-gray-500">{product.price}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="#"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all favorites
            <span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Favorites;
