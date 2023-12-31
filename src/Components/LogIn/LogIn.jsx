import { useContext, useEffect, useState } from "react";
// import { AiOutlineCheck } from "react-icons/ai";
// import { AuthContext } from "../ContextApi/ContextApi";
import { Helmet } from "react-helmet";
// import axios from "axios";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../ContextApi/ContextApi";
const LogIn = () => {
    // Navigate After LOgIn
    const location = useLocation()
    const navigate = useNavigate()

    const { SignInUser } = useContext(AuthContext)
    //For Captcha
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])
    //Error MAssage State for password
    const [passwordError, setPasswordError] = useState('')
    const handleLogIn = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        const captcha = form.captcha.value
        const User = {
            email, password
        }

        const UpperRegX = /(?=.*[A-Z])/;

        // regx to check special charecter
        const SpecialRegX = /(?=.*[@$!%*?&])/

        if (validateCaptcha(captcha)) {
            if (password.length >= 6) {

                // to check UpperCAse
                if (UpperRegX.test(password)) {

                    // to check special charecter
                    if (SpecialRegX.test(password)) {
                        console.log(User);
                        setPasswordError('')
                        SignInUser(email, password)
                            .then(result => {
                                console.log(result.user)

                                // const loggedUser = {
                                //     userLastSignInTime: result.user.metadata.lastSignInTime,
                                // }
                                // fetch(`https://joblancernewserver.vercel.app/user/${result.user.uid}`, {
                                //     method: `PATCH`,
                                //     headers: {
                                //         'content-type': 'application/json'
                                //     },
                                //     body: JSON.stringify(loggedUser)
                                // })
                                //     .then(res => res.json())
                                //     .then(data => console.log(data))

                                localStorage.setItem('ToastShowed', JSON.stringify(false))

                                // axios.post('https://joblancernewserver.vercel.app/jwt', {
                                //     email: email,
                                //     password: password
                                // }, { withCredentials: true })
                                //     .then(res => console.log(res.data))

                                location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
                            })
                            .catch((error) => {
                                const errorMessage = error.message;
                                console.log(errorMessage);
                            });
                        form.reset()
                    }
                    else {
                        setPasswordError('*Password must contain at least one special character.')
                    }
                }
                else {
                    setPasswordError('*Password must contain at least one uppercase letter')
                }
            }
            else { setPasswordError('*Password must be at least 6 characters long.') }
        }
    }
    const handleGoogle = () => {
        // GoogleSignUp()
        //     .then(result => {
        //         console.log(result.user)

        //         const loggedUser = {
        //             userLastSignInTime: result.user.metadata.lastSignInTime,
        //         }
        //         fetch(`https://joblancernewserver.vercel.app/user/${result.user.uid}`, {
        //             method: `PATCH`,
        //             headers: {
        //                 'content-type': 'application/json'
        //             },
        //             body: JSON.stringify(loggedUser)
        //         })
        //             .then(res => res.json())
        //             .then(data => console.log(data))
        //         localStorage.setItem('ToastShow', JSON.stringify('false'))
        //         axios.post('https://joblancernewserver.vercel.app/jwt', {
        //             email: result?.user.email,
        //         }, { withCredentials: true })
        //             .then(res => console.log(res.data))
        //         location?.search ? navigate(`${location?.search?.slice(1, location.search.length)}`) : navigate('/')
        //     })
        //     .catch((error) => {
        //         const errorMessage = error.message;
        //         console.log(errorMessage);
        //     });
    }
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Log In</title>
            </Helmet>
            <div className="pt-24 pb-10">
                <div className="flex flex-col-reverse lg:flex-row gap-4  justify-center items-center">
                    <div className=" lg:w-[500px]">
                        <div >
                            <p className="text-xl text-[#D1A054B2]">Log In Now :</p>
                            <form onSubmit={(e) => handleLogIn(e)}>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-[#D1A054B2]">Email?</span>
                                    </label>
                                    <input name="email" required type="email" placeholder="ghost@email.com" className="input input-bordered input-success w-full max-w-md" />
                                </div>
                                <div className=" ">
                                    <label className="label">
                                        <span className="label-text text-[#D1A054B2]">Password?</span>
                                    </label>
                                    <input name="password" required type="password" placeholder="1234A@" className="input input-bordered input-success  w-full max-w-md" />
                                </div>
                                <p className="text-xs text-red-600 w-[60vw]">{passwordError}</p>
                                <div className=" ">
                                    <label className="label">
                                        <LoadCanvasTemplate />
                                    </label>
                                    <input name="captcha" required type="text" placeholder="Type the Captcha Above" className="input input-bordered input-success  w-full max-w-md" />
                                </div>
                                <input type="submit" value='Submit' className="btn glass mt-4 w-full max-w-md bg-[#D1A054B2] text-white hover:text-[#D1A054B2]" />
                            </form>
                            <Link to={'/signUp'}>Dont HAve A Account? SignUp</Link>
                            <div className="divider max-w-md text-[#D1A054B2]">OR Sign Up With</div>

                            <div className=" max-w-md w-full mt-2 rounded-xl border  bg-white ">
                                <div className=" flex gap-8 md:gap-16 items-center justify-center py-4 ">
                                    <img onClick={handleGoogle} className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/281/281764.png" alt="Google Sign Up" />
                                    <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="Facebook Sign Up" />
                                    <img className="w-10 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110  duration-200" src="https://cdn-icons-png.flaticon.com/128/3955/3955024.png" alt="Instagram Sign up" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" w-[410px] pl-10 pt-4 lg:block hidden">
                        <img src="https://i.ibb.co/ccQm9Vm/authentication1.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;