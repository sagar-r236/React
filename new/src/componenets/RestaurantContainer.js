import { imgUrl, apiUrl } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";


const RestuarantCard = (props) => {

    
    const {name, cloudinaryImageId, cuisines, avgRating, id} = props
 
     return (
         <div className="restuarant-card">
             <img src={ imgUrl + cloudinaryImageId}  alt="restaurant" className="restuarant-img"/>
             <Link to={`/restaurant/${id}`}><h2>{name}</h2></Link>
             <h3>Cuisines : {cuisines.join(', ')}</h3>
             <h4>Rating : {avgRating}</h4>    
         </div>
     )
 }

function filterRestaurant(restaurantData, serachTxt) {
    return  restaurantData.filter((restaurant) => restaurant.info.name.toUpperCase().includes(serachTxt.toUpperCase()));
}

const RestuarantContainer = () => {

    const [serachTxt, setSearchTxt] = useState("");
    const [restaurantData, setRestaurantData] = useState([]);
    const [filteredRestaurantData, setFilteredRestaurantData] = useState([])

    useEffect(() => {
        getRestaurants();
    }, [])


    async function getRestaurants() {
        const data = await fetch(apiUrl);
        const json = await data.json();
        setRestaurantData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredRestaurantData(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        console.log(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    } 

    const shimmerArray = [1,2,3,4,5,6,7,8,9]


    return (
        <>
            <div className="searchContainer">
                <input 
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={serachTxt}
                    onChange={
                        (e) => setSearchTxt(e.target.value)
                    }
                />
                <button className="search-btn"
                        onClick ={
                            () => {
                                
                                if (serachTxt.length == 0) 
                                    setFilteredRestaurantData(restaurantData)
                                
                                setFilteredRestaurantData(filterRestaurant(restaurantData, serachTxt))
                            }
                        }
                        >
                            Search
                </button>
            </div>
            <div className="restaurant-container"> 
                {
                
                restaurantData.length == 0 ? shimmerArray.map( () => <Shimmer /> )  : 
                filteredRestaurantData.length == 0 ? <h1>No Restaurant with the name</h1> :
                filteredRestaurantData.map((restaurant) => {
                    return <RestuarantCard {...restaurant.info} key={restaurant.info.id} />
                })
        
                }            
            </div>       
        </>
        
    )
}

export default RestuarantContainer;