import Link from "next/link";
export default function BlogCards({id,description,image}){
    return(
        <section className="flex flex-col gap-2 rounded-b-md border border-[#E6E6E6] bg-white">
            <img src={image} alt="Blog" className="w-auto h-auto lg:max-w-[330px] lg:max-h-[240px]" />
            <div className="ml-1 gap-3 flex flex-col p-3 sm:p-1 md:p-2">
                <div className="flex gap-2 sm:gap-0.5 lg:gap-2">
                <img src="/tag.png" alt="" className="w-[18px] h-[18px]" />
                <p className="text-[#4D4D4D] font-poppins sm:text-[13px] text-[12px] font-normal leading-[150%]">Food</p>
                <img src="/admin.png" alt="" className="w-[18px] h-[18px]" />
                <p className="text-[#4D4D4D] font-poppins sm:text-[13px] text-[12px] font-normal leading-[150%]">By Admin</p>
                <img src="/comment.png" alt="" className="w-[17px] h-[17px]" />
                <p className="text-[#4D4D4D] font-poppins sm:text-[13px] text-[12px] font-normal leading-[150%]">65 Comments</p>
            </div>
            <p className="max-w-[280px] text-[#1A1A1A] font-poppins text-[17px] font-medium leading-[150%]">{description}</p>
            <Link href={`/blog/${id}`} className="flex items-center gap-1"><button className="text-[#00B207] font-poppins text-[16px] font-semibold leading-[120%]">Read More</button><img src="/ArrowG.png" alt="" className="w-[15px] h-[12px]" /></Link>
            </div>
        </section>
    )
}