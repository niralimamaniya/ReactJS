import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();

        console.log(json);

        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    return listOfRestaurants?.length === 0 ? <Shimmer/> : (
        <div className="body">   
            <div className="filter-container">         
                <div className="filters">
                <button className="filter-by-rating" 
                onClick={() =>{
                    const filteredRestaurants = listOfRestaurants.filter(
                        (restaurant) => restaurant.data.avgRating > 4
                    )
                    setFilteredRestaurants(filteredRestaurants);
                } 
                }
                >
                    4.0 +
                </button>
                </div>

                
                <div className="search-container">
                    <input type="text" className="search-bar" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>

                    <button className="search-btn" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            (restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurants(filteredRestaurants);
                    }}
                    >Search</button>
                </div>
            </div>
            <div className="res-container">
                {/* Resto card */}
                {
                  filteredRestaurants.map((restaurant) => 
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                  )
                }
            </div>
        </div>
    );
};

export default Body;