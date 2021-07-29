/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { bookingContext } from '../../../context/BookingsContext/bookingContext';
console.log(bookingContext)
const AdminProfileList = () => {

    const bookingcontext = useContext(bookingContext)

    useEffect(() => {
        if (bookingcontext.usersList.length === 0) {
            bookingcontext.getUsersList();
        }
    }, []);

    return (
        <>
            <div className="row content-page">
                <div className="col-12 ">
                    <div className="card content">
                        <h2 className="text-center mt-3">All Admin List</h2>
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
                                        </div> */}
                                        {/* <div className="col-auto">
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
                                            <th>User ID</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Registerd Date</th>
                                            <th>Status</th>
                                            <th style={{ width: 125 }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {bookingcontext.usersList &&
                                            bookingcontext?.usersList?.map((itm) => {
                                                return  itm.isAdmin === false ?  <tr key={itm._id}>
                                                    <td><span href="apps-ecommerce-orders-details.html" className="text-body fw-bold">
                                                        #{itm._id.slice(18, 24)}</span>
                                                    </td>
                                                    <td>
                                                        {itm.name}
                                                    </td>
                                                    <td>
                                                        {itm.email}
                                                    </td>
                                                    <td>
                                                        {new Date(itm.createdAt).toLocaleDateString('en-US', {
                                                            year: 'numeric',
                                                            month: 'long',
                                                            day: 'numeric'
                                                        })}
                                                    </td>
                                                    <td>
                                                        {/* badge-info-lighten"><i className="mdi mdi-cash" /> */}
                                                        <h5><span className={`badge ${itm.isVerified ? 'badge-success-lighten' : 'badge-danger-lighten'}`}>
                                                            {itm.isVerified ? 'Verified' : 'UnVerified'}</span>
                                                        </h5>
                                                    </td>

                                                    <td>

                                                        <span className="action-icon"> <i className="mdi mdi-delete" /></span>
                                                    </td>
                                                </tr>
                                                : null
                                            })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminProfileList
