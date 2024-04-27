import cartImage from '../../assets/cart/pexels-karolina-grabowska-5632371.jpg'

const CartBanner = () => {
    return (
        <div>
            <img className='h-[50vh] w-full' src={cartImage} alt="male models group photo" />
        </div>
    );
};

export default CartBanner;