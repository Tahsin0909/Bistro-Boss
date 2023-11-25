import Header from "../../Shared/Header/Header";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import useMenu from "../Hooks/useMenu";

const OurMenu = () => {
    const [menu] = useMenu()
    const popularItems = menu?.filter(items => items.category === 'popular')
    return (
        <div>
            <Header
                subHeading={'Check it Out'}
                heading={'From Our Menu'}
            ></Header>
            <div className="grid grid-cols-1 md:grid-cols-2 mb-10">
                {
                    popularItems?.map(data => <MenuItems key={data._id} data={data}></MenuItems>)
                }
            </div>
        </div>
    );
};

export default OurMenu;