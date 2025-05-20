"use client";
import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="">
      <div className="relative h-[90vh] w-full">
        <video
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        >
          <source src="/videos/bgVideo.mp4" type="video/mp4" />
        </video>
        <div className="relative pb-36 z-10 flex items-center justify-center h-full bg-black/40 font-sans">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-white text-6xl max-lg:text-5xl max-md:text-4xl max-sm:text-3xl flex flex-col gap-5 font-mono font-bold text-center"
          >
            <span>
              Startum <span className="text-purple-900">IT</span> Kompaniyasi
            </span>
            <span className="text-4xl max-lg:text-3xl max-md:text-2xl max-sm:text-xl max-sm:px-4">
              Innovatsiyani kuchaytirish, kelajakka yo'l ochish
            </span>
          </motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Home;

