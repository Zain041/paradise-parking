import React,{useState,useEffect,useContext} from 'react'
import axios from 'axios'
import {contextData} from '../../../context/CreateContext'
import Header from '../../HomePage/Header'
const Inovice = () => {
	const [invoices, setInvoice] = useState([])
	const context = useContext(contextData)
	useEffect(async()=>{
		const response=await axios.get(`/api/invoice/${context.user?.id}`)
		try {
			setInvoice(response.data.userInvoices)
		} catch (error) {
			
		}
	},[setInvoice,context.user.id])
    return (
    <div class="container mt-5">
        <Header/>
    {
		invoices.map((invoice)=>(<div class="d-flex justify-content-center row" key={Inovice._id}>
        <div class="col-md-8">
            <div class="p-3 bg-white rounded">
                <div class="row">
                    <div class="col-md-6">
                        <h1 class="text-uppercase">Invoice</h1>
                        <div class="billed"><span class="font-weight-bold text-uppercase">Name:</span><span class="ml-1">{invoice.name}</span></div>
                        <div class="billed"><span class="font-weight-bold text-uppercase">Date:</span><span class="ml-1">{invoice.timeStamp}</span></div>
                        <div class="billed"><span class="font-weight-bold text-uppercase">Order ID:</span><span class="ml-1">{invoice._id}</span></div>
                    </div>
                    <div class="col-md-6 text-right mt-3">
                        <h4 class="text-danger mb-0">Paradise Parking</h4><span></span>
                    </div>
                </div>
                <div class="mt-3">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Paid</th>
                                    <th>End Date</th>
                                    <th>Start Date</th>
                                    <th>Email</th>
                                    <th>Mobile Number</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{invoice.Paid}</td>
                                    <td>{invoice.endDate}</td>
                                    <td>{invoice.startDate}</td>
									<td>{invoice.email}</td>
									<td>{invoice.phone}</td>
                                    <td>{invoice.amount}</td>

                                </tr>
                                {/* <tr>
                                    <td>Phone number</td>
                                    <td>12</td>
                                    <td>50</td>
                                    <td>600</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td></td>
                                    <td>Total</td>
                                    <td>940</td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="text-right mb-3"><button class="btn btn-danger btn-sm mr-5" type="button">Print Now</button></div>
            </div>
        </div>
    </div>))
	}
</div>
    )
}

export default Inovice
