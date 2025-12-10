import RecentlyAddedCard from "./RecentlyAddedCard"
import data from "../components/data/data.json"
export default function BlogDetails() {
    const prd = data.recentlyadded;
    return (
<section className="flex gap-4 flex-col w-full lg:w-[400px]">
            <div className="relative w-full">
                <input type="text" placeholder="Search" className="w-full pl-10 pr-4 py-2 rounded-md border border-[#E6E6E6] bg-white text-[14px] font-poppins focus:outline-none focus:ring-0"/>
                <img src="/search.png" alt="Search" className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none" />
            </div>




            <div className="flex gap-4 flex-col border-t-1 border-b-1 border-t-[#E6E6E6] border-b-[#E6E6E6] ">
                <h3 className="text-[#1A1A1A] mt-3 font-poppins text-[20px] font-medium leading-[150%]">Top Categories</h3>
                <div className="flex justify-between items-center"><h6 className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Fresh Fruits</h6><p className="text-[#808080] font-poppins text-[14px] font-normal leading-[150%]" >(134)</p></div>
                <div className="flex justify-between items-center"><h6 className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Vegetables</h6><p className="text-[#808080] font-poppins text-[14px] font-normal leading-[150%]" >(134)</p></div>
                <div className="flex justify-between items-center"><h6 className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Cooking</h6><p className="text-[#808080] font-poppins text-[14px] font-normal leading-[150%]" >(134)</p></div>
                <div className="flex justify-between items-center"><h6 className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Snacks</h6><p className="text-[#808080] font-poppins text-[14px] font-normal leading-[150%]" >(134)</p></div>
                <div className="flex justify-between items-center"><h6 className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Beverages</h6><p className="text-[#808080] font-poppins text-[14px] font-normal leading-[150%]" >(134)</p></div>
                <div className="flex justify-between items-center"><h6 className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Beauty & Health</h6><p className="text-[#808080] font-poppins text-[14px] font-normal leading-[150%]" >(134)</p></div>
                <div className="flex mb-3 justify-between items-center"><h6 className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Bread & Bakery</h6><p className="text-[#808080] font-poppins text-[14px] font-normal leading-[150%]" >(134)</p></div>
            </div>


            <div className="flex flex-col gap-4 border-b border-b-[#E6E6E6]">
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



            <div className="flex flex-col border-b-1 gap-4 border-b-[#E6E6E6]">
                <h3 className="text-[#1A1A1A] mt-3 font-poppins text-[20px] font-medium leading-[150%]">Our Gallery</h3>
                <div className="flex flex-wrap gap-2 mb-15">
                    <img src="/blog1.png" alt="" className="rounded-md lg:w-[90px] lg:h-[90px] w-[80px] h-[80px]" />
                    <img src="/blog2.png" alt="" className="rounded-md lg:w-[90px] lg:h-[90px] w-[80px] h-[80px]" />
                    <img src="/blog3.png" alt="" className="rounded-md lg:w-[90px] lg:h-[90px] w-[80px] h-[80px]" />
                    <img src="/blog4.png" alt="" className="rounded-md lg:w-[90px] lg:h-[90px] w-[80px] h-[80px]" />
                    <img src="/blog5.png" alt="" className="rounded-md lg:w-[90px] lg:h-[90px] w-[80px] h-[80px]" />
                    <img src="/blog6.png" alt="" className="rounded-md lg:w-[90px] lg:h-[90px] w-[80px] h-[80px]" />
                    <img src="/blog7.png" alt="" className="rounded-md lg:w-[90px] lg:h-[90px] w-[80px] h-[80px]" />
                    <img src="/blog8.png" alt="" className="rounded-md lg:w-[90px] lg:h-[90px] w-[80px] h-[80px]" />
                </div>
            </div>


            <div className="flex flex-col gap-6">
                <h3 className="text-[#1A1A1A] mt-3 font-poppins text-[20px] font-medium leading-[150%]">Recently Added</h3>
                {prd.map((p) => (
                    <RecentlyAddedCard key={p.id} id={p.id} des={p.des} date={p.date} image={p.image} />
                ))}
            </div>


        </section>
    )
}