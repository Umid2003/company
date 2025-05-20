import Link from 'next/link';
import React from 'react';
import { PiArrowCircleLeft } from "react-icons/pi";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 gap-6 bg-gradient-to-b from-black via-[#c103e732] to-black">
      
      <div className="w-[40%] max-lg:w-[50%] max-md:w-[100%] text-center md:text-left space-y-4">
        <h1 className="text-3xl font-bold ">Telegram Bot</h1>
        <p className="">
          Telegram bot — bu foydalanuvchilar bilan avtomatik tarzda muloqot qiladigan maxsus dasturdir.
        </p>
        <h2 className="text-2xl font-semibold ">Afzalliklari:</h2>
        <ul className="list-disc list-inside ">
          <li>24/7 xizmat ko‘rsatadi</li>
          <li>Avtomatik javoblar orqali vaqtni tejaydi</li>
          <li>Turli xizmatlarni avtomatlashtirish imkonini beradi</li>
          <li>Oddiy API orqali yaratish oson</li>
        </ul>
      </div>
      <div className="w-[40%] max-lg:w-[50%] max-md:w-[100%] flex justify-center">
        <img 
          src="/moreImg/telegrambot.png" 
          alt="Telegram bot" 
          className=" h-auto rounded-xl"
        />
      </div>
    <Link href={"/#services"}>
      <PiArrowCircleLeft className="absolute top-36 max-lg:top-24 left-36 max-lg:left-5 text-6xl cursor-pointer hover:text-purple-800 transition-colors duration-300" />
    </Link>
    </div>
  )
}

export default Page;
