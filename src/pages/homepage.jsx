import Navbar from "../Components/Elements/Navbar/Navbar";
import Hero from "../Components/Elements/Hero/Hero";
import CardLayouts from "../Components/Layouts/CardLayouts";
import Cta from "../Components/Elements/Cta/Cta";
import Footer from "../Components/Elements/Footer/Footer";

const Homepage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <CardLayouts/>
            <Cta/>
            <Footer/>
        </>
    );
};

export default Homepage;