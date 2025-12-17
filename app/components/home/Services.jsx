"use client"
import data from "../data/data"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Services() {
    return (
        <section className="sm:ml-9 sm:mr-9 ml-5 mr-5 mt-10 mb-10">
            <Swiper
                modules={[Navigation, Pagination, Autoplay, Keyboard]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                keyboard={{ enabled: true, onlyInViewport: true }}
                loop={true}
                spaceBetween={20}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
            >
                {data.service.map((s) => (
                    <SwiperSlide key={s.id}>
                        <div className="flex gap-2 items-center">
                            <div className="rounded-full bg-[#999] p-3">
                                <img className="w-[29px] h-[29px]" src={s.img} alt={s.title} />
                            </div>
                            <div className="flex flex-col gap-1">
                                <h2 className="font-poppins text-[17px] font-semibold leading-4">{s.title}</h2> 
                                <p className="font-poppins text-[13px] leading-[14px] font-normal text-[#999]">{s.desc}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}
