import Navbar from "../components/common/Navbar"
import Top from "./Top"
import Blog from "./Blogs"
import BlogDetails from "./BlogDetails"
import Footer from "../components/common/Footer"
export default function Blogs() {
    return (
        <>
            <Navbar />
            <Top />
            <section className="mt-15 mb-15 flex flex-col lg:flex-row ml-5 mr-5 sm:ml-29 sm:mr-29 justify-between gap-15 lg:gap-3">
                <BlogDetails />
                <Blog />
            </section>
            <Footer/>
        </>
    )
}