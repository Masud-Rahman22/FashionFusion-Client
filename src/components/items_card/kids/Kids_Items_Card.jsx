import { useState } from 'react';
import '../../items_card/items_card.css';
import { Link } from 'react-router-dom';

const Kids_Items_Card = ({ filteredProduct }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className='relative'>
            <Link to={`/KidsItemsDetails/${filteredProduct?._id}`}>
                <div
                    className='relative'
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <img
                        width={200}
                        height={200}
                        className="h-[400px] w-[475px] object-fill"
                        src={filteredProduct.images[0]}
                        alt="card navigate ui"
                    />
                    <img
                        className={`absolute top-0 left-0 h-[400px] w-[475px] object-fill ${hovered ? 'visible' : 'hidden'}`}
                        src={filteredProduct?.images[1]}
                        alt="hovered image"
                    />
                </div>
            </Link>
            {hovered && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-x-4">
                    {/* Quick View Button */}
                    <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
                        Quick View
                    </button>
                    {/* Wishlist Button */}
                    <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white py-2 duration-300 hover:bg-gray-200">
                        Wishlist
                    </button>
                    {/* Cart Button */}
                    <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white py-2 duration-300 hover:bg-gray-200">
                        Add to Cart
                    </button>
                </div>
            )}
            <div className="space-y-2">
                <h1 className='text-white text-xl pt-3 font-bold font-serif'>{filteredProduct?.title}</h1>
                <p className={`text-white text-lg font-serif ${filteredProduct.availability === 'Out of Stock' ? 'text-red-600': 'text-white'}`}>{filteredProduct?.availability}</p>
                <p className='text-white text-lg font-bold font-serif'>BDT {filteredProduct?.price} (Incl. VAT)</p>
            </div>
        </div>
    );
};

export default Kids_Items_Card;
