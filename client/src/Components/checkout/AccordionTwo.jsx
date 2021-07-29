import React, { useEffect, useContext, useState } from 'react'
import { contextData } from '../../context/CreateContext'
import axios from "axios"
const AccordionTwo = ({ checkoutPageTwo }) => {
    const [checked, setChecked] = useState(false)

    const [servicesOne, setservicesOne] = useState(12)
    const [servicesTwo, setservicesTwo] = useState(14)
    const [code, setcode] = useState(false)
    const context = useContext(contextData)

    const acceptConditions = (e) => {
        setChecked(e.target.checked)
        let discount
        if (code) {
            let discount2 = code && code.map((item)=>{
                return item.discount
            })
            console.log(discount2[0])
            discount = discount2[0]
            discount = context.totalPrice * discount / 100
            console.log(discount)
        }
        if (e.target.checked) {
            context.updatePrice(context.totalPrice + servicesOne - (discount  ? discount : null), context.subTotal + servicesOne)
            console.log(context.totalPrice)
        } else {
            context.updatePrice(context.totalPrice - servicesOne, context.subTotal - servicesOne)
        }
    }
    const secondServiceCount = (e) => {
        setChecked(e.target.checked)
        let discount
        if (code) {
            let discount2 = code && code.map((item)=>{
                return item.discount
            })
            console.log(discount2[0])
            discount = discount2[0]
            discount = context.totalPrice * discount / 100
            console.log(discount)
        }
        if (e.target.checked) {
            context.updatePrice(context.totalPrice + servicesTwo - (discount ? discount : null), context.subTotal + servicesTwo)
            console.log(context.totalPrice)
        } else {
            context.updatePrice(context.totalPrice - servicesTwo, context.subTotal - servicesTwo)
        }
    }
    useEffect(() => {

        axios.get("/api/coupon_gets").then((res) => {

            setcode(res.data.user)


        })
        // console.log(code)

    }, [])

    return (
        <>
            <div class="row">
                <div class="col-xl-8 col-lg-8">
                    <div class="row">
                        <div class="col-lg-6">
                            <div class="card widget-flat">
                                <div class="card-body">
                                    <div class="form">
                                        <input
                                            type="checkbox"
                                            class="form-check-input pl-2"
                                            id="invalidCheck"
                                            onChange={(e) => acceptConditions(e)}
                                        // required=""
                                        />
                                        <label
                                            class="form-check-label form-label"
                                            for="invalidCheck"
                                        >Complete Roller Wash</label
                                        >
                                        <div class="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>

                                    <h3 class="mt-2 mb-3 text-center">{servicesOne} $</h3>
                                    <p class="mb-0 text-muted text-center">
                                        {/* <span class="text-success me-2"
                                        >
                                            <i class="mdi mdi-arrow-up-bold"></i> 
                                        </span
                                        > */}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="card widget-flat">
                                <div class="card-body">
                                    <div class="form">
                                        <input
                                            type="checkbox"
                                            class="form-check-input pl-2"
                                            id="invalidCheck"
                                            onChange={(e) => secondServiceCount(e)}
                                        // required=""
                                        />
                                        <label
                                            class="form-check-label form-label"
                                            for="invalidCheck"
                                        >Complete Roller Wash</label
                                        >
                                        <div class="invalid-feedback">
                                            You must agree before submitting.
                                        </div>
                                    </div>

                                    <h3 class="mt-2 mb-3 text-center">{servicesTwo} $</h3>
                                    <p class="mb-0 text-muted text-center">
                                        {/* <span class="text-success me-2"
                                        >
                                            <i class="mdi mdi-arrow-up-bold"></i> 
                                        </span
                                        > */}
                                    </p>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>
            {/* <p>We are here to ensure that your parking experience on campus is safe, easy, and enjoyable.
            </p>
            <ul>
                <li>
                    <i class="mdi mdi-checkbox-marked-circle text-success">{" "}</i>
                    <small>Traffic control during certain events in coordination with campus police.</small>
                </li>
                <li>
                    <i class="mdi mdi-checkbox-marked-circle text-success">{" "}</i>
                    <small>Jump-starting vehicles with a dead battery.</small>
                </li>
                <li>
                    <i class="mdi mdi-checkbox-marked-circle text-success">{" "}</i>
                    <small>Unlocking locked cars when keys are left inside.</small>
                </li>
                <li>
                    <i class="mdi mdi-checkbox-marked-circle text-success">{" "}</i>
                    <small>Aiding in changing a flat tire.</small>
                </li>
                <li>
                    <i class="mdi mdi-checkbox-marked-circle text-success">{" "}</i>
                    <small>Taking a customer to a gas station if their vehicle is out of fuel.</small>
                </li>
                <li>
                    <i class="mdi mdi-checkbox-marked-circle text-success">{" "}</i>
                    <small>You hold on to your own keys</small>
                </li>
                <li>
                    <i class="mdi mdi-checkbox-marked-circle text-success">{" "}</i>
                    <small>Nobody drives your car</small>
                </li>
                <li>
                    <i class="mdi mdi-checkbox-marked-circle text-success">{" "}</i>
                    <small>Environmental friendliness (engine is turned off)</small>
                </li>
                <li>
                    <i class="mdi mdi-checkbox-marked-circle text-success">{" "}</i>{" "}
                    <small>No need to / not having the feeling that you need to leave a tip</small>
                </li>
            </ul>
            <strong>Note :</strong> Please call us at 801-863-8188 if you require assistance with anything listed above. For stolen or damaged vehicles and accidents, please contact campus police at 801-863-5555.
            <br />
            <br /> */}

            <div className='mt-4 row'>
                {/* end col */}
                <div className='col-sm-12 '>
                    <div className='text-sm-end'>
                        <button
                            onClick={checkoutPageTwo}
                            className='btn btn-danger'
                            type='submit'>
                            <i className='mdi mdi-truck-fast me-1' />{' '}
                            Next
                        </button>
                    </div>
                </div>{' '}
            </div>{' '}
        </>
    )
}

export default AccordionTwo
