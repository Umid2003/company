// "use client";
// import React, { useState } from "react";
// import emailjs from "emailjs-com";
// import { motion } from "framer-motion";
// import { CiLocationOn } from "react-icons/ci";
// import { BsTelephone } from "react-icons/bs";
// import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";

// const Contact: React.FC = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//   })
//   const [mapOpen, setMapOpen] = useState(false)

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     emailjs
//       .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
//       .then((response) => {
//         console.log("Xabar muvaffaqiyatli yuborildi:", response)
//       })
//       .catch((error) => {
//         console.error("Xabar yuborishda xatolik:", error)
//   })
//   }

//   const variants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
//   }

//   return (
//     <div className="bg-gradient-to-b py-20 from-black via-[#c103e732] to-black flex flex-col justify-center items-center pt-20">
//       <h1 className="text-5xl max-md:text-4xl max-sm:text-2xl mb-5 text-white">Biz bilan bog'laning</h1>
//       <motion.div
//         className="w-[100%] gap-5 max-w-5xl p-8 rounded-lg flex justify-center items-center max-md:flex-col text-white"
//         variants={variants}
//         initial="hidden"
//         animate="visible"
//       >
//         <motion.div
//           className="w-[50%] max-md:w-[100%] p-6 flex flex-col items-start space-y-5 max-md:space-y-5"
//           variants={variants}
//         >
//           <div className="flex items-center justify-center">
//             <span onClick={() => setMapOpen(true)} className="border-2 hover:border-purple-900 cursor-pointer p-3 flex items-center justify-center rounded-full"><CiLocationOn /></span>
//             <div className="ml-5">
//               <p className=" mb-1 text-purple-700">Manzil:</p>
//               <p>O'zbekiston, Andijon viloyati</p>
//               <button onClick={() => setMapOpen(true)} className="px-2 p-1 mt-1 rounded-md duration-300 hover:shadow-md hover:shadow-purple-800 border-[1px] border-purple-800">Xaritadan ko'rish</button>
//             </div>
//           </div>
//           <div className="flex items-center justify-center">
//             <span className="border-2 hover:border-purple-900 cursor-pointer p-3 flex items-center justify-center rounded-full">
//               <BsTelephone />
//             </span>
//             <div className="ml-5">
//               <p className=" mb-1 text-purple-700">Telefon:</p>
//               <p>+99894 174 03 30</p>
//               <button className="px-2 p-1 mt-1 rounded-md duration-300 hover:shadow-md hover:shadow-purple-800 border-[1px] border-purple-800"><a href="tel:+998941740330">Telefon qilish</a></button>
//             </div>
//           </div>
//           <div className="flex items-center justify-center">
//             <span className="border-2 hover:border-purple-900 cursor-pointer p-3 flex items-center justify-center rounded-full">
//               <AiOutlineMail />
//             </span>
//             <div className="ml-5">
//               <p className=" mb-1 text-purple-700">Email:</p>
//               <p>@mail.com</p>
//               <button className="px-2 p-1 mt-1 rounded-md duration-300 hover:shadow-md hover:shadow-purple-800 border-[1px] border-purple-800"><a href="mailto:">Emailga xabar yuborish</a></button>
//             </div>
//           </div>
//         </motion.div>

//         <motion.div
//           className="w-[50%] max-md:w-[100%] p-6 shadow-lg rounded-xl border-2 border-white"
//           variants={variants}
//         >
//           <h2 className="text-2xl font-bold text-white mb-4">Xabar yuborish</h2>
//           <form onSubmit={handleSubmit}>
//             <div>
//               <input
//               placeholder="To'liq ism"
//                 type="text"
//                 name="fullName"
//                 onChange={handleChange}
//                 required
//                 className="w-full bg-inherit p-2 border-2 mb-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
//               />
//             </div>
//             <div>
//               <input
//               placeholder="Email"
//                 type="email"
//                 name="email"
//                 onChange={handleChange}
//                 className="w-full bg-inherit p-2 border-2 mb-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
//               />
//             </div>
//             <div>
//               <textarea
//               placeholder="Xabaringizni qoldiring"
//                 name="message"
//                 onChange={handleChange}
//                 required
//                 className="w-full h-40 bg-inherit border-2 mb-2 border-white resize-none p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
//               />
//             </div>
//             <button
//               type="submit"
//               className="mt-4 w-full bg-purple-800 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-purple-900"
//             >
//               Yuborish
//             </button>
//           </form>
//       </motion.div>
//       </motion.div>

//       {mapOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
//           <div className="relative w-[80%] max-w-3xl h-[80%] bg-white rounded-xl p-5">
//             <button
//               className="absolute -top-8 -right-8 text-white text-3xl"
//               onClick={() => setMapOpen(false)}
//             >
//               <AiOutlineClose />
//             </button>
//             <iframe
//               width="100%"
//               height="100%"
//               title="map"
//               className="rounded-xl"
//               src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d188.47218416976295!2d71.84252396086389!3d40.90357654767296!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sus!4v1747202630675!5m2!1sru!2sus"
//             ></iframe>
//         </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Contact;


"use client";
import React, { useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [mapOpen, setMapOpen] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_USER_ID")
      .then((response) => {
        console.log("Xabar muvaffaqiyatli yuborildi:", response);
      })
      .catch((error) => {
        console.error("Xabar yuborishda xatolik:", error);
      });
  };

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="bg-gradient-to-b py-20 from-black via-[#c103e732] to-black flex flex-col justify-center items-center pt-20">
      <h1 className="text-5xl max-md:text-4xl max-sm:text-2xl mb-5 text-white">
        Biz bilan bog'laning
      </h1>
      <motion.div
        className="w-[100%] gap-5 max-w-5xl p-8 rounded-lg flex justify-center items-center max-md:flex-col text-white"
        variants={variants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="w-[50%] max-md:w-[100%] p-6 flex flex-col items-start space-y-5 max-md:space-y-5"
          variants={variants}
        >
          <div className="flex items-center justify-center">
            <span
              onClick={() => setMapOpen(true)}
              className="border-2 hover:border-purple-900 cursor-pointer p-3 flex items-center justify-center rounded-full"
            >
              <CiLocationOn />
            </span>
            <div className="ml-5">
              <p className=" mb-1 text-purple-700">Manzil:</p>
              <p>O'zbekiston, Andijon viloyati</p>
              <button
                onClick={() => setMapOpen(true)}
                className="px-2 p-1 mt-1 rounded-md duration-300 hover:shadow-md hover:shadow-purple-800 border-[1px] border-purple-800"
              >
                Xaritadan ko'rish
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="border-2 hover:border-purple-900 cursor-pointer p-3 flex items-center justify-center rounded-full">
              <BsTelephone />
            </span>
            <div className="ml-5">
              <p className=" mb-1 text-purple-700">Telefon:</p>
              <p>+99894 174 03 30</p>
              <button className="px-2 p-1 mt-1 rounded-md duration-300 hover:shadow-md hover:shadow-purple-800 border-[1px] border-purple-800">
                <a href="tel:+998941740330">Telefon qilish</a>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <span className="border-2 hover:border-purple-900 cursor-pointer p-3 flex items-center justify-center rounded-full">
              <AiOutlineMail />
            </span>
            <div className="ml-5">
              <p className=" mb-1 text-purple-700">Email:</p>
              <p>@mail.com</p>
              <button className="px-2 p-1 mt-1 rounded-md duration-300 hover:shadow-md hover:shadow-purple-800 border-[1px] border-purple-800">
                <a href="mailto:">Emailga xabar yuborish</a>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="w-[50%] max-md:w-[100%] p-6 shadow-lg rounded-xl border-2 border-white"
          variants={variants}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Xabar yuborish</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                placeholder="To'liq ism"
                type="text"
                name="fullName"
                onChange={handleChange}
                required
                className="w-full bg-inherit p-2 border-2 mb-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
            </div>
            <div>
              <input
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                className="w-full bg-inherit p-2 border-2 mb-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
            </div>
            <div>
              <textarea
                placeholder="Xabaringizni qoldiring"
                name="message"
                onChange={handleChange}
                required
                className="w-full h-40 bg-inherit border-2 mb-2 border-white resize-none p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-700"
              />
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-purple-800 text-white font-semibold py-2 rounded-md transition duration-300 hover:bg-purple-900"
            >
              Yuborish
            </button>
          </form>
        </motion.div>
      </motion.div>

      {mapOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative w-[80%] max-w-3xl h-[80%] bg-white rounded-xl p-5">
            <button
              className="absolute -top-8 -right-8 text-white text-3xl"
              onClick={() => setMapOpen(false)}
            >
              <AiOutlineClose />
            </button>
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="rounded-xl"
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d188.47218416976295!2d71.84252396086389!3d40.90357654767296!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sus!4v1747202630675!5m2!1sru!2sus"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
