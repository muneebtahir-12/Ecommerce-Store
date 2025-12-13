"use client";
import { useContext } from "react";
import { useRouter } from "next/navigation";
import { CartContext } from "../context/CartContext";
import Link from "next/link";
import { CounterContext } from "../context/CounterContext";
export default function Cart() {
  const router = useRouter();
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const {decrement,resetCount} = useContext(CounterContext);
  const handleClearCart = () => {
  clearCart();   // empty cart
  resetCount();  // reset count to 0
};

  // Calculate subtotal with price as number
  const subtotal = cartItems.reduce(
    (acc, item) => acc + Number(item.price) * item.quantity,
    0
  );

  const handleIncrement = (id, qty) => {
    updateQuantity(id, qty + 1);
  };

  const handleDecrement = (id, qty) => {
    if (qty > 1) updateQuantity(id, qty - 1);
  };

  return (
    <div className="mx-5 lg:mx-29 mb-15">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">My Shopping Cart</h2>

      <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
        {/* LEFT SIDE TABLE */}
        <div className="w-full lg:flex-1">
          <div className="bg-white rounded-lg border border-[#E6E6E6]">
            {/* Table Header */}
            <div className="grid grid-cols-4 p-3 sm:p-4 border-b border-[#E6E6E6] text-xs sm:text-sm text-[#808080] font-normal">
              <p>PRODUCT</p>
              <p className="text-center">PRICE</p>
              <p className="text-center">QUANTITY</p>
              <p className="text-right">SUBTOTAL</p>
            </div>

            {/* Cart Items */}
            {cartItems.length === 0 ? (
              <p className="p-4 text-center text-gray-500">Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-4 p-3 sm:p-4 items-center border-b border-[#E6E6E6] gap-y-2 sm:gap-y-0">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <img src={item.image} className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg object-cover" />
                    <span className="font-medium text-sm sm:text-base hidden sm:block">{item.name}</span>
                  </div>

                  <p className="text-center text-gray-700 text-sm sm:text-base">${Number(item.price).toFixed(2)}</p>

                  {/* Quantity */}
                  <div className="flex justify-center">
                    <div className="flex items-center border border-[#E6E6E6] p-1 rounded-3xl overflow-hidden">
                      <button
                        onClick={() => handleDecrement(item.id, item.quantity)}
                        className="bg-[#F2F2F2] w-7 h-6 sm:w-8 sm:h-8 rounded-full text-[10px] sm:text-[15px]"
                      >
                        −
                      </button>
                      <span className="px-1.5 sm:px-3 text-[13px] sm:text-sm">{item.quantity}</span>
                      <button
                        onClick={() => handleIncrement(item.id, item.quantity)}
                        className="bg-[#F2F2F2] w-7 h-6 sm:w-8 sm:h-8 text-[10px] sm:text-[15px] rounded-full">
                        +
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col lg:flex-row lg:justify-end lg:gap-2  items-end">
                    <p className="text-right text-gray-900 text-sm sm:text-base">
                      ${(Number(item.price) * item.quantity).toFixed(2)}
                    </p>
                    <div className="p-1 rounded-full border-1 border-[#E6E6E6] w-[24px] h-[24px] flex items-center justify-center cursor-pointer hover:bg-gray-200 mt-2">
                      <button onClick={() => {
                        decrement();
                        removeFromCart(item.id)
                      }}>x</button>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-between px-3 sm:px-4 mt-4 sm:mt-6 mb-4 gap-3 sm:gap-0">
              <button
                onClick={() => router.back()} // Go back to previous page
                className="w-full sm:w-auto text-[#4D4D4D] font-poppins text-[14px] font-semibold leading-[120%] bg-gray-200 px-4 py-3 rounded-full">
                Return to shop
              </button>
              <button onClick={handleClearCart
              } className="w-full sm:w-auto bg-gray-200 px-4 py-3 rounded-full text-[#4D4D4D] font-poppins text-[14px] font-semibold leading-[120%]">
                Update Cart
              </button>
            </div>
          </div>

          {/* Coupon Section */}
          <div className="flex flex-col sm:flex-row px-4 py-5 gap-3 sm:gap-4 items-center mt-6 bg-white rounded-lg border border-[#E6E6E6]">
            <p className="text-[#1A1A1A] font-poppins text-[18px] sm:text-[20px] font-medium leading-[150%]">Coupon Code</p>
            <input
              type="text"
              placeholder="Enter code"
              className="flex-1 w-full px-4 py-3 text-sm outline-none focus:outline-none focus:ring-0 focus:border-[#E6E6E6] border border-[#E6E6E6] rounded-[50px]" />
            <button className="bg-black rounded-[50px] text-white px-6 py-3 text-sm w-full sm:w-auto">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* RIGHT SUMMARY CARD */}
        <div className="bg-white w-full lg:w-80 h-max border border-[#E6E6E6] rounded-lg p-5 sm:p-6 shadow-sm">
          <h3 className="font-semibold text-lg sm:text-xl mb-5 sm:mb-6">Cart Total</h3>

          <div className="flex justify-between border-b border-[#E6E6E6] py-2 sm:py-3 text-sm sm:text-base">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between border-b border-[#E6E6E6] py-2 sm:py-3 text-sm sm:text-base">
            <span>Shipping</span>
            <span className="text-green-600 font-medium">Free</span>
          </div>

          <div className="flex justify-between py-3 sm:py-4 font-bold text-base sm:text-lg">
            <span>Total</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <Link href={`/cart/checkout`}>
        <button className="w-full bg-[#00B207] hover:bg-green-700 transition text-white py-3 mt-2 rounded-full font-medium text-sm sm:text-base">
          Proceed to checkout
        </button>
      </Link>
    </div>
      </div >
    </div >
  );
}
