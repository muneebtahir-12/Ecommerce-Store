export default function FeedbackCard({id, name, date, avatar, text}) {
    return (
        <section className="w-full lg:w-1/2 flex flex-col gap-3 p-4 border-b border-b-[#E6E6E6]">
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={avatar} alt={name} className="w-[41px] h-[41px]" />
                    <div className="flex flex-col">
                        <span className="text-[#1A1A1A] font-poppins text-[14px] font-medium leading-[21px]">{name}</span>
                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <img key={i} src="/yellowstar.png" alt="Star" className="w-[10px] sm:w-[13px] h-[10px] sm:h-[13px]" />
                            ))}
                        </div>
                    </div>
                </div>
                <span className="text-[#808080] font-poppins text-[14px] font-normal leading-[21px]">{date}</span>
            </div>

            <p className="text-[#808080] font-poppins text-[14px] font-normal leading-[21px]">{text}</p>
        </section>
    )
}
