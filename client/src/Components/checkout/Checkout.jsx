import React, { useContext, useEffect } from 'react';
import { contextData } from '../../context/CreateContext';
import { AdminPageScriptsRun } from '../AdminPanel/AdminScriptsRun';
import BillingInfo from './BillingInfo';
import PaymentInfo from './PaymentInfo';
import Header from './Header';
import LoadingComponent from '../../Loading Animation/Loading';

const Checkout = () => {
  const context = useContext(contextData);

  useEffect(() => {
    AdminPageScriptsRun(true);
  }, []);
  useEffect(() => {

  }, [context.totalPrice])

  if (context.loading) {
    return <LoadingComponent />;
  }
  return (
    <>
      <Header />
      <div className='container-fluid'>
        <div className='wrapper'>
          <div className='content-page'>
            <div className='content'>
              <div className='row'>
                <div className='col-12'>
                  <div className='card'>
                    <div className='card-body'>
                      <ul className='nav nav-pills bg-nav-pills nav-justified mb-3'>
                        <li className='nav-item'>
                          <a
                            href='#billing-information'
                            data-bs-toggle='tab'
                            aria-expanded='false'
                            className='nav-link rounded-0 active'>
                            <i className='mdi mdi-account-circle font-18' />
                            <span className='d-none d-lg-block'>
                              Billing Info
                            </span>
                          </a>
                        </li>
                      </ul>
                      <div className='tab-content'>
                        <div
                          className='tab-pane show active'
                          id='billing-information'>
                          <div className='row'>
                            <BillingInfo />
                            <div className='col-lg-4'>
                              <div className='border p-3 mt-4 mt-lg-0 rounded'>
                                <h4 className='header-title mb-3'>
                                  Order Summary
                                </h4>
                                <div className='table-responsive'>
                                  <table className='table table-centered mb-0'>
                                    <tbody>
                                      <tr>
                                        <td>
                                          <img
                                            src='admin/assets/images/products/product-1.jpg'
                                            alt='contact-img'
                                            title='contact-img'
                                            className='rounded me-2'
                                            height={48}
                                          />
                                          <p className='m-0 d-inline-block align-middle'>
                                            <a
                                              href='apps-ecommerce-products-details.html'
                                              className='text-body fw-semibold'>
                                              Amazing Modern Chair
                                            </a>
                                            <br />
                                            <small>5 x $148.66</small>
                                          </p>
                                        </td>
                                        <td className='text-end'>$743.30</td>
                                      </tr>
                                      <tr className='text-end'>
                                        <td>
                                          <h6 className='m-0'>Sub Total:</h6>
                                        </td>
                                        <td className='text-end'>
                                          ${context.subTotal}
                                        </td>
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
                              </div>{' '}
                            </div>{' '}
                          </div>{' '}
                        </div>
                        <PaymentInfo />
                      </div>{' '}
                    </div>{' '}
                  </div>{' '}
                </div>{' '}
              </div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>
    </>
  );
};

export default Checkout;
