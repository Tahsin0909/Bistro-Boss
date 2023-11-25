import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import Header from "../../Shared/Header/Header";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../Hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu()
    const offeredItems = menu?.filter(items => items.category === 'offered')
    const dessertItems = menu?.filter(items => items.category === 'dessert')
    const pizzaItems = menu?.filter(items => items.category === 'pizza')
    const saladItems = menu?.filter(items => items.category === 'salad')
    const soupItems = menu?.filter(items => items.category === 'soup')
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <Cover img={'https://i.ibb.co/YDvKS7n/banner3.jpg'} title={'our menu'}></Cover>
            {/* today Offer */}
            <Header subHeading={"Dont't Miss"} heading={'Today offer'}></Header>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
                {
                    offeredItems?.map(data => <MenuItems key={data._id} data={data}></MenuItems>)
                }
            </div>
            {/* Deserts section */}
            <Cover img={'https://i.ibb.co/Hhw1NNx/dessert-bg.jpg'} title={'Deserts'}></Cover>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10 mt-6">
                {
                    dessertItems?.map(data => <MenuItems key={data._id} data={data}></MenuItems>)
                }
            </div>
            {/* Pizza section */}
            <Cover img={'https://i.ibb.co/SrNfV7M/pizza-bg.jpg'} title={'Pizza'}></Cover>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10 mt-6">
                {
                    pizzaItems?.map(data => <MenuItems key={data._id} data={data}></MenuItems>)
                }
            </div>
            {/* Salad section */}
            <Cover img={'https://i.ibb.co/1q0GgPp/salad-bg.jpg'} title={'salad'}></Cover>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10 mt-6">
                {
                    saladItems?.map(data => <MenuItems key={data._id} data={data}></MenuItems>)
                }
            </div>
            {/* soup section */}
            <Cover img={'https://i.ibb.co/hWwjkv6/soup-bg.jpg'} title={'soup'}></Cover>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10 mt-6">
                {
                    soupItems?.map(data => <MenuItems key={data._id} data={data}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default Menu;