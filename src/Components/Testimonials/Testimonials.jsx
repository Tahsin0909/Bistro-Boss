import Header from "../../Shared/Header/Header";
import { SwiperSlide, Swiper } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@mui/material";


const Testimonials = () => {
    const [reviews, setReviews] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Header heading={'TESTIMONIALS'} subHeading={'What Our Clients Say'}></Header>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-10">

                {
                    reviews?.map(data => <SwiperSlide key={data._id}>
                        <div className="flex flex-col justify-center items-center  text-center">
                            <Rating
                                name="read-only"
                                value={data.rating}
                            />
                            <p className="text-base w-[700px]">{data.details}</p>
                            <h3 className="text-[#CD9003] text-lg my-4">{data.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;