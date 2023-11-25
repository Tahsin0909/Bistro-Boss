// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import './styles.css'


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import Header from '../../Shared/Header/Header';
const OrderSwiper = () => {
    return (
        <div className='py-10'>
            <Header
            heading={'Order Online'}
            subHeading={'From 11:00am to 10:00pm'}
            ></Header>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-96 object-fill' src="https://i.ibb.co/LN3vxNf/slide2.jpg" alt="" />
                    <h3 className='text-3xl text-center uppercase -translate-y-16 text-white shadow-xl opacity-50'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 object-fill' src="https://i.ibb.co/9nwnLLG/slide5.jpg" alt="" />
                    <h3 className='text-3xl text-center uppercase -translate-y-16 text-white shadow-xl opacity-50'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 object-fill' src="https://i.ibb.co/qj5g1zq/slide3.jpg" alt="" />
                    <h3 className='text-3xl text-center uppercase -translate-y-16 text-white shadow-xl opacity-50'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 object-fill' src="https://i.ibb.co/z660rps/slide4.jpg" alt="" />
                    <h3 className='text-3xl text-center uppercase -translate-y-16 text-white shadow-xl opacity-50'>Deserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-96 object-fill' src="https://i.ibb.co/Yj4kV5G/slide1.jpg" alt="" />
                    <h3 className='text-3xl text-center uppercase -translate-y-16 text-white shadow-xl opacity-50'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderSwiper;