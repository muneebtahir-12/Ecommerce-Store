export default function Top() {
    return (
        <section className="flex flex-col">
                <img src="/blogTop.jpg" alt="Blogs top" className="mb-5 mt-5 h-25 object-cover rotate-180 " />
                 <div className="relative bottom-20 text-white ml-5 mr-5 flex gap-1 items-center sm:ml-29 sm:mr-29 ">
                    <img src="/home.png" alt="home" className="w-[16px] h-[17px]" />
                    <img src="/next.png" alt="next" className="w-[8.1px] h-[8px]" />
                    <p className="text-[#00B207] font-poppins text-[16px] font-normal leading-[150%]">Blog</p>
                 </div>
            <div className="flex flex-wrap gap-5 justify-between items-center sm:ml-29 sm:mr-29 ml-5 mr-5">
                <div className="bg-[#00B207] gap-1 w-[100px] rounded-lg flex items-center justify-center p-2"><button className="text-white font-poppins text-[14px] font-semibold leading-[120%]">Filter</button><img src="filter.png" alt="Filter" className="w-[20px] h-[17px]" /></div>
                <div className="flex gap-1 items-center"><p className="text-[#808080] font-poppins text-[14px] font-normal leading-[150%]">Sort By :</p>
                <select name="" id="" className="flex rounded-md border border-[#E6E6E6] bg-white text-[14px] font-poppins focus:outline-none focus:ring-0 items-center p-4  justify-center text-[#808080] font-poppins text-[16px] font-normal leading-[150%] py-[10px] rounded-[4px] border border-[#E6E6E6]">
                    <option value="">Latest</option>
                    <option value="">Opt2</option>
                    <option value="">Opt2</option>
                </select></div>
              <p className="text-[#666666] font-poppins text-[16px] font-normal leading-[150%]"><span className="text-[#1A1A1A] font-poppins text-[16px] font-semibold leading-[120%]">52</span> Results Found</p>
            </div>
        </section>
    )
}