import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.en.etemaaddaily.com/pages/world/national/281947.jpg"></img>
            </div>
            <div className="nav-items-container">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
    );
};

const RestaurantCard = (props) => {
    const {resData} = props;
    const { cloudinaryImageId, name, cuisines, costForTwoString, avgRating, deliveryTime} = resData?.data
    return(
        
        <div className="res-card">
            <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
           cloudinaryImageId}/>
            <h3>{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h5>{costForTwoString}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    );
};

const resList = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "697183",
      "name": "Burger King",
      "uuid": "f1903ba0-851a-4e12-ac78-d3f220fe9664",
      "city": "16",
      "area": "Eternity Mall",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
      "cuisines": [
        "Burgers",
        "American"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "burger-king-nagpur-dharampeth",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Shop No.G7,G8,F7 &F8, Ground and First Floor, Eternity Mall,Asian Highway 46, Sitabuldi,Nagpur-440010",
      "locality": "Nagpur",
      "parentId": 166,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "697183",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": true
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "67332",
      "name": "Pind Punjabi",
      "uuid": "a11cc830-0b73-41e7-988d-b33ebf23bf2b",
      "city": "16",
      "area": "Loha Pul",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "psh10puzrr6ddmhhiph8",
      "cuisines": [
        "North Indian",
        "Chinese"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 33,
      "minDeliveryTime": 33,
      "maxDeliveryTime": 33,
      "slaString": "33 MINS",
      "lastMileTravel": 0.10000000149011612,
      "slugs": {
        "restaurant": "shree-ganesh-bhojnalay-sitabuldi-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Shree Ganesh Bhojnalay, Manas Chowk, Sahu Colony, Sitabuldi, Nagpur, Maharashtra",
      "locality": "Sahu Colony",
      "parentId": 12427,
      "unserviceable": false,
      "veg": true,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "0.1 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "67332",
        "deliveryTime": 33,
        "minDeliveryTime": 33,
        "maxDeliveryTime": 33,
        "lastMileTravel": 0.10000000149011612,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.3",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "180402",
      "name": "Mullaji Zillah Biryani Center",
      "uuid": "988fc4aa-fd8f-4c4e-9ad5-4b39f7fa5b1b",
      "city": "16",
      "area": "Sadar",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "enh2ihuirlv2dl5lon5n",
      "cuisines": [
        "Biryani"
      ],
      "tags": [
        
      ],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 34,
      "minDeliveryTime": 34,
      "maxDeliveryTime": 34,
      "slaString": "34 MINS",
      "lastMileTravel": 2.9000000953674316,
      "slugs": {
        "restaurant": "mullaji-zillah-biryani-centre-sadar",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "SHOP NO 52 MINI MANGALWARI BAJAR COMPLEX SADAR , District - Nagpur-1, STATE - Maharashtra - 440001",
      "locality": "Mini Mangalwari Bajar",
      "parentId": 141304,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "2.9 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "₹150 OFF",
        "subHeader": "ABOVE ₹499",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "180402",
        "deliveryTime": 34,
        "minDeliveryTime": 34,
        "maxDeliveryTime": 34,
        "lastMileTravel": 2.9000000953674316,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "53868",
      "name": "KFC",
      "uuid": "508c22a3-7c3e-46ed-a219-2046f04f8dd2",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
      "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 37,
      "minDeliveryTime": 37,
      "maxDeliveryTime": 37,
      "slaString": "37 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "kfc-ground-floor-eternity-mall-variety-square-bajaj-nagar",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "G1, G2, Ground Floor, Eternity Mall, Variety Square, Sitaburdi, Nagpur, Maharashtra 440010",
      "locality": "Eternity Mall",
      "parentId": 547,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "53868",
        "deliveryTime": 37,
        "minDeliveryTime": 37,
        "maxDeliveryTime": 37,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "99138",
      "name": "Pakodewala",
      "uuid": "1f12cf3e-3b1c-421b-b7b2-697092ada5fb",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "pzah08i0tuwuuhymkahp",
      "cuisines": [
        "Snacks",
        "Street Food"
      ],
      "tags": [
        
      ],
      "costForTwo": 10000,
      "costForTwoString": "₹100 FOR TWO",
      "deliveryTime": 35,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 35,
      "slaString": "35 MINS",
      "lastMileTravel": 0.10000000149011612,
      "slugs": {
        "restaurant": "pakodewala-restaurant-sitabuldi-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Subhash Rd, Bhaji Mandi Chowk, Telipura, Sitabuldi, Nagpur, Maharashtra 440012",
      "locality": "Telipura",
      "parentId": 153857,
      "unserviceable": false,
      "veg": true,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "0.1 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "99138",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 0.10000000149011612,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "87718",
      "name": "Foody Moody Thali",
      "uuid": "61944a9e-68b4-4287-a78c-8bb9fcca8341",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "10000+ ratings",
      "cloudinaryImageId": "sm2d7bzlpx6mb7qauodz",
      "cuisines": [
        "Indian",
        "Thalis",
        "Chinese",
        "Biryani",
        "North Indian",
        "Punjabi",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 0.10000000149011612,
      "slugs": {
        "restaurant": "foody-moody-dharampeth-sadar",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Shree Ganesh Bhojnalay, Manas Chowk, Sahu Colony, Sitabuldi, Nagpur, Maharashtra",
      "locality": "Sahu Colony",
      "parentId": 83005,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "0.1 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "ABOVE ₹149",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "87718",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 0.10000000149011612,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.6",
      "totalRatings": 10000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "105240",
      "name": "UBQ by Barbeque Nation",
      "uuid": "f9a0835d-57be-45fa-a782-8a93de6a30db",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "5000+ ratings",
      "cloudinaryImageId": "ubypvyevkrogfvj1ygio",
      "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "ubq-by-barbeque-nation-nagpur-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Unit - K1 to FC- 6, 2nd floor, eternity mall, verity chowk, nagpur-440024",
      "locality": "Eternity Mall",
      "parentId": 10804,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "105240",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.7",
      "totalRatings": 5000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "54053",
      "name": "Pizza Hut",
      "uuid": "4a349c7a-be49-4395-8aa7-898623c4474a",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 40,
      "minDeliveryTime": 40,
      "maxDeliveryTime": 40,
      "slaString": "40 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "pizza-hut-1st-flr-eternity-mall-variety-square-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "SN F1 & F2, 1st Flr, Eternity Mall, Variety Square, Sitabuldi, Nagpur, Maharashtra 440012",
      "locality": "Sitabuldi",
      "parentId": 721,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM",
        "subHeader": "",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "54053",
        "deliveryTime": 40,
        "minDeliveryTime": 40,
        "maxDeliveryTime": 40,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "287845",
      "name": "Haldiram's Sweets and Namkeen",
      "uuid": "09458fab-53fe-45a0-addb-f46010305f00",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "edf8410c87fc2a56e2e047bec146702b",
      "cuisines": [
        "Sweets",
        "Bakery",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 27,
      "minDeliveryTime": 27,
      "maxDeliveryTime": 27,
      "slaString": "27 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "haldiram-sweets-and-namkeen-sitabuldi-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "ABHYANKAR ROAD, SITABULDI,NAGPUR",
      "locality": "Abhyankar Road",
      "parentId": 391465,
      "unserviceable": false,
      "veg": true,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "287845",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.6",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "56274",
      "name": "Ghugre Nasta Point",
      "uuid": "f8110a1f-3bcf-475d-8ab3-1fe06804862a",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "bofjce9s9jbppwdppkyp",
      "cuisines": [
        "Fast Food",
        "Street Food",
        "Snacks",
        "Sweets"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 29,
      "minDeliveryTime": 29,
      "maxDeliveryTime": 29,
      "slaString": "29 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "ghugare-nasta-point-sitabuldi-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Mahajan Market, Near Apna Bazar, Sitabuldi, Nagpur",
      "locality": "Tekdi Road",
      "parentId": 4840,
      "unserviceable": false,
      "veg": true,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "56274",
        "deliveryTime": 29,
        "minDeliveryTime": 29,
        "maxDeliveryTime": 29,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.4",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "72268",
      "name": "Sindh Punjab Tadka",
      "uuid": "3b8f28cc-c32a-470a-beac-411d7ec254f6",
      "city": "16",
      "area": "Ramdaspeth",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "kyqleymqfliyjq5izwma",
      "cuisines": [
        "North Indian",
        "Mughlai",
        "Indian",
        "Punjabi",
        "Biryani",
        "Chinese",
        "Desserts"
      ],
      "tags": [
        
      ],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 35,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 35,
      "slaString": "35 MINS",
      "lastMileTravel": 1.899999976158142,
      "slugs": {
        "restaurant": "sindh-punjab-tadka-ramdaspeth-bajaj-nagar",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Opposite Hotel Center Point, Ramdaspeth, Nagpur",
      "locality": "Central Bazaar Road",
      "parentId": 262333,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "1.8 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "72268",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 1.899999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.5",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "110413",
      "name": "Taste Of Indore",
      "uuid": "c4ac6001-7c33-4324-b282-bba0b9ed691b",
      "city": "16",
      "area": "Dharampeth",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "hijcdvoxbjvbmrz8oj2z",
      "cuisines": [
        "Street Food",
        "North Indian",
        "Snacks"
      ],
      "tags": [
        
      ],
      "costForTwo": 7000,
      "costForTwoString": "₹70 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 39,
      "maxDeliveryTime": 39,
      "slaString": "39 MINS",
      "lastMileTravel": 0.5,
      "slugs": {
        "restaurant": "taste-of-indore-sitabuldi-sitabuldi",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "Mahajan Market Road, Sitabuldi, Nagpur",
      "locality": "Mahajan Market Road",
      "parentId": 201613,
      "unserviceable": false,
      "veg": true,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "0.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "110413",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 0.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "380501",
      "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
      "uuid": "8ae1d258-8f5c-4f03-bb40-d6bea5057d01",
      "city": "16",
      "area": "Nandanvan",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "gifctlvin9eqcbzqcyek",
      "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
      ],
      "tags": [
        
      ],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 39,
      "minDeliveryTime": 39,
      "maxDeliveryTime": 39,
      "slaString": "39 MINS",
      "lastMileTravel": 5,
      "slugs": {
        "restaurant": "kwality-walls-frozen-dessert-and-ice-cream-shop-nandanvan-nandanvan-4",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "RAZA INDIA GENERAL STORES AND DAIRY NEEDS: PLOT NO 1128/3/855, BADI MASJIZ, HASANGBAG, NAGPUR, MAHARASHTRA-440009",
      "locality": "Badi Masjid Road",
      "parentId": 582,
      "unserviceable": false,
      "veg": true,
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
      "adTrackingID": "cid=6794705~p=25~eid=00000188-4827-7e6c-6b3a-bece0082193b",
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
      "sla": {
        "restaurantId": "380501",
        "deliveryTime": 39,
        "minDeliveryTime": 39,
        "maxDeliveryTime": 39,
        "lastMileTravel": 5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.6",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "259110",
      "name": "Moti Mahal Delux",
      "uuid": "0cf2276d-f448-4cf2-a597-4f9555178535",
      "city": "16",
      "area": "Sitabuldi",
      "totalRatingsString": "500+ ratings",
      "cloudinaryImageId": "d1761c1120ea7fca0a7bedd5151b8bcb",
      "cuisines": [
        "North Indian",
        "Mughlai",
        "Biryani",
        "Tandoor",
        "Kebabs"
      ],
      "tags": [
        
      ],
      "costForTwo": 35000,
      "costForTwoString": "₹350 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "moti-mahal\tdelux-nandanvan-nandanvan",
        "city": "nagpur"
      },
      "cityState": "16",
      "address": "COTTON MARKET CHOWK, NAGPUR, - 440012",
      "locality": "Sitabuldi",
      "parentId": 2113,
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
            "fee": 2500,
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
        "totalFees": 2500,
        "message": "",
        "title": "Delivery Charge",
        "amount": "2500",
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
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "FREE ITEM",
        "subHeader": "",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "259110",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 500,
      "new": false
    },
    "subtype": "basic"
  }
    ];

const Body = () => {
    return(
        <div className="body">   
            <div className="search-container">
                search
            </div>
            <div className="res-container">
                {/* Resto card */}
                {
                  resList.map((restaurant) => 
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>
                  )
                }
            </div>
        </div>
    );
};
const AppLayout = () => (
    <div className="app">
        {/* Header */}
        <Header/>

        {/* Body */}
        <Body/>

        {/* Footer */}
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);