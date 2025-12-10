export default function OrganicFoodServicesCard({id,title,description,image}) {
    return(
        <>
         <div className="flex gap-1 items-center">
            <img src={image} alt="" className="w-[55px] h-[55px]" />
            <div className="flex flex-col gap-1"><p className="text-[#1A1A1A] font-poppins text-[18px] font-medium leading-[150%]">{title}</p><span className="text-[#999999] font-poppins text-[14px] font-normal leading-[150%]">{description}</span></div>
         </div>
        </>
    )
}