import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Carousel from "./Carousel";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [carousel, setCarousel] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);
    
    // Fetching restaurants data from API
    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5177559&lng=73.81511119999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        const json = await data.json();

        console.log(json);

        // setCarousel(json?.data?.cards[1]);
        // setListOfRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setListOfRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurants(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    // To show whether user in online or offline
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false){
        return (
            <h3>Looks like you're offline! Please check your internet connection</h3>
        )
    }
    console.log(listOfRestaurants);


    return listOfRestaurants?.length === 0 ? (
         <Shimmer/> 
    ) : (
        <div className="body">  
            <Carousel items={carousel}/>

            {/* Search for restaurants and cuisines */}
            <div className="mx-16 mt-5 mb-6 p-2 text-center">
                    <input type="text" placeholder="Search for restaurants and cuisines" className="py-1 px-2 w-6/12 border border-solid border-gray-300 rounded focus:outline-none focus:border-gray-500" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }}></input>

                    <button className="px-2 py-2 mx-2 rounded text-white bg-orange-400" onClick={() => {
                        const filteredRestaurants = listOfRestaurants.filter(
                            (restaurant) => restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()) ||
                             restaurant.data.cuisines.toString().toLowerCase().includes(searchText.toLowerCase()) 
                        );

                        setFilteredRestaurants(filteredRestaurants);
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-4 h-[14px]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" /></svg>
                    </button>
            </div>   
          
            <div className="flex justify-between mx-16 px-3"> 
                <div className="p-2 font-semibold text-2xl">
                    {/* Total Number of restaurants */}
                    <p>
                        {/* {filteredRestaurants.length} restaurants */}
                    </p>
                </div>
                <div>
                    {/* All restaurants */}
                <button className="mt-4 pb-[7px] px-3 text-gray-700 hover:border-b-[1px] border-b-gray-500"
                        onClick={() =>{
                            const filteredRestaurants = listOfRestaurants.filter(
                                (restaurant) => restaurant.data
                        )
                        setFilteredRestaurants(filteredRestaurants);
                        } 
                        }
                >All</button>
                    {/* Pure Veg restaurants */}
                <button className="mt-4 pb-[7px] px-3 text-gray-700 hover:border-b-[1px] border-b-gray-500" 
                        onClick={() =>{
                            const filteredRestaurants = listOfRestaurants.filter(
                                (restaurant) => restaurant.data.veg === true
                        )
                        setFilteredRestaurants(filteredRestaurants);
                        } 
                        }
                >Pure Veg</button>
                    {/* 4.0+ rating restaurants */}
                <button className="mt-4 pb-[7px] px-3 text-gray-700 hover:border-b-[1px] border-b-gray-500" 
                        onClick={() =>{
                            const filteredRestaurants = listOfRestaurants.filter(
                                (restaurant) => restaurant.data.avgRating >= 4
                        )
                        setFilteredRestaurants(filteredRestaurants);
                        } 
                        }
                >4.0+</button>
                    {/* Shows restaurants whose cost is less than 300 */}
                <button className="mt-4 pb-[7px] px-3 text-gray-700 hover:border-b-[1px] border-b-gray-500" 
                        onClick={() =>{
                            const filteredRestaurants = listOfRestaurants.filter(
                                (restaurant) => restaurant.data.costForTwo < 30000 
                        )
                        setFilteredRestaurants(filteredRestaurants);
                        } 
                        }
                >Less than Rs. 300</button>
                    {/* Sorts restaurants by cost from low to high */}
                <button className="mt-4 pb-[7px] px-3 text-gray-700 hover:border-b-[1px] border-b-gray-500"
                       onClick={() =>{
                        const filteredRestaurants = listOfRestaurants.filter(
                            (restaurant) => restaurant.data
                        )
                        filteredRestaurants.sort(
                            (res1, res2) => res1.data.costForTwo - res2.data.costForTwo)
                        setFilteredRestaurants(filteredRestaurants);
                        } 
                        }
                >Cost: Low To High</button>
                    {/* Sorts restaurants by cost from high to low */}
                <button className="mt-4 pb-[7px] px-3 text-gray-700 hover:border-b-[1px] border-b-gray-500" 
                       onClick={() =>{
                        const filteredRestaurants = listOfRestaurants.filter(
                            (restaurant) => restaurant.data
                        )
                        filteredRestaurants.sort(
                            (res1, res2) => res2.data.costForTwo - res1.data.costForTwo)
                        setFilteredRestaurants(filteredRestaurants);
                        } 
                        }
                >Cost: High To Low</button>
                </div> 
                
            </div>
            <div className="flex flex-wrap justify-center mx-16 pt-6 gap-x-7 gap-y-12 border-t-[1px] border-gray-300">
                {/* Display a restaurant */}
                {
                  filteredRestaurants.map((restaurant) => (
                    <Link 
                        key={restaurant?.info.id} 
                        to={"/restaurants/"+restaurant?.info.id}
                    >
                    {restaurant?.info.promoted ? <RestaurantCardPromoted resData={restaurant?.info}/> : <RestaurantCard resData={restaurant?.info}/>}
                    </Link>
                  ))
                }
            </div>
        </div>
    );
};

export default Body;