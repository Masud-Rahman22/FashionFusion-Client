import { MdCategory } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxios from '../../hooks/useAxios';
import { useState } from 'react';
import MenModelsBanner from "./MenModelsBanner";
const Men_Items = () => {
    const [clickedCategory, setClickedCategory] = useState(null);
    const axiosPublic = useAxios()
    const { data: menProducts = [] } = useQuery({
        queryKey: ['menProducts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/menProducts')
            return res.data
        }
    })

    const handleCategory = (category) => {
        setClickedCategory(category);
    };
    console.log(menProducts)
    return (
        <div>
            <MenModelsBanner></MenModelsBanner>
            <div className='md:grid grid-cols-4 min-h-screen'>
                <div className="col-span-1 mt-10">
                    <h1 className='flex justify-center items-center gap-2 text-3xl text-white text-center mr-8 pt-10 pb-5'><MdCategory />Categories</h1>
                    <div className="space-y-4 flex flex-col justify-center items-center md:mr-14">
                        {
                            menProducts?.map(product => (
                                <button key={product._id}
                                    onClick={() => handleCategory(product?.title)}
                                    className={`border block border-white text-white w-48 mb-2 px-4 md:ml-8 py-2 text-sm hover:bg-[#28282B] hover:text-white rounded-md text-center`}>{product.title}</button>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-5 p-10">
                    {
                        menProducts
                            .filter(product => !clickedCategory || product.title === clickedCategory)
                            .map(filteredProduct => (
                                <div className="mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-6 shadow-lg md:w-[350px] dark:bg-[#18181B]" key={filteredProduct._id}>
                                    <img width={200} height={200} className="h-[275px] w-[350px] rounded-lg object-contain" src={filteredProduct?.images[0]} alt="card navigate ui" />
                                    <div className="grid gap-2">
                                        <h1 className="text-lg font-semibold ">Product Name</h1>
                                        <p className="text-sm text-gray-500 dark:text-white/60">This is a brief description of the product. It highlights the key features and benefits.</p>
                                        <div className="text-lg font-semibold">$99.99</div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button>
                                        <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">View Details</button>
                                    </div>
                                </div>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Men_Items;