import Navbar from "../Components/Elements/Navbar/Navbar";
import Hero from "../Components/Elements/Hero/Hero";
import CardLayouts from "../Components/Layouts/CardLayouts";

const Homepage = () => {
    return (
        <>
            <Navbar></Navbar>
            <Hero></Hero>
            <CardLayouts/>
        </>
    );
};

export default Homepage;