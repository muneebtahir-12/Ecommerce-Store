"use client";

import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import { CounterContext } from "../context/CounterContext";
export default function WishListItems() {
  const { wishlist, removeWishlistItem } = useContext(WishlistContext);
const { addToCart } = useContext(CartContext);
const { increment } = useContext(CounterContext);

const handleAddToCart = (item) => {
  addToCart(item);
  increment();
  removeWishlistItem(item.id);
}
  return (
    <section className="flex flex-col gap-8 mb-16">
      <h3 className="text-[#1A1A1A] text-center font-poppins text-2xl sm:text-3xl font-semibold">
        Wishlist Items
      </h3>

      <div className="mx-5 lg:mx-29 rounded-md border border-[#E6E6E6] overflow-hidden">
        {/* Header Row */}
        <div className="grid grid-cols-4 p-4 bg-[#F9F9F9] text-[#1A1A1A] font-semibold border-b border-[#E6E6E6]">
          <span>Product</span>
          <span>Price</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {/* Empty State */}
        {wishlist.length === 0 && (
          <p className="text-center p-6 text-gray-500">No items in wishlist.</p>
        )}

        {/* Wishlist Items */}
        {wishlist.map((item) => (
          <div key={item.id} className="grid grid-cols-4 items-center p-4 border-b border-[#E6E6E6] gap-4">
            {/* Product */}
            <div className="flex items-center gap-3">
              <img src={item.image}
                alt={item.name}
                className="w-[80px] h-[80px] object-cover rounded"
              />
              <span className="text-[#1A1A1A] font-poppins text-[16px] font-medium">
                {item.name}
              </span>
            </div>

            {/* Price */}
            <span className="text-[#1A1A1A] font-poppins text-[16px] font-normal">
              ${item.price}
            </span>

            {/* Stock Status */}
            <div
              className={`w-fit px-3 py-1 rounded-[4px] text-center ${item.inStock
                  ? "bg-[rgba(32,181,38,0.2)] text-[#2C742F]"
                  : "bg-[rgba(255,0,0,0.2)] text-[#D32F2F]"
                } font-poppins text-[14px]`}
            >
              {item.inStock ? "In Stock" : "Out of Stock"}
            </div>

            {/* Action: Add to Cart / Remove */}
            <button
              onClick={handleAddToCart.bind(null, item)}
              className="w-30 py-3 bg-[#00B207] rounded-[48px] text-white rounded hover:bg-[#125514] transition text-white font-poppins text-[14px] font-semibold leading-[120%]
"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
