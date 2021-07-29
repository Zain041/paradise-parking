import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

import CheckoutForm from "./CheckoutForm"

// const PUBLIC_KEY = "pk_test_51I9qD9D5F2IH5CEnmjruE28F17EuADJ3ForvkJgQWz9DNdriirOo88ZDhKb6wwYiz9BFNIwxz3DXXVB0LoMocRgz004nwe4LQH"
const PUBLIC_KEY = "pk_test_51JAApYGPqHz8pu0H8jiTjKhkJoWgw8ZhyyJWDBilL6SOEQAzz4mNQb4QNw5OTEYLGJ1g8d68aHHIqee49oD6RjGt00zC0fDdFX"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


const StripeContainer = () => {
    return (
        <div>
            <Elements stripe={stripeTestPromise}>
                <CheckoutForm />
            </Elements>
        </div>
    )
}

export default StripeContainer
