import { FaArrowRightToBracket } from "react-icons/fa6";

const Promo = () => {
    return (
        <div className="w-full h-[25vh] my-10 bg-[#28282B] flex justify-center items-center gap-10">
            <h1 className="text-white text-3xl font-bold">JOIN OUR FASHIONCLUB & GET 15% OFF</h1>
            <button className="w-1/5 h-1/3 bg-white text-black flex justify-center items-center text-2xl gap-2 hover:bg-black hover:text-white">Sign up for free <FaArrowRightToBracket className="mt-1"/></button>
        </div>
    );
};

export default Promo;