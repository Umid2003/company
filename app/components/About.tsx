"use client";
import { aboutData } from "../data";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="bg-gradient-to-b overflow-hidden from-black via-[#c103e732] to-black p-20 max-xl:p-10 max-lg:p-5 opacity-90 flex flex-col items-center justify-center">
      <div className="w-[80%] max-md:w-full flex flex-col items-center justify-center">
        <h1 className="text-5xl mt-20 font-extrabold text-center text-white mb-8">
          Biz Haqimizda
        </h1>
        <section>
          <p className="text-md max-md:text-sm text-gray-300 mb-6 text-center">
            Startum IT kompaniyasi texnologiyalar dunyosida yetakchi bo'lib,
            bizneslarni rivojlantirishga yo'naltirilgan innovatsion va o'sishga
            qodir yechimlar taqdim etishga bag'ishlangan. Biz dasturiy ta'minot
            ishlab chiqish, bulutli echimlar va raqamli transformatsiya
            strategiyalariga ixtisoslashganmiz, kompaniyalarga raqamli dunyoda
            muvaffaqiyatga erishishda yordam beramiz.
          </p>
        </section>
      </div>

      <div className="w-full flex flex-wrap justify-center gap-8 px-4 my-10">
        {aboutData.map((item, index) => {
          const isEven = index % 2 === 1;

          return (
            <motion.div
              key={index}
              className={`relative will-change-transform flex w-full max-w-6xl flex-col md:flex-row ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.4 }}
            >
              <div
                className="w-full md:w-1/2 h-[300px] bg-cover bg-center"
                style={{ backgroundImage: `url(${item.image})` }}
              ></div>
              <div className="w-full md:w-1/2 text-white p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                <p className="text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
