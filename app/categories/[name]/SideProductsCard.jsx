export default function Card({id,name,price,discount,image}){
    return(
        <>
         <div className="flex items-center gap-1 p-3 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
                <img src={image} alt="" className="w-[102px] h-[102px]" />
                <div>
                    <p className="text-[#4D4D4D] font-poppins text-[14px] font-normal leading-[150%]">{name}</p>
                    <div className="flex gap-1"><span className="text-[#1A1A1A] font-poppins text-[16px] font-medium leading-[150%]">{price}</span><span className="text-[#999] font-poppins text-[16px] font-medium leading-[150%]">{discount}</span></div>
                    <div className="flex gap-1">
                        <img src="/yellowstar.png" alt="" className="w-[10px] h-[10px]" />
                        <img src="/yellowstar.png" alt="" className="w-[10px] h-[10px]" />
                        <img src="/yellowstar.png" alt="" className="w-[10px] h-[10px]" />
                        <img src="/yellowstar.png" alt="" className="w-[10px] h-[10px]" />
                        <img src="/yellowstar.png" alt="" className="w-[10px] h-[10px]" />
                    </div>
                </div>
            </div>
        </>
    )
}