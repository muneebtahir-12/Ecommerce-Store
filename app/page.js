import Navbar from "./components/home/Navbar"
import About from "./components/home/AboutAndTypes"
import Services from "./components/home/Services";
import Details from "./components/home/Details";
import Categories from "./components/home/Categories";
import Products from "./components/home/Products";
import SpecialProducts from "./components/home/SpecialProducts";
import Team from "./components/common/Team"
import Video from "./components/home/VideoEx";
import Reviews from "./components/common/Reviews";
import Banner from "./components/common/Banner";
import Footer from "./components/home/Footer";
export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Services />
      <Details />
      <Categories />
      <Products />
      <SpecialProducts />
      <Video />
      <Team />
      <Reviews />
      <Banner />
      <Footer />
    </>
  );
}
