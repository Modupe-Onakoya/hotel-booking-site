import logo from './logo.svg'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import instagramIcon from './instagramIcon.svg'
import facebookIcon from './facebookIcon.svg'
import twitterIcon from './twitterIcon.svg'
import linkendinIcon from './linkendinIcon.svg'
import freeWifiIcon from './freeWifiIcon.svg'
import freeBreakfastIcon from './freeBreakfastIcon.svg'
import roomServiceIcon from './roomServiceIcon.svg'
import mountainIcon from './mountainIcon.svg'
import poolIcon from './poolIcon.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.png'
import roomImg2 from './roomImg2.png'
import roomImg3 from './roomImg3.png'
import roomImg4 from './roomImg4.png'
import regImage from './regImage.png'
import exclusiveOfferCardImg1 from "./exclusiveOfferCardImg1.png";
import exclusiveOfferCardImg2 from "./exclusiveOfferCardImg2.png";
import exclusiveOfferCardImg3 from "./exclusiveOfferCardImg3.png";
import addIcon from "./addIcon.svg";
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import heroImage from "./heroImage.png";



export const assets = {
    heroImage,
    logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    instagramIcon,
    facebookIcon,
    twitterIcon,
    linkendinIcon,
    freeWifiIcon,
    freeBreakfastIcon,
    roomServiceIcon,
    mountainIcon,
    poolIcon,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    addIcon,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];

// Exclusive Offers Dummy Data
export const exclusiveOffers = [
    { _id: 1, title: "Summer Escape Package", description: "Enjoy a complimentary night and daily breakfast", priceOff: 25, expiryDate: "Aug 31", image: exclusiveOfferCardImg1 },
    { _id: 2, title: "Romantic Getaway", description: "Special couples package including spa treatment", priceOff: 20, expiryDate: "Sep 20", image: exclusiveOfferCardImg2 },
    { _id: 3, title: "Luxury Retreat", description: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide.", priceOff: 30, expiryDate: "Sep 25", image: exclusiveOfferCardImg3 },
]

// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides." },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!" }
];

// Facility Icon
export const facilityIcons = {
    "Free WiFi": assets.freeWifiIcon,
    "Free Breakfast": assets.freeBreakfastIcon,
    "Room Service": assets.roomServiceIcon,
    "Mountain View": assets.mountainIcon,
    "Pool Access": assets.poolIcon,
};

// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// Hotel Dummy Data
export const hotelDummyData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Urbanza Suites",
    "address": "Main Road  123 Street , 23 Colony",
    "contact": "+0123456789",
    "owner": userDummyData,
    "city": "New York",
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 399,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg1, roomImg2, roomImg3, roomImg4],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 299,
        "amenities": ["Room Service", "Mountain View", "Pool Access"],
        "images": [roomImg2, roomImg3, roomImg4, roomImg1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    },
    {
        "_id": "67f76406197ac559e4089b82",
        "hotel": hotelDummyData,
        "roomType": "Double Bed",
        "pricePerNight": 249,
        "amenities": ["Free WiFi", "Free Breakfast", "Room Service"],
        "images": [roomImg3, roomImg4, roomImg1, roomImg2],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:24:06.285Z",
        "updatedAt": "2025-04-10T06:24:06.285Z",
        "__v": 0
    },
    {
        "_id": "67f763d8197ac559e4089b7a",
        "hotel": hotelDummyData,
        "roomType": "Single Bed",
        "pricePerNight": 199,
        "amenities": ["Free WiFi", "Room Service", "Pool Access"],
        "images": [roomImg4, roomImg1, roomImg2, roomImg3],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:23:20.252Z",
        "updatedAt": "2025-04-10T06:23:20.252Z",
        "__v": 0
    }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    },
    {
        "_id": "67f76810994a731e97d3b8b4",
        "user": userDummyData,
        "room": roomsDummyData[3],
        "hotel": hotelDummyData,
        "checkInDate": "2025-04-11T00:00:00.000Z",
        "checkOutDate": "2025-04-12T00:00:00.000Z",
        "totalPrice": 199,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:20.501Z",
        "updatedAt": "2025-04-10T06:41:20.501Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/
export const hotelData = {
    "hotels": [
        {
            "id": "1",
            "name": "Urbanza Suites",
            "address": "123 Main Road, 23 Colony",
            "city": "New York",
            "contact": "+1234567890",
            "rating": 4.8,
            "isFeatured": true,
            "image": "/roomImg1.jpg",
            "description": "A luxury urban retreat in the heart of New York, offering world-class amenities and stunning city views."
        },
        {
            "id": "2",
            "name": "Azure Beach Resort",
            "address": "45 Ocean Drive, Victoria Island",
            "city": "Lagos",
            "contact": "+2348012345678",
            "rating": 4.5,
            "isFeatured": true,
            "image": "/roomImg2.jpg",
            "description": "A stunning beachfront resort with breathtaking ocean views and premium hospitality."
        },
        {
            "id": "3",
            "name": "The Grand Palace",
            "address": "78 Kings Avenue, Central District",
            "city": "London",
            "contact": "+447911123456",
            "rating": 4.9,
            "isFeatured": true,
            "image": "/roomImg3.jpg",
            "description": "An iconic luxury hotel in central London combining classic elegance with modern comfort."
        }
    ],
    "rooms": [
        {
            "id": "1",
            "hotelId": 1,
            "hotelName": "Urbanza Suites",
            "city": "New York",
            "roomType": "Single Bed",
            "pricePerNight": 199,
            "amenities": [
                "Free WiFi",
                "Room Service",
                "Pool Access"
            ],
            "images": [
                "/roomImg1.jpg",
                "/roomImg2.jpg",
                "/roomImg3.jpg",
                "/roomImg4.jpg"
            ],
            "isAvailable": true,
            "rating": 4.5,
            "description": "A cozy single room with modern furnishings and city views."
        },
        {
            "id": "2",
            "hotelId": 1,
            "hotelName": "Urbanza Suites",
            "city": "New York",
            "roomType": "Double Bed",
            "pricePerNight": 299,
            "amenities": [
                "Free WiFi",
                "Free Breakfast",
                "Room Service",
                "Pool Access"
            ],
            "images": [
                "/roomImg2.jpg",
                "/roomImg3.jpg",
                "/roomImg4.jpg",
                "/roomImg1.jpg"
            ],
            "isAvailable": true,
            "rating": 4.7,
            "description": "Spacious double room perfect for couples with premium city views."
        },
        {
            "id": "3",
            "hotelId": 1,
            "hotelName": "Urbanza Suites",
            "city": "New York",
            "roomType": "Suite",
            "pricePerNight": 499,
            "amenities": [
                "Free WiFi",
                "Free Breakfast",
                "Pool Access",
                "Mountain View",
                "Room Service"
            ],
            "images": [
                "/roomImg3.jpg",
                "/roomImg4.jpg",
                "/roomImg1.jpg",
                "/roomImg2.jpg"
            ],
            "isAvailable": true,
            "rating": 4.9,
            "description": "Luxurious suite with panoramic city views and a private lounge area."
        },
        {
            "id": "4",
            "hotelId": 1,
            "hotelName": "Urbanza Suites",
            "city": "New York",
            "roomType": "Double Bed",
            "pricePerNight": 399,
            "amenities": [
                "Free WiFi",
                "Mountain View",
                "Pool Access"
            ],
            "images": [
                "/roomImg4.jpg",
                "/roomImg1.jpg",
                "/roomImg2.jpg",
                "/roomImg3.jpg"
            ],
            "isAvailable": false,
            "rating": 4.6,
            "description": "Premium double room with mountain views and exclusive pool access."
        },
        {
            "id": "5",
            "hotelId": 2,
            "hotelName": "Azure Beach Resort",
            "city": "Lagos",
            "roomType": "Single Bed",
            "pricePerNight": 149,
            "amenities": [
                "Free WiFi",
                "Pool Access",
                "Room Service"
            ],
            "images": [
                "/roomImg2.jpg",
                "/roomImg1.jpg",
                "/roomImg4.jpg",
                "/roomImg3.jpg"
            ],
            "isAvailable": true,
            "rating": 4.3,
            "description": "Comfortable single room steps away from the beach."
        },
        {
            "id": "6",
            "hotelId": 2,
            "hotelName": "Azure Beach Resort",
            "city": "Lagos",
            "roomType": "Double Bed",
            "pricePerNight": 249,
            "amenities": [
                "Free WiFi",
                "Free Breakfast",
                "Pool Access"
            ],
            "images": [
                "/roomImg3.jpg",
                "/roomImg2.jpg",
                "/roomImg1.jpg",
                "/roomImg4.jpg"
            ],
            "isAvailable": true,
            "rating": 4.5,
            "description": "Beachfront double room with stunning ocean views."
        },
        {
            "id": "7",
            "hotelId": 2,
            "hotelName": "Azure Beach Resort",
            "city": "Lagos",
            "roomType": "Suite",
            "pricePerNight": 449,
            "amenities": [
                "Free WiFi",
                "Free Breakfast",
                "Pool Access",
                "Room Service"
            ],
            "images": [
                "/roomImg4.jpg",
                "/roomImg3.jpg",
                "/roomImg2.jpg",
                "/roomImg1.jpg"
            ],
            "isAvailable": true,
            "rating": 4.8,
            "description": "Luxury beach suite with private terrace and ocean panorama."
        },
        {
            "id": "8",
            "hotelId": 2,
            "hotelName": "Azure Beach Resort",
            "city": "Lagos",
            "roomType": "Single Bed",
            "pricePerNight": 179,
            "amenities": [
                "Free WiFi",
                "Room Service"
            ],
            "images": [
                "/roomImg1.jpg",
                "/roomImg4.jpg",
                "/roomImg3.jpg",
                "/roomImg2.jpg"
            ],
            "isAvailable": false,
            "rating": 4.2,
            "description": "Cozy single room with garden views and complimentary WiFi."
        },
        {
            "id": "9",
            "hotelId": 3,
            "hotelName": "The Grand Palace",
            "city": "London",
            "roomType": "Single Bed",
            "pricePerNight": 299,
            "amenities": [
                "Free WiFi",
                "Free Breakfast",
                "Room Service"
            ],
            "images": [
                "/roomImg3.jpg",
                "/roomImg1.jpg",
                "/roomImg2.jpg",
                "/roomImg4.jpg"
            ],
            "isAvailable": true,
            "rating": 4.7,
            "description": "Elegant single room with classic London architecture and modern comforts."
        },
        {
            "id": "10",
            "hotelId": 3,
            "hotelName": "The Grand Palace",
            "city": "London",
            "roomType": "Double Bed",
            "pricePerNight": 499,
            "amenities": [
                "Free WiFi",
                "Free Breakfast",
                "Pool Access",
                "Mountain View"
            ],
            "images": [
                "/roomImg4.jpg",
                "/roomImg2.jpg",
                "/roomImg1.jpg",
                "/roomImg3.jpg"
            ],
            "isAvailable": true,
            "rating": 4.9,
            "description": "Grand double room with park views and premium furnishings."
        },
        {
            "id": "11",
            "hotelId": 3,
            "hotelName": "The Grand Palace",
            "city": "London",
            "roomType": "Suite",
            "pricePerNight": 899,
            "amenities": [
                "Free WiFi",
                "Free Breakfast",
                "Pool Access",
                "Room Service",
                "Mountain View"
            ],
            "images": [
                "/roomImg1.jpg",
                "/roomImg3.jpg",
                "/roomImg4.jpg",
                "/roomImg2.jpg"
            ],
            "isAvailable": true,
            "rating": 5,
            "description": "The pinnacle of luxury — a full suite with butler service and panoramic London views."
        },
        {
            "id": "12",
            "hotelId": 3,
            "hotelName": "The Grand Palace",
            "city": "London",
            "roomType": "Double Bed",
            "pricePerNight": 599,
            "amenities": [
                "Free WiFi",
                "Pool Access",
                "Room Service"
            ],
            "images": [
                "/roomImg2.jpg",
                "/roomImg4.jpg",
                "/roomImg3.jpg",
                "/roomImg1.jpg"
            ],
            "isAvailable": false,
            "rating": 4.8,
            "description": "Sophisticated double room with access to the palace spa and pool."
        }
    ],
    "testimonials": [
        {
            "id": "1",
            "name": "Sarah Johnson",
            "title": "Business Traveler",
            "rating": 5,
            "comment": "Absolutely stunning experience. The rooms were immaculate and the staff went above and beyond."
        },
        {
            "id": "2",
            "name": "James Carter",
            "title": "Honeymoon Guest",
            "rating": 4,
            "comment": "Perfect location and beautiful interiors. We had an amazing time and will definitely come back."
        },
        {
            "id": "3",
            "name": "Amina Yusuf",
            "title": "Family Vacation",
            "rating": 5,
            "comment": "The kids loved the pool and we loved the breakfast spread. One of the best family trips ever."
        },
        {
            "id": "4",
            "name": "Luca Moretti",
            "title": "Solo Traveler",
            "rating": 4,
            "comment": "Great value for money. Clean, comfortable, and the location was perfect for exploring the city."
        }
    ],
    "bookings": [
        {
            "roomId": "6",
            "hotelName": "Azure Beach Resort",
            "roomType": "Double Bed",
            "image": "/roomImg3.jpg",
            "city": "Lagos",
            "pricePerNight": 249,
            "checkIn": "0003-05-31",
            "checkOut": "0025-02-02",
            "guests": 1,
            "isPaid": false,
            "userId": "user1",
            "id": "xgtOzGdFaIo"
        },
        {
            "roomId": "9",
            "hotelName": "The Grand Palace",
            "roomType": "Single Bed",
            "image": "/assets/roomImg1-DYXdOBdo.png",
            "city": "London",
            "pricePerNight": 299,
            "checkIn": "0334-04-04",
            "checkOut": "0004-04-04",
            "guests": 1,
            "isPaid": false,
            "userId": "user1",
            "id": "eC_yOJXvyLI"
        },
        {
            "roomId": "8",
            "hotelName": "Azure Beach Resort",
            "roomType": "Single Bed",
            "image": "/src/assets/roomImg1.png",
            "city": "Lagos",
            "pricePerNight": 179,
            "checkIn": "0111-11-11",
            "checkOut": "0001-11-11",
            "guests": 1,
            "isPaid": false,
            "userId": "user1",
            "id": "m6fCrNnlji4"
        }
    ],
    "$schema": "./node_modules/json-server/schema.json"
}