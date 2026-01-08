import Link from "next/link"
import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../../context/CartContext"
import { WishlistContext } from "../../../context/WishlistContext"
import { CounterContext } from "../../../context/CounterContext"
export default function Check({ product }) {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const { wishlist, addToWishlist, removeWishlistItem } = useContext(WishlistContext);
    const { increment, decrement } = useContext(CounterContext);

    const isInCart = cartItems.some((item) => item.id === product.id);
    const isInWishlist = wishlist.some((item) => item.id === product.id);

    const [counter,setCounter]=useState(1);
    const Increment = () => {
        setCounter(counter + 1);
    }
    const Decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    }


    // 🛒 Cart handler
    const handleCartClick = () => {
        if (isInCart) {
            removeFromCart(product.id); // ✅ CORRECT
            decrement();
        } else {
            addToCart(product);
            increment();
        }
    };


    // ❤️ Wishlist handler
    const handleWishlistClick = () => {
        if (isInWishlist) {
            removeWishlistItem(product.id);
        } else {
            addToWishlist(product);
        }
    };

    return (
        
        <section className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex lg:flex-col flex-wrap">
                <img src="/cabbage.png" alt="" className="w-[80px] h-[90px]" />
                <img src="/cabbage2.png" alt="" className="w-[80px] h-[90px]" />
                <img src="/cabbage3.png" alt="" className="w-[80px] h-[90px]" />
                <img src="/cabbage4.png" alt="" className="w-[80px] h-[90px]" />
            </div>

            <div>
                <img src="/ladyfinger.png" alt="" className="lg:w-[556px] lg:h-[556px]" />
            </div>

            <div className="flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row gap-2">
                    <h2 className="text-[#1A1A1A] font-poppins text-[36px] font-semibold leading-[120%]">Name</h2>
                    <div className="rounded-[4px] bg-[rgba(32,181,38,0.20)] flex items-center justify-center px-[4px] py-[8px]"><span className="text-[#2C742F] font-poppins text-[14px] font-normal leading-[150%]">In Stock</span></div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src="/yellowstar.png" alt="Star" className="w-[13px] sm:w-[18px] h-[13px] sm:h-[18px]" />
                        ))}
                    </div>
                    <p className="text-[#666666] font-poppins text-[14px] font-normal">4 Reviews</p>
                    <img src="/dot.png" alt="" className="" />
                    <p className="text-[#333333] font-poppins text-[14px] font-medium leading-[150%]">
                        SKU : <span className="text-[#666666] font-normal">2,51,594</span>
                    </p>
                </div>

                <div className="flex gap-2 items-center">
                    <span className="text-[#B3B3B3] font-poppins text-[20px] font-normal leading-[150%] line-through">$48.00</span>
                    <span className="text-[#2C742F] font-poppins text-[24px] font-medium leading-[150%]">11</span>
                    <div className="rounded-[30px] bg-[rgba(234,75,72,0.10)] px-[10px] py-[5px] flex items-center">
                        <p className="text-[#EA4B48] font-poppins text-[14px] font-medium leading-[150%]">64% Off</p>
                    </div>
                </div>

                <hr className="border-t border-[#F2F2F2]" />

                <div className="flex justify-between sm:items-center gap-8 flex-col sm:flex-row">
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Brand:</p>
                        <div className="flex flex-col items-center rounded-[4px] px-5 py-3 border border-[0.8px] border-[#E6E6E6] bg-[#FFFFFF]">
                            <img src="/leaf.png" alt="" />
                            <p className="text-[#555] font-[700] text-[13px] leading-[100%] font-[dancing-script]">farmary</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Share Items</span>
                        <div className="w-[40px] h-[40px] hover:bg-[#00B207] rounded-full flex items-center justify-center bg-[#00B207] "><img src="/facebook.png" alt="" className="w-[18px] h-[18px]" /></div>
                        <div className="w-[40px] h-[40px] hover:bg-[#00B207] rounded-full flex items-center justify-center"><img src="/twitter 1.png" alt="" className="w-[18px] h-[18px]" /></div>
                        <div className="w-[40px] h-[40px] hover:bg-[#00B207] rounded-full flex items-center justify-center"><img src="/pintrest.png" alt="" className="w-[35px] h-[35px]" /></div>
                        <div className="w-[40px] h-[40px] hover:bg-[#00B207] rounded-full flex items-center justify-center"><img src="/instagram.png" alt="" className="w-[35px] h-[35px]" /></div>
                    </div>
                </div>

                <p className="text-[#808080] font-poppins text-[14px] font-normal leading-[150%]">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </p>

                <hr className="border-t border-[#F2F2F2]" />

                <div className="flex justify-between flex-col sm:flex-row items-center gap-5">
                    <div className="flex items-center justify-evenly py-2 w-[180px] rounded-[170px] border border-[#E6E6E6] bg-[#FFFFFF]">
                        <p onClick={Decrement} className="w-[34px] h-[34px] text-[23px] bg-[#F2F2F2] p-3 rounded-full flex items-center justify-center">-</p>
                        <span className="text-[#1A1A1A] text-center font-poppins text-[16px] font-normal leading-[150%]">{counter}</span>
                        <p onClick={Increment} className="w-[34px] h-[34px] text-[23px] bg-[#F2F2F2] p-3 rounded-full flex items-center justify-center">+</p>
                    </div>

                    <div onClick={handleCartClick} className="flex sm:w-[368px] px-[40px] py-[16px] justify-center items-center gap-[16px] rounded-[43px] bg-[#00B207]" >
                        <p className="text-[#FFFFFF] font-poppins text-[16px] font-semibold leading-[120%]">Add to cart</p>
                        <img src="/Bag.png" alt="" className="w-[18px] h-[18px]" />
                    </div>

                    <button
                        onClick={handleWishlistClick}
                        className={`p-2 rounded-full border ${isInWishlist
                            ? "bg-red-500 border-red-500"
                            : "border-[#F2F2F2] hover:bg-red-500"
                            }`}>
                        <img src="/whishlist.png" className="w-[16px] h-[16px]" />
                    </button>
                </div>

                <hr className="border-t border-[#F2F2F2]" />

                <p className="text-[#1A1A1A] font-poppins text-[14px] font-semibold leading-[150%]">Category: <span className="text-[#808080] font-medium"></span></p>
                <p className="text-[#1A1A1A] font-poppins text-[14px] font-semibold leading-[150%]">Tag : <span className="text-[#808080] font-medium"> Vegetables Healthy </span></p>
            </div>

        </section>
    )
}