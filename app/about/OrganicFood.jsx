"use client";
import data from "../components/data/data.json";
import Surety from "./Surety";
export default function OrganicFood() {
    const services = data.organicFoodServices;
    return (
        <section className="flex flex-col">

            <img src="/blogTop.jpg" alt="Blogs top" className="mb-5 mt-5 h-25 object-cover rotate-180 " />
            <div className="relative bottom-20 text-white ml-5 mr-5 flex gap-1 items-center sm:ml-29 sm:mr-29 ">
                <img src="/home.png" alt="home" className="w-[16px] h-[17px]" />
                <img src="/next.png" alt="next" className="w-[8.1px] h-[8px]" />
                <p className="text-[#00B207] font-poppins text-[16px] font-normal leading-[150%]">About</p>
            </div>

            <Surety/>

            <div className="flex flex-col lg:flex-row items-center gap-5 mb-10 ml-5 mr-5 sm:ml-29 sm:mr-29 mt-10 ">
                <div className="flex flex-col gap-2 sm:gap-5  sm:text-center lg:text-left">
                    <h3 className="text-[#1A1A1A] font-poppins text-[35px] sm:text-[40px] md:text-[45px] font-semibold leading-[120%]">We Delivered, You Enjoy Your Order.</h3>
                    <p className="text-[#666666] font-poppins text-left text-[13px] sm:text-[15px] font-normal leading-[150%]">Ut suscipit egestas suscipit. Sed posuere pellentesque nunc, ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum nunc eget elementum.</p>
                    <div className="flex gap-2 items-center"><img src="/Check.png" alt="Check" className="w-[12.5px] h-[12.5px]" /><p className="text-[#666666] font-poppins text-[14px] font-normal leading-[140%]">Sed in metus pellentesque.</p></div>
                    <div className="flex gap-2 items-center"><img src="/Check.png" alt="Check" className="w-[12.5px] h-[12.5px]" /><p className="text-[#666666] font-poppins text-[14px] font-normal leading-[140%]">Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.</p></div>
                    <div className="flex gap-2 items-center"><img src="/Check.png" alt="Check" className="w-[12.5px] h-[12.5px]" /><p className="text-[#666666] font-poppins text-[14px] font-normal leading-[140%]">Maecenas ut nunc fringilla erat varius.</p></div>
                </div>
                <img src="/aboutimg3.png" alt="About bottom" className="sm:w-[600px] sm:h-[360px] w-auto h-auto mx-auto" />
            </div>
        </section>
    )
}