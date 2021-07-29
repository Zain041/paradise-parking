import React from 'react'
import ReactDOM from 'react-dom'
import { ToastProvider } from 'react-toast-notifications';
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { Provider } from './context/Provider'
import BookingProvider from './context/BookingsContext/Provider';
// import {I18nextProvider} from "react-i18next";
// import i18next from "i18next";
import './i18n';

// i18next.init({
//   interpolation: { escapeValue: false },  // React already does escaping
// });

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <Provider>
        <BookingProvider>
        {/* <I18nextProvider i18n={i18next}> */}
            <App/>
        {/* </I18nextProvider> */}
        </BookingProvider>
      </Provider>
    </ToastProvider>

  </React.StrictMode>,
  document.getElementById('root')
)


reportWebVitals()
