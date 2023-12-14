import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { imgUrl } from "../config";
import Shimmer from "./shimmer";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";
import { Link } from "react-router-dom";

const RestaurantMenu = () => {

    const {id} = useParams();

    const [restaurantDetail, setRestaurantDetail] = useState({});
    const [restaurantMenu,  setRestaurantMenu] = useState([]);
 

    async function getRestaurantMenu() {
        const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9580069&lng=77.6092188&restaurantId=' + id);
        const json = await response.json();
        console.log(json)
        setRestaurantDetail(json?.data?.cards[0]?.card?.card?.info);
        const menu = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
            
       
        
    }

    useEffect(() => {
        getRestaurantMenu();
    }, []);



    
    return restaurantMenu === undefined ? 
    (
        <>
            <h1>Restaurant not available</h1>
            <Link to="/">Go back to Home</Link>    
        </>
    
    ) : 
    restaurantMenu.length == 0 ? <RestaurantMenuShimmer /> :
    (
        <>
            
            <div className="detail-restaurant-card"> 
                <div>
                    <h1>{restaurantDetail?.name}</h1>
                    <img src={imgUrl + restaurantDetail?.cloudinaryImageId} className="detail-restaurant-image" />
                    <h3>Area : {restaurantDetail?.areaName}</h3>
                    <h3>City : {restaurantDetail?.city}</h3>
                    <h3>Average Rating : {restaurantDetail?.avgRating} stars</h3>
                    <h3>Cost: {restaurantDetail?.costForTwoMessage}</h3>
                </div>
                <div>
                    <h1>Restaurant Menu</h1>
                    <ul>
                        {   

                             
                            restaurantMenu.map( (foodItem) => {
                                return <li key={foodItem?.card?.info?.id}>{foodItem?.card?.info?.name}</li>
                            })
                            
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default RestaurantMenu