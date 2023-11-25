import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const Banner = () => {
    return (
        <div className="w-full text-center">
            <Carousel infiniteLoop='true' autoPlay='true' interval='3000' >
                <div>
                    <img src="https://i.ibb.co/6gqmckH/02.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/z241YJb/04.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/SfzK0gn/03.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/NYD9WsB/05.png" />
                </div>
                <div>
                    <img src="https://i.ibb.co/YPNtx7Z/01.jpg" />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;