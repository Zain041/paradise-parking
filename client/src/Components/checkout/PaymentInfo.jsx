import React, { useContext, useState, useEffect } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { useToasts } from 'react-toast-notifications';
import { contextData } from '../../context/CreateContext';
import StripeContainer from '../../stripe/StripeContainer';


const PaymentInfo = () => {
  const { addToast } = useToasts()
  const context = useContext(contextData);
  const [paypalview, setpaypalview] = useState(true);
  const [stripeview, setStripeview] = useState(false);

  return (
    <>
      <div className='tab-pane' id='payment-information'>
        <div className='row'>
          <div className='col-lg-8'>
            <h4 className='mt-2'>Payment Selection</h4>
            <p className='text-muted mb-4'>
              Fill the form below in order to send you the order's invoice.
            </p>
            {/* Pay with Paypal box*/}
            <div className='border p-3 mb-3 rounded'>
              <div className='row'>
                <div className='col-sm-8'>
                  <div className='form-check'>
                    <input
                      onChange={(e) => setpaypalview(e.target.checked)}
                      type='radio'
                      id='BillingOptRadio2'
                      name='billingOptions'
                      className='form-check-input'
                      checked={paypalview}
                    />
                    <label
                      className='form-check-label font-16 fw-bold'
                      htmlFor='BillingOptRadio2'>
                      Pay with Paypal
                    </label>
                  </div>
                  <p className='mb-0 ps-3 pt-1'>
                    You will be redirected to PayPal website to complete your
                    purchase securely.
                  </p>
                </div>
                <div className='col-sm-4 text-sm-end mt-3 mt-sm-0'>
                  <img
                    src='admin/assets/images/payments/paypal.png'
                    height={25}
                    alt='paypal-img'
                  />
                </div>
              </div>
            </div>
            {/* end Pay with Paypal box*/}
            {/* Credit/Debit Card box*/}
            <div className='border p-3 mb-3 rounded'>
              <div className='row'>
                <div className='col-sm-8'>
                  <div className='form-check'>
                    <input
                      name='billingOptions'
                      onChange={(e) => setStripeview(e.target.checked)}
                      type='radio'
                      id='BillingOptRadio1'
                      className='form-check-input'
                      checked={stripeview}
                    />
                    <label
                      className='form-check-label font-16 fw-bold'
                      htmlFor='BillingOptRadio1'>
                      Credit / Debit Card
                    </label>
                  </div>
                  <p className='mb-0 ps-3 pt-1'>
                    Safe money transfer using your bank account. We support
                    Mastercard, Visa, Discover and Stripe.
                  </p>
                </div>
                <div className='col-sm-4 text-sm-end mt-3 mt-sm-0'>
                  <img
                    src='admin/assets/images/payments/master.png'
                    height={24}
                    alt='master-card-img'
                  />
                  <img
                    src='admin/assets/images/payments/discover.png'
                    height={24}
                    alt='discover-card-img'
                  />
                  <img
                    src='admin/assets/images/payments/visa.png'
                    height={24}
                    alt='visa-card-img'
                  />
                  <img
                    src='admin/assets/images/payments/stripe.png'
                    height={24}
                    alt='stripe-card-img'
                  />
                </div>
              </div>{' '}
              {paypalview && <PayPalButton
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
              />}
              {stripeview && <StripeContainer />}
            </div>
            {/* end Credit/Debit Card box*/}
          </div>{' '}
          {/* end col */}
          <div className='col-lg-4'>
            <div className='border p-3 mt-4 mt-lg-0 rounded'>
              <h4 className='header-title mb-3'>Order Summary</h4>
              <div className='table-responsive'>
                <table className='table table-centered mb-0'>
                  <tbody>
                    <tr className='text-end'>
                      <td>
                        <h6 className='m-0'>Sub Total:</h6>
                      </td>
                      <td className='text-end'>${context.subTotal}</td>
                    </tr>

                    <tr className='text-end'>
                      <td>
                        <h5 className='m-0'>Total:</h5>
                      </td>
                      <td className='text-end fw-semibold'>
                        ${context.totalPrice}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* end table-responsive */}
            </div>{' '}
            {/* end .border*/}
          </div>{' '}
          {/* end col */}
        </div>{' '}
        {/* end row*/}
      </div>
    </>
  );
};

export default PaymentInfo;
