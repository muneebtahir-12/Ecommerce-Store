export default function Top({category}) {
    
    return (
        <section className="flex flex-col">
            <img src="/blogTop.jpg" alt="Blogs top" className="mb-5 mt-5 h-25 object-cover rotate-180 " />
            <div className="relative bottom-20 text-white ml-5 mr-5 flex gap-1 items-center lg:ml-29 lg:mr-29 ">
                <img src="/home.png" alt="home" className="w-[16px] h-[17px]" />
                <img src="/next.png" alt="next" className="w-[8.1px] h-[8px]" />
              <p className="text-[#00B207] font-poppins text-[16px] font-normal leading-[150%]">{category.name}</p>

            </div>
        </section>
    )
}