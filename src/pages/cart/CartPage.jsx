import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import CartBanner from "./CartBanner";
import CartTable from "./CartTable";
import PaymentSection from "../../components/payment/PaymentSection";


const CartPage = () => {
    const axiosPublic = useAxios()
    const { data: cartProducts = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['cartProducts'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/cartItem`)
            return res.data
        }
    })
    console.log(cartProducts)
    // const subTotal = cartProducts?.reduce((acc, item) => acc + item.price, 0);
    // console.log(subTotal)
    return (
        <div className="mb-16">
            <CartBanner></CartBanner>
            <div className="container flex justify-between mt-16">
                <div className="w-2/3">
                    <div className="relative  sm:rounded-lg">
                        <table className="w-full text-sm text-left rtl:text-right">
                            <thead className="text-sm text-primary uppercase bg-gray-500 ">
                                <tr>
                                    <th scope="col" className="px-8 py-5">
                                        Thumbnail
                                    </th>
                                    <th scope="col" className="px-8 py-5">
                                        Title
                                    </th>
                                    <th scope="col" className="px-8 py-5">
                                        price
                                    </th>
                                    <th scope="col" className="px-14 py-5">
                                        quantity
                                    </th>
                                    <th scope="col" className="px-8 py-5">
                                        Color
                                    </th>
                                    <th scope="col" className="px-8 py-5">
                                        Size
                                    </th>
                                    <th scope="col" className="px-8 py-5">
                                        Subtotal
                                    </th>
                                    <th scope="col" className="px-8 py-5"> </th>
                                </tr>
                            </thead>
                            <tbody className="text-white">
                                {
                                    cartProducts?.map((item)=>(
                                        <CartTable key={item?._id} id={item?._id} image={item?.images} title={item?.title} price={item?.price} quantity={item?.quantity} totalPrice={item?.price} size={item?.size} color={item?.colors}refetch={refetch}></CartTable>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                <div>
                    <PaymentSection>Payment Method</PaymentSection>
                </div>
            </div>
        </div>
    );
};

export default CartPage;