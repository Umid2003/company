import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { FaGitAlt } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import { ImMobile } from "react-icons/im";
import { CiServer } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { FaFlutter } from "react-icons/fa6";
import { BsFiletypeJava } from "react-icons/bs";
import { FaPython } from "react-icons/fa";
import {
  AiOutlineAppstoreAdd,
  AiOutlineAntDesign,
  AiOutlineDatabase,
} from "react-icons/ai";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import Link from "next/link";

export const aboutData = [
  {
    image:
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bizning Missiyamiz",
    description:
      "Bizning missiyamiz — bizneslarni innovatsion va o'sishga qodir texnologik echimlar orqali kuchaytirish.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573164713712-03790a178651?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bizning maqsadimiz",
    description:
      "Bizning maqsadimiz — raqamli transformatsiyani boshqaradigan innovatsion IT echimlarining yetakchi global provayderi bo'lish.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bizning Qadriyatlarimiz",
    description:
      "Biz halollik, hamkorlik, innovatsiya va mijozlarga birinchi o'rinda turishni qadrlaymiz. Bizning qadriyatlarimiz biz qiladigan har bir ishning asosi bo'lib, mijozlarimizga a'lo echimlar taqdim etishga yo'naltiradi.",
  },
];

export const carousel = [
  <FaHtml5 />,
  <FaCss3Alt />,
  <FaNodeJs />,
  <FaReact />,
  <FaSass />,
  <SiRedux />,
  <RiNextjsFill />,
  <RiTailwindCssFill />,
  <FaGitAlt />,
  <FaFigma />,
  <SiTypescript />,
  <FaGithub />,
  <GrGraphQl />,
  <ImMobile />,
  <CiServer />,
  <MdOutlineSecurity />,
  <FaFlutter />,
  <BsFiletypeJava />,
  <FaPython />,
]

export const services = [
  {
    id: 2,
    title: "Websaytlar",
    description: (
      <div className="space-y-2 pl-2 text-sm text-start">
        <p>✔ Landing page marketing va boshqa maqsadlar uchun</p>
        <p>✔ Internet magazinlar + to‘lov tizimlari</p>
        <p>✔ Ta'lim platformalari va to‘lov tizimlari integratsiyasi</p>
        <p>✔ Web dasturlar, CRM, LMS tizimlari</p>
        <button className="mt-3 text-white px-4 py-2 rounded-full hover:bg-none border hover:bg-violet-700 hover:border-none duration-300">
          <Link href="/websites">Batafsil</Link>
        </button>
      </div>
    ),
    icon: <AiOutlineAppstoreAdd size={40} />,
    image: "/imgs/frontend.png",
  },
  {
    id: 4,
    title: "Mobil Dasturlash",
    description: (
      <div className="space-y-2 text-sm text-start">
        <p>✔ iOS va Android uchun mobil ilovalar</p>
        <p>✔ Yuqori tezlikda ishlovchi interfeyslar</p>
        <p>✔ Backend xizmatlari bilan integratsiya</p>
        <p>✔ Interaktiv va zamonaviy dizayn</p>
        <button className="mt-3 text-white px-4 py-2 rounded-full hover:bg-none border hover:bg-violet-700 hover:border-none duration-300">
          <Link href="/mobile">Batafsil</Link>
        </button>
      </div>
    ),
    icon: <HiOutlineDeviceMobile size={40} />,
    image: "/imgs/mobile.png",
  },
  {
    id: 1,
    title: "Grafik Dizayn",
    description: (
      <div className="space-y-2 text-sm text-start">
        <p>✔ UI/UX dizayn xizmatlari</p>
        <p>✔ Veb va mobil ilovalar uchun interfeyslar</p>
        <p>✔ Brending va vizual identifikatsiya</p>
        <p>✔ Figma, Adobe XD, Photoshop</p>
        <button className="mt-3 text-white px-4 py-2 rounded-full hover:bg-none border hover:bg-violet-700 hover:border-none duration-300">
          <Link href="/design">Batafsil</Link>
        </button>
      </div>
    ),
    icon: <AiOutlineAntDesign size={40} />,
    image: "/imgs/uiux.png",
  },
  {
    id: 3,
    title: "Telegram bot",
    description: (
      <div className="space-y-2 text-sm text-start">
        <p>✔ Har qanday murakkablikdagi Telegram botlarni ishlab chiqish</p>
        <p>✔ Dostavka, buyurtma va boshqa biznes loyihalar uchun botlar</p>
        <p>✔ Sayt va boshqa tizimlarni bot bilan uzviy bog‘lash</p>
        <button className="mt-3 text-white px-4 py-2 rounded-full hover:bg-none border hover:bg-violet-700 hover:border-none duration-300">
          <Link href="/telegram">Batafsil</Link>
        </button>
      </div>
    ),
    icon: <AiOutlineDatabase size={40} />,
    image: "/imgs/telegrambot.png",
  },
];
