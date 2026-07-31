import React from "react";
import { roomsDummyData, hotelDummyData } from "../assets/assets";

const MyBooking = () => {
    return (
        <div className="grid grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 pt-30">

            {/* HEADERS */}
            <p className="font-medium text-gray-500">Hotel</p>
            <p className="font-medium text-gray-500">Timing</p>
            <p className="font-medium text-gray-500">Payment</p>

            {/* DIVIDER */}
            <div className="col-span-3 border-t border-gray-200" />

            {/* ROWS */}
            {roomsDummyData.map((room) => (
                <>
                    {/* HOTEL — col 1 */}
                    <div key={room._id} className="flex gap-3 items-start">
                        <img
                            src={room.images[0]}
                            alt={room.hotel.name}
                            className="w-20 h-20 object-cover rounded-md"
                        />
                        <div className="flex flex-col gap-1">
                            <p className="font-medium">{room.hotel.name}</p>
                            <p className="text-sm text-gray-500">{room.hotel.address}</p>
                            <p className="text-sm text-gray-500">{room.hotel.city}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                {/* guest icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.88 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>2 Guests</span>
                            </div>
                            <p className="text-sm font-medium">${room.pricePerNight} / night</p>
                        </div>
                    </div>

                    {/* TIMING — col 2 */}
                    <div className="flex gap-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-gray-500">Check In</p>
                            <p className="font-medium">12 Aug 2026</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-gray-500">Check Out</p>
                            <p className="font-medium">15 Aug 2026</p>
                        </div>
                    </div>

                    {/* PAYMENT — col 3 */}
                    <div className="flex items-start">
                        <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                            Paid
                        </span>
                    </div>

                    {/* row divider */}
                    <div className="col-span-3 border-t border-gray-100" />
                </>
            ))}

        </div>
    );
};

export default MyBooking;