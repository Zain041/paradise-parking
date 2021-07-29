/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { bookingContext } from '../../../context/BookingsContext/bookingContext';
import './Booking.css';

const Bookings = () => {
  const bookingcontext = useContext(bookingContext)


  useEffect(() => {
    if (bookingcontext.bookingsList.length === 0) {
      bookingcontext.getBookingsList();
    }
  }, []);

  return (
    <>
      <div className="row content-page">
        <div className="col-12 ">
          <div className="card content">
            <h2 className="text-center mt-3">All Bookings List</h2>
            <div className="card-body " style={{ overflowX: 'auto', marginTop: '30px' }} >
              <div className="row mb-2">
                <div className="col-lg-8">
                  <form className="row gy-2 gx-2 align-items-center">
                    <div className="col-auto">
                      <label htmlFor="inputPassword2" className="visually-hidden">Search</label>
                      <input type="search" className="form-control" id="inputPassword2" placeholder="Search..." />
                    </div>
                    {/* <div className="col-auto">
                      <div className="ms-sm-2">
                        <label htmlFor="status-select">Status</label>
                      </div>
                    </div>
                    <div className="col-auto">
                      <div className="me-sm-2">
                        <select className="form-select" id="status-select">
                          <option selected>Choose...</option>
                          <option value={1}>Paid</option>
                          <option value={2}>Awaiting Authorization</option>
                          <option value={3}>Payment failed</option>
                          <option value={4}>Cash On Delivery</option>
                          <option value={5}>Fulfilled</option>
                          <option value={6}>Unfulfilled</option>
                        </select>
                      </div>
                    </div> */}
                  </form>
                </div>
                <div className="col-lg-4">
                  <div className="text-lg-end">
                    <button type="button" className="btn btn-light mb-2">Export</button>
                  </div>
                </div>{/* end col*/}
              </div>
              <div className="table-responsive">
                <table className="table table-centered mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Order ID</th>
                      <th>Name</th>
                      <th>Start Date</th>
                      <th>End Date</th>
                      <th>Status</th>
                      <th>Total</th>
                      <th>Payment Method</th>
                      <th style={{ width: 125 }}>Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {bookingcontext.bookingsList &&
                      bookingcontext?.bookingsList?.map((itm) => {
                        return <tr key={itm._id}>

                          <td><a href="apps-ecommerce-orders-details.html" className="text-body fw-bold">#{itm?._id.slice(18, 24)}</a> </td>
                          <td>
                            {itm?.name}
                          </td>
                          <td>
                          {new Date(itm?.startDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </td>
                          <td>
                            {new Date(itm?.endDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </td>
                          <td>
                            <h5><span className={`badge ${itm?.Paid ? 'badge-success-lighten' : 'badge-info-lighten'}`}>
                              <i className={`mdi ${itm?.Paid ? 'mdi-coin' : 'mdi-cash'}`} /> {itm?.Paid ? 'Paid' : 'Unpaid'}</span>
                            </h5>
                          </td>
                          <td>
                            ${itm?.amount}
                          </td>
                          <td>
                            Mastercard
                          </td>
                          <td>
                            <span href="javascript:void(0);" className="action-icon"> <i className="mdi mdi-delete" /></span>
                          </td>
                        </tr>
                      })}

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookings;
