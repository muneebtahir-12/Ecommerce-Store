import OrganicFoodServicesCard from "./OrganicFoodServicesCard";
import data from "../components/data/data.json";

export default function Surety(){
        const services = data.organicFoodServices;
    
    return(
        <section className="flex flex-col">
            <div className="flex flex-col lg:flex-row items-center gap-5 ml-5 mr-5 sm:ml-29 sm:mr-29">
                            <div className="flex flex-col gap-4 sm:text-center lg:text-left ">
                                <h3 className="text-[#1A1A1A] font-poppins text-[35px] sm:text-[40px] md:text-[45px] font-semibold leading-[120%]">100% Trusted Organic Food Store</h3>
                                <p className="text-[#666666] font-poppins text-left text-[13px] sm:text-[15px] font-normal leading-[150%]">Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi, laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit. Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec a eros non massa vulputate ornare. Vivamus ornare commodo ante, at commodo felis congue vitae.</p>
                            </div>
                            <img src="/aboutimg1.png" alt="" className="sm:w-[650px] sm:h-[380px] w-auto h-auto" />
                        </div>
            
                        <div className="flex flex-col lg:flex-row gap-6 my-12 bg-gradient-to-b from-[#FAFAFA] to-[#FFFFFF] shadow-[0_1px_0_0_#E5E5E5] ">
                            <div className="flex sm:flex-row gap-4 items-center lg:items-start">
                                <img src="/aboutimg2bg.png" alt="" className="w-full hidden lg:block sm:w-[485px] h-auto sm:h-[480px]" />
                                <img src="/aboutimg2.png" alt="" className="w-full sm:w-[465px] sm:hidden lg:block h-auto sm:h-[480px] lg:relative lg:right-90" />
                            </div>
                            <div className="flex flex-col justify-center mt-6 mr-5 lg:mr-29 ml-5 sm:ml-29 lg:ml-0">
                                <h3 className="text-[#1A1A1A] font-poppins text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] font-semibold leading-[120%] w-full sm:w-[500px]">
                                    100% Trusted Organic Food Store
                                </h3>
                                <p className="text-[#666666] font-poppins text-[13px] sm:text-[15px] font-normal leading-[150%] mt-4 w-full sm:w-[500px]">
                                    Pellentesque a ante vulputate leo porttitor luctus sed eget eros. Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a mi. Nulla eu eros consequat tortor tincidunt feugiat.
                                </p>
            
                                {/* Services Grid */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4">
                                    {services.map((service) => (
                                        <OrganicFoodServicesCard
                                            key={service.id}
                                            id={service.id}
                                            title={service.title}
                                            description={service.description}
                                            image={service.image}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
        </section>
    )
}