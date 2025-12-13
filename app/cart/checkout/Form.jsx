"use client";
import { useState,useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Checkout() {
    const [paymentMethod, setPaymentMethod] = useState("cod");
    const { cartItems } = useContext(CartContext);
 const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <div className="max-w-7xl mx-auto p-5 lg:p-10 flex flex-col lg:flex-row gap-8">

            <div className=" flex flex-col p-6 rounded-lg">

                {/* Title */}
                <div className="border-b border-b-[#E6E6E6] pb-4">
                    <h2 className="text-xl font-semibold mb-6">Billing Information</h2>

                    {/* First Row */}
                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-[#1A1A1A] font-poppins text-sm font-normal leading-[150%]">First Name</p>
                            <input className="w-full px-5 py-3 rounded-md border border-[#E6E6E6] bg-white focus:outline-none" type="text" placeholder="First Name" />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-[#1A1A1A] font-poppins text-sm font-normal leading-[150%]">Last Name</p>
                            <input className="w-full px-5 py-3 rounded-md border border-[#E6E6E6] bg-white focus:outline-none" type="text" placeholder="Last Name" />
                        </div>

                        <div className="flex flex-col gap-2 w-full">
                            <p className="text-[#1A1A1A] font-poppins text-sm font-normal leading-[150%]">
                                Company Name <span className="text-gray-500">(optional)</span>
                            </p>
                            <input className="w-full px-5 py-3 rounded-md border border-[#E6E6E6] bg-white focus:outline-none" type="text" placeholder="Company Name" />
                        </div>
                    </div>

                    {/* Street Address */}
                    <div className="w-full mt-4">
                        <p className="text-[#1A1A1A] font-poppins text-sm leading-[150%]">Street Address</p>
                        <input className="w-full py-3 pl-4 rounded-md border border-[#E6E6E6] bg-white focus:outline-none" type="text" placeholder="Street Address" />
                    </div>

                    {/* Country / State / Zip */}
                    <div className="flex flex-col lg:flex-row justify-between gap-4 mt-4">
                        <div className="w-full">
                            <p className="text-[#1A1A1A] font-poppins text-sm leading-[150%]">Country/Region</p>
                            <select className="text-[#979595] w-full px-[18px] py-3 rounded-md border border-[#E6E6E6] bg-white focus:outline-none">
                                <option>Pakistan</option>
                                <option>India</option>
                                <option>Iran</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <p className="text-[#1A1A1A] font-poppins text-sm leading-[150%]">State</p>
                            <select className="text-[#979595] w-full px-[18px] py-3 rounded-md border border-[#E6E6E6] bg-white focus:outline-none">
                                <option>Asia</option>
                                <option>Europe</option>
                                <option>Iran</option>
                            </select>
                        </div>

                        <div className="w-full">
                            <p className="text-[#1A1A1A] font-poppins text-sm leading-[150%]">Zip Code</p>
                            <input type="text" className="w-full py-3 pl-4 rounded-md border border-[#E6E6E6] bg-white focus:outline-none" placeholder="Zip Code" />
                        </div>
                    </div>

                    {/* Email + Phone */}
                    <div className="flex flex-col lg:flex-row justify-between gap-4 mt-4">
                        <div className="flex flex-col w-full gap-2">
                            <p className="text-[#1A1A1A] font-poppins text-sm leading-[150%]">Email Address</p>
                            <input type="text" className="w-full px-5 py-3 rounded-md border border-[#E6E6E6] bg-white focus:outline-none" placeholder="Email Address" />
                        </div>

                        <div className="flex flex-col w-full gap-2">
                            <p className="text-[#1A1A1A] font-poppins text-sm leading-[150%]">Phone Number</p>
                            <input type="text" className="w-full px-5 py-3 rounded-md border border-[#E6E6E6] bg-white focus:outline-none" placeholder="Phone Number" />
                        </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center gap-2 mt-4">
                        <input type="checkbox" id="agree" className="w-4 h-4" />
                        <label htmlFor="agree" className="text-[#1A1A1A] font-poppins text-sm leading-[150%]">
                            Ship to a different address
                        </label>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold mb-4">Additional Information</h2>

                    <p className="text-[#1A1A1A] font-poppins text-sm mb-2">Order Notes</p>
                    <textarea
                        className="w-full h-32 p-3 border border-[#E6E6E6] rounded-md focus:outline-none"
                        placeholder="Notes about your order, e.g. special notes for delivery"
                    ></textarea>
                </div>

            </div>





            {/* Order Summary */}
            <div className="w-full lg:w-[380px] bg-white p-6 rounded-lg shadow-md self-start">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

                <div className="mb-4">
                    {cartItems.length === 0 ? (
                        <p className="text-gray-500">No items is in the Cart</p>
                    ) : (
                        cartItems.map((item) => (
                            <div key={item.id} className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-1">
                                    <img src={item.image} alt="" className="w-[60px] h-[60px]" />
                                    <span className="text-[#1A1A1A] font-poppins text-sm font-normal leading-[150%]">{item.name} x{item.quantity}</span>
                                </div>
                                <span className="text-[#1A1A1A] font-poppins text-sm font-semibold leading-[150%]">${item.price * item.quantity}</span>
                            </div>
                        ))
                    )}
                </div>

                <div className="flex justify-between border-t border-b border-gray-200 py-2 mb-4">
                    <span className="text-[#4D4D4D] font-poppins text-sm font-normal leading-[150%]">Subtotal:</span>
                    <span  className="text-[#1A1A1A] font-poppins text-sm font-semibold leading-[150%]">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-gray-200 py-2 mb-4">
                    <span className="text-[#4D4D4D] font-poppins text-sm font-normal leading-[150%]">Shipping:</span>
                    <span className="text-green-600 font-medium">Free</span>
                </div>
                <div className="flex justify-between font-bold text-lg mb-6">
                    <span className="text-[#4D4D4D] font-poppins text-sm font-normal leading-[150%]">Total:</span>
                    <span  className="text-[#1A1A1A] font-poppins text-md font-semibold leading-[150%]">${subtotal.toFixed(2)}</span>
                </div>

                <h3 className="text-lg font-semibold mb-3">Payment Method</h3>
                <div className="flex flex-col gap-2 mb-6">
                    <label className="inline-flex items-center gap-2 text-[#5f5d5d] font-poppins text-sm font-normal leading-[150%]">
                        <input type="radio" name="payment" value="cod" checked={paymentMethod === "cod"} onChange={() => setPaymentMethod("cod")} />
                        Cash on Delivery
                    </label>
                    <label className="inline-flex items-center gap-2 text-[#5f5d5d] font-poppins text-sm font-normal leading-[150%]">
                        <input type="radio" name="payment" value="paypal" checked={paymentMethod === "paypal"} onChange={() => setPaymentMethod("paypal")} />
                        Paypal
                    </label>
                    <label className="inline-flex items-center gap-2 text-[#5f5d5d] font-poppins text-sm font-normal leading-[150%]">
                        <input
                            type="radio"
                            name="payment"
                            value="amazon"
                            checked={paymentMethod === "amazon"}
                            onChange={() => setPaymentMethod("amazon")}
                        />
                        Amazon Pay
                    </label>
                </div>

                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-full font-semibold transition">
                    Place Order
                </button>
            </div>
        </div>
    )
}