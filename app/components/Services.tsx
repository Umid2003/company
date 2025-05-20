"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { carousel, services } from "../data";

const Services = () => {
  const [activeId, setActiveId] = useState<number | null>(1)

  return (
    <div className="h-[150vh] max-lg:min-h-[170vh] bg-gradient-to-b from-black via-[#c103e732] to-black flex flex-col justify-center items-center max-lg:p-2 opacity-90">
      <Marquee pauseOnHover={true} className="py-14 mt-5 overflow-hidden grid min-h-[15vh] w-[60vw] max-md:w-[100vw]">
        {carousel.map((item, index) => (
          <div className="flex pr-10 flex-col justify-center items-center h-[10vh] mx-5 text-6xl text-white" key={index}>
          {item}
          </div>
        ))}
      </Marquee>

      <div className="h-full flex flex-col items-center pt-24">
        <h1 className="text-white text-center text-5xl max-md:text-4xl max-sm:text-2xl font-bold mb-20">Bizning Xizmatlarimiz</h1>
        <div className="flex gap-4 justify-center items-center max-lg:flex-col max-sm:px-5">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`cursor-pointer opacity-75 transition-all duration-700 p-4 pt-10 max-lg:pt-1 shadow-sm shadow-purple-800 overflow-hidden flex flex-col items-center relative ${
                activeId === service.id
                  ? "w-[500px] h-[400px] max-lg:h-[350px] max-xl:w-[450px] max-lg:w-[700px] max-md:w-[580px] max-sm:w-[400px]"
                  : "w-[250px] h-[400px] max-xl:w-[200px] max-lg:h-[100px] max-lg:w-[700px] max-md:w-[580px] max-sm:w-[400px]"
              }`}
              onMouseEnter={() => setActiveId(service.id)}
              onMouseLeave={() => setActiveId(null)}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              <div className="w-[100%] flex flex-col justify-center items-center">
                <p className="mb-5 hover:animate-spin text-xl">{service.icon}</p>
                <h2 className="text-lg font-semibold text-center">{service.title}</h2>
                {activeId !== service.id && (
                  <img src={service.image} alt={service.title} className="w-[100%] max-lg:hidden mt-3 rounded-md" />
                )}
              </div>
              {activeId === service.id && (
                <motion.div
                  className="mt-10 text-sm text-gray-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  {service.description}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services;







