import { MdCategory } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxios from '../../hooks/useAxios';
import { useState } from 'react';
import MenModelsBanner from "./MenModelsBanner";
import Items_Card from "../../components/items_card/Items_Card";
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
                                    className={`border block border-white text-white w-48 px-4 md:ml-8 py-2 text-sm hover:bg-[#28282B] hover:text-white rounded-md text-center`}>{product.title}</button>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-5 p-10">
                    {
                        menProducts
                            .filter(product => !clickedCategory || product.title === clickedCategory)
                            .map(filteredProduct => (
                                <Items_Card key={filteredProduct._id} filteredProduct={filteredProduct}></Items_Card>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Men_Items;