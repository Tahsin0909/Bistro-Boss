import { FaTrashAlt } from "react-icons/fa";
import useCart from "../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const Cart = () => {
    const [cart, refetch] = useCart()
    const totalPrice = cart?.reduce((total, items) => total + items.price, 0)
    const axiosSecure = useAxiosSecure()
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                console.log(id);
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })
            }
        });
    }
    return (
        <div className="flex justify-center items-center ">
            <div>
                <div className="flex justify-between items-center ">
                    <p>Total Order: {cart?.length}</p>
                    <p>Total Price: ${totalPrice}</p>
                    <button className="btn">Pay</button>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table gap-5">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row  */}
                                {
                                    cart?.map((item, index) => <tr key={item._id} className="hover">
                                        <th>
                                            {index + 1}
                                        </th>
                                        <td>
                                            <img className="w-20" src={item.image} alt="" />
                                        </td>
                                        <td>{item.name}</td>
                                        <td>${item.price}</td>
                                        <td>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-lg text-red-600">
                                                <FaTrashAlt />
                                            </button>
                                        </td>
                                    </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;