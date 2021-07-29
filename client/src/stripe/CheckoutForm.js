import { CardElement, useStripe, useElements, Elements } from "@stripe/react-stripe-js"
import axios from "axios"
import { useContext, useState } from "react"
import Field from "./Field"
import ErrorMessage from "./ErrorMessage"
import ResetButton from "./ResetButton"
import "./style/style.css"
import SubmitButton from "./SubmitButton"
import CardField from "./CardField"
import { contextData } from "../context/CreateContext"
import { useToasts } from "react-toast-notifications"


const CheckoutForm = () => {
    const context = useContext(contextData)
    const { addToast } = useToasts()

    const [billinDetails, setBillinDetails] = useState({
        name: "",
        email: "",
        phone: "",
        amount: context.totalPrice,
        id: "",
        userId: context.user.id,
        startDate: context.booking?.startDate,
        endDate: context.booking?.endDate,
        bookings: context.booking?.booking,
    })
    const stripe = useStripe()
    const elements = useElements()

    const updateValue = (e) => {
        setBillinDetails({ ...billinDetails, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log(billinDetails)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
            // card: {token: "tok_visa"}

            
                // "id": "pm_1JCl8v2eZvKYlo2C75hEbiXg",
                // "object": "payment_method",
                // // billing_details: {
                // //   "address": {
                // //     "city": null,
                // //     "country": "IN",
                // //     "line1": null,
                // //     "line2": null,
                // //     "postal_code": null,
                // //     "state": null
                // //   },
                // //   "email": "jenny@example.com",
                // //   "name": null,
                // //   "phone": "+15555555555"
                // // },
                // "card": {
                //   "brand": "visa",
                //   "checks": {
                //     "address_line1_check": null,
                //     "address_postal_code_check": null,
                //     "cvc_check": "pass"
                //   },
                //   "country": "US",
                //   "exp_month": 8,
                //   "exp_year": 2022,
                //   "fingerprint": "Xt5EWLLDS7FJjR1c",
                //   "funding": "credit",
                //   "generated_from": null,
                //   "last4": "4242",
                //   "networks": {
                //     "available": [
                //       "visa"
                //     ],
                //     "preferred": null
                //   },
                //   "three_d_secure_usage": {
                //     "supported": true
                //   },
                // "wallet": null
                // },
                // "created": 123456789,
                // "customer": null,
              
               
                // "type": "card"
              

            
        })


        if (!error) {
            paymentMethod.billing_details = billinDetails
            console.log(paymentMethod)

            try {
                const { id } = paymentMethod
                setBillinDetails(billinDetails.id = id)
                console.log(billinDetails)
                const response = await axios.post(
                    "/api/stripe/charge", billinDetails,

                )
                console.log("Stripe 35 | data", response.data.success)
                if (response.data.success) {
                    addToast(`Your payment successful`, { appearance: 'success', autoDismiss: true })

                    console.log("CheckoutForm.js 25 | payment successful!")
                }
            } catch (error) {
                console.log("CheckoutForm.js 28 | ", error)
            }
        } else {
            console.log(error.message)
        }
        setBillinDetails({
            name: "",
            email: "",
            phone: "",
            amount: 0,
            id: ""
        })
    }



    return (
        <div className="globalContent">
            <div className="cell example example1" id="example-1">
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <div className="row">
                            <label htmlFor="example1-name" data-tid="elements_examples.form.name_label">Name</label>
                            <input id="example1-name"
                                data-tid="elements_examples.form.name_placeholder"
                                type="text"
                                name="name"
                                value={billinDetails.name || ""}
                                onChange={updateValue}
                                placeholder="Jane Doe"
                                required autoComplete="name" />
                        </div>
                        <div className="row">
                            <label htmlFor="example1-email" data-tid="elements_examples.form.email_label">Email</label>
                            <input id="example1-email" data-tid="elements_examples.form.email_placeholder"
                                name="email"
                                value={billinDetails.email || ""}
                                onChange={updateValue}
                                type="email" placeholder="janedoe@gmail.com" required autoComplete="email" />
                        </div>
                        <div className="row">
                            <label htmlFor="example1-phone" data-tid="elements_examples.form.phone_label">Phone</label>
                            <input id="example1-phone"
                                data-tid="elements_examples.form.phone_placeholder"
                                type="tel"
                                name="phone"
                                value={billinDetails.phone || ""}
                                onChange={updateValue}
                                placeholder="(941) 555-0123" required autoComplete="tel" />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="row">
                            <CardElement />
                            <div id="example1-card" />
                        </div>
                    </fieldset>
                    <button type="submit" data-tid="elements_examples.form.pay_button">Pay ${context.totalPrice}</button>
                </form>
            </div>

        </div>
    )
}

export default CheckoutForm
