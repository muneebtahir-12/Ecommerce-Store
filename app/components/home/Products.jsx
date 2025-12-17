"use client"
import data from "../data/data";
import Card from "../../categories/[name]/ProductCard"
export default function Products() {
    const prod = data.details.slice(3,8);
    return (
         <section className="ml-5 mt-6 mt-15 mb-15 mr-5 sm:ml-9 sm:mr-9">
             <div className="flex flex-col mb-5">
                 <p className="text-[#00B207] text-center font-poppins text-sm font-medium leading-none tracking-[0.28px] uppercase">Products</p>
                 <h3 className="text-[#1A1A1A] text-center font-poppins text-4xl font-semibold leading-[120%]">Our Featured Products</h3>
            </div>
            <div className="grid gap-6 lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-4 grid-cols-1 gap-3">
                {/* <div className="relative">
                    <img src="/product.png" alt="Product" className="" />
                    <div className="flex flex-col gap-1 absolute top-7 left-15">
                        <p className="text-[#1A1A1A] text-center font-poppins text-xs font-medium leading-none tracking-[0.36px] uppercase">Summer Sale</p>
                        <h2 className="text-[#00B207] text-center font-poppins text-2xl font-semibold leading-[120%]">75% OFF</h2>
                        <div className="flex gap-1 mt-2 bg-green-600 px-2 py-2 rounded-[43px] w-[90px] h-10 items-center text-center  cursor-pointer">
                            <button className="text-white  font-poppins text-[11px] font-medium">
                                Shop Now
                            </button>
                            <img src="/arrow.png" alt="arrow" className="w-2 h-2" />
                        </div>
                    </div>
                </div> */}
                {prod.map((p) => (
                    <Card id={p.id}  key={p.id} name={p.name} price={p.price} image={p.image} />
                ))}
            </div>
        </section>
    );
}