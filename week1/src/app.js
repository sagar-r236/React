import React from "react";
import ReactDOM  from "react-dom/client";
import Title from "./components/Title"





const HeaderComponent = () => {
  return (

    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li> 
          <li>Cart</li>
        </ul>
      </div>  
    </div>
    
  )
}


const restaurantList = [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "30531",
        "name": "Hotel Empire",
        "uuid": "134dd05e-561e-449a-9ba5-b1f6a3c5cb8b",
        "city": "1",
        "area": "Brigade Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "qltgnkyywuo5gmnpqzbm",
        "cuisines": [
          "North Indian",
          "Kebabs",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 45000,
        "costForTwoString": "₹450 FOR TWO",
        "deliveryTime": 43,
        "minDeliveryTime": 43,
        "maxDeliveryTime": 43,
        "slaString": "43 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "empire-restaurant-central-bangalore-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Empire SuitesNo.35, Castle Street, Off Brigade Road,Bengaluru, Karnataka 560025",
        "locality": "Brigade Road",
        "parentId": 475,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7027964~p=1~eid=00000188-86d6-c9f1-11f6-0c3d00a60117",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "FREE ITEM",
          "subHeader": "",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "30531",
          "deliveryTime": 43,
          "minDeliveryTime": 43,
          "maxDeliveryTime": 43,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "3241",
        "name": "Meghana Foods",
        "uuid": "93695df0-56e1-417e-b9a8-32084ebaadaf",
        "city": "1",
        "area": "Ashok Nagar",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e0vvulfbahjxjz6k4uwi",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian",
          "Chinese",
          "Seafood"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "slaString": "36 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "meghana-foods-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
        "locality": "Residency Road",
        "parentId": 635,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "3241",
          "deliveryTime": 36,
          "minDeliveryTime": 36,
          "maxDeliveryTime": 36,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.5",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "121603",
        "name": "Kannur Food Point",
        "uuid": "51983905-e698-4e31-b0d7-e376eca56320",
        "city": "1",
        "area": "Tavarekere",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "bmwn4n4bn6n1tcpc8x2h",
        "cuisines": [
          "Kerala",
          "Chinese"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "slaString": "40 MINS",
        "lastMileTravel": 5,
        "slugs": {
          "restaurant": "kannur-food-point-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "6/21,9TH CROSS ,1ST MAIN, VENKATESHWARA LAYOUT,SG PALYA, BENGALURU, - 560093",
        "locality": "SG Palya",
        "parentId": 20974,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "",
          "discountTag": "FLAT DEAL",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "121603",
          "deliveryTime": 40,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 40,
          "lastMileTravel": 5,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "IT_IS_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "32510",
        "name": "Toscano",
        "uuid": "d9e93aa0-5124-43d7-b118-e83db78463d3",
        "city": "1",
        "area": "Vittal Mallya Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "f6idsoj8oevlwas80b9c",
        "cuisines": [
          "Italian",
          "Pizzas",
          "Pastas",
          "Continental",
          "Desserts",
          "Bakery"
        ],
        "tags": [
          
        ],
        "costForTwo": 120000,
        "costForTwoString": "₹1200 FOR TWO",
        "deliveryTime": 48,
        "minDeliveryTime": 48,
        "maxDeliveryTime": 48,
        "slaString": "48 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "toscano-lavelle-road-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "Level Two, UB City, Vittal Mallya Road, Bangalore",
        "locality": "Vittal Mallya Road",
        "parentId": 22481,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 4000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 4000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "4000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7030627~p=4~eid=00000188-86d6-c9f1-11f6-0c3e00a6044f",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "32510",
          "deliveryTime": 48,
          "minDeliveryTime": 48,
          "maxDeliveryTime": 48,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.3",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "428",
        "name": "Biryani Pot",
        "uuid": "6db20a8b-dd85-4148-b750-107169f7f826",
        "city": "1",
        "area": "Btm Layout",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "mdipoyzfzsa7n7igskht",
        "cuisines": [
          "North Indian",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 5.699999809265137,
        "slugs": {
          "restaurant": "biryani-pot-madiwala-junction-btm",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
        "locality": "Maruti Nagar",
        "parentId": 21798,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 5500,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 5500,
          "message": "",
          "title": "Delivery Charge",
          "amount": "5500",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 1,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "5.6 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "428",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 5.699999809265137,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "IT_IS_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "3434",
        "name": "Nandhini Deluxe",
        "uuid": "24ba68a5-9a46-4f74-8ed2-4536d3692b80",
        "city": "1",
        "area": "St Marks Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "dlt4ml0id5wei4yi840b",
        "cuisines": [
          "Andhra",
          "Biryani",
          "Chinese",
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 50000,
        "costForTwoString": "₹500 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "hotel-nandhini-central-bangalore",
          "city": "bangalore"
        },
        "cityState": "1",
        "address": " #22, 1st floor, St Marks Road, Shanthala nagar , Ashok Nagar, Bangalore -560001",
        "locality": "Ashok Nagar",
        "parentId": 2451,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 3000,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 3000,
          "message": "",
          "title": "Delivery Charge",
          "amount": "3000",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=7043355~p=7~eid=00000188-86d6-c9f1-11f6-0c3f00a60714",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100",
          "discountTag": "",
          "headerTypeV2": 0
        },
        "sla": {
          "restaurantId": "3434",
          "deliveryTime": 24,
          "minDeliveryTime": 24,
          "maxDeliveryTime": 24,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.2",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    }
  ]


const RestaurantCard = ({restaurant}) => {
  
  const {name, cuisines, avgRating, cloudinaryImageId} = restaurant
  return (
      <div className="card">
      <img src={`https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`} />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating} stars</h4>
    </div>
  )
}

const Body = () => {
  
  return (
    <div className="card-container">
      {restaurantList.map( restaurant => <RestaurantCard restaurant={restaurant.data} />)}
   </div>
    
  )
}

const Footer = () => {
  return (
    <h4>Footer</h4>
  )
}


const AppComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
   
  )
}

// console.log([...restaurantList[0]])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<AppComponent />)


