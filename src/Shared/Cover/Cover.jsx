/* eslint-disable react/prop-types */

const Cover = ({img, title}) => {
    return (
        <div>
            <div className="hero h-[50vh]" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-content text-center text-white">
                    <div className=" py-14 mt-10 px-20 bg-black bg-opacity-60">
                        <p className="mb-5 text-4xl font-bold uppercase">{title}</p>
                        <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, beatae!</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cover;