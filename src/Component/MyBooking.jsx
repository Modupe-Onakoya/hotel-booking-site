import React, { useContext } from "react";
import { context } from "../Component/AppContext";

const MyBooking = () => {
    const { bookings, cancelBooking } = useContext(context)

    if (bookings.length === 0) return (
        <p className="pt-30 px-24 text-sm text-gray-500">You have no bookings yet.</p>
    )

    return (
        <div className="grid grid-cols-3 gap-6 px-4 sm:px-6 md:px-8 lg:px-24 xl:px-32 pt-30 text-[13px]">

            <p className="font-medium text-gray-500">Hotel</p>
            <p className="font-medium text-gray-500">Timing</p>
            <p className="font-medium text-gray-500">Payment</p>
            <div className="col-span-3 border-t border-gray-200" />

            {bookings.map((booking) => (
                <>
                    <div key={booking.id} className="flex gap-3 items-start">
                        <img src={booking.image} alt={booking.hotelName} className="w-20 h-20 object-cover rounded-md" />
                        <div className="flex flex-col gap-1">
                            <p className="font-medium">{booking.hotelName}</p>
                            <p className="text-sm text-gray-500">{booking.city}</p>
                            <p className="text-sm text-gray-500">{booking.roomType}</p>
                            <div className="flex items-center gap-1 text-sm text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A9 9 0 1118.88 6.196M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                <span>{booking.guests} Guests</span>
                            </div>
                            <p className="text-sm font-medium">${booking.pricePerNight} / night</p>
                        </div>
                    </div>

                    <div className="flex gap-8">
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-gray-500">Check In</p>
                            <p className="text-[12px]">{booking.checkIn}</p>
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-sm text-gray-500">Check Out</p>
                            <p className="text-[12px]">{booking.checkOut}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className={`px-3 py-1 rounded-full text-sm ${booking.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                            {booking.isPaid ? "Paid" : "Unpaid"}
                        </span>
                        <button
                            onClick={() => cancelBooking(booking.id)}
                            className="text-red-500 text-xs cursor-pointer hover:underline"
                        >
                            Cancel
                        </button>
                    </div>

                    <div className="col-span-3 border-t border-gray-100" />
                </>
            ))}
        </div>
    )
}

export default MyBooking