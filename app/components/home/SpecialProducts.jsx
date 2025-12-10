"use client";
import SpecialProductsCard from "./SpecialProductsCard";
import data from "../data/data.json";

export default function SpecialProducts() {
    const prd = data.specialproducts;
    return (
        <>
            <section className="mb-15 flex flex-col lg:flex-row justify-between gap-6 ml-5 mr-5 sm:ml-9 sm:mr-9">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {prd.map((item) => (
                        <SpecialProductsCard 
                            key={item.id} 
                            id={item.id} 
                            name={item.name} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))}
                </div>

                <div className="hidden relative w-full lg:w-auto mt-6 lg:mt-0 lg:flex justify-center">
                    <img src="/s10.png" alt="" className="w-[370px]" />

                    <div className="absolute sm:top-10 sm:left-9 flex flex-col items-start sm:items-center sm:text-center gap-1">
                        <p className="text-[#1A1A1A] font-poppins text-[10px] sm:text-[12px] font-medium leading-[100%] tracking-[0.36px] uppercase"> HOT SALE</p>
                        <h3 className="text-[#1A1A1A] font-poppins text-[22px] sm:text-[32px] font-semibold leading-[120%]"> Save 37% on <br />Every Order</h3>

                        <button className="flex items-center justify-center gap-2 bg-green-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-white text-[11px] sm:text-[13px] mt-3 w-[120px] sm:w-[150px]">Shop Now
                            <img src="/arrow.png" className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                    </div>
                </div>

            </section>
        </>
    );
}
