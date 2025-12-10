export default function Contact() {
    return (
        <section className="flex flex-col">
            {/* Top Banner */}
            <img src="/blogTop.jpg" alt="Blogs top" className="mb-5 mt-5 h-25 object-cover rotate-180 " />
            <div className="relative bottom-20 text-white ml-5 mr-5 flex gap-1 items-center sm:ml-29 sm:mr-29 ">
                <img src="/home.png" alt="home" className="w-[16px] h-[17px]" />
                <img src="/next.png" alt="next" className="w-[8.1px] h-[8px]" />
                <p className="text-[#00B207] font-poppins text-[16px] font-normal leading-[150%]">Contact</p>
            </div>

            <section className="flex flex-col lg:flex-row justify-between ml-5 mr-5 lg:ml-29 lg:mr-29 gap-6">

                {/* Contact Info Cards */}
                <div className="p-7 flex flex-col gap-10 rounded-[8px] bg-[#FFF] shadow-[0_0_56px_0_rgba(0,38,3,0.08)] w-full lg:max-w-[400px]">
                    <div className="flex flex-col items-center">
                        <img src="/MapPin.png" className="w-[51px] h-[51px]" />
                        <p className="text-[#333] text-center font-poppins text-[16px] font-normal leading-[170%]">
                            2715 Ash Dr. San Jose, South Dakota 83475
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="/mail.png" className="w-[51px] h-[51px]" />
                        <p className="text-[#333] text-center font-poppins text-[16px] font-normal leading-[170%]">
                            Proxy@gmail.com <br /> Help.proxy@gmail.com
                        </p>
                    </div>

                    <div className="flex flex-col items-center">
                        <img src="/PhoneCall2.png" className="w-[51px] h-[51px]" />
                        <p className="text-[#333] text-center font-poppins text-[16px] font-normal leading-[170%]">
                            (219) 555-0114 <br /> (164) 333-0487
                        </p>
                    </div>
                </div>

                {/* Form */}
                <div className="flex gap-5 flex-col p-7 rounded-lg bg-white shadow-[0_0_56px_0_rgba(0,38,3,0.08)] w-full lg:max-w-[650px]">
                    <h4 className="text-[#1A1A1A] font-poppins text-[24px] font-semibold leading-[150%]">
                        Just Say Hello!
                    </h4>

                    <p className="text-[#808080] font-poppins text-[14px] font-normal leading-[150%]">
                        Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full h-[45px]  px-4 rounded-md  bg-white border border-[#E6E6E6]  focus:outline-none focus:ring-0 focus:border-[#E6E6E6]"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full h-[45px] px-4 rounded-md  bg-white border border-[#E6E6E6]  focus:outline-none focus:ring-0 focus:border-[#E6E6E6]"
                        />
                    </div>

                    <input
                        type="email"
                        placeholder="Email"
                        className="h-[45px] w-full px-4 rounded-md bg-white border border-[#E6E6E6]  focus:outline-none focus:ring-0 focus:border-[#E6E6E6]"
                    />

                    <textarea
                        placeholder="Message"
                        className="min-h-[120px] w-full rounded-md border border-[#E6E6E6] p-4 bg-white  focus:outline-none focus:ring-0 focus:border-[#E6E6E6]"
                    />

                    <button className="sm:w-[160px] justify-center items-center gap-4 py-4 rounded-[43px] bg-[#00B207] text-white font-poppins text-[14px] font-semibold leading-[120%] hover:bg-[#009a06] transition">
                        Send Message
                    </button>
                </div>


            </section>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3322.080517002716!2d73.11454567479421!3d33.62915423995364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfeb4062e2adc1%3A0x96151197c48f4f32!2sSafeCare%20Training%20%26%20Services!5e0!3m2!1sen!2s!4v1756901321255!5m2!1sen!2s"
                width="600"
                height="400"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-[#FAFAFA] w-[100%] mt-20 h-[400px]"
            ></iframe>
        </section>
    );
}
