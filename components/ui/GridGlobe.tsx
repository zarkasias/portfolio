"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { dataArcs, globeConfig } from "@/data/globeProps";

const World = dynamic(() => import("./Globe").then((m) => m.World), {
  ssr: false,
});

const GridGlobe = () => {
  return (
    // remove dark:bg-black bg-white h-screen md:h-auto  w-full flex-row py-20
    // change absolute -left-5 top-36, add w-full h-full md:top-40
    <div className="flex items-center justify-center absolute -left-5 top-36 md:top-40 w-full h-full">
      {/* remove h-full md:h-[40rem] */}
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-96 px-4">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        {/* remove -bottom-20 */}
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={dataArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};
export default GridGlobe;
