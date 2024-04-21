import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAxios from '../../hooks/useAxios';
import NavBar from "../../shared/NavBar/NavBar";
import { useState } from "react";
const ItemDetails = () => {
    const { id } = useParams()
    const [quantity, setQuantity] = useState(1);
    const [isAdded, setIsAdded] = useState(false);
    const [hoveredImage, setHoveredImage] = useState(null);
    const [zoomed, setZoomed] = useState(false);
    const axiosPublic = useAxios()
    const { data: menProductById = {}, isLoading, isError } = useQuery({
        queryKey: ['menProductById', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/menProducts/${id}`)
            return res.data
        }
    })


    const handleHover = (image) => {
        setHoveredImage(image);
    };

    const handleZoom = () => {
        setZoomed(true);
    };

    const handleUnzoom = () => {
        setZoomed(false);
    };

    const incrementQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };

    const handleClick = () => {
        setIsAdded(true);
        setTimeout(() => {
            setIsAdded(false);
        }, 1000); // Change the duration of animation as needed

        // Add your logic for adding the item to the cart here
    };

    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error fetching data</div>;

    console.log(menProductById)
    return (
        <div>
            <NavBar isBlack={true} />
            <div style={{ marginTop: '50px' }}>
                <div className="grid grid-cols-7">
                    <div className="col-span-1 ml-20 mt-10">
                    {menProductById.images.slice(1).map((image, index) => (
                            <img
                                key={index}
                                className="w-32 h-32 mb-2 cursor-pointer"
                                src={image}
                                alt={`Image ${index}`}
                                onMouseEnter={() => handleHover(image)}
                            />
                        ))}
                    </div>
                    <div className="col-span-3 mt-10">
                    <div className="relative" onMouseEnter={handleZoom} onMouseLeave={handleUnzoom}>
                        <img
                            className={`w-[800px] h-[673px] ${zoomed ? 'transform scale-125' : ''}`}
                            src={hoveredImage || menProductById.images[0]}
                            alt=""
                        />
                    </div>
                    </div>
                    <div className="text-white space-y-5 col-span-3 p-20">
                        <h1 className="text-4xl">{menProductById?.title}</h1>
                        <p className="text-xl font-light">{menProductById?.description}</p>
                        <h2 className='text-white text-lg font-bold font-serif'>BDT <span className="text-xl">{menProductById?.price}</span> <span className="font-light ml-5">(Incl. VAT)</span></h2>
                        <h2 className="border-t border-b border-white py-3 text-2xl">
                            Colors:
                            {menProductById.colors.map((color, index) => (
                                <span key={index} style={{ marginLeft: '10px', cursor: 'pointer' }}>{color}</span>
                            ))}
                        </h2>
                        <div className="flex flex-wrap text-2xl">
                            {menProductById?.size.map((size, index) => (
                                <div key={index} className="border border-gray-400 hover:bg-white hover:text-black rounded-md px-3 py-1 mr-2 mb-2 hover:cursor-pointer">
                                    {size}
                                </div>
                            ))}
                        </div>
                        <p className="text-lg font-light">FREE DELIVERY at TK.5000 purchase <br />
                            Product color may slightly vary, depending on your device's screen resolution</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <button className="border border-white text-white font-bold py-2 px-4 rounded-l" onClick={decrementQuantity}>
                                    -
                                </button>
                                <div className="border border-white text-center py-2 px-10">
                                    {quantity}
                                </div>
                                <button className="border border-white text-white font-bold py-2 px-4 rounded-r" onClick={incrementQuantity}>
                                    +
                                </button>
                            </div>
                            <div className="flex-grow">
                                <button
                                className={`bg-white w-full hover:bg-[#28282B] hover:text-white text-black font-bold py-2 px-4 rounded ml-4 focus:outline-none transition-all duration-300 ${isAdded ? 'animate-bounce' : ''}`}
                                onClick={handleClick}
                            >
                                {isAdded ? 'Added!' : 'Add to Cart'}
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetails;