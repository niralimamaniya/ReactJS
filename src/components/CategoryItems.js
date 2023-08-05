import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import ItemsShimmer from "./ItemsShimmer";

const CategoryItems = ({items}) => {

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }
    return (
        <div>
            {
                items.map((item) => (
                    <div 
                        data-testid="foodItems"
                        key={item.card.info.id} className="flex justify-between pt-4 pb-5 border-b-[1px] border-gray-200 gap-x-5 ">
                        <div className="w-9/12">
                            <p className="font-medium text-lg">{item.card.info.name}</p>
                            <p className="font-medium text-sm ">₹ {item.card.info.price/100}</p>
                            <p className="pt-3 text-sm text-gray-400">{item.card.info.description}</p>
                        </div>
                        <div className=" flex flex-wrap justify-center p-5 w-3/12"> 
                                <button className="absolute p-2 w-[90px] mt-16 text-sm bg-white text-green-400 rounded border border-solid border-gray-400"
                                    onClick={()=> addFoodItem(item)}>
                                    ADD +
                                </button>
                            <img src={CDN_URL + item.card.info.imageId} className="w-full rounded"></img>  
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CategoryItems;