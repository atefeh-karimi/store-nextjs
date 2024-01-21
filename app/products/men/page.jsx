import Image from "next/image";
import Link from "next/link";
import React from "react";
import { men_products } from "@/public/assets/data";

export default function MenProducts({ params }) {
  return (
    <div className="bg-white ">
      <div className="h-full max-w-2xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 mt-6 gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {men_products.map((product) => (
            <div key={product.id} className="relative group">
              <div className="w-full h-full bg-gray-200 rounded-md aspect-w-1 lg:aspect-none group-hover:opacity-75 ">
                <Image
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  width="0"
                  height="0"
                  sizes="100vh"
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="flex justify-between mt-2">
                <h3 className="">
                  <Link href={`men/${product.name}`}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>

                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
