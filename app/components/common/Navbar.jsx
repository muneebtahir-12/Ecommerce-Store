"use client";
import { useState } from "react";
import Link from "next/link";

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="flex flex-col gap-2">
                {/* --- Top Utility Bar --- */}
                <div className="flex bg-[#333] py-4 flex-col gap-3 items-center md:flex-row md:justify-between">
                    <div className="flex items-center md:ml-29 mr-5 ml-5 gap-[3px]">
                        <img className="w-[15px] h-[18px]" src="/map.png" alt="" />
                        <p className="text-[#B3B3B3] text-[12px] leading-[130%] font-normal font-poppins">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className="flex gap-2 mr-5 md:mr-29 ml-5 items-center">
                        <select className="bg-transparent text-[#B3B3B3] text-[12px] leading-[130%] font-normal font-poppins outline-none" name="lang">
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                        </select>
                        <select className="bg-transparent text-[#B3B3B3] text-[12px] leading-[130%] font-normal font-poppins outline-none" name="payment">
                            <option value="usd">USD</option>
                        </select>
                        <img src="/BannerLine.png" alt="" className="h-[15px]" />
                        <p className="text-[#B3B3B3] font-poppins text-[12px] font-normal cursor-pointer">Sign in / Sign up</p>
                    </div>
                </div>

                {/* --- Brand & Icons Bar --- */}
                <div className="flex items-center justify-between mt-3 px-5 sm:px-29 gap-4">
                    {/* Brand Logo */}
                    <div className="flex items-center gap-1">
                        <img className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]" src="/plant.png" alt="plant" />
                        <p className="text-[#002603] font-poppins text-[24px] lg:text-[32px] font-medium">Ecobazar</p>
                    </div>

                    {/* Search Bar: REMOVED before lg screens */}
                    <div className="hidden lg:flex items-center">
                        <input type="text" className="w-[280px] px-[5px] py-[10px] rounded-[4px] border border-[#E6E6E6] focus:outline-none" placeholder="Search.." />
                        <div className="bg-[#00B207] px-[15px] py-[10px] cursor-pointer">
                            <button className="text-[14px] font-poppins text-white">Search</button>
                        </div>
                    </div>

                    {/* Right Icons: Hamburger, Wishlist, Cart */}
                    <div className="flex items-center gap-2">
                        {/* Hamburger: REMOVED starting from lg screens */}
                        <div onClick={toggleMenu} className="lg:hidden flex flex-col gap-1 cursor-pointer mr-3">
                            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
                            <span className={`block w-6 h-0.5 bg-black transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}></span>
                            <span className={`block w-6 h-0.5 bg-black transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
                        </div>

                        <Link href="/wishlist">
                            <img src="/whishlist.png" alt="Wishlist" className="w-[22px] h-[19px] md:w-[27px] md:h-[23px]" />
                        </Link>
                        <img src="/BannerLine.png" alt="" className="h-[24px]" />
                        <div className="flex items-center gap-1">
                            <Link href={"/cart"} className="relative w-fit">
                                <img src="/Bag2.png" alt="cart" className="w-[30px] h-[30px] md:w-[34px] md:h-[34px]" />
                                <span className="absolute -top-1 -right-1 bg-[#00B207] text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full font-semibold">1</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <hr className="w-auto text-[#E5E5E5] mt-5 shadow-[inset_0_-1px_0_0_#E5E5E5]" />

                {/* --- Main Navigation Row --- */}
                <nav className="relative">
                    {/* Desktop Menu: Starts from lg */}
                    <div className="hidden lg:flex mt-3 px-29 justify-between">
                        <ul className="flex gap-7 items-center">
                            <Link href={"/"} className="text-[#666] font-medium font-poppins hover:text-[#00B207]">Home</Link>
                            <Link href={"/shop"} className="text-[#666] font-medium font-poppins hover:text-[#00B207]">Shop</Link>
                            <Link href={"/pages"} className="text-[#666] font-medium font-poppins hover:text-[#00B207]">Pages</Link>
                            <Link href={"/blog"} className="text-[#666] font-medium font-poppins hover:text-[#00B207]">Blog</Link>
                            <Link href={"/about"} className="text-[#666] font-medium font-poppins hover:text-[#00B207]">About Us</Link>
                            <Link href={"/contact"} className="text-[#666] font-medium font-poppins hover:text-[#00B207]">Contact</Link>
                        </ul>
                        <div className="flex items-center gap-1">
                            <img src="/call.png" alt="" className="w-[20px] h-[20px]" />
                            <p className="text-[#1A1A1A] font-medium font-poppins">(219) 555-0114</p>
                        </div>
                    </div>

                    {/* Mobile/Tablet Menu Dropdown (Active BEFORE lg) */}
                    {isOpen && (
                        <div className="absolute top-0 left-0 w-full bg-white z-[100] lg:hidden shadow-xl animate-in slide-in-from-top duration-300 border-t">
                            <ul className="flex flex-col items-center gap-6 py-10 px-5 text-center">
                                <Link onClick={toggleMenu} href={"/"} className="text-[#1A1A1A] text-lg font-medium font-poppins">Home</Link>
                                <Link onClick={toggleMenu} href={"/shop"} className="text-[#1A1A1A] text-lg font-medium font-poppins">Shop</Link>
                                <Link onClick={toggleMenu} href={"/pages"} className="text-[#1A1A1A] text-lg font-medium font-poppins">Pages</Link>
                                <Link onClick={toggleMenu} href={"/blog"} className="text-[#1A1A1A] text-lg font-medium font-poppins">Blog</Link>
                                <Link onClick={toggleMenu} href={"/about"} className="text-[#1A1A1A] text-lg font-medium font-poppins">About Us</Link>
                                <Link onClick={toggleMenu} href={"/contact"} className="text-[#1A1A1A] text-lg font-medium font-poppins">Contact</Link>
                                <div className="flex items-center gap-2 pt-4 border-t w-full justify-center">
                                    <img src="/call.png" alt="" className="w-[20px] h-[20px]" />
                                    <p className="text-[#1A1A1A] font-medium">(219) 555-0114</p>
                                </div>
                            </ul>
                        </div>
                    )}
                </nav>
            </div>
        </>
    );
}