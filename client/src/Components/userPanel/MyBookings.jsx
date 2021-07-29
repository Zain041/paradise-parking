import React, { useContext } from 'react'
import { bookingContext } from '../../context/BookingsContext/bookingContext';
import '../AdminPanel/Bookings/Booking.css'

const MyBookings = () => {
    const bookingcontext = useContext(bookingContext)
    return (
        <>
            {bookingcontext.myBookings.length === 0 ? <h3>You dont have any bookings yet</h3> :
                <>
                    <div style={{ overflowX: 'auto', maxWidth: '66%', marginTop: '30px' }}>
                        <h3> My Bookings List</h3>

                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Order Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col"> Start Date</th>
                                    <th scope="col"> End Date</th>
                                    <th scope="col">price</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>

                                {bookingcontext.myBookings &&
                                    bookingcontext.myBookings?.map((itm) => {
                                        return <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    #{itm?._id.slice(18, 24)}
                                                </div>
                                            </td>
                                            <td>{itm?.name}</td>
                                            <td> {new Date(itm?.startDate).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}</td>
                                            <td> {new Date(itm?.endDate).toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}</td>
                                            <td>
                                                {itm?.amount}
                                            </td>
                                            <div className="col-auto mt-3">
                                                <span className={`badge badge-pill badge-${itm?.Paid ? 'success' : 'danger'}`}>
                                                    <span className="text-uppercase font-weight-bold">{itm?.Paid ? 'Paid' : 'Unpaid'}</span>
                                                </span>
                                            </div>
                                            <td>
                                                <div class="d-flex">
                                                    {/* <i class="fas fa-edit mr-3" data-toggle="tooltip" data-placement="top" title="Edit item"></i> */}
                                                    <i class="fas fa-trash text-danger mr-2" data-toggle="tooltip" data-placement="top" title="Delete item"></i>
                                                </div>
                                            </td>
                                        </tr>
                                    })}
                            </tbody>
                        </table>
                    </div>
                </>
            }
        </>
    )
}

export default MyBookings

{/* <table>
<tr>
    <th>Tid</th>
    <th>Name</th>
    <th>Email</th>
    <th>Amount</th>
    <th>Phone</th>
    <th>Date</th>
    <th>Status</th>
</tr>
{bookingcontext.myBookings &&
    bookingcontext.myBookings?.map((itm) => {
        return (
            <tr>
                <td>{itm?._id}</td>
                <td>{itm?.name}</td>
                <td>{itm?.email}</td>
                <td>${itm?.amount}</td>
                <td>{itm?.phone}</td>
                <td>{new Date(itm?.timeStamp).toLocaleDateString()}</td>
                <td>{itm?.Paid ? 'Paid' : 'Unpaid'}</td>
            </tr>
        );
    })}
</table> */}