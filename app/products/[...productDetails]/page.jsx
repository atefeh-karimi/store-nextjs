"use client";
import { notFound, useParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";
import { useCartContext } from "@/app/context";
import { products_details } from "@/public/assets/data";
import { Alert, ConfigProvider, message } from "antd";
import Link from "next/link";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  const [messageApi, contextHolder] = message.useMessage();
  const [isErroModalOpen, setIsErrorModalOpen] = useState(false);
  const getUserInfo = () => {
    if (typeof window !== "undefined") {
      const userString = localStorage.getItem("user");
      if (userString) {
        try {
          const user = JSON.parse(userString);
          return user;
        } catch (error) {
          console.log(error);
        }
      }
      return null;
    }
  };

  const user = getUserInfo();
  const dispalySuccessMsg = () => {
    messageApi.open({
      type: "success",
      content: "Product successfully added to the cart.",
    });
  };

  const { handleAddToCart, cartItems } = useCartContext();
  const params = useParams();
  const router = useRouter();
  const productUrl = usePathname();
  const ProducName = decodeURIComponent(params.productDetails[1]);
  const product = products_details.filter((item) => item.name === ProducName);
  const [selectedColor, setSelectedColor] = useState(product[0]?.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product[0]?.sizes[2]);
  console.log({ product });
  const onAddClick = () => {
    if (!user) {
      setIsErrorModalOpen(true);
    } else {
      handleAddToCart({
        price: product[0]?.price,
        image: product[0]?.images[0].imageSrc,
        name: product[0]?.name,
        color: selectedColor,
        size: selectedSize,
        productUrl: productUrl,
      });
      dispalySuccessMsg();
    }
  };
  return (
    <div className="bg-white">
      {contextHolder}
      <>
        {product.length ? (
          <>
            <div className="mt-2 ">
              {isErroModalOpen ? (
                <ConfigProvider
                  theme={{
                    components: {
                      Alert: {
                        defaultPadding: "4px 6px",
                      },
                    },
                  }}
                >
                  <Alert
                    message="Oops!"
                    showIcon
                    closable
                    description="You need to log in or create an account to add items to your cart."
                    type="error"
                    banner
                  />
                </ConfigProvider>
              ) : (
                ""
              )}
            </div>
            <div className="pt-6 pb-16 sm:pb-24">
              {/* breadcrumb */}
              <nav
                aria-label="Breadcrumb"
                className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
              >
                <ol role="list" className="flex items-center space-x-4">
                  <li>
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          router.back(`products/${params.product}`)
                        }
                        className="mr-4 text-sm font-medium text-gray-900"
                      >
                        {params.productDetails[0]}
                      </button>
                      <svg
                        viewBox="0 0 6 20"
                        aria-hidden="true"
                        className="w-auto h-5 text-gray-300"
                      >
                        <path
                          d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </li>

                  <li className="text-sm">
                    <a
                      href="#"
                      aria-current="page"
                      className="font-medium text-gray-500 hover:text-gray-600"
                    >
                      {ProducName}
                    </a>
                  </li>
                </ol>
              </nav>
              <div className="max-w-2xl px-4 mx-auto mt-8 sm:px-6 lg:max-w-7xl lg:px-8">
                <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                  <div className="lg:col-span-5 lg:col-start-8">
                    <div className="flex justify-between">
                      <h1 className="text-xl font-medium text-gray-900">
                        {ProducName}
                      </h1>
                      <p className="text-xl font-medium text-gray-900">
                        ${product[0]?.price}
                      </p>
                    </div>
                    {/* Reviews */}
                    <div className="mt-4">
                      <h2 className="sr-only">Reviews</h2>
                      <div className="flex items-center">
                        <p className="text-sm text-gray-700">
                          {product[0]?.rating}
                          <span className="sr-only"> out of 5 stars</span>
                        </p>
                        <div className="flex items-center ml-1">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                product[0]?.rating > rating
                                  ? "text-yellow-400"
                                  : "text-gray-200",
                                "h-5 w-5 flex-shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <div
                          aria-hidden="true"
                          className="ml-4 text-sm text-gray-300"
                        >
                          ·
                        </div>
                        <div className="flex ml-4">
                          <a
                            href="#"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            See all {product[0]?.reviewCount} reviews
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Image gallery */}
                  <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                    <h2 className="sr-only">Images</h2>

                    <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 lg:gap-8">
                      {product[0]?.images.map((image) => (
                        <Image
                          key={image.id}
                          width="0"
                          height="0"
                          priority={true}
                          sizes="100vh"
                          src={image.imageSrc}
                          alt={image.imageAlt}
                          className={classNames(
                            image.primary
                              ? "lg:col-span-2 lg:row-span-2 "
                              : "hidden lg:block",
                            "rounded-lg  object-cover w-full h-full"
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 lg:col-span-5">
                    <form>
                      {/* Color picker */}
                      <div>
                        <h2 className="text-sm font-medium text-gray-900">
                          Color
                        </h2>
                        <RadioGroup
                          value={selectedColor}
                          onChange={setSelectedColor}
                          className="mt-2"
                        >
                          <RadioGroup.Label className="sr-only">
                            Choose a color
                          </RadioGroup.Label>
                          <div className="flex items-center space-x-3">
                            {product[0]?.colors.map((color) => (
                              <RadioGroup.Option
                                key={color.name}
                                value={color}
                                className={({ active, checked }) =>
                                  classNames(
                                    color.selectedColor,
                                    active && checked
                                      ? "ring ring-offset-1"
                                      : "",
                                    !active && checked ? "ring-2" : "",
                                    "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"
                                  )
                                }
                              >
                                <RadioGroup.Label as="span" className="sr-only">
                                  {color.name}
                                </RadioGroup.Label>
                                <span
                                  aria-hidden="true"
                                  className={classNames(
                                    color.bgColor,
                                    "h-8 w-8 rounded-full border border-black border-opacity-10"
                                  )}
                                />
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                      {/* Size picker */}
                      <div className="mt-8">
                        <div className="flex items-center justify-between">
                          <h2 className="text-sm font-medium text-gray-900">
                            Size
                          </h2>
                          <a
                            href="#"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            See sizing chart
                          </a>
                        </div>

                        <RadioGroup
                          value={selectedSize}
                          onChange={setSelectedSize}
                          className="mt-2"
                        >
                          <RadioGroup.Label className="sr-only">
                            Choose a size
                          </RadioGroup.Label>
                          <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                            {product[0]?.sizes.map((size) => (
                              <RadioGroup.Option
                                key={size.name}
                                value={size}
                                className={({ active, checked }) =>
                                  classNames(
                                    size.inStock
                                      ? "cursor-pointer focus:outline-none"
                                      : "cursor-not-allowed opacity-25",
                                    active
                                      ? "ring-2 ring-indigo-500 ring-offset-2"
                                      : "",
                                    checked
                                      ? "border-transparent bg-indigo-600 text-white hover:bg-indigo-700"
                                      : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50",
                                    "flex items-center justify-center rounded-md border py-3 px-3 text-sm font-medium uppercase sm:flex-1"
                                  )
                                }
                                disabled={!size.inStock}
                              >
                                <RadioGroup.Label as="span">
                                  {size.name}
                                </RadioGroup.Label>
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                      {/* Add to cart button */}
                      <button
                        type="button"
                        onClick={onAddClick}
                        className="flex items-center justify-center w-full px-8 py-3 mt-8 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md disabled:bg-opacity-90 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Add to cart
                      </button>
                    </form>

                    {/* Product details */}
                    <div className="mt-10">
                      <h2 className="text-sm font-medium text-gray-900">
                        Description
                      </h2>

                      <div
                        className="mt-4 prose-sm prose text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: product[0]?.description,
                        }}
                      />
                    </div>

                    <div className="pt-8 mt-8 border-t border-gray-200">
                      <h2 className="text-sm font-medium text-gray-900">
                        Fabric &amp; Care
                      </h2>

                      <div className="mt-4 prose-sm prose text-gray-500">
                        <ul role="list">
                          {product[0]?.details.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          notFound()
        )}
      </>
    </div>
  );
}
