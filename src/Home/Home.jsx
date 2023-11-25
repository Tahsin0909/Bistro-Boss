import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import Featured from "../Components/Featured/Featured";
import OurMenu from "../Components/OurMmenu/OurMenu";
import OrderSwiper from "../Components/SwiperJs/OrderSwiper";
import Testimonials from "../Components/Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner />
            <OrderSwiper />
            <OurMenu />
            <Featured />
            <Testimonials />
        </div>
    );
};

export default Home;