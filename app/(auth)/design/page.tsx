import Link from 'next/link';
import React from 'react';
import { PiArrowCircleLeft } from "react-icons/pi";

const Page = () => {
  return (
    <div className="flex flex-col max-md:pt-20 md:flex-row items-center justify-center min-h-[600px] p-6 gap-6 bg-gradient-to-b from-black via-[#c103e732] to-black">
      
      <div className="w-[40%] max-lg:w-[40%] max-md:w-[100%] text-center md:text-left">
        <h1 className="text-4xl mb-8 font-bold">Grafik Dizayn</h1>
        <p>
          Grafik dizayn — bu vizual kommunikatsiya san’ati bo‘lib, matn va rasm orqali ma’lumot yetkazish uchun ishlatiladi.
        </p>
        <h2 className="text-2xl font-semibold my-5 ">Afzalliklari:</h2>
        <ul className="list-disc list-inside ">
          <li>Brendni tanitishda yordam beradi</li>
          <li>Professional ko‘rinishga ega bo‘ladi</li>
          <li>Marketing samaradorligini oshiradi</li>
          <li>Ijodiy yondashuvni rivojlantiradi</li>
        </ul>
      </div>

      <div className="w-[40%] max-lg:w-[40%] max-md:w-[80%] flex justify-center">
        <img 
          src="/moreImg/grafic.png" 
          alt="Grafic design" 
          className="max-w-full h-auto rounded-xl"
        />
      </div>
      <Link href={"/#services"}>
            <PiArrowCircleLeft className='absolute top-32 max-lg:top-24 left-36 max-lg:left-11 text-6xl transition-colors duration-300 hover:text-purple-800 ' />
      </Link>
    </div>
  );
};

export default Page;
