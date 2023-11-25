/* eslint-disable react/prop-types */

const Header = ({ heading, subHeading }) => {
    return (
        <div >
            <p className="text-center py-2 text-[#D99904] italic">---{subHeading}---</p>
            <div className="flex justify-center">
                <p className="text-center py-4 px-16 mb-4 text-4xl border-y-4 w-fit uppercase">{heading}</p>
            </div>
        </div>
    );
};

export default Header;