"use client"; // Required for useState in Next.js App Router
import { useState,useContext } from "react";
import Link from "next/link";
import { CounterContext } from "../../context/CounterContext";
export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
const {count}=useContext(CounterContext);
    return (
        <>
            <div className="flex flex-col mt-6 sm:ml-9 gap-2 ml-5 mr-5 sm:mr-9">
                {/* --- Top Bar (Remains same) --- */}
                <div className="flex flex-col gap-3 sm:gap-0 sm:flex-row justify-between">
                    <div className="flex items-center gap-[3px]">
                        <img className="w-[15px] h-[18px]" src="/map.png" alt="" />
                        <p className="text-gray-500 text-[12px] leading-[130%] font-normal font-poppins">Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
                    </div>
                    <div className="flex gap-[3px]">
                        <select className="text-gray-500 text-[12px] leading-[130%] font-normal font-poppins bg-transparent" name="lang" id="lang">
                            <option value="en">English</option>
                            <option value="es">Spanish</option>
                            <option value="fr">French</option>
                        </select>
                        <select className="text-gray-500 text-[12px] leading-[130%] font-normal font-poppins bg-transparent" name="payment" id="payment">
                            <option value="usd">USD</option>
                            <option value="eur">EUR</option>
                            <option value="gbp">GBP</option>
                        </select>
                    </div>
                </div>

                <hr className="text-white shadow-[0px_1px_0px_0px_#E5E5E5]" />

                {/* --- Mid Bar: Logo, Search, Contact (Visible on md+) --- */}
                <div className="justify-between mt-3 hidden md:flex">
                    <div className="flex items-center gap-1">
                        <img className="w-[28px] h-[28px] lg:w-[32px] lg:h-[32px]" src="/plant.png" alt="plant" />
                        <p className="text-[#002603] font-poppins text-[30px] lg:text-[32px] font-medium leading-[38px] tracking-[-0.96px]">Ecobazar</p>
                    </div>
                    <div className="flex items-center">
                        <input type="text" className="lg:w-[280px] w-[260px] lg:px-[5px] px-[4px] py-[7px] lg:py-[10px] rounded-[4px] border border-[#E6E6E6] focus:outline-none" placeholder="Search.." />
                        <div className="lg:px-[15px] lg:py-[10px] px-[12px] py-[8px] bg-[#00B207]">
                            <button className="text-[14px] font-poppins text-white">Button</button>
                        </div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <img className="lg:w-[40px] h-[36px] w-[36px] lg:h-[40px]" src="/PhoneCall.png" alt="PhoneCall" />
                        <div className="flex gap-1 flex-col">
                            <p className="text-gray-500 text-[12px] lg:text-[14px] leading-[130%] font-normal font-poppins">Customer Service</p>
                            <p className="font-medium text-[17px] lg:text-[20px] font-poppins leading-[20px]">(219) 555-0114</p>
                        </div>
                    </div>
                </div>

                {/* --- Main Navigation Bar --- */}
                <div className="relative flex mt-3">
                    {/* Hamburger Button (Toggles State) */}
                    <div
                        className="bg-[#00B207] py-3 px-5.5 cursor-pointer hover:bg-[#009e06] transition-colors"
                        onClick={toggleMenu}
                    >
                        <img className="w-[30px] h-[30px]" src="/menu.png" alt="Hamburger" />
                    </div>

                    {/* Category Select */}
                    <select className="bg-[#333] py-3 px-7 sm:px-17 w-full lg:w-auto text-[15px] font-poppins font-medium text-white appearance-none" name="categories" id="categories">
                        <option value="">All Categories</option>
                        <option value="fruits">Fruits</option>
                        <option value="vegetables">Vegetables</option>
                    </select>

                    {/* Desktop Menu (lg+) */}
                    <div className="bg-[black] lg:flex items-center justify-between hidden w-full px-5 py-3">
                        <ul className="flex gap-10 text-white font-poppins">
                            <Link href="/">Home</Link>
                           
                            <Link href="/blog">Blog</Link>
                            <Link href="/about">About</Link>
                            <Link href="/contact">Contact</Link>
                        </ul>
                        <div className="flex gap-2">
                            <Link href="/wishlist">
                                <img className="w-[29px] h-[29px] cursor-pointer" src="/Heart.png" alt="Heart" />
                            </Link>
                            <Link href={"/cart"} className="relative w-fit">
                                <img src="/Bag.png" alt="cart" className="w-[29px] h-[29px]" />
                                <span className="absolute -top-1 -right-1 bg-[#00B207] text-white text-[10px] w-[18px] h-[18px] flex items-center justify-center rounded-full font-semibold">{count}</span>
                            </Link>
                            <img className="w-[29px] h-[29px] cursor-pointer" src="/User.png" alt="User" />
                        </div>
                    </div>

                    {/* --- Mobile Menu Dropdown (Visible < lg when toggled) --- */}
                    {isOpen && (
                        <div className="absolute top-[100%] left-0 w-full bg-[#1a1a1a] z-50 lg:hidden shadow-2xl border-t border-gray-800 animate-in fade-in slide-in-from-top-2 duration-300">
                            <ul className="flex flex-col items-center text-center text-white font-poppins px-6 py-8 gap-6">
                                {/* Nav Links */}
                                <Link onClick={toggleMenu} href="/" className="w-full hover:text-[#00B207] transition-colors text-lg">Home</Link>
                               
                                <Link onClick={toggleMenu} href="/blog" className="w-full hover:text-[#00B207] transition-colors text-lg">Blog</Link>
                                <Link onClick={toggleMenu} href="/about" className="w-full hover:text-[#00B207] transition-colors text-lg">About</Link>
                                <Link onClick={toggleMenu} href="/contact" className="w-full hover:text-[#00B207] transition-colors text-lg">Contact</Link>

                                <hr className="w-1/2 border-gray-800 my-2" />

                                {/* Action Icons Centered */}
                                <div className="flex justify-center items-center gap-8 pt-2">
                                    <img className="w-[28px] h-[28px] cursor-pointer" src="/Heart.png" alt="Heart" />
                                    <img className="w-[28px] h-[28px] cursor-pointer" src="/Bag.png" alt="Bag" />
                                    <img className="w-[28px] h-[28px] cursor-pointer" src="/User.png" alt="User" />
                                </div>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}