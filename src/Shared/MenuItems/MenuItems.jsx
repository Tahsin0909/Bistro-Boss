/* eslint-disable react/prop-types */

const MenuItems = ({ data }) => {
    return (
        <div className="flex gap-2 p-2">
            <div>
                <img
                style={{
                    borderRadius:'0 200px 200px 200px'
                }}
                className="w-28" src={data?.image} alt="" />
            </div>
            <div className="w-96">
                <p className="font-semibold uppercase">{data?.name}---------</p>
                <p>{data?.recipe}</p>
            </div>
            <p className="text-lg text-[#D99904]">${data?.price}</p>
        </div>
    );
};

export default MenuItems;