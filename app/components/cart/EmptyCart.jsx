"use client";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import emptyCartAnime from "@/public/emptyCart.json";
import Link from "next/link";
function EmptyCart() {
  return (
    <div className="w-full mt-12">
      <Player
        autoplay
        loop
        src={emptyCartAnime}
        style={{ height: "400px", width: "600px" }}
      >
        <Controls buttons={["play", "repeat", "frame", "debug"]} />
      </Player>

      <div className="flex flex-col items-center justify-center w-full gap-5">
        <h1 className="text-5xl">Your Cart is Empty!</h1>
        <Link
          className="px-5 py-2 font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded-md "
          href="/"
        >
          return to shop
        </Link>
      </div>
    </div>
  );
}

export default EmptyCart;
