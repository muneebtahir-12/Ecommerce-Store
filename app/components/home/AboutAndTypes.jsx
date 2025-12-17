"use client"

import data from "../data/data.json"
import TypesCrad from "./TypesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function About() {
  const type = data.types;
  return (

    <div className="mt-6 mb-6 ml-5 mr-5 sm:ml-9 sm:mr-9 flex lg:flex-row flex-col justify-between gap-4">
      <div className="flex flex-col gap-0.5">
        {/* Left column */}
        <div className="flex flex-col border border-[#999]">
          {type.map((item) => (
            <TypesCrad
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
            />
          ))}
        </div>
        <div className="border border-[#999] flex items-center py-4 gap-3 w-full sm:w-auto">
          <img className="w-[23px] h-[23px]" src="/plus.png" alt="" />
          <span className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">View all Category</span>
        </div>
      </div>

      {/* Swiper */}
      <div className="w-full lg:w-[calc(100%-320px)]"> {/* Make it full width on small screens */}
        <Swiper
          modules={[Pagination,Autoplay,Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
            autoplay={{ delay: 7000 }}
          loop={true}
        >
          <SwiperSlide>
            <div className="relative w-full h-full  md:h-150">
              <img className="w-full h-full object-cover" src="/banner.png" alt="Banner" />
              <div className="sm:absolute top-15 left-15 md:top-23 md:left-23  right-30">
                <h4 className="font-poppins md:text-[42px] text-[28px] sm:text-[35px] sm:leading-[52px] font-semibold sm:w-[400px]  sm:text-white">Fresh & Healthy Organic Food</h4>
                <p className="font-poppins md:text-[21px] text-[14px] sm:text-[17px] font-medium tracking-[0.72px] sm:text-white opacity-60 mt-2">Sale Up to <br /> <span className="sm:text-white">48%</span> off</p>
                <div className="flex gap-1 mt-4 bg-green-600 px-6 py-3 rounded-[43px] w-[140px] h-12 items-center justify-center cursor-pointer">
                  <button className="text-white font-poppins text-[14px] font-medium">
                    Shop Now
                  </button>
                  <img src="/arrow.png" alt="arrow" className="w-4 h-4" />
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full md:h-150">
              <img className="w-full h-full object-cover" src="/banner.png" alt="Banner" />
              <div className="sm:absolute top-15 left-15 md:top-23 md:left-23  right-30">
                <h4 className="font-poppins md:text-[42px] text-[28px] sm:text-[35px] sm:leading-[52px] font-semibold sm:w-[400px]  sm:text-white">Fresh & Healthy Organic Food</h4>
                <p className="font-poppins md:text-[21px] text-[14px] sm:text-[17px] font-medium tracking-[0.72px] sm:text-white opacity-60 mt-2">Sale Up to <br /> <span className="sm:text-white">48%</span> off</p>
                <div className="flex gap-1 mt-4 bg-green-600 px-6 py-3 rounded-[43px] w-[140px] h-12 items-center justify-center cursor-pointer">
                  <button className="text-white font-poppins text-[14px] font-medium">
                    Shop Now
                  </button>
                  <img src="/arrow.png" alt="arrow" className="w-4 h-4" />
                </div>

              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full  md:h-150">
              <img className="w-full h-full object-cover" src="/banner.png" alt="Banner" />
              <div className="sm:absolute top-15 left-15 md:top-23 md:left-23  right-30">
                <h4 className="font-poppins md:text-[42px] text-[28px] sm:text-[35px] sm:leading-[52px] font-semibold sm:w-[400px]  sm:text-white">Fresh & Healthy Organic Food</h4>
                <p className="font-poppins md:text-[21px] text-[14px] sm:text-[17px] font-medium tracking-[0.72px] sm:text-white opacity-60 mt-2">Sale Up to <br /> <span className="sm:text-white">48%</span> off</p>
                <div className="flex gap-1 mt-4 bg-green-600 px-6 py-3 rounded-[43px] w-[140px] h-12 items-center justify-center cursor-pointer">
                  <button className="text-white font-poppins text-[14px] font-medium">
                    Shop Now
                  </button>
                  <img src="/arrow.png" alt="arrow" className="w-4 h-4" />
                </div>

              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>

  )
} 