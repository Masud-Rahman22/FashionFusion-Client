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
                    <button className="group ml-14 relative flex w-60 text-2xl items-center rounded-lg border-2 border-[#28282B] p-4 text-white bg-[#28282B]"><span>M E N</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-[#28282B] duration-300 group-hover:w-11/12"><svg viewBox="0 0 24 24" fill="none" className="w-16" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                    </div>
                    {/* )} */}
                </div>
                <div className='card'>
                    <img
                        src={womenModel}
                        alt=""
                    />
                    <div className="card-body">
                    <button className="group ml-14 relative flex w-60 text-2xl items-center rounded-lg border-2 border-[#28282B] p-4 text-white bg-[#28282B]"><span>W O M E N</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-[#28282B] duration-300 group-hover:w-11/12"><svg viewBox="0 0 24 24" fill="none" className="w-16" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                    </div>
                </div>
                <div className='card'>
                    <img
                        src={kidModel}
                        alt=""
                    />
                    <div className="card-body">
                        <button className="group ml-14 relative flex w-60 text-2xl items-center rounded-lg border-2 border-[#28282B] p-4 text-white bg-[#28282B]"><span>K I D S</span><span className="absolute right-3 box-content flex w-1/6 justify-center rounded-md bg-[#28282B] duration-300 group-hover:w-11/12"><svg viewBox="0 0 24 24" fill="none" className="w-16" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g><path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCollectionTypes;