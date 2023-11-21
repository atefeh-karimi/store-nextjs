"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Basic Tees",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
  },
  {
    name: "Accessories",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg",
  },
  {
    name: "Carry",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg",
  },
  {
    name: "New Arrivals",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-01.jpg",
  },
  {
    name: "Productivity",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-02.jpg",
  },
  {
    name: "Workspace",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-04.jpg",
  },
  {
    name: "Accessory",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-05.jpg",
  },
  {
    name: "Sale",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-category-03.jpg",
  },
  {
    name: "New Arrival",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg",
  },
  {
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg",
  },
];
function Trend() {
  return (
    <div className="px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8">
      <div className="sm:flex sm:items-baseline sm:justify-between">
        <h2
          id="trending-heading"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Trending products
        </h2>
        <Link
          href="#"
          className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
        >
          Browse all Trends
          <span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
      <div className="box-content relative py-2 mx-auto mt-8 overflow-x-auto f h-80 xl:overflow-visible">
        <Swiper
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            1440: {
              slidesPerView: 5,
            },
          }}
          slidesPerView={1.5}
          spaceBetween={15}
          freeMode={true}
          grabCursor={true}
          loop={true}
          speed={1200}
          autoplay={{
            delay: 100,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="absolute flex grid-cols-1 px-4 space-x-8 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0"
        >
          {categories.map((category) => (
            <SwiperSlide key={category.name}>
              <a
                href={category.href}
                className="relative flex flex-col w-56 p-6 overflow-hidden rounded-lg h-80 hover:opacity-75 xl:w-auto"
              >
                <span aria-hidden="true" className="absolute inset-0">
                  <Image
                    src={category.imageSrc}
                    alt=""
                    width="0"
                    height="0"
                    sizes="100vh"
                    className="object-cover object-center w-full h-full"
                  />
                </span>
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 opacity-50 h-2/3 bg-gradient-to-t from-gray-800"
                />
                <span className="relative mt-auto text-xl font-bold text-center text-white">
                  {category.name}
                </span>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Trend;
