import React, { useContext, useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Link, useHistory } from 'react-router-dom';
import { contextData } from '../../context/Provider';
import FacebookLogins from './FacebookLogin';
import GoogleLogins from './GoogleLogin';
import LoadingComponent from '../../Loading Animation/Loading';

const Login = () => {
  const history = useHistory();
  const context = useContext(contextData);
  // console
  const { addToast } = useToasts();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    if (context.isAuthenticated) {
      history.push('/');
      // addToast('You are successfully logged in',{appearance:'success',autoDismiss:true})
    }
  }, [context.isAuthenticated, history]);

  if (context.loading) {
    <LoadingComponent />;
  }

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.email === '' || formData.password === '') {
      return addToast('Invalid credentials', {
        appearance: 'error',
        autoDismiss: true,
      });
    } else {
      context.login(formData);
    }
  };

  return (
    <div>
      <main>
        <section
          className='min-vh-100 d-flex align-items-center section-image overlay-soft-dark py-5 py-lg-0'
          data-background='assets/img/form-image.jpg'>
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col-12 d-flex align-items-center justify-content-center'>
                <div className='signin-inner mt-3 mt-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500'>
                  <form onSubmit={submitHandler}>
                    <div className='form-group'>
                      <label htmlFor='email'>Your email</label>
                      <div className='input-group mb-4'>
                        <div className='input-group-prepend'>
                          <span className='input-group-text'>
                            <span className='fas fa-envelope' />
                          </span>
                        </div>
                        <input
                          className='form-control'
                          id='email'
                          name='email'
                          value={formData.email}
                          onChange={changeHandler}
                          placeholder='example@company.com'
                          type='email'
                          aria-label='email address'
                        />
                      </div>
                    </div>
                    <div className='form-group'>
                      <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <div className='input-group mb-4'>
                          <div className='input-group-prepend'>
                            <span className='input-group-text'>
                              <span className='fas fa-unlock-alt' />
                            </span>
                          </div>
                          <input
                            name='password'
                            value={formData.password}
                            onChange={changeHandler}
                            className='form-control'
                            id='password'
                            placeholder='Password'
                            type='password'
                            aria-label='Password'
                            required
                          />
                        </div>
                      </div>
                      {/* <div className="d-flex justify-content-between align-items-center mb-4">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" defaultValue id="remember" />
                                                    <label className="form-check-label" htmlFor="remember">Remember me</label></div>
                                                <div><a href="forgot-password-email.html" className="small text-right">Lost password?</a></div>
                                            </div> */}
                    </div>
                    <button type='submit' className='btn btn-block btn-primary'>
                      Sign in
                    </button>
                    <br />
                    <GoogleLogins message={'SignIn'} />
                    <br />
                    <FacebookLogins message={'SignIn'} />
                  </form>
                  {/* <div className="mt-3 mb-4 text-center"><span className="font-weight-normal">or login with</span>
                                    </div>
                                    <div className="btn-wrapper my-4 text-center">
                                        <button className="btn btn-icon-only btn-pill btn-outline-light text-facebook mr-2" type="button" aria-label="facebook button" title="facebook button">
                                            <span aria-hidden="true" className="fab fa-facebook-f" />
                                        </button>
                                        <button className="btn btn-icon-only btn-pill btn-outline-light text-twitter mr-2" type="button" aria-label="twitter button" title="twitter button"><span aria-hidden="true" className="fab fa-twitter" /></button> <button className="btn btn-icon-only btn-pill btn-outline-light text-facebook" type="button" aria-label="github button" title="github button"><span aria-hidden="true" className="fab fa-github" /></button></div> */}
                  <div className='d-block d-sm-flex justify-content-center align-items-center mt-4'>
                    <span className='font-weight-normal'>
                      Not registered?
                      <Link to='/register' className='font-weight-bold'>
                        Create account
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Login;
