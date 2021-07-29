import { createContext } from "react";


export const bookingContext = createContext({
    usersList: [],
    bookingsList: [],
    myBookings:[],
    booking: null,
    subTotal: 0,
    totalPrice: 0,
    getBookingsList: () => { },
    getUsersList: () => { },
    getMyBookings: () => { },
})