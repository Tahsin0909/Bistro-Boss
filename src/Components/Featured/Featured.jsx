import Header from "../../Shared/Header/Header";

const Featured = () => {
    return (
        <div className="hero h-[80vh] bg-fixed" style={{ backgroundImage: 'url(https://i.ibb.co/hKk3yv4/featured.jpg' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content">
                <div className="">
                    <div className=" ">
                        <div>
                            <Header subHeading={'FROM OUR MENU'} heading={'Check it out'}></Header>
                        </div>
                        <div className="flex gap-6 items-center justify-center flex-col lg:flex-row mt-2">
                            <img src={'https://i.ibb.co/hKk3yv4/featured.jpg'} className="max-w-sm rounded-lg shadow-2xl" />
                            <div className="w-[500px]">
                                <p>
                                    March 20, 2023 <br />
                                    WHERE CAN I GET SOME?
                                </p>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quo totam atque doloribus explicabo? oluptatem doloremque. Illum porro unde facere voluptas aut doloribus dolorum ea, fugiat ratione enim deleniti.</p>
                                <button className="btn btn-outline border-0 text-white border-b-4">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;