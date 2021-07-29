const React = require("react")

export const HomePage = React.lazy(() => import("./HomePage/HomePage"))
export const AdminPanel = React.lazy(() => import("./AdminPanel/AdminPanel"))
export const Login = React.lazy(() => import("./Login/Login"))
export const Register = React.lazy(() => import("./Register/Register"))
export const Checkout = React.lazy(() => import("./checkout/Checkout"))