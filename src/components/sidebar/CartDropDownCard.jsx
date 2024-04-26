

// eslint-disable-next-line react/prop-types
const CartDropDownCard = ({item}) => {
    return (
        <div className="">
            <hr />
            <div className="flex justify-evenly items-center">
                <img className="w-[60px] h-[60px]" src={item?.images} alt="" />
                <div className="flex gap-5">
                    <h3>{item?.title}</h3>
                    <p>Qty : {item?.quantity}</p>
                    <p>Tk. {item?.price}</p>
                </div>
            </div>
            
        </div>
    );
};

export default CartDropDownCard;