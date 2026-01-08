export default function About() {
    return(
        <div className="flex flex-col gap-6 w-full lg:w-[40%]">
                    <div className="relative w-full">
                        <img src="/desVideo.png" alt="" className="w-full h-[200px] md:h-[300px] rounded-md object-cover" />
                        <img src="/Play2.png" alt="" className="w-[50px] h-[50px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between rounded-[6px] border border-[#E6E6E6] bg-white p-3 gap-4">

                        <div className="flex gap-3 items-center w-full sm:w-1/2">
                            <img src="/discount2.png" alt="" className="w-[32px] h-[32px]" />
                            <div className="flex flex-col gap-1">
                                <span className="text-[#1A1A1A] font-poppins text-[14px] font-medium leading-[150%]">64% Discount</span>
                                <span className="text-[#808080] font-poppins text-[13px] font-normal leading-[150%]">Save your 64% money with us</span>
                            </div>
                        </div>

                        <div className="flex gap-3 items-center w-full sm:w-1/2">
                            <img src="/organic.png" alt="" className="w-[32px] h-[32px]" />
                            <div className="flex flex-col gap-1">
                                <span className="text-[#1A1A1A] font-poppins text-[14px] font-medium leading-[150%]">100% Organic</span>
                                <span className="text-[#808080] font-poppins text-[13px] font-normal leading-[150%]">100% organic vegetables</span>
                            </div>
                        </div>

                    </div>
                </div>
    )
}