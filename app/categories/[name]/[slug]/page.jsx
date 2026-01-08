"use client";

import { useParams } from "next/navigation";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import Check from "./Check";
import Details from "./Details";

export default function Page() {
  const { cat, product } = useParams();
console.log(cat);
console.log(product)
  return (
    <>
      <Navbar />
      <div className="ml-5 sm:ml-29 mr-5 sm:mr-29">
        <Check category={cat} product={product} />
      </div>
      <Details />
      <Footer />
    </>
  );
}
