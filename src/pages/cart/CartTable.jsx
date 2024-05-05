import React from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import useAxios from '../../hooks/useAxios';
import toast, { Toaster } from 'react-hot-toast';
import { MdDelete } from "react-icons/md";
// eslint-disable-next-line react/prop-types
const CartTable = ({id, title, quantity, totalPrice, image, price, color, size,refetch  }) => {
    const axiosPublic = useAxios()
    const removeCartItems = async(id) =>{
        try {
            const res = await axiosPublic.delete(`/api/cartItem/${id}`);
            if(res.data){
                toast.success('item is removed from cart');
                refetch()
            }
        } catch (error) {
            console.error("Error removing cart item:", error);
            throw error;
        }
    }
    return (
        <>
        <Toaster></Toaster>
        
        <tr className="bg-black border-b hover:bg-gray-500">
            <td className="p-4">
                <img src={image} alt="" className='w-24 h-24 object-cover'/>
            </td>
            <td className="px-8 py-4">
                <h3>{title}</h3>
            </td>
            
            <td className="px-8 py-4">
                <h3>${price?.toFixed(2)}</h3>
            </td>
            <td className="px-8 py-4">
                <div className="flex items-center gap-3">
                    <button
                        // onClick={incCartitems}
                        className="w-8 h-8 grid place-content-center bg-black text-primary border border-gray-300"
                    ><BiPlus size={20} /></button>
                    <input type="text" value={quantity} readOnly className="w-14 h-10 text-primary outline-none border border-gray-300 bg-black px-6" />
                    <button
                    //  onClick={removeCartitem}
                        className="w-8 h-8 grid place-content-center bg-black text-primary border border-gray-300">
                        <BiMinus size={20} />
                    </button>
                </div>
            </td>
            <td className="px-8 py-4">
                <h3>{color}</h3>
            </td>
            <td className="px-8 py-4">
                <h3>{size}</h3>
            </td>
            <td className="px-8 py-5">
                <h2>${totalPrice?.toFixed(2)}</h2>
            </td>
            <td className="px-8 py-4">
                <button 
                onClick={()=>removeCartItems(id)} 
                className="w-12 h-12 bg-primary-green rounded-full flex items-center justify-center text-white">
                    <MdDelete size={25}/>
                </button>
            </td>
        </tr>
        </>
    );
};

export default CartTable;