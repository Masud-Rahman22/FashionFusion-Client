
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
            <div className='md:flex justify-between items-center h-[80vh]'>
                <div>
                    <h1 className='text-3xl text-white font-bold text-center mb-10 mr-8'>Categories</h1>
                    <div className="space-y-4">
                        {
                            menProducts?.map(product => (
                                <button key={product._id}
                                    onClick={() => handleCategory(product?.title)}
                                    className={`border border-white text-white w-4/5 mb-2 px-4 md:ml-8 py-2 text-sm hover:bg-[#28282B] hover:text-white rounded-md text-center`}>{product.title}</button>
                            ))
                        }
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Men_Items;