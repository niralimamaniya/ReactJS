import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import EmptyCart from "../assets/empty-cart.png";
import CategoryItems from './CategoryItems';

const Cart = () => {
 
    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);

    const dispatch = useDispatch();

    const clearMyCart = () => {
        dispatch(clearCart());
    }

    return cartItems.length == 0 ? (
        <div className="flex justify-center">
            <div className="w-6/12 h-6/12 flex flex-col justify-center items-center">
                <h1 className="my-6 text-2xl font-medium tracking-wide">Your cart is Empty ☹️</h1>
                <img src={EmptyCart} className="w-2/4 h-3/4"></img>
            </div>
        </div>
    ) : (


        <div className="flex flex-col justify-center items-center border border-black">
            <div className="w-6/12 m-auto border border-black p-4">
                <h1 className="text-center text-2xl font-semibold">Your cart</h1>
                <button className="px-3 py-[6px] m-2 rounded bg-orange-400 text-white font-semibold" onClick={()=> clearMyCart()}>
                    Clear cart
                </button>
                <div>
                    <CategoryItems items={cartItems}/>
                </div>
            </div>            
        </div>
        // <div className="m-4 flex justify-center">
        //     <div className="flex justify-between py-2 my-2 text-lg items-center ">
        //         <p className="">Your Cart</p> <hr className="" />
        //         <button
        //             disabled={cartItems.length > 0 ? false : true}
        //             className="text-normal bg-red-500 text-white px-2 py-1"
        //             onClick={() => dispatch(clearCart())}
        //         >Clear cart</button>
        //     </div>
        //     <hr className="my-2 border-gray-200 border-1" />
        //     {cartItems.map((item) => (
        //         <div key = {item.card.info.id} className="py-2">
        //             <div className="pt-3 flex justify-between">
        //                 <h2>{item.card.info.name}</h2>
        //                 <p>{(item.card.info.price/100).toFixed(2)}</p>
        //             </div>
        //         </div>
        //     ))} 
        // <div>

          
     
    )
}

export default Cart;