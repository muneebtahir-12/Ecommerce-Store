"use client";
import { useState } from "react";
import Navbar from "../../components/common/Navbar"
import Footer from "../../components/common/Footer";
import Top from "../../wishlist/Top"
import Form from "./Form"
export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("cod");

  return (
    <>
    <Navbar/>
    <Top category={{name:"Checkout"}}/>
    <Form/>
    <Footer/>
    </>
  );
}
