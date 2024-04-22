import { MdCategory } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAxios from '../../hooks/useAxios';
import { useState } from 'react';
import WomenModelsBanner from "./WomenModelsBanner";
import Women_Items_Card from "../../components/items_card/Women/Women_Items_Card";
const Kids_Items = () => {
    const [clickedCategory, setClickedCategory] = useState(null);
    const axiosPublic = useAxios()
    const { data: womenProducts = [] } = useQuery({
        queryKey: ['womenProducts'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/womenProducts')
            return res.data
        }
    })

    const handleCategory = (category) => {
        setClickedCategory(category);
    };
    console.log(womenProducts)
    return (
        <div>
            <WomenModelsBanner></WomenModelsBanner>
            <div className='md:grid grid-cols-4 min-h-screen'>
                <div className="col-span-1 mt-10">
                    <h1 className='flex justify-center items-center gap-2 text-3xl text-white text-center mr-8 pt-10 pb-5'><MdCategory />Categories</h1>
                    <div className="space-y-4 flex flex-col justify-center items-center md:mr-14">
                        {
                            womenProducts?.map(product => (
                                <button key={product._id}
                                    onClick={() => handleCategory(product?.title)}
                                    className={`border block border-white text-white w-48 px-4 md:ml-8 py-2 text-sm hover:bg-[#28282B] hover:text-white rounded-md text-center`}>{product?.title}</button>
                            ))
                        }
                    </div>
                </div>
                <div className="col-span-3 grid grid-cols-3 gap-5 p-10">
                    {
                        womenProducts
                            .filter(product => !clickedCategory || product.title === clickedCategory)
                            .map(filteredProduct => (
                                <Women_Items_Card key={filteredProduct._id} filteredProduct={filteredProduct}></Women_Items_Card>
                            ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Kids_Items;
