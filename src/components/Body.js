import RestaurantCard from "./RestaurantCard";
import resList from './../utils/mockData';
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setlistOfRestaurants] = useState(resList);


    return(
        <div className="body">   
            <div className="search-container">
                search
            </div>
            <div className="filter-restaurant">
                <button className="filter-by-rating" 
                onClick={() =>{
                    const filteredList = listOfRestaurants.filter(
                        (restaurant) => restaurant.data.avgRating > 4
                    )
                    setlistOfRestaurants(filteredList);
                } 
                }
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {/* Resto card */}
                {
                  listOfRestaurants.map((restaurant) => 
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                  )
                }
            </div>
        </div>
    );
};

export default Body;