import { useState } from 'react';
import '../items_card/items_card.css'
import { Link } from 'react-router-dom';
// eslint-disable-next-line react/prop-types
const Items_Card = ({ filteredProduct }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div>
            <Link to={`/itemDetails/${filteredProduct?._id}`}>
            <div className='relative' onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
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
            <div className="space-y-2">
                <h1 className='text-white text-xl pt-3 font-bold font-serif'>{filteredProduct?.title}</h1>
                <p className='text-white text-lg font-serif'>{filteredProduct?.availability}</p>
                <p className='text-white text-lg font-bold font-serif'>BDT {filteredProduct?.price} (Incl. VAT)</p>
            </div>
            
        </div>
    );
};

export default Items_Card;
{/* <div className="flex gap-4">
                <button className="rounded-lg bg-slate-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">
                    Add to Cart
                </button>
                <button className="rounded-md border border-black px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  duration-300 hover:bg-gray-200">
                    View Details
                </button>
            </div> */}
