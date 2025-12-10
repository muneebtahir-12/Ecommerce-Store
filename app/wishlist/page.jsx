import Navbar from "../components/common/Navbar"
import Top from "./Top"
import WishListItems from "./WishListItems"
import Footer from "../components/common/Footer"

export default function Wishlist({children}) {
    return (
        <>
            <Navbar />
            <Top category={{ name: "Wishlist" }} />
            
            <WishListItems />
            <Footer />
        </>
    )
}