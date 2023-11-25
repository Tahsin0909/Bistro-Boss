/* eslint-disable react/prop-types */

import { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import useCart from "../../Components/Hooks/useCart";

const ShopCart = ({ data }) => {
    const { AuthUser } = useContext(AuthContext)
    const [, refetch] = useCart()
    const { image, name, recipe, price, _id } = data;
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate();
    const handleeCart = (item) => {
        if (AuthUser) {
            const CartItem = {
                foodId: _id,
                userEmail: AuthUser.email,
                image,
                name,
                price
            }
            console.log(CartItem);
            axiosSecure.post('/carts', CartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }
                })
                .catch(error => console.log(error));
        }
        else {
            Swal.fire({
                title: "You are not Logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    //   send the user to the login page
                    navigate('/logIn')
                }
            });
        }

    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="border p-1 absolute bg-slate-900 text-white rounded-xl right-3 top-2">${price}</p>
            <div className="card-body">
                <h2 className="card-title justify-center">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                    <button onClick={() => handleeCart(data)} className="btn btn-primary">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default ShopCart;