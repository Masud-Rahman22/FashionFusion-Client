import kidModel from '../../../src/assets/models/pexels-amina-filkins-5559990.jpg'
import womenModel from '../../../src/assets/models/pexels-maksim-goncharenok-4380970.jpg'
import maleModel from '../../../src/assets/models/pexels-mateus-carvalho-8160848.jpg'
import '../collection/AllCollectionTypes.css'

const AllCollectionTypes = () => {
    return (
        <div className="m-10">
            <div className="grid grid-cols-3 gap-5">
                <div className='card'>
                    <img
                        src={maleModel}
                        alt=""
                        // onMouseEnter={() => setIsHoveredImg1(true)}
                        // onMouseLeave={() => setIsHoveredImg1(false)}
                        // className={isHoveredImg1 ? 'filter blur-sm' : ''}
                    />
                    {/* {isHoveredImg1 && ( */}
                        <div className="card-body">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Button 1</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md">Button 2</button>
                        </div>
                    {/* )} */}
                </div>
                <div className='card'>
                    <img
                        src={womenModel}
                        alt=""
                    />
                    <div className="card-body">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Button 1</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md">Button 2</button>
                        </div>
                </div>
                <div className='card'>
                    <img
                        src={kidModel}
                        alt=""
                    />
                    <div className="card-body">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">Button 1</button>
                            <button className="bg-green-500 text-white px-4 py-2 rounded-md">Button 2</button>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default AllCollectionTypes;