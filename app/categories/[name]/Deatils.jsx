"use client"
import { useState } from "react";
import data from "../../components/data/data"
import PrdCard from "./SideProductsCard"
export default function Details({ category }) {

    const [selectedCategory, setSelectedCategory] = useState(category?.id || null);
    const handleChange = (id) => {
        setSelectedCategory(id);
    };
    const [minPrice, setMinPrice] = useState(50);
    const [maxPrice, setMaxPrice] = useState(1500);
    const prd = data.prd;
    return (

        <section className="mb-24 w-full lg:w-[350px] ">
            <div className="flex flex-col gap-3">
                {data.types.map((cat) => (
                    <label key={cat.id} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="category" value={cat.id} checked={selectedCategory === cat.id} onChange={() => handleChange(cat.id)} className="accent-[#00B207]" />
                        <span className="flex gap-1">
                            <span className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[21px]"> {cat.name}</span>
                            <span className="text-[#808080] font-poppins text-[14px] font-normal leading-[21px]">({cat.count.trim()})</span>
                        </span>
                    </label>
                ))}
            </div>
            <div>{selectedCategory}</div>
            <div className="flex flex-col gap-2 border-b border-b-[#E6E6E6] py-5">
                <h3 className="text-[#1A1A1A] mb-3 font-poppins text-[20px] font-medium leading-[150%]">Price</h3>
                <input type="range" min={50} max={1500} value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="slider w-full" />
                {/* Price Text */}
                <p className=" font-poppins text-[14px]">
                    Price: <span className="font-medium">{minPrice}</span> —{" "}
                    <span className="font-medium">{maxPrice}</span>
                </p>
            </div>

            <div className="flex flex-col border-b border-b-[#E6E6E6] py-5">
                <h3 className="text-[#1A1A1A] mt-3 mb-3 font-poppins text-[20px] font-medium leading-[150%]">Rating</h3>
                <div className="flex gap-1">
                    <input type="checkbox" name="rating" id="rating" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/whitestar.png" alt="star" className="w-[18px] h-[18px]" />
                    <span className="text-[14px] leading-[150%] font-normal font-poppins">5.0</span>
                </div>
                <div className="flex gap-1">
                    <input type="checkbox" name="rating" id="rating" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/whitestar.png" alt="star" className="w-[18px] h-[18px]" />
                    <span className="text-[14px] leading-[150%] font-normal font-poppins">4.0 & Up</span>
                </div>
                <div className="flex gap-1">
                    <input type="checkbox" name="rating" id="rating" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/whitestar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/whitestar.png" alt="star" className="w-[18px] h-[18px]" />
                    <span className="text-[14px] leading-[150%] font-normal font-poppins">3.0 & Up</span>
                </div>
                <div className="flex gap-1">
                    <input type="checkbox" name="rating" id="rating" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/whitestar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/whitestar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/whitestar.png" alt="star" className="w-[18px] h-[18px]" />
                    <span className="text-[14px] leading-[150%] font-normal font-poppins">2.0 & Up</span>
                </div>
                <div className="flex gap-1">
                    <input type="checkbox" name="rating" id="rating" />
                    <img src="/yellowstar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/whitestar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/whitestar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/whitestar.png" alt="star" className="w-[18px] h-[18px]" />
                    <img src="/whitestar.png" alt="star" className="w-[18px] h-[18px]" />
                    <span className="text-[14px] leading-[150%] font-normal font-poppins">1.0 & Up</span>
                </div>
            </div>

            <div className="flex flex-col gap-4 py-5">
                <h3 className="text-[#1A1A1A] mt-3 font-poppins text-[20px] font-medium leading-[150%]">
                    Popular Tags
                </h3>
                <div className="flex flex-wrap gap-2 mb-10">
                    <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] bg-[#F2F2F2] text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%] hover:bg-[#00B207] hover:text-[white] hover:scale-105 transition-all duration-200">
                        Healthy
                    </button>
                    <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] bg-[#F2F2F2] text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%] hover:bg-[#00B207] hover:text-[white] hover:scale-105 transition-all duration-200">
                        Low Fat
                    </button>
                    <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] bg-[#F2F2F2] text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%] hover:bg-[#00B207] hover:text-[white] hover:scale-105 transition-all duration-200">
                        Vegetarian
                    </button>
                    <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] bg-[#F2F2F2] text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%] hover:bg-[#00B207] hover:text-[white] hover:scale-105 transition-all duration-200">
                        Bread
                    </button>
                    <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] bg-[#F2F2F2] text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%] hover:bg-[#00B207] hover:text-[white] hover:scale-105 transition-all duration-200">
                        Kid Foods
                    </button>
                    <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] bg-[#F2F2F2] text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%] hover:bg-[#00B207] hover:text-[white] hover:scale-105 transition-all duration-200">
                        Vitamins
                    </button>
                    <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] bg-[#F2F2F2] text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%] hover:bg-[#00B207] hover:text-[white] hover:scale-105 transition-all duration-200">
                        Snacks
                    </button>
                    <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] bg-[#F2F2F2] text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%] hover:bg-[#00B207] hover:text-[white] hover:scale-105 transition-all duration-200">
                        Tifflin
                    </button>
                    <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] bg-[#F2F2F2] text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%] hover:bg-[#00B207] hover:text-[white] hover:scale-105 transition-all duration-200">
                        Meat
                    </button>
                    <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] bg-[#F2F2F2] text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%] hover:bg-[#00B207] hover:text-[white] hover:scale-105 transition-all duration-200">
                        Lunch
                    </button>
                    <button className="inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] bg-[#F2F2F2] text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%] hover:bg-[#00B207] hover:text-[white] hover:scale-105 transition-all duration-200">
                        Dinner
                    </button>
                </div>
            </div>

            <img src="/discount.png" alt="" className="py-5" />

            <div className="flex flex-col gap-2">
                {prd.map((item) => (
                    <PrdCard key={item.id} id={item.id} name={item.name} image={item.image} price={item.price} discount={item.discount} />
                ))}
            </div>


        </section>
    );
}
