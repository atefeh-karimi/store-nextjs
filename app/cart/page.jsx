"use client";

import { CheckIcon, ClockIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { useCartContext } from "../context";
import Link from "next/link";
import List from "../components/cart/List";
import EmptyCart from "../components/cart/EmptyCart";

export default function Cart() {
  const { handleAddToCart, cartItems } = useCartContext();
  console.log({ cartItems });

  return (
    <div className="bg-white">
      <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:px-8">
        {cartItems.length ? <List products={cartItems} /> : <EmptyCart />}
      </div>
    </div>
  );
}
