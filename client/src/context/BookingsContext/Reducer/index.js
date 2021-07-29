export const bookingReducer = (state, action) => {
    switch (action.type) {
        case 'LOADING':
            return {
                ...state,
                loading: true,
            };
        case 'GET_BOOKING_LIST':
            return {
                ...state,
                loading: false,
                bookingsList: [...action.payload]
            };
        case 'GET_USERS_LIST':
            return {
                ...state,
                loading: false,
                usersList: [...action.payload]
            };
        case 'GET_MY_BOOKINGS':
            return {
                ...state,
                loading: false,
                myBookings: [...action.payload]
            };
        case 'ADD_BOOKING_DETAILS':
            let start = action.payload.startDate;
            let end = action.payload.endDate;
            // let pricePerBooking = action.payload.price;
            // let numberOfBooking = action.payload.booking;

            const sDate = new Date(start).getDate();
            const eDate = new Date(end).getDate();
            let totalDays = eDate - sDate;

            const ssDate = new Date(start).getTime();
            const eeDate = new Date(end).getTime();
            let tTime = eeDate - ssDate;

            console.log(ssDate, eeDate, tTime);
            const totalperBooking = totalDays * action.payload.price;
            const finalPrice = totalperBooking * action.payload.booking;
            return {
                ...state,
                loading: false,
                booking: action.payload,
                subTotal: totalperBooking,
                totalPrice: finalPrice,
            };
        default:
            return state;
    }
};
