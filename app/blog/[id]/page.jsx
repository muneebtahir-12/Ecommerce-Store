"use client"
import data from "../../components/data/data.json"
import Navbar from "../../components/common/Navbar"
import Details from "./Details";
import BlogDetails from "../BlogDetails";
import Top from "./Top"
import Footer from "../../components/common/Footer";
import { useParams } from "next/navigation";
export default function Page() {
  const { id } = useParams();         
  const blogId = parseInt(id);  
    
  const blog = data.blogs.find((b) => b.id === blogId);

  return (
    <>
      <Navbar />
      <Top />
      <div className="flex mb-20 flex-col lg:flex-row gap-10 justify-between ml-5 sm:ml-28 mr-5 sm:mr-28">
        <Details blog={blog} />
        <BlogDetails />
      </div>
      <Footer />
    </>
  );
}
