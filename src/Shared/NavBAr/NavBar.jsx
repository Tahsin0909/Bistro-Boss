import { useContext, useEffect } from "react";
import NavOptions from "./NavOptions";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../../ContextApi/ContextApi";

const NavBar = () => {

    const { AuthUser} = useContext(AuthContext)


    useEffect(() => {
        const ToastShowed = localStorage.getItem("ToastShowed")
        if (ToastShowed) {
            if (ToastShowed === 'false') {
                toast.success(`Authenticate as ${AuthUser?.email}`)
                localStorage.setItem('ToastShowed', JSON.stringify('True'))
            }
        }
        else {
            toast.error(`Please Log In`)
        }
    }, [ AuthUser?.email])

    return (
        <>
            <div className="navbar bg-black text-white bg-opacity-30 z-50 absolute max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                <NavOptions />
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">BISTRO BOSS</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            <NavOptions />
                        }
                    </ul>
                </div>
            </div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
        </>
    );
};

export default NavBar;