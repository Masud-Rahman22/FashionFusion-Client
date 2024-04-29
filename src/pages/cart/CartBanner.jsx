import cartImage from '../../assets/cart/pexels-karolina-grabowska-5632371.jpg'

const CartBanner = () => {
    return (
        <div>
            <img className='h-[50vh] w-full' src={cartImage} alt="male models group photo" />
            <div className='flex items-center justify-between'>
                <div>
                    <h1>here the table will be showed</h1>
                </div>
                <div>
                    <div>
                        <h1>here the payment section</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartBanner;