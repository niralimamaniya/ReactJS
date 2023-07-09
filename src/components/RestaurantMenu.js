import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);
    if(resInfo === null) return <Shimmer/> ;

    const {name,cuisines,areaName,sla,avgRating,totalRatingsString,costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (
        <div className="mx-72 my-6 px-5 border border-solid border-gray-300">
            <div className="py-3 flex justify-between border-b-[1px] border-gray-300 border-dashed">
                <div>
                    <h1>{name}</h1>
                    <h3>{cuisines.join(",")}</h3>
                    <h3>{areaName}, {sla?.lastMileTravelString}</h3>
                </div>
                <div className="p-3 w-16 flex flex-col border border-solid border-gray-300 rounded">
                    <p className="pb-2 border-b-[1px] border-gray-300 text-sm flex text-green-500"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 mr-1"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"/></svg>
                    {avgRating}</p>
                    <p className="pt-2 tracking-tighter text-xs flex">{totalRatingsString}</p>
                </div>
            </div>
            <div className="py-3 flex border-b-[1px] border-gray-300">
                <p className="mr-8">{sla?.deliveryTime} MINS</p>
                <p>{costForTwoMessage}</p>
            </div>
            <div className="py-3 border-b-[12px] border-gray-300">
                {/* <h1>Recommended items ({
                    resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
                        () => null).length
                })
                </h1> */}

             
            <h2>Recommended </h2>
            <ul>
                {itemCards.map((item)=> 
                    <li key={item.card.info.id}> 
                        <p>{item.card.info.name} </p>
                        <p>{item.card.info.price/100}</p>
                        <p>{item.card.info.description}</p>
                    </li>
                )}               
            </ul>
            </div>           
        </div>

    );
};

export default RestaurantMenu;