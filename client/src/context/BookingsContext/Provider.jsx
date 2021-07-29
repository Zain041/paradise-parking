import axios from 'axios';
import { useReducer } from 'react';
import { useToasts } from 'react-toast-notifications';
import { contextData } from '../CreateContext';
import { bookingContext } from './bookingContext';
import { bookingdefaultState } from './defaultState';
import { bookingReducer } from './Reducer';

const BookingProvider = ({ children }) => {
    const [state, dispatch] = useReducer(bookingReducer, bookingdefaultState);
    const { addToast } = useToasts();

    // Booking actions
    const newBooking = async (data) => {
        dispatch({ type: 'LOADING_LOGIN' });
        try {
            setTimeout(() => {
                dispatch({ type: 'ADD_BOOKING_DETAILS', payload: data });
            }, 2000);
            clearTimeout();
        } catch (err) {
            console.log(err);
        }
    };

    const getBookingsList = async () => {
        dispatch({ type: 'LOADING' });

        try {
            const res = await axios.get('/api/bookings')
            dispatch({
                type: 'GET_BOOKING_LIST',
                payload: res.data.bookings
            })
            addToast('Bookings List Fetched', {
                appearance: 'success',
                autoDismiss: true,
            });
        } catch (err) {
            let error = err.response.data.errors || err.response.data.messages;
            if (err) {
                error.forEach((eror) => {
                    addToast(eror.msg, { appearance: 'error', autoDismiss: true });
                });
            }
        }
    }
    const getUsersList = async () => {
        dispatch({ type: 'LOADING' });

        try {
            const res = await axios.get('/api/users')
            dispatch({
                type: 'GET_USERS_LIST',
                payload: res.data.users
            })
            addToast('Users List Fetched', {
                appearance: 'success',
                autoDismiss: true,
            });
        } catch (err) {
            let error = err.response.data.errors;
            if (err) {
                error.forEach((eror) => {
                    addToast(eror.msg, { appearance: 'error', autoDismiss: true });
                });
            }
        }
    }
    const getMyBookings = async (id) => {
        dispatch({ type: 'LOADING' });
        console.log(id)
        try {

            const res = await axios.get(`/api/booking/${id}`)
            console.log(res.data)
            dispatch({
                type: 'GET_MY_BOOKINGS',
                payload: res.data.bookings
            })
            addToast('You Bookings Successfully Fetched!', {
                appearance: 'success',
                autoDismiss: true,
            });
        } catch (err) {
            let error = err.response.data.errors;
            console.log(err, error)
            if (err) {
                error.forEach((eror) => {
                    addToast(eror.msg, { appearance: 'error', autoDismiss: true });
                });
            }
        }
    }

    return (
        <bookingContext.Provider
            value={{
                ...state,
                newBooking,
                getBookingsList,
                getUsersList,
                getMyBookings
            }}>
            {children}
        </bookingContext.Provider>
    );
};

export default BookingProvider;
