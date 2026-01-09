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
                {prod.map((p) => (
                    <Card id={p.id} catName={p.cat[0]} key={p.id} name={p.name} price={p.price} image={p.image} />
                ))}
            </div>
        </section>
    );
}