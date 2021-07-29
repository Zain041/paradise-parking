import React, { Fragment, useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useToasts } from "react-toast-notifications"
import { contextData } from '../../context/Provider'
import GoogleLogins from '../Login/GoogleLogin'
import FacebookLogins from '../Login/FacebookLogin'
import LoadingComponent from '../../Loading Animation/Loading'
import axios from 'axios'




const Register = () => {
    const { addToast } = useToasts()
    const history = useHistory()
    const context = useContext(contextData)
    const [verifyEmail, setVerifyEmail] = useState(false)
    const [checked, setChecked] = useState(false)
    const [verifyCode, setVerifyCode] = useState()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })


    useEffect(() => {
        if (context.isAuthenticated || context.isVerified == true) {
            history.push("/")
        }
    }, [context.isAuthenticated, history])


    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        console.log(checked, formData.email)
        if (formData.password === formData.confirmPassword && checked && formData.email !== "" && formData.name !== "") {
            context.register(formData)
            setVerifyEmail(true)
        } else {
            return addToast('All Fields are must Required', { appearance: 'error', autoDismiss: true })
        }
    }

    const verifyCodeHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.get(`/api/verify/${formData.email}/${verifyCode}`)
            console.log(res.data)

            let message = res.data.messages;
            if (res) {
                message.forEach((msgs) => {
                    addToast(msgs.msg, { appearance: 'success', autoDismiss: true });
                });
            }
            console.log(res.status)
            if (res.status === 200 || res.status === 201 ) {
                history.push('/login')
            }
        

        } catch (err) {
            console.log(err);
        }
    }

    if (context.loading) {
        return <LoadingComponent />
    }


    return (
        <main>
            <section className="min-vh-100 d-flex align-items-center section-image overlay-soft-dark py-5 py-lg-0" data-background="../assets/img/form-image.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="text-center text-md-center mb-5 mt-md-0 text-white">
                                {!verifyEmail ? <h1 className="mb-0 h3">Create an account</h1> : ''}
                            </div>
                        </div>
                        <div className="col-12 d-flex align-items-center justify-content-center">
                            <div className="signin-inner mt-3 mt-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                {verifyEmail ? (
                                    <Fragment>
                                        <form onSubmit={verifyCodeHandler}>
                                            <i style={{cursor:'pointer'}} className="uil uil-arrow-left" onClick={() => setVerifyEmail(false)}>back</i>
                                            <br />
                                            <br />
                                            <div className="form-group"><label htmlFor="exampleInputIcon4">Your Verification Code</label>
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <span className="fas fa-envelope" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        onChange={(e) => setVerifyCode(e.target.value)}
                                                        className="form-control"
                                                        required

                                                        id="exampleInputIcon4" placeholder="Code" type="text" aria-label="Verify Email adress" />
                                                </div>
                                            </div>
                                            <button class="btn btn-primary" type='submit'>Verify</button>
                                        </form>
                                    </Fragment>
                                ) : (<Fragment>
                                    <form onSubmit={submitHandler}>
                                        <div className="form-group"><label htmlFor="exampleInputIcon4">Name</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <span className="fas fa-envelope" />
                                                    </span>
                                                </div>
                                                <input
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={changeHandler}
                                                    className="form-control"
                                                    required
                                                    id="exampleInputIcon4"
                                                    placeholder="Enter your name" type="text" aria-label="email adress" />
                                            </div>
                                        </div>
                                        <div className="form-group"><label htmlFor="exampleInputIcon4">Your email</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <span className="fas fa-envelope" />
                                                    </span>
                                                </div>
                                                <input
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={changeHandler}
                                                    className="form-control"
                                                    required
                                                    id="exampleInputIcon4" placeholder="example@company.com" type="text" aria-label="email adress" />
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="form-group"><label htmlFor="password">Password</label>
                                                <div className="input-group mb-4">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <span className="fas fa-unlock-alt" />
                                                        </span>
                                                    </div>
                                                    <input
                                                        name="password"
                                                        value={formData.password}
                                                        onChange={changeHandler}
                                                        className="form-control"
                                                        id="password"
                                                        placeholder="Password"
                                                        type="password"
                                                        aria-label="Password" required />
                                                </div>
                                            </div>
                                            <div className="form-group"><label htmlFor="password_confirm">Confirm Password</label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <span className="fas fa-unlock-alt" /></span>
                                                    </div>
                                                    <input
                                                        name="confirmPassword"
                                                        value={formData.confirmPassword}
                                                        onChange={changeHandler}
                                                        className="form-control" id="password_confirm" placeholder="Confirm password" type="password"
                                                        aria-label="Password" required />
                                                </div>
                                            </div>
                                            <div className="form-check mb-4">
                                                <input className="form-check-input"
                                                    type="checkbox"
                                                    checked={checked}
                                                    onChange={(e) => setChecked(e.target.checked)}
                                                    defaultValue id="terms" />
                                                <label className="form-check-label" htmlFor="terms">
                                                    <span className="small">I agree to the <a className="text-secondary" href="terms.html">terms and conditions</a>
                                                    </span>
                                                </label>
                                            </div>
                                        </div>
                                        <button type="submit" className="btn btn-block btn-primary">Create an account</button>
                                        <br />
                                        <GoogleLogins message={'SignUp'} />
                                        <br />
                                        <FacebookLogins message={'SignUp'} />
                                    </form>
                                    <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                                        <span className="font-weight-normal">Already have an account? <Link to="/login" className="font-weight-bold">Login here</Link></span></div>

                                </Fragment>)}
                            </div>
                            {/* <div className="signin-inner mt-3 mt-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                                <form onSubmit={submitHandler}>
                                    <div className="form-group"><label htmlFor="exampleInputIcon4">Your email</label>
                                        <div className="input-group mb-4">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <span className="fas fa-envelope" />
                                                </span>
                                            </div>
                                            <input
                                                name="email"
                                                value={formData.email}
                                                onChange={changeHandler}
                                                className="form-control"
                                                id="exampleInputIcon4" placeholder="example@company.com" type="text" aria-label="email adress" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="form-group"><label htmlFor="password">Password</label>
                                            <div className="input-group mb-4">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <span className="fas fa-unlock-alt" />
                                                    </span>
                                                </div>
                                                <input
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={changeHandler}
                                                    className="form-control"
                                                    id="password"
                                                    placeholder="Password"
                                                    type="password"
                                                    aria-label="Password" required />
                                            </div>
                                        </div>
                                        <div className="form-group"><label htmlFor="password_confirm">Confirm Password</label>
                                            <div className="input-group">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text">
                                                        <span className="fas fa-unlock-alt" /></span>
                                                </div>
                                                <input
                                                    name="confirmPassword"
                                                    value={formData.confirmPassword}
                                                    onChange={changeHandler}
                                                    className="form-control" id="password_confirm" placeholder="Confirm password" type="password"
                                                    aria-label="Password" required />
                                            </div>
                                        </div>
                                        <div className="form-check mb-4"><input className="form-check-input" type="checkbox" defaultValue id="terms" />
                                            <label className="form-check-label" htmlFor="terms"><span className="small">I agree to the <a className="text-secondary" href="terms.html">terms and conditions</a></span></label></div>
                                    </div>
                                    <button type="submit" className="btn btn-block btn-primary">Create an account</button>
                                    <br />
                                    <GoogleLogins message={'SignUp'} />
                                    <br />
                                    <FacebookLogins message={'SignUp'} />
                                </form>
                                <div className="d-block d-sm-flex justify-content-center align-items-center mt-4">
                                    <span className="font-weight-normal">Already have an account? <Link to="/login" className="font-weight-bold">Login here</Link></span></div>
                            </div>*/}
                        </div>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Register
