export const reducer = (state, action) => {
  switch (action.type) {
    case 'LOADING_LOGIN':
    case 'LOADING_REGISTER':
      return {
        ...state,
        loading: true,
      };
    case 'LOGIN_USER':
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        isAdmin: action.payload.isAdmin,
        isVerified: action.payload.isVerified,
      };
    case 'REGISTER_USER':
      return {
        ...state,
        loading: false,
        user: action.payload,
        isAuthenticated: true,
        isAdmin: action.payload.isAdmin || false,
        isVerified: action.payload.isVerified || false,
      };
    case 'REGISTER_USER_FAIL':
    case 'LOGIN_USER_FAIL':
    case 'LOGOUT':
      sessionStorage.clear();
      return {
        ...state,
        loading: false,
        user: null,
        isAuthenticated: false,
        isAdmin: false,
        isVerified: false,
      };

    case 'ADD_BOOKING_DETAILS':
      return {
        ...state,
        loading: false,
        booking: action.payload,
        totalPrice: action.payload.price,
      };
    case 'UPDATE_PRICE':
      return {
        ...state,
        totalPrice: action.payload.total,
        subTotal: action.payload.subtotal,
      };
    default:
      return state;
  }
};
