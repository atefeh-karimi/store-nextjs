import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function List({ products }) {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Shopping Cart
      </h1>
      <form className="mt-12">
        <div>
          <h2 className="sr-only">Items in your shopping cart</h2>
          <ul
            role="list"
            className="border-t border-b border-gray-200 divide-y divide-gray-200"
          >
            {products.map((product, productIdx) => (
              <li key={product.id} className="flex py-6 sm:py-10">
                <div className="flex-shrink-0 w-24 h-24 rounded-lg sm:h-32 sm:w-32">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width="0"
                    height="0"
                    sizes="100vh"
                    priority="true"
                    className="object-cover object-center w-full h-full"
                  />
                </div>

                <div className="relative flex flex-col justify-between flex-1 ml-4 sm:ml-6">
                  <div>
                    <div className="flex justify-between sm:grid sm:grid-cols-2">
                      <div className="pr-6">
                        <h3 className="text-sm">
                          <Link
                            href={product.productUrl}
                            className="font-semibold text-gray-700 hover:text-gray-800"
                          >
                            {product.name}
                          </Link>
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {product.color.name}
                        </p>
                        {product.size ? (
                          <p className="mt-1 text-sm text-gray-500">
                            {product.size.name}
                          </p>
                        ) : null}
                      </div>

                      <p className="text-sm font-medium text-right text-gray-900">
                        {product.price}
                      </p>
                    </div>
                    {/* Quantity */}
                    <div className="flex items-center mt-4 sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block">
                      <label
                        htmlFor={`quantity-${productIdx}`}
                        className="sr-only"
                      >
                        Quantity, {product.name}
                      </label>
                      <select
                        id={`quantity-${productIdx}`}
                        name={`quantity-${productIdx}`}
                        className="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      >
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                      </select>

                      <button
                        type="button"
                        className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
                      >
                        <span>Remove</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Order summary */}
        <div className="mt-10 sm:ml-32 sm:pl-6">
          <div className="px-4 py-6 rounded-lg bg-gray-50 sm:p-6 lg:p-8">
            <h2 className="sr-only">Order summary</h2>

            <div className="flow-root">
              <dl className="-my-4 text-sm divide-y divide-gray-200">
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium text-gray-900">$99.00</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd className="font-medium text-gray-900">$5.00</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-gray-600">Tax</dt>
                  <dd className="font-medium text-gray-900">$8.32</dd>
                </div>
                <div className="flex items-center justify-between py-4">
                  <dt className="text-base font-medium text-gray-900">
                    Order total
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    $112.32
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="w-full px-4 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            >
              Checkout
            </button>
          </div>

          <div className="mt-6 text-sm text-center text-gray-500">
            <p>
              or&nbsp;
              <a
                href="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
