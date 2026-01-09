import Link from "next/link"
import { useContext, useState, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import { WishlistContext } from "../../context/WishlistContext"
import { CounterContext } from "../../context/CounterContext"
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
        <section className="flex flex-col lg:flex-row items-center ">
           <div className="flex flex-col lg:flex-row items-center lg:w-[700px]">
             <div className="flex lg:flex-col flex-wrap">
                <img src="/cabbage.png" alt="" className="w-[100px] h-[70px]" />
                <img src="/cabbage2.png" alt="" className="w-[100px] h-[70px]" />
                <img src="/cabbage3.png" alt="" className="w-[100px] h-[70px]" />
                <img src="/cabbage4.png" alt="" className="w-[100px] h-[70px]" />
            </div>

            
                <img src={product.image} alt="" className="lg:w-[400px] lg:h-[300px]x" />

           </div>

            <div className="flex flex-col gap-3 lg:w-[1000px]">
                <div className="flex flex-col sm:flex-row gap-1">
                    <h2 className="text-[#1A1A1A] font-poppins text-[30px] font-semibold leading-[120%]">{product.name}</h2>
                    <div className="rounded-[4px] bg-[rgba(32,181,38,0.20)] flex items-center justify-center px-[7px] py-[3px]"><span className="text-[#2C742F] font-poppins text-[12px] font-normal leading-[150%]">In Stock</span></div>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                            <img key={i} src="/yellowstar.png" alt="Star" className="w-[11px] sm:w-[16px] h-[11px] sm:h-[16px]" />
                        ))}
                    </div>
                    <p className="text-[#666666] font-poppins text-[12px] font-normal">4 Reviews</p>
                    <img src="/dot.png" alt="" className="" />
                    <p className="text-[#333333] font-poppins text-[12px] font-medium leading-[150%]">
                        SKU : <span className="text-[#666666] font-normal">2,51,594</span>
                    </p>
                </div>

                <div className="flex gap-2 items-center">
                    <span className="text-[#B3B3B3] font-poppins text-[17px] font-normal leading-[150%] line-through">$48.00</span>
                    <span className="text-[#2C742F] font-poppins text-[20px] font-medium leading-[150%]">{product.price}</span>
                    <div className="rounded-[30px] bg-[rgba(234,75,72,0.10)] px-[10px] py-[5px] flex items-center">
                        <p className="text-[#EA4B48] font-poppins text-[12px] font-medium leading-[150%]">64% Off</p>
                    </div>
                </div>

                <hr className="border-t border-[#F2F2F2]" />

                <div className="flex justify-between sm:items-center gap-6 flex-col sm:flex-row">
                    <div className="flex justify-between items-center gap-2">
                        <p className="text-[#1A1A1A] font-poppins text-[14px] font-normal leading-[150%]">Brand:</p>
                        <div className="flex flex-col items-center rounded-[4px] px-2 py-1.5 border border-[0.8px] border-[#E6E6E6] bg-[#FFFFFF]">
                            <img src="/leaf.png" alt="" />
                            <p className="text-[#555] font-[700] text-[12px] leading-[100%] font-[dancing-script]">farmary</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="text-[#1A1A1A] font-poppins text-[13px] font-normal leading-[150%]">Share Items</span>
                        <div className="w-[30px] h-[30px] hover:bg-[#00B207] rounded-full flex items-center justify-center bg-[#00B207] "><img src="/facebook.png" alt="" className="w-[15px] h-[15px]" /></div>
                        <div className="w-[30px] h-[30px] hover:bg-[#00B207] rounded-full flex items-center justify-center"><img src="/twitter 1.png" alt="" className="w-[15px] h-[15px]" /></div>
                        <div className="w-[30px] h-[30px] hover:bg-[#00B207] rounded-full flex items-center justify-center"><img src="/pintrest.png" alt="" className="w-[30px] h-[30px]" /></div>
                        <div className="w-[30px] h-[30px] hover:bg-[#00B207] rounded-full flex items-center justify-center"><img src="/instagram.png" alt="" className="w-[30px] h-[30px]" /></div>
                    </div>
                </div>

                <p className="text-[#808080] font-poppins text-[13px] font-normal leading-[150%]">Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices et ipsum. Nulla varius magna a consequat pulvinar. </p>

                <hr className="border-t border-[#F2F2F2]" />

                <div className="flex justify-between flex-col sm:flex-row items-center gap-5">
                    <div className="flex items-center justify-evenly py-1 w-[120px] rounded-[170px] border border-[#E6E6E6] bg-[#FFFFFF]">
                        <p onClick={Decrement} className="w-[30px] h-[30px] text-[21px] bg-[#F2F2F2] p-2 rounded-full flex items-center justify-center">-</p>
                        <span className="text-[#1A1A1A] text-center font-poppins text-[16px] font-normal leading-[150%]">{counter}</span>
                        <p onClick={Increment} className="w-[30px] h-[30px] text-[21px] bg-[#F2F2F2] p-2 rounded-full flex items-center justify-center">+</p>
                    </div>

                    <div onClick={handleCartClick} className="flex sm:w-[300px] px-[20px] py-3 justify-center items-center gap-[12px] rounded-[43px] bg-[#00B207]" >
                        <p className="text-[#FFFFFF] font-poppins text-[14px] font-semibold leading-[120%]">Add to cart</p>
                        <img src="/Bag.png" alt="" className="w-[16px] h-[16px]" />
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

                <p className="text-[#1A1A1A] font-poppins text-[14px] font-semibold leading-[150%]">
                    Category: <span className="text-[#808080] font-medium">
                        <Link href={`/categories/${product.catName.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "")}`} className="underline">
                            {product.catName}
                        </Link>
                    </span>
                </p>
                <p className="text-[#1A1A1A] font-poppins text-[14px] font-semibold leading-[150%]">Tag : <span className="text-[#808080] font-medium"> Vegetables Healthy  {product.name} </span></p>
            </div>

        </section>
    )
}