import Navbar from "../components/common/Navbar";
import Top from "../wishlist/Top"
import CartItems from "./CartItems";
import Footer from "../components/common/Footer";
export default function Cart(){
    return(
        <>
        <Navbar/>
        <Top category={{name:"Shopping Cart"}}/>
        <CartItems/>
        </>
    )
}