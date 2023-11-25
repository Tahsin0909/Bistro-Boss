import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover/Cover";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import useMenu from "../Hooks/useMenu";
import ShopTab from "../../Shared/ShopTab/ShopTab";


const OurShop = () => {
    const [menu] = useMenu()
    const saladItems = menu?.filter(items => items.category === 'salad')
    const dessertItems = menu?.filter(items => items.category === 'dessert')
    const pizzaItems = menu?.filter(items => items.category === 'pizza')
    const soupItems = menu?.filter(items => items.category === 'soup')
    const drinksItems = menu?.filter(items => items.category === 'drinks')

    return (
        <div>
            <Helmet>
                <title>Bistro | Shop</title>
            </Helmet>
            <Cover img={'https://i.ibb.co/QPDxqkN/banner2.jpg'} title={'Our Shop'}></Cover>
            {/* Tabs */}
            <Tabs defaultIndex={0}>
                <TabList className={'mt-6 mb-4'}>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>

                <TabPanel>
                    <ShopTab item={saladItems}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab item={pizzaItems}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab item={soupItems}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab item={dessertItems}></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab item={drinksItems}></ShopTab>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default OurShop;