import axios from 'axios';
import React, { useEffect, useContext, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { contextData } from '../../context/CreateContext';

const AccordionThree = ({ checkoutPageTwo, email, }) => {
    const [code, setCode] = useState();
    const [emailCode, setEmailcode] = useState();
    const [emailVerified, setemailVerified] = useState(false)
    const context = useContext(contextData)
    const { addToast } = useToasts();
    // const code1=localStorage.getItem('code');
    const acceptConditions = (e) => {
        console.log(code, emailCode)
        console.log(emailCode)
        if (Number(code) === emailCode) {
            setemailVerified(true)
            checkoutPageTwo()
        } else {
            addToast('Invalid Code', { appearance: 'error', autoDismiss: true });
        }

    }
    const sendEmailCode = async () => {
        try {
            const res = await axios.get(`/api/verifybooking/${context.user?.id}`)
            // const res = await axios.get(`/api/verifybooking/${context.user?.email}`)

            let message = res.data.message;
            if (res) {
                setEmailcode(res.data.code)
                message.forEach((msgs) => {
                    addToast(msgs.msg, { appearance: 'info', autoDismiss: true });
                });
            }

        } catch (err) {
            console.log(err)
            // let error = err.response.data.errors;
            // if (err) {
            //     error.forEach((eror) => {
            //         addToast(eror.msg, { appearance: 'error', autoDismiss: true });
            //     });
            // }

        }
    }




    return (
        <>
            <div className='row'>
                {/* <div className='col-lg-8 sm-col-12'>
                    <ul>
                        <li>
                            <i class='mdi mdi-checkbox-marked-circle text-success'> </i>
                            <small>We will give you 20% discount for online payments.</small>
                        </li>
                        <li>
                            <i class='mdi mdi-checkbox-marked-circle text-success'> </i>
                            <small>No discount for pay on park</small>
                        </li>
                        <li>
                            <i class='mdi mdi-checkbox-marked-circle text-success'> </i>
                            <small>
                                You will pay with Mastercard debitcard credit card visa card.
                            </small>
                        </li>
                    </ul>
                </div>
                <div className='col-lg-4 sm-col-12'>
                    <div className='col-lg-12'>
                        <button className='btn btn-primary'>Pay on Park</button>
                    </div>
                    <div className='mt-3 col-lg-12'>
                        <button className='btn btn-primary'>Pay Online</button>
                    </div>
                </div> */}
                <div className='mt-3 row'>
                    <div className='col-md-6 col-sm-6'>
                        <div className='mb-3'>
                            <input
                                name='code'
                                onChange={(e) => setCode(e.target.value)}
                                className='form-control'
                                type='number'
                                placeholder='Enter your code'
                                id='billing-first-name'
                            />
                        </div>
                    </div>
                    <div className='col-sm-3 col-md-3 col-lg-6 '>
                        <button
                            disabled={emailVerified ? true : false}
                            onClick={sendEmailCode}
                            className='btn btn-danger'
                            type='submit'>
                            <i className='mdi mdi-truck-fast me-1' />{' '}
                            Send code
                        </button>
                    </div>



                </div>
                <div className='mt-4 row'>
                    {/* end col */}
                    <div className='col-sm-12 '>
                        <div className='text-sm-end'>
                            <button
                                onClick={acceptConditions}
                                className='btn btn-danger'
                                type='submit'>
                                <i className='mdi mdi-truck-fast me-1' />{' '}
                                Verify
                            </button>
                        </div>
                    </div>{' '}
                </div>{' '}
            </div>
        </>
    );
};

export default AccordionThree;
