import Image from "next/image";
import Link from "next/link";
import React from "react";

function Featured() {
  return (
    <section aria-labelledby="cause-heading">
      <div className="relative px-6 py-32 bg-gray-800 sm:px-12 sm:py-40 lg:px-16">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="https://tailwindui.com/img/ecommerce-images/home-page-03-feature-section-full-width.jpg"
            alt=""
            width="0"
            height="0"
            sizes="100vh"
            className="object-cover object-center w-full h-full "
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 bg-opacity-50"
        />
        <div className="relative flex flex-col items-center max-w-3xl mx-auto text-center">
          <h2
            id="cause-heading"
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Long-term thinking
          </h2>
          <p className="mt-3 text-xl text-white">
            We're committed to responsible, sustainable, and ethical
            manufacturing. Our small-scale approach allows us to focus on
            quality and reduce our impact. We're doing our best to delay the
            inevitable heat-death of the universe.
          </p>
          <Link
            href="#"
            className="block w-full px-8 py-3 mt-8 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-100 sm:w-auto"
          >
            Read our story
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Featured;
