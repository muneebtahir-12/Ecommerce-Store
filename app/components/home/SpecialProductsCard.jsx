"use client";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import { CounterContext } from "../../context/CounterContext";
import Check from "../../categories/[name]/Check";

export default function SpecialProductsCard({ id, name, price, image }) {
    const { cartItems, addToCart, removeFromCart } = useContext(CartContext);
    const { wishlist, addToWishlist, removeWishlistItem } = useContext(WishlistContext);
    const { increment, decrement } = useContext(CounterContext);

    const isInCart = cartItems.some((item) => item.id === id);
    const isInWishlist = wishlist.some((item) => item.id === id);

    const [eyeClicked, setEyeClicked] = useState(false);

    const product = {
        id,
        name,
        image,
        price: parseFloat(price.toString().replace("$", "")),
    };

    // Lock scroll when modal opens
    useEffect(() => {
        document.body.style.overflow = eyeClicked ? "hidden" : "auto";
        return () => (document.body.style.overflow = "auto");
    }, [eyeClicked]);

    const handleCartClick = () => {
        if (isInCart) {
            removeFromCart(id);
            decrement();
        } else {
            addToCart(product);
            increment();
        }
    };

    const handleWishlistClick = () => {
        isInWishlist ? removeWishlistItem(id) : addToWishlist(product);
    };

    return (
        <>
            <div className="group flex items-center gap-3 rounded-lg border border-[#E6E6E6] bg-white p-2 relative overflow-hidden">

                {/* Image (always visible) */}
                <img src={image} alt={name} className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px]"/>

                <div className="flex-1">

                    {/* Name (always visible) */}
                    <p className="text-[#4D4D4D] group-hover:text-green-500 transition lg:mt-4 font-poppins text-[14px]">
                        {name}
                    </p>

                    {/* Price (hide on hover) */}
                    <span className="block text-[#1A1A1A] font-medium group-hover:hidden">
                        {price}
                    </span>

                    {/* Stars (hide on hover) */}
                    <div className="flex gap-0.5 mt-1 group-hover:hidden">
                        {[...Array(4)].map((_, i) => (
                            <img key={i} src="/yellowstar.png" className="w-[14px] h-[14px]" />
                        ))}
                        <img src="/whitestar.png" className="w-[14px] h-[14px]" />
                    </div>

                    {/* Icons (show on hover) */}
                    <div className="flex gap-2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                        {/* Cart */}
                        <button onClick={handleCartClick} className={`p-2 rounded-full border ${isInCart
                                    ? "bg-green-600 border-green-600"
                                    : "border-[#F2F2F2] hover:bg-green-600"
                                }`}>
                            <img src="/productbag.png" className="w-[16px] h-[16px]" />
                        </button>

                        {/* Eye */}
                        <button onClick={() => setEyeClicked(true)} className="w-[36px] h-[36px] rounded-full flex items-center justify-center border border-[#F2F2F2] hover:bg-green-600">
                            <img src="/eye.png" className="w-[18px] h-[18px]" />
                        </button>

                        {/* Wishlist */}
                        <button
                            onClick={handleWishlistClick}
                            className={`p-2 rounded-full border ${isInWishlist
                                    ? "bg-red-500 border-red-500"
                                    : "border-[#F2F2F2] hover:bg-green-600"
                                }`}>
                            <img src="/whishlist.png" className="w-[16px] h-[16px]" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {eyeClicked && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-2">
        <div className="bg-white rounded-xl relative w-full max-w-6xl max-h-[90vh] p-6 overflow-y-auto">
            <button 
                onClick={() => setEyeClicked(false)} 
                className="absolute top-3 right-3 text-xl font-bold"
            >
                ✖
            </button>
            <Check product={product} />
        </div>
    </div>
)}

        </>
    );
}
