import data from "../data/data.json"
import TypesCrad from "./TypesCard";
export default function About() {
    const type = data.types;
    return (
        <div className="mt-6 mb-6 ml-5 mr-5 sm:ml-9 sm:mr-9 flex lg:flex-row flex-col justify-between gap-4">
            <div className="flex flex-col gap-0.5">
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
                <div className="border border-[#999] flex items-center w-auto flex w-[314px] h-[56px] py-4 pr-7 pl-5 items-end gap-3">
                    <img className="w-[23px] h-[23px]" src="/plus.png" alt="" />
                    <span className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">View all Category</span>
                </div>
            </div>

            <div className="relative w-full h-full">
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

        </div>
    )
}