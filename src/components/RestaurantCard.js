import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    const { cloudinaryImageId, name, cuisines, costForTwoString, avgRating, deliveryTime} = resData?.data
    return(
        
        <div className="w-72 p-5 border border-solid border-white hover:border-gray-300 hover:shadow-lg">
            <img className="res-logo" src={CDN_URL+
           cloudinaryImageId}/>
            <h3 className="font-medium text-lg pt-3">{name}</h3>
            <p className="pb-3 pt-1 text-sm font-light text-gray-500" >{cuisines.join(", ")}</p>
            <div className="flex justify-between text-[12px]">
                <span className={(avgRating < 4.0 || avgRating == "--"
                ? "bg-red-500"
                : "bg-green-500") + " " +
                "px-1 text-white font-[icomoon]"}>
                    <FontAwesomeIcon icon={faStar} size="sm" /> {avgRating}
                </span>
            <p className="font-light text-gray-500">{deliveryTime} MINS</p>
            <p className="font-light text-gray-500">{costForTwoString}</p>
                </div>
                
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <div className="absolute mx-2 my-5">
                    <label className="absolute my-[17px] text-gray-800">◥</label>
                    
                    <label className="absolute px-2 py-1 w-22 text-xs font-medium bg-gray-900 text-white tracking-wider rounded-b-sm">PROMOTED</label>
                </div>
                <RestaurantCard {...props}/>
            </div>
        )
    };
};

export default RestaurantCard;