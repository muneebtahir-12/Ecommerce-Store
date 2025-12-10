"use client";

import data from "../../components/data/data.json";
import { useParams } from "next/navigation";
import Navbar from "../../components/common/Navbar";
import Top from "../../wishlist/Top";
import Details from "./Deatils";
import AllProducts from "./Products";
import Footer from "../../components/common/Footer";

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\u00A0\u200B\u200C\u200D]+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export default function TypePage() {
  const { name } = useParams();
  const category = data.types.find((c) => slugify(c.name) === name);
  return (
    <>
      <Navbar />
      <Top category={category} />
      <div className="flex mb-10 sm:mr-29 mt-12 mr-5 flex-col gap-5 ml-5 sm:ml-29 lg:flex-row">
        <Details category={category} />
        <AllProducts category={category} />
      </div>
      <Footer />
    </>
  );
}
