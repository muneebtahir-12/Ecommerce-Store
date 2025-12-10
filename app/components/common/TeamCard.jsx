export default function TeamCard({id,name,image,position}){
    return(
        <>
        <div className="flex flex-col w-auto bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition">
            <img src={image} alt={name} />
           <div className="ml-5 mt-2 mb-2">
             <p className="text-[#1A1A1A] font-poppins text-sm sm:text-lg font-medium leading-[150%]">{name}</p>
            <p className="text-[#808080] font-poppins text-[13px] sm:text-sm font-normal leading-[150%]">{position}</p>
           </div>
        </div>
        </>
    )
}