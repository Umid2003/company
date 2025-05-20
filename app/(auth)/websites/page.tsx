import Link from 'next/link';
import React from 'react';
import { PiArrowCircleLeft } from "react-icons/pi";

const Page = () => {
  return (
    <div className="h-full flex max-lg:flex-col items-center justify-center gap-10 text-white px-6 bg-gradient-to-b py-20 from-black via-[#c103e732] to-black">
      <div className="w-[50%] max-lg:w-[100%]">
        <h1 className="text-4xl font-bold  mb-10">
          Professional Websayt Yaratish
        </h1>
         <p className=" text-lg mb-5">
          Bizning jamoa zamonaviy, tezkor va moslashuvchan websaytlar yaratadi.
          Har bir loyiha uchun <span className="font-semibold text-blue-600">Frontend</span> va
          <span className="font-semibold text-green-600"> Backend</span> qismlarini uyg‘un tarzda ishlab chiqamiz.
        </p>

        <div>
          <h2 className="text-2xl max-lg:text-xl font-semibold text-blue-700 mb-2">Frontend (Foydalanuvchi interfeysi):</h2>
          <ul className="list-disc list-inside space-y-1 max-lg:text-sm">
            <li><strong>HTML, CSS, JavaScript</strong> — Asosiy tuzilma va uslublar</li>
            <li><strong>React.js</strong> — Interaktiv komponentlar va sahifalar</li>
            <li><strong>Tailwind CSS</strong> — Tez va moslashuvchan dizayn yaratish</li>
            <li><strong>Responsive Design</strong> — Telefon, planshet va kompyuterda mos ishlashi</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl max-lg:text-xl font-semibold text-green-700 mt-4 mb-2">Backend (Server tomoni):</h2>
          <ul className="list-disc list-inside space-y-1 max-lg:text-sm">
            <li><strong>Node.js</strong> — Tezkor va samarali server muhiti</li>
            <li><strong>Express.js</strong> — Web API lar yaratish uchun framework</li>
            <li><strong>MongoDB</strong> — Ma’lumotlarni saqlash (NoSQL database)</li>
            <li><strong>REST API</strong> — Frontend bilan ma’lumot almashish</li>
          </ul>
        </div>

      </div>

       <div className="">
        <div className="flex gap-2">
          <img
            src="/moreImg/frontend.png"
            alt="Frontend"
            className="mb-20 max-lg:mb-1 rounded-2xl max-sm:w-[50%]"
          />
          <img
            src="/moreImg/backend.png"
            alt="Backend"
            className="mt-20 max-lg:mt-1 rounded-2xl max-sm:w-[50%]"
          />
        </div>
      </div>
       <Link href={"/#services"}>
     <PiArrowCircleLeft className='absolute hover:text-purple-800 transition-colors duration-300 top-24 right-20 text-6xl ' />
       </Link>
    </div>
  )
}

export default Page;

