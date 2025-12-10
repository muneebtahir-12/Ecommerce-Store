import React from "react";
import Navbar from "../../../components/common/Navbar"
import Footer from "../../../components/common/Footer"
import Check from "../Check";
import Details from "../Deatils";
export default function Page(){
    return(
        <>
         <Navbar/>
         <div className="ml-5 sm:ml-29 mr-5 sm:mr-29">
            <Check/>
         </div>
         <Details/>
            <Footer/>
        </>
    )
}