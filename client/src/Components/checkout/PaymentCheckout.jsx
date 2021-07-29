import React, { useContext, useState } from 'react'
import { PayPalButton } from 'react-paypal-button-v2';
import { useToasts } from 'react-toast-notifications';
import { contextData } from '../../context/CreateContext';
import StripeContainer from '../../stripe/StripeContainer';

const PaymentCheckout = () => {
    const { addToast } = useToasts()
    const context = useContext(contextData);
    const [paypalview, setpaypalview] = useState(true);
    const [stripeview, setStripeview] = useState(false);

    return (
        <>
            <PayPalButton
                amount={context.totalPrice}
                currency='Euro'

                onSuccess={(details, data) => {
                    console.log(details, data)
                    addToast(`Dear ${details.payer.name.given_name} your payment successful`, { appearance: 'success', autoDismiss: true })

                    // OPTIONAL: Call your server to save the transaction
                    // return fetch("/paypal-transaction-complete", {
                    //   method: "post",
                    //   body: JSON.stringify({
                    //     orderId: data.orderID
                    //   })
                    // });
                    return fetch("/api/paypal/charge", {
                        method: "post",
                        body: JSON.stringify({
                            orderID: data.orderID,
                            name: details.payer.name.given_name,
                            email: details.payer.email,
                            amount: details?.purchase_units[0]?.amount?.value,
                            status: details?.status
                        })
                    });
                }}
            />



            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signup-modal">Pay with Stripe</button>
            <div id="signup-modal" class="modal fade" tabindex="1" role="dialog" aria-hidden="true">
                <div class="modal-dialog" style={{marginTop:'0px'}}>
                    <div class="modal-content" style={{marginTop:'0px'}}>
                        <div className="modal-body">

                        {/* <div className="row"> */}
                        {/* <div className="col-12"> */}
                        <StripeContainer />
                        {/* </div> */}
                        {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default PaymentCheckout
