import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBAr/NavBar";


const Main = () => {
    const Location = useLocation()
    console.log(Location.pathname);
    return (
        <div>
            {
                Location.pathname !== "/logIn" && Location.pathname !== "/signUp" && <NavBar></NavBar>
            }
            <Outlet></Outlet>
            {
                Location.pathname !== "/logIn" && Location.pathname !== "/signUp" && <Footer></Footer>
            }
        </div>
    );
};

export default Main;