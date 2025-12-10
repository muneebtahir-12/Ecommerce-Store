export default function Services() {
    return (

        <div className="grid sm:grid-cols-2 mb-10 md:grid-cols-3 gap-6 lg:gap-0 lg:grid-cols-4 ml-5 mr-5 sm:ml-9 sm:mr-9 mb-10 mt-7  justify-between">
            <div className="flex gap-2 items-center">
                <div className="rounded-full bg-[#999] p-3"><img className="w-[29px] h-[29px]" src="/shipping.png" alt="Shipping" /></div>
                <div className="flex flex-col gap-3">
                    <h2 className="font-poppins text-[17px] font-semibold leading-4">Free Shipping</h2> 
                    <p className="font-poppins text-[13px] leading-[10px] font-normal text-[#999]">Free shipping with discount</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="rounded-full bg-[#999] p-3"><img className="w-[29px] h-[29px]" src="/headphones.png" alt="Headphones" /></div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-poppins text-[17px] font-semibold leading-4">Great Support 24/7</h2>
                    <p className="font-poppins text-[13px] font-normal text-[#999]">Instant access to Contact</p>
                </div>
            </div >
            <div className="flex gap-2 items-center">
                <div className="rounded-full bg-green-600 p-3"><img className="w-[29px] h-[29px]" src="/shopping-bag.png" alt="ShoppingBags" /></div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-poppins text-[17px] font-semibold leading-4">100% Sucure Payment</h2>
                    <p className="font-poppins text-[13px] font-normal text-[#999]">We ensure your money is save</p>
                </div>
            </div>
            <div className="flex gap-2 items-center">
                <div className="rounded-full bg-[#999] p-3"><img className="w-[29px] h-[29px]" src="/package.png" alt="Package" /></div>
                <div className="flex flex-col gap-2">
                    <h2 className="font-poppins text-[17px] font-semibold leading-4">Money-Back Guarantee</h2>
                    <p className="font-poppins text-[13px] font-normal text-[#999]">30 days money-back</p>
                </div>
            </div>
        </div>

    )
}
