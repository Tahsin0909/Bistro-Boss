import { Link, NavLink } from "react-router-dom";
import { FaRegUserCircle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import toast, { Toaster } from "react-hot-toast";
import { GiShoppingCart } from "react-icons/gi";
import useCart from "../../Components/Hooks/useCart";


const NavOptions = () => {
    const { AuthUser, LogOut } = useContext(AuthContext)
    const [cart, refetch] = useCart()

    return (
        <div className="flex items-center lg:flex-row flex-col">
            <li>
                <NavLink to={`/`}
                    className={({ isActive, isPending }) => isActive ? " text-[#EEFF25] font-semibold" : isPending ? "pending" : ""
                    }
                >
                    HOME
                </NavLink>
            </li>
            <li>
                <NavLink to={`/contactUs`}
                    className={({ isActive, isPending }) => isActive ? " text-[#EEFF25] font-semibold" : isPending ? "pending" : ""
                    }
                >
                    CONTACT US
                </NavLink>
            </li>
            <li>
                <NavLink to={`/dashBoard`}
                    className={({ isActive, isPending }) => isActive ? " text-[#EEFF25] font-semibold" : isPending ? "pending" : ""
                    }
                >
                    DASHBOARD
                </NavLink>
            </li>
            <li>
                <NavLink to={`/menu`}
                    className={({ isActive, isPending }) => isActive ? " text-[#EEFF25] font-semibold" : isPending ? "pending" : ""
                    }
                >
                    OUR MENU
                </NavLink>
            </li>
            <li>
                <NavLink to={`/shop`}
                    className={({ isActive, isPending }) => isActive ? " text-[#EEFF25] font-semibold" : isPending ? "pending" : ""
                    }
                >
                    OUR SHOP
                </NavLink>
            </li>
            <li>
                <NavLink to={`/dashBoard/cart`}
                    className={({ isActive, isPending }) => isActive ? " text-[#EEFF25] font-semibold" : isPending ? "pending" : ""
                    }
                >
                    <div>
                        <GiShoppingCart size={30} />
                        <div className="rounded-full bg-[#EEFF25]  absolute translate-x-5 -translate-y-8">
                            <p className="text-black text-xs p-[2px] ">{cart?.length || 0}</p>
                        </div>
                    </div>
                </NavLink>
            </li>
            {
                AuthUser ?
                    <div className="flex gap-2 items-center">
                        <li>
                            <Link onClick={() => { LogOut(), toast.success(`Log Out Successful`), refetch() }}> Log Out</Link>
                        </li>
                        <div>
                            <FaRegUserCircle size={40} className="text-green-600" />
                        </div>
                    </div>
                    :
                    <div className="flex gap-2 items-center">
                        <li>
                            <NavLink to={`/logIn`}
                                className={({ isActive, isPending }) => isActive ? " text-[#EEFF25] font-semibold" : isPending ? "pending" : ""
                                }
                            >
                                Log In
                            </NavLink>
                        </li>
                        <div>
                            <FaRegUserCircle size={40} stroke="white" />
                        </div>
                    </div>
            }
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </div>
    );
};

export default NavOptions;