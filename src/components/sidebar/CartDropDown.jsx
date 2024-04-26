import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import CartDropDownCard from "./CartDropDownCard";

const CartDropDown = () => {
    const axiosPublic = useAxios()
    const { data: allCartItems = {}, isLoading, isError } = useQuery({
        queryKey: ['allCartItems'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/cartItem')
            return res.data
        }
    })
    console.log(allCartItems)
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;
    const subTotal = allCartItems?.reduce((acc, item) => acc + item.price, 0);
    return (
        <div className="py-5" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <h1 className="text-center text-2xl">Shopping Bag</h1>
            {
                allCartItems?.map(item => (
                    <CartDropDownCard item = {item} key={item._id}></CartDropDownCard>
                ))
            }
            <p className="w-full pl-8 h-11 text-xl bg-[#28282B] my-5 uppercase pt-2">Subtotal : <span className="pl-36">Tk.{subTotal}</span></p>
            <button type="button" className="group relative w-[330px] ml-10 py-2 mb-5 overflow-hidden border-2 border-white text-xl text-white hover:text-sky-200"><span className="bg-sky-800  ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-sky-600 ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>VIEW BAG DETAILS</button>
            <button type="button" className="group relative w-[330px] ml-10 py-2 overflow-hidden border-2 border-white text-xl text-white hover:text-sky-200"><span className="bg-sky-800  ease-in absolute w-[57%]  -translate-x-full group-hover:translate-x-0 -left-2 top-0 bottom-0 duration-300 -z-10 skew-x-12"></span><span className="bg-sky-600 ease-in absolute w-[55%]  translate-x-full group-hover:translate-x-0 -right-2 top-0 bottom-0 duration-300 skew-x-12 -z-10"></span>CHECKOUT</button>
        </div>
    );
};

export default CartDropDown;