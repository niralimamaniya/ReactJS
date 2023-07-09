import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5177559&lng=73.81511119999999&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();

        console.log(json);

        setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    }

    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h3>Looks like you're offline! Please check your internet connection</h3>
        )
    }


    return listOfRestaurants?.length === 0 ? (
         <Shimmer/> 
    ) : (
        <div className="body">   
            <div className="filter-container flex mx-16 my-2 p-4 justify-between">   
                <div className="search-container">
                    <input type="text" placeholder="Search for restaurants and cuisines" className="py-1 px-2 w-96 border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-500" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>

                    <button className="px-2 py-2 m-4 rounded text-white bg-orange-400" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            (restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()) ||
                             restaurant.data.cuisines.toString().toLowerCase().includes(searchText.toLowerCase()) 
                        );

                        setFilteredRestaurants(filteredRestaurants);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                    </button>
                </div>  

                <div className="filters">
                    <button className="px-3 py-1 m-4 border-b-[1px] border-b-gray-300 border-gray-500 hover:text-orange-500" 
                        onClick={() =>{
                            const filteredRestaurants = listOfRestaurants.filter(
                                (restaurant) => restaurant.data.avgRating > 4
                        )
                        setFilteredRestaurants(filteredRestaurants);
                        } 
                        }
                    >
                    Ratings 4.0+
                    </button>
                </div> 
            </div>
            <div className="flex flex-wrap mx-16 pt-6 gap-x-7 gap-y-12 border-t-[1px] border-gray-300">
                {/* Resto card */}
                {
                  filteredRestaurants.map((restaurant) => (
                    <Link 
                        key={restaurant.data.id} 
                        to={"/restaurants/"+restaurant.data.id}
                    >
                    <RestaurantCard resData={restaurant}/>
                    </Link>
                  ))
                }
            </div>
        </div>
    );
};

export default Body;