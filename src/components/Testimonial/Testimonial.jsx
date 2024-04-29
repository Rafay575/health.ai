// import React from "react";
// import { Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import patientAvatar from "../../assets/images/patient-avatar.png";
// import { HiStar } from "react-icons/hi";

// const Testimonial = () => {
//   return (
//     <div className="mt-[30px] lg:mt-[55px]">
//       <Swiper
//         modules={[Pagination]}
//         spaceBetween={30}
//         slidesPerView={1}
//         pagination={{ clickable: true }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//         }}
//       >
//         <SwiperSlide >
//           <div className="py-[30px] px-5 rounded-3" >
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   Emily Smith
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
//               HealthLink360 has revolutionized the way I approach my health
//               journey. With personalized insights and proactive recommendations,
//               I feel empowered to make informed decisions every day. It's like
//               having a wellness coach in my pocket!
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   James Johnson
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
//               As someone who values preventive care, HealthLink360 has been a
//               game-changer for me. From tracking my nutrition to managing
//               stress, the platform offers comprehensive support tailored to my
//               needs. It's the proactive approach to health I've been searching
//               for.
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   Sarah Brown
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
//               Since joining HealthLink360, I've experienced a noticeable shift
//               in how I engage with my health. The combination of data-driven
//               insights and AI-powered coaching has motivated me to prioritize my
//               well-being like never before. It's a holistic approach that truly
//               works!
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   Michael Davis
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
//               HealthLink360 doesn't just provide information—it empowers action.
//               By offering practical tips and personalized guidance, the platform
//               has helped me take control of my health in ways I never thought
//               possible. It's like having a supportive friend cheering me on
//               every step of the way.
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   Olivia Wilson
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
//               I used to struggle with staying consistent with my health goals,
//               but HealthLink360 changed that. With its user-friendly interface
//               and tailored recommendations, I feel more motivated and
//               accountable. It's the boost I needed to finally prioritize my
//               health.
//             </p>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
//                   Charles Alexander
//                 </h4>
//                 <div className="flex items-center gap-[2px]">
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                   <HiStar className="text-yellowColor w-[18px] h-5" />
//                 </div>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
//               Thanks to HealthLink360, I am more proactive about my health than
//               ever before. It is truly been a game-changer for me.
//             </p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//       {/* text will display under slider */}
//     </div>
//   );
// };

// export default Testimonial;

import React, { useState } from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import { HiStar } from "react-icons/hi";
// import "../../styles/myStyle.css";
const testimonialData = [
    {
        name: "Emily Smith",
        rating: 5,
        text: "HealthLink360 has revolutionized the way I approach my health journey. With personalized insights and proactive recommendations, I feel empowered to make informed decisions every day. It's like having a wellness coach in my pocket!",
    },
    {
        name: "James Johnson",
        rating: 5,
        text: "As someone who values preventive care, HealthLink360 has been a game-changer for me. From tracking my nutrition to managing stress, the platform offers comprehensive support tailored to my needs. It's the proactive approach to health I've been searching for.",
    },
    {
        name: "Sarah Brown",
        rating: 5,
        text: "Since joining HealthLink360, I've experienced a noticeable shift in how I engage with my health. The combination of data-driven insights and AI-powered coaching has motivated me to prioritize my well-being like never before. It's a holistic approach that truly works!",
    },
    {
        name: "Michael Davis",
        rating: 5,
        text: "HealthLink360 doesn't just provide information—it empowers action. By offering practical tips and personalized guidance, the platform has helped me take control of my health in ways I never thought possible. It's like having a supportive friend cheering me on every step of the way.",
    },
    {
        name: "Olivia Wilson",
        rating: 5,
        text: "I used to struggle with staying consistent with my health goals, but HealthLink360 changed that. With its user-friendly interface and tailored recommendations, I feel more motivated and accountable. It's the boost I needed to finally prioritize my health.",
    },
    {
        name: "Charles Alexander",
        rating: 5,
        text: "Thanks to HealthLink360, I am more proactive about my health than ever before. It has truly been a game-changer for me.",
    },
];

const Testimonial = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="mt-[30px] lg:mt-[55px]">
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                }}
            >
                {testimonialData.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="py-[30px] px-5 rounded-3 ">
                            <div className="flex items-center gap-[13px]">
                                <img src={patientAvatar} alt="" />
                                <div>
                                    <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                                        {testimonial.name}
                                    </h4>
                                    <div className="flex items-center gap-[2px]">
                                        {[...Array(testimonial.rating)].map(
                                            (_, index) => (
                                                <HiStar
                                                    key={index}
                                                    className="text-yellowColor w-[18px] h-5"
                                                />
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                            <p className="text-[16px] leading-7 mt-4 text-textColor font-400">
                                {testimonial.text}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* text will display under slider */}
        </div>
    );
};

export default Testimonial;
