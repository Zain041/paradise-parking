export const initialData = {
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  isVerified: false,
  loading:false,

  // booking details
  booking: null,
  subTotal: 0,
  totalPrice: 0,
};

if (sessionStorage.getItem('user')) {
  let parseData = JSON.parse(sessionStorage.getItem('user'));
  initialData.user = parseData;
  initialData.isAuthenticated = true;
  if(parseData.isAdmin){
  initialData.isAdmin = true;
  }
}
