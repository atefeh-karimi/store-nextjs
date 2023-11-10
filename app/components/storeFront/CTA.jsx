import Image from "next/image";
import Link from "next/link";
import React from "react";

function CTA() {
  return (
    <section aria-labelledby="sale-heading">
      <div className="pt-32 overflow-hidden sm:pt-14">
        <div className="bg-gray-800">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative pt-48 pb-16 sm:pb-24">
              <div>
                <h2
                  id="sale-heading"
                  className="text-4xl font-bold tracking-tight text-white md:text-5xl"
                >
                  Final Stock.
                  <br />
                  Up to 50% off.
                </h2>
                <div className="mt-6 text-base">
                  <Link href="#" className="font-semibold text-white">
                    Shop the sale
                    <span aria-hidden="true"> &rarr;</span>
                  </Link>
                </div>
              </div>

              <div className="absolute transform -translate-x-1/2 -top-32 left-1/2 sm:top-6 sm:translate-x-0">
                <div className="flex ml-24 space-x-6 min-w-max sm:ml-3 lg:space-x-8">
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                        alt=""
                        width="0"
                        height="0"
                        sizes="100vh"
                        className="object-cover object-center w-64 h-64 rounded-lg md:h-72 md:w-72 "
                      />
                    </div>

                    <div className="flex-shrink-0 mt-6 sm:mt-0">
                      <Image
                        className="object-cover w-64 h-64 rounded-lg md:h-72 md:w-72"
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                        alt=""
                        width="0"
                        height="0"
                        sizes="100vh"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6 sm:-mt-20 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        className="object-cover w-64 h-64 rounded-lg md:h-72 md:w-72"
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg"
                        alt=""
                        width="0"
                        height="0"
                        sizes="100vh"
                      />
                    </div>

                    <div className="flex-shrink-0 mt-6 sm:mt-0">
                      <Image
                        className="object-cover w-64 h-64 rounded-lg md:h-72 md:w-72"
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg"
                        alt=""
                        width="0"
                        height="0"
                        sizes="100vh"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-6 sm:flex-col sm:space-x-0 sm:space-y-6 lg:space-y-8">
                    <div className="flex-shrink-0">
                      <Image
                        className="object-cover w-64 h-64 rounded-lg md:h-72 md:w-72"
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg"
                        alt=""
                        width="0"
                        height="0"
                        sizes="100vh"
                      />
                    </div>

                    <div className="flex-shrink-0 mt-6 sm:mt-0">
                      <Image
                        className="object-cover w-64 h-64 rounded-lg md:h-72 md:w-72"
                        src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-02.jpg"
                        alt=""
                        width="0"
                        height="0"
                        sizes="100vh"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
