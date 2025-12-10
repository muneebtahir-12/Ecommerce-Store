export default function RecentlyAddedCard({id,image,date,des}) {
    return (
        <section className="flex flex-row gap-3">
            <img src={image} alt="" className="w-[100px] h-[77px] rounded-md" />
            <div className="flex gap-2 flex-col">
                <p className="text-[#1A1A1A] font-poppins text-[16px] font-medium leading-[150%]">{des}</p>
                <div className="flex gap-1">
                    <img src="/calender.png" alt="" className="w-[18px] h-[18px]" />
                    <p className="text-[#666] text-[14px]">{date}</p>
                </div>
            </div>

        </section>
    )
}