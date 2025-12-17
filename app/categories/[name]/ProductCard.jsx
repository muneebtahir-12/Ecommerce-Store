"use client";

import { useState, useEffect, useContext } from "react";
import Check from "./Check";
import { WishlistContext } from "../../context/WishlistContext";
import { CartContext } from "../../context/CartContext";
import { CounterContext } from "../../context/CounterContext";

export default function Card({ id, name, image, price, catName }) {
    const [heartClicked, setHeartClicked] = useState(false);
    const [eyeClicked, setEyeClicked] = useState(false);

    const { addToWishlist } = useContext(WishlistContext);
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const { increment, decrement } = useContext(CounterContext);

    useEffect(() => {
    if (typeof document !== "undefined") {
        document.body.style.overflow = eyeClicked ? "hidden" : "auto";
    }

    // cleanup (important!)
    return () => {
        if (typeof document !== "undefined") {
            document.body.style.overflow = "auto";
        }
    };
}, [eyeClicked]);


    const product = { id, name, image, price: parseFloat(price.toString().replace('$', '')), catName };

    // Check if this product is already in cart
    const isInCart = cartItems.some((item) => item.id === id);

    const handleWishlist = () => {
        setHeartClicked(!heartClicked);
        addToWishlist(product);
    };

    const handleCart = () => {
        if (!isInCart) {
            addToCart(product);
            increment();
        } else {
            removeFromCart(product.id);
            decrement();
        }
    };

    return (
        <>
            <div className="group relative flex flex-col hover:shadow-[0_0_12px_rgba(32,181,38,0.32)] border rounded-[8px] border-[#E6E6E6] bg-[#FFFFFF]">
                <img src={image} alt={name} className="w-full h-auto sm:h-[280px] md:h-[70px] lg:h-[250px] rounded-t-[8px]" />

                <div className="absolute top-5 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition">
                    {/* Wishlist */}
                    <div onClick={handleWishlist} className={`w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border border-[#F2F2F2] ${heartClicked ? "bg-red-500" : "bg-white"} hover:bg-red-400 hover:shadow-md`}>
                        <img src="/whishlist.png" alt="Wishlist" className="w-[18px] h-[18px]" />
                    </div>

                    {/* View Details */}
                    <div onClick={() => setEyeClicked(!eyeClicked)} className={`w-[32px] h-[32px] sm:w-[38px] sm:h-[38px] rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 border border-[#F2F2F2] ${eyeClicked ? "bg-[#00B207]" : "bg-white"} hover:bg-[#00cc27] hover:shadow-md`}>
                        <img src="/eye.png" alt="View" className="w-[18px] h-[18px]" />
                    </div>
                </div>

                <div className="flex items-center p-4 justify-between">
                    <div className="flex flex-col gap-1">
                        <p className="text-[#4D4D4D] font-poppins text-[12px] sm:text-[14px]">{name}</p>
                        <span className="text-[#1A1A1A] font-poppins text-[14px] sm:text-[16px] font-medium">{price}</span>

                        <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <img key={i} src="/yellowstar.png" alt="Star" className="w-[10px] sm:w-[13px] h-[10px] sm:h-[13px]" />
                            ))}
                        </div>
                    </div>

                    {/* Cart Button */}
                    <div
                        onClick={handleCart}
                        className={`w-[30px] sm:w-[40px] h-[30px] sm:h-[40px] flex items-center justify-center rounded-full cursor-pointer transition ${isInCart ? "bg-[#00B207]" : "bg-[#F2F2F2]"}`}>
                        <img src="/Bag2.png" alt="Bag" className="w-[15px] sm:w-[20px] h-[15px] sm:h-[20px]" />
                    </div>
                </div>
            </div>

            {eyeClicked && (
                <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-2">
                    <div className="bg-white rounded-[12px] shadow-lg relative w-full md:h-auto lg:h-auto xl:h-auto max-h-[95vh]">
                        <button
                            onClick={() => setEyeClicked(false)}
                            className="absolute top-3 right-3 text-black text-xl font-bold hover:text-[#00B207] z-10"
                        >
                            ✖
                        </button>
                        <div className="p-4 sm:p-6 overflow-y-auto max-h-[95vh]">
                            <Check product={product} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
