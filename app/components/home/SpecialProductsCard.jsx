export default function SpecialProductsCard({ id, name, price, image }) {
    return (
        <>
            <div className="flex items-center gap-3 rounded-lg border border-[#E6E6E6] bg-white p-3 sm:p-2">
                <img src={image} alt={name} className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]" />
                
                <div className="flex flex-col">
                    <p className="text-[#4D4D4D] font-poppins text-[12px] sm:text-[14px] font-normal leading-[150%]">{name}</p>
                    <span className="text-[#1A1A1A] font-poppins text-[14px] sm:text-[16px] font-medium leading-[150%]">{price}</span>

                    <div className="flex gap-0.5 mt-1">
                        <img src="/yellowstar.png" alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                        <img src="/yellowstar.png" alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                        <img src="/yellowstar.png" alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                        <img src="/yellowstar.png" alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                        <img src="/whitestar.png" alt="" className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]" />
                    </div>
                </div>
            </div>
        </>
    );
}
