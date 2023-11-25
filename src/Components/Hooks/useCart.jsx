import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../ContextApi/ContextApi";

const useCart = () => {
    const {AuthUser} = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()
    const {refetch ,data: cart} = useQuery({
        queryKey: ['cart'],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/carts?email=${AuthUser?.email}`)
            return res.data
        }
    })
    return [cart, refetch]
};

export default useCart;