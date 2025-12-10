export default function ReviewsCard({id,name,image,review}){
    return(
        <>
            <div className="lg:p-5 p-3 flex ml-5 mb-5 mr-5 md:mb-10  flex-col gap-3 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.01)]">
                <img src="/colon.png" alt="Colon" className="w-[32px] h-[26px]" />
                <p className="text-[#4D4D4D] font-poppins text-[14px] leading-[150%]">{review}</p>
                <div className="flex flex-col lg:flex-row items-center gap-3">
                    <img src={image} alt={name} className="w-[54px] h-[54px]" />
                    <div className="flex flex-col"><p className="text-[#1A1A1A] font-poppins text-[16x] font-semibold leading-[150%]">{name}</p><p className="text-[#999] font-poppins text-[14x] leading-[150%]">Customer</p></div>
                    <div className="flex"><img src="/yellowstar.png" alt="" className="w-[20px] h-[20px]" /><img src="/yellowstar.png" alt="" className="w-[20px] h-[20px]" /><img src="/yellowstar.png" alt="" className="w-[20px] h-[20px]" /><img src="/yellowstar.png" alt="" className="w-[20px] h-[20px]" /><img src="/yellowstar.png" alt="" className="w-[20px] h-[20px]" /></div>
                </div>
            </div>
        </>
    )
}