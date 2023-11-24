"use client";
import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import notFoundAnime from "@/public/notFound.json";
function Page404() {
  return (
    <div className="w-full ">
      <Player
        autoplay
        loop
        src={notFoundAnime}
        style={{ height: "600px", width: "800px" }}
      >
        <Controls buttons={["play", "repeat", "frame", "debug"]} />
      </Player>
    </div>
  );
}

export default Page404;
