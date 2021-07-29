import { createContext } from 'react';

export const contextData = createContext({
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  isVerified: false,
  loading:false,


  // user Auth
  login: (itm) => {},
  sociallogin: (itm) => {},
  register: (itm) => {},
  logoutUser: () => {},

  //   booking _details
  booking:null,
  subTotal:0,
  totalPrice:0,
  newBooking: (itm) => {},
  updatePrice: (itm) => {},

});
