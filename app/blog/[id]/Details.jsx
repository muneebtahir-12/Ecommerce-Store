import CommentForm from "./CommentForm";
export default function Details({blog}) {
    if(!blog) return <p>Blog Not found</p>
    return (
        <>
            <div className="grid gap-3 lg:w-[700px] ">

                {/* Main Blog Image */}
                <img src={blog.image} alt="" className="md:w-[670px] md:h-[430px] rounded-l mx-auto" />

                {/* Tags Row */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                    <img src="/tag.png" alt="" className="w-4 h-4" />
                    <p>Food</p>

                    <img src="/admin.png" alt="" className="w-5 h-5" />
                    <p>By Admin</p>

                    <img src="/comment.png" alt="" className="w-5 h-5" />
                    <p>25 Comments</p>
                </div>

                {/* Heading */}
                <h3 className="text-[#1A1A1A] font-poppins text-[25px] sm:text-[29px] font-medium leading-[140%]">
                    Maecenas tempor urna sed quam mollis, a placerat dui fringill Suspendisse.
                </h3>

                {/* Author Section */}
                <div className="flex flex-col sm:flex-row sm:justify-between bg-white shadow-[0_1px_0_0_#E5E5E5] gap-3 py-5 sm:p-5 border-b-[#E5E5E5] mb-4 sm:gap-0">
                    <div className="flex gap-2 items-center">
                        <img src="/client1.png" alt="" className="w-[50px] h-[50px]" />
                        <div>
                            <p>Cameron Williamson</p>
                            <div className="flex gap-2 text-sm text-gray-600">
                                <span>4 April, 2021</span>
                                <span>.</span>
                                <span>6 min read</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-3 justify-start sm:justify-end">
                        <img src="/fb.png" alt="" className="w-[35px] h-[35px]" />
                        <img src="/twitter.png" alt="" className="w-[35px] h-[35px]" />
                        <img src="/p.png" alt="" className="w-[35px] h-[35px]" />
                        <img src="/insta.png" alt="" className="w-[35px] h-[35px]" />
                    </div>
                </div>

                <h5 className="text-[#1A1A1A] font-poppins text-[18px] sm:text-[19px] font-medium leading-[150%]">
                    Maecenas lacinia felis nec placerat sollicitudin. Quisque placerat dolor at scelerisque imperdiet.
                </h5>

                <article className="text-[#808080] font-poppins text-[16px] sm:text-[17px] leading-[150%]">
                    Maecenas elementum in risus sed condimentum. Duis convallis ante ac tempus maximus. Fusce malesuada sed velit ut dictum. Morbi faucibus vitae orci at euismod. Integer auctor augue in erat vehicula, quis fermentum ex finibus.
                </article>

                <article className="text-[#808080] font-poppins text-[16px] sm:text-[17px] leading-[150%]">
                    Mauris pretium elit a dui pulvinar, in ornare sapien euismod. Nullam interdum nisl ante, id feugiat quam euismod commodo. Sed ultrices lectus ut iaculis rhoncus. Aenean non dignissim justo, at fermentum turpis. Sed molestie, ligula ut molestie ultrices, tellus ligula viverra neque, malesuada consectetur diam sapien volutpat risus.
                    Quisque eget tortor lobortis, facilisis metus eu, elementum est. Nunc sit amet erat quis ex convallis suscipit. ur ridiculus mus.
                </article>

                {/* Two Images */}
                <div className="flex flex-col sm:flex-row gap-3">
                    <img src="/blog1.png" className="w-full sm:w-1/2 rounded-md" />
                    <img src="/blog2.png" className="w-full sm:w-1/2 rounded-md" />
                </div>

                <article className="text-[#808080] font-poppins text-[16px] sm:text-[17px] leading-[150%]">
                    Sed dictum non nulla eu imperdiet. Duis elit libero, vulputate quis vehicula ut, vestibulum ut mauris. Nullam non felis varius dui rutrum rutrum in a nisi. Suspendisse elementum rutrum lorem sed luctus. Proin iaculis euismod metus non sollicitudin. Duis vel luctus lacus. Nullam faucibus iaculis convallis. In ullamcorper nibh ipsum, eget lacinia eros pulvinar a. Integer accumsan arcu nec faucibus ultricies.

                </article>

                <div className="flex flex-col">
                    <img src="/dynamicBanner.png" alt="" className="w-full h-[210px]" />
                    <div className="text-white flex gap-4 sm:gap-8 items-center relative bottom-41 left-4 sm:left-10">
                        <div>
                            <h4 className="text-[#999] font-poppins sm:text-[14px] text-[12px] font-medium leading-[100%] tracking-[0.42px] uppercase">Summer Sale</h4>
                            <p className="text-white font-poppins text-sm:[33px] text-[29px] font-semibold leading-[120%]"
                            >Fresh Fruit</p>
                            <div className="flex gap-1 mt-2 bg-green-600 px-2 py-2 rounded-[43px] w-[100px] h-11 items-center justify-center cursor-pointer">
                                <button className="text-white
                                font-poppins text-[12px] font-medium">Shop Now</button>
                                <img src="/arrow.png" alt="arrow" className="w-2 h-2" />
                            </div>
                        </div>
                        <div className="w-[80px] sm:w-[90px] sm:h-[90px] flex items-center justify-center p-2 rounded-full h-[80px] bg-[#1A1A1A]">
                         <p  className="text-[#B3B3B3] text-center font-poppins sm:text-[11px] text-[10px] font-medium leading-[150%] tracking-[0.33px] uppercase">Up To <span className="text-[#FF8A00] text-[21px] sm:text-[24px]"> 50% </span> Off</p>
                        </div>

                    </div>
                </div>

            
                    <div>
                        <CommentForm/>
                    </div>
        
            </div>
        </>
    );
}
