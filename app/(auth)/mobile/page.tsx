import Link from 'next/link';
import React from 'react'
import { PiArrowCircleLeft } from "react-icons/pi";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row max-md:pt-20 items-center justify-center min-h-screen p-6 bg-gradient-to-b from-black via-[#c103e732] to-black">
      <div className="w-[40%] max-lg:w-[50%] max-md:w-[100%] mb-6 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl font-bold mb-4 ">Mobil Dasturlash</h1>
        <p className="text-white text-lg">
          Mobil dasturlash bu Android va iOS qurilmalari uchun ilovalar yaratish jarayonidir.
          Bu sohada asosan <span className="text-blue-700">Flutter</span>, <span className="text-blue-700">React Native</span>, 
          <span className="text-blue-700">Kotlin</span>, va <span className="text-blue-700">Swift</span> texnologiyalari ishlatiladi. <br /><br />
          Mobil dasturlash orqali siz foydalanuvchilar ehtiyojlariga mos, zamonaviy, tez va qulay mobil ilovalarni yaratishingiz mumkin. 
          Ushbu yo‘nalishda ishlash orqali siz real ilovalar yaratib, ularni <span className="text-blue-700">Play Market</span> yoki <span className="text-blue-700">App Store</span> ga joylashingiz mumkin.
        </p>
      </div>

      <div className="w-[40%] max-lg:w-[50%]  flex justify-center">
        <img src="/Imgs/mobile.png" alt="mobile" className="max-w-[100%] h-auto rounded-xl" />
      </div>
       <Link href={"/#services"}>
      <PiArrowCircleLeft className='absolute top-32 max-lg:top-24 left-36 max-lg:left-11 hover:text-purple-800 transition-colors duration-300 text-6xl ' />
       </Link>
    </div>
  )
}

export default Page
