"use client"
import { useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import About from "./About";
import Products from "./Products";
import data from "../../../components/data/data";
import FeedbackCard from "./FeedbackCard";
function slugify(text) { return text.toLowerCase().trim().replace(/[\s\u00A0\u200B\u200C\u200D]+/g, "-").replace(/[^\w-]+/g, ""); }
export default function Details() {
    const comment = data.comments;

    // State to track active tab
    const [activeTab, setActiveTab] = useState("description");

    return (
        <section className="flex flex-col mx-5 sm:mx-29">
            {/* Tabs */}
            <div className="flex justify-center border-b border-gray-300 mb-3 mt-6">
                <div className="flex gap-4 md:gap-8">
                    <span
                        onClick={() => setActiveTab("description")}
                        className={`text-sm md:text-base font-poppins font-medium leading-6 pb-2 cursor-pointer border-b-2 ${
                            activeTab === "description" ? "border-[#20B526] text-[#1A1A1A]" : "border-transparent text-gray-500"
                        }`}
                    >
                        Description
                    </span>
                    <span
                        onClick={() => setActiveTab("additional")}
                        className={`text-sm md:text-base font-poppins font-medium leading-6 pb-2 cursor-pointer border-b-2 ${
                            activeTab === "additional" ? "border-[#20B526] text-[#1A1A1A]" : "border-transparent text-gray-500"
                        }`}
                    >
                        Additional Information
                    </span>
                    <span
                        onClick={() => setActiveTab("feedback")}
                        className={`text-sm md:text-base font-poppins font-medium leading-6 pb-2 cursor-pointer border-b-2 ${
                            activeTab === "feedback" ? "border-[#20B526] text-[#1A1A1A]" : "border-transparent text-gray-500"
                        }`}
                    >
                        Customer Feedback
                    </span>
                </div>
            </div>

            {/* Content */}
            {activeTab === "description" && (
                <section className="flex flex-col mb-15 lg:flex-row justify-between gap-8 mt-4">
                    <div className="flex flex-col gap-3 w-full lg:w-[60%]">
                        <article className="text-gray-500 font-poppins text-[14px] font-normal leading-[21px]">
                            Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin. Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed et condimentum arcu, id molestie tellus. Nulla facilisi. Nam scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis commodo quis, egestas elementum leo. Donec convallis mollis enim. Aliquam id mi quam. Phasellus nec fringilla elit.
                            <br /><br />
                            Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit, pellentesque tristique neque mi eget nulla. Proin luctus elementum neque et pharetra.
                        </article>

                        {[
                            "100 g of fresh leaves provides.",
                            "Aliquam ac est at augue volutpat elementum.",
                            "Quisque nec enim eget sapien molestie.",
                            "Proin convallis odio volutpat finibus posuere."
                        ].map((text, i) => (
                            <div key={i} className="flex gap-2 items-center">
                                <span className="w-[15px] h-[15px] flex p-0.5 items-center justify-center rounded-full bg-[#00B207]">
                                    <img src="/check 1.png" alt="" />
                                </span>
                                <p className="text-gray-500 font-poppins text-[14px] font-normal leading-[21px]">{text}</p>
                            </div>
                        ))}

                        <p className="text-gray-500 font-poppins text-[14px] font-normal leading-[21px]">
                            Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla blandit eros non turpis lobortis iaculis at ut massa.
                        </p>
                    </div>
                    <About />
                </section>
            )}

            {activeTab === "additional" && (
                <section className="flex flex-col justify-between sm:flex-row mb-15 gap-4">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-8">
                            <span className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Weight:</span>
                            <span className="text-[#666666] font-poppins text-[14px] font-normal leading-[150%]">03</span>
                        </div>
                        <div className="flex gap-8">
                            <span className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Color:</span>
                            <span className="text-[#666666] font-poppins text-[14px] font-normal leading-[150%]">Green</span>
                        </div>
                        <div className="flex gap-8">
                            <span className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Type:</span>
                            <span className="text-[#666666] font-poppins text-[14px] font-normal leading-[150%]">Organic</span>
                        </div>
                        <div className="flex gap-8">
                            <span className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Category:</span>
                            <span className="text-[#666666] font-poppins text-[14px] font-normal leading-[150%]"><Link href={`/categories/${useParams().name}`}>View all in this category</Link></span>
                        </div>
                        <div className="flex gap-8">
                            <span className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Stock Status:</span>
                            <span className="text-[#666666] font-poppins text-[14px] font-normal leading-[150%]">Available (5,413)</span>
                        </div>
                        <div className="flex gap-8">
                            <span className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Tags:</span>
                            <span className="text-[#666666] font-poppins text-[14px] font-normal leading-[150%]">Vegetables, Healthy, Chinese, Cabbage, Green Cabbage</span>
                        </div>
                    </div>
                    <About />
                </section>
            )}

            {activeTab === "feedback" && (
                <div className="flex flex-col mb-15 gap-4">
                    {comment.map((c) => (
                        <FeedbackCard key={c.id} id={c.id} name={c.name} date={c.date} avatar={c.avatar} text={c.text} />
                    ))}
                </div>
            )}

            <Products />
        </section>
    )
}
