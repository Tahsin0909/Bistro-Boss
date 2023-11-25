/* eslint-disable react/prop-types */
import ShopCart from "../shopCart/ShopCart";

const ShopTab = ({item}) => {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
            {
                item?.map(data => <ShopCart key={data._id} data={data}></ShopCart>)
            }
        </div>
    );
};

export default ShopTab;