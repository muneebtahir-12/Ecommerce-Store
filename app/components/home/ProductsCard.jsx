export default function ProductsCard({id,name,image,price}){
    return(
        <>
          <div className="border flex flex-col justify-center bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition  items-center">
            <img src={image} alt={name} className="w-[215px] h-[215px]" />
            <div>
                <p className="text-[#4D4D4D] font-poppins text-[14px] leading-[150%]">{name}</p>
                <div className="flex items-center justify-between">
                    <p className="text-[#1A1A1A] font-poppins font-medium text-[16px] leading-[150%]">{price}</p>
                    <img src="/productbag.png" alt="" className="w-[20px] h-[20px]" />
                </div>
                <div className="flex">
                    <img src="/yellowstar.png" alt="" className="w-[12px] h-[12px]" />
                    <img src="/yellowstar.png" alt="" className="w-[12px] h-[12px]" />
                    <img src="/yellowstar.png" alt="" className="w-[12px] h-[12px]" />
                    <img src="/yellowstar.png" alt="" className="w-[12px] h-[12px]" />
                    <img src="/whitestar.png" alt="" className="w-[12px] h-[12px]" />
                </div>
            </div>
          </div>
        </>
    )
}