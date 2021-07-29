import axios from 'axios';
import { useReducer } from 'react';
import { useToasts } from 'react-toast-notifications';
import { reducer } from './reducers';
import { initialData } from './defaultValue';
import { contextData } from './CreateContext';
import { Link, useHistory } from 'react-router-dom'


const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialData);
  const { addToast } = useToasts();

  const history = useHistory()

  const register = async (itm) => {
    let data = JSON.stringify(itm);
    let config = {
      method: 'post',
      url: '/api/register',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    // dispatch({ type: 'LOADING_REGISTER' });

    try {
      const res = await axios(config);
      let message = res.data.messages;
      console.log(message  )
      console.log(  res)
      if(res.status=== 201){
        history.push("/")
      }
      if (res) {
        message.forEach((eror) => {
          addToast(eror.msg, { appearance: 'info', autoDismiss: true });
        });
      }
    } catch (err) {
      console.log(err)

      let error = err.response.data.errors;
      if (err) {
        error.forEach((eror) => {
          addToast(eror.msg, { appearance: 'error', autoDismiss: true });
        });
      }
    }
  };
  const login = async (itm) => {
    let data = JSON.stringify(itm);
    dispatch({ type: 'LOADING_LOGIN' });

    let config = {
      method: 'post',
      url: '/api/login',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    try {
      const res = await axios(config);
      console.log(res.data);
      dispatch({
        type: 'LOGIN_USER',
        payload: res.data,
      });
      if (res.data.token) {
        sessionStorage.setItem('user', JSON.stringify(res.data));
        addToast('You are now logged in', {
          appearance: 'success',
          autoDismiss: true,
        });
      } else {
        return;
      }
    } catch (err) {
      let error = err.response.data.errors;
      if (err) {
        error.forEach((eror) => {
          addToast(eror.msg, { appearance: 'error', autoDismiss: true });
        });
      }
    }
  };

  const sociallogin = async (itm) => {

    let data = JSON.stringify(itm);
    dispatch({ type: 'LOADING_LOGIN' });

    let config = {
      method: 'post',
      url: '/api/sociallogin',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    try {
      const res = await axios(config);
      console.log(res.data);
      dispatch({
        type: 'LOGIN_USER',
        payload: res.data,
      });
      if (res.data.token) {
        sessionStorage.setItem('user', JSON.stringify(res.data));
        addToast('You are now logged in', {
          appearance: 'success',
          autoDismiss: true,
        });
      } else {
        return;
      }
    } catch (err) {
      let error = err.response.data.errors || err.response.data.messages;
      if (err) {
        error.forEach((eror) => {
          addToast(eror.msg, { appearance: 'error', autoDismiss: true });
        });
      }
    }
  };

  const logoutUser = () => {
    dispatch({ type: 'LOGOUT' });
  };

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
  // Booking actions
  const updatePrice = async (total, subtotal) => {

    try {
      dispatch({ type: 'UPDATE_PRICE', payload: { total, subtotal } })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <contextData.Provider
      value={{
        ...state,
        login,
        sociallogin,
        register,
        logoutUser,
        newBooking,
        updatePrice
      }}>
      {children}
    </contextData.Provider>
  );
};

export { Provider, contextData };
