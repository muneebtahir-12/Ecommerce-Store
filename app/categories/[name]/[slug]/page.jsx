"use client";

import { useParams } from "next/navigation";
import Navbar from "../../../components/common/Navbar";
import Footer from "../../../components/common/Footer";
import Check from "./Check";
import Details from "./Details";
import data from "../../../components/data/data";

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\u00A0\u200B\u200C\u200D]+/g, "-")
    .replace(/[^\w-]+/g, "");
}

export default function Page() {
  const { name, slug } = useParams();
  
  // Find the product by slugifying the name and matching with slug
  const product = data.details.find(p => slugify(p.name) === slug);
  const category = data.types.find(c => slugify(c.name) === name);

  return (
    <>
      <Navbar />
      <div className="ml-5 sm:ml-29 mr-5 sm:mr-29">
        <Check product={product} category={category} />
      </div>
      <Details />
      <Footer />
    </>
  );
}
