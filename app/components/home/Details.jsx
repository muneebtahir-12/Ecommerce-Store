export default function Details() {
    return (
        <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:ml-9 sm:mr-9 ml-5 mr-5 mb-6">

            <div className="relative">
                <img className="w-full h-[300px] sm:h-[350px] lg:h-[470px] object-cover"src="/about1.png" alt="About1" />
                <div className="absolute items-center top-10 left-9 sm:left-10 flex flex-col gap-3 text-center">
                    <p className="text-white text-[12px] sm:text-[13px] uppercase">BEST DEALS</p>
                    <h4 className="text-white text-[24px] sm:text-[34px] font-semibold leading-tight">
                        Sale of the Month
                    </h4>

                    <div className="flex gap-2 justify-center">
                        {["Days", "Hours", "Minutes", "Seconds"].map((t, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <p className="text-white text-[18px] sm:text-[21px]">00</p>
                                <span className="text-white/80 text-[10px] uppercase">{t}</span>
                            </div>
                        ))}
                    </div>

                    <button className="flex items-center justify-center gap-2 bg-green-600 px-6 py-3 rounded-full text-white text-[12px] sm:text-[13px] mt-3 w-[150px] ">
                        Shop Now
                        <img src="/arrow.png" className="w-4 h-4" />
                    </button>

                </div>
            </div>

            <div className="relative">
                <img className="w-full h-[300px] sm:h-[350px] lg:h-[470px] object-cover"src="/about2.png" alt="About2" />
                <div className="absolute items-center top-10 left-9 sm:right-10 flex flex-col gap-3.5 text-center">
                    <p className="text-white text-[12px] sm:text-[13px] uppercase">85% FAT FREE</p>
                    <h3 className="text-white text-[24px] sm:text-[34px] font-semibold leading-tight">Low-Fat Meat</h3>
                    <p className="text-white text-[16px] sm:text-[21px]">Started at <span className="text-[#FF8A00]">$79.99</span></p>

                    <button className="flex items-center justify-center gap-2 bg-green-600 px-6 py-3 rounded-full text-white text-[12px] sm:text-[13px] mt-3 w-[150px]">
                        Shop Now
                        <img src="/arrow.png" className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <div className="relative">
                <img className="w-full h-[300px] sm:h-[350px] lg:h-[470px] object-cover"
                    src="/about3.png" alt="About3" />

                <div className="absolute top-10 left-9 items-center sm:right-10 flex flex-col gap-4 text-center">
                    <p className="text-black text-[12px] sm:text-[13px] uppercase">SUMMER SALE</p>
                    <h3 className="text-black text-[24px] sm:text-[34px] font-semibold leading-tight">100% Fresh Fruit</h3>

                    <p className="text-black text-[14px] sm:text-[16px]">
                        Up to <span className="bg-black text-[#FCC900] px-2 py-1 rounded">64% OFF</span>
                    </p>

                    <button className="flex w-[150px] justify-center gap-2 bg-green-600 px-6 py-3 items-center rounded-full text-white text-[12px] sm:text-[13px] mt-3">
                        Shop Now
                        <img src="/arrow.png" className="w-4 h-4" />
                    </button>
                </div>
            </div>

        </div>

    )
}