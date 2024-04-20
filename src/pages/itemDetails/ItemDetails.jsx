import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from '../../hooks/useAxios';
const ItemDetails = () => {
    const { id } = useParams()
    const axiosPublic = useAxios()
    const { data: menProductById = {}, isLoading, isError } = useQuery({
        queryKey: ['menProductById', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/menProducts/${id}`)
            return res.data
        }
    })

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;
    
    console.log(menProductById)
    return (
        <div className="h-screen" style={{ height: 'calc(100vh - 100px)' }}>
            <div className="flex items-center justify-center">
                <div>
                    <img className="w-[800px] h-[700px]" src={menProductById?.images[0]} alt="" />
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default ItemDetails;