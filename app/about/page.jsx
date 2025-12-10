import Navbar from "../components/common/Navbar";
import OrganicFood from "./OrganicFood";
import Team from "../components/common/Team";
import Reviews from "../components/common/Reviews";
import Banner from "../components/common/Banner";
import Footer from "../components/common/Footer";
export default function About() {
    return (
        <>
            <Navbar />
            <OrganicFood />
            <div className="bg-gradient-to-b from-[#F2F2F2] to-[#FFFFFF] py-15"><Team /></div>
            <div className="bg-gradient-to-b from-[#F2F2F2] to-[#FFFFFF] -mb-20 py-5"><Reviews /></div>
            <Banner />
            <Footer />
        </>
    )
}