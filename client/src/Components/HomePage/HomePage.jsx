import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { contextData } from "../../context/Provider";
import { AdminPageScriptsRun } from "../AdminPanel/AdminScriptsRun";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'
import Header from "./Header";
import { runScripts } from "./homePageScripts";
import i18n from "../../i18n";
import MessengerCustomerChat from "react-messenger-customer-chat";

const HomePage = () => {
  const context = useContext(contextData);
  const history = useHistory();
  const { addToast } = useToasts();
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date());
  const [booking, setBooking] = useState(1);
  const [location, setLocation] = useState(0);
  const [days, setdays] = useState(0)
  const [price, setprice] = useState(0);



  useEffect(async() => {
    runScripts();
    AdminPageScriptsRun(false);
    // const res=await axios.get(`/api/getpost/${'6101585394c6b66891280832'}`)
    // console.log(res)
  }, [runScripts,AdminPageScriptsRun]);

  const changePlaceHandler = (e) => {
    setLocation(e.currentTarget.value)
    setprice(booking === 1 ? e.currentTarget.value : (booking * e.currentTarget.value))
  }

  const endDateCalcutaion = (date) => {
    setEndDate(date)
    const dateparse1 = new Date(startDate).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })

    const dateparse2 = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric'
    })

    var date1 = new Date(dateparse1);
    var date2 = new Date(dateparse2);

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    setprice(Difference_In_Days * booking * location)
  }

  const changePriceHandler = (e) => {
    setBooking(e.target.value);
    setprice((!e.target.value ? location * 1 : location * e.target.value))
    console.log(e.target.value)
  }

  const submitHandler = (e) => {
    if (
      startDate &&
      endDate &&
      location &&
      booking
    ) {
      const bookingDetails = {
        startDate: new Date(startDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        }),
        endDate: new Date(endDate).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        }),
        location,
        booking,
        price,
      };
      context.newBooking(bookingDetails);
      history.push("/checkout");
    } else {
      addToast("Booking Fields is required", {
        appearance: "warning",
        autoDismiss: true,
      });
    }
  };
  console.log(location);
  return (
    <>
      <Header />

      <main>
        <section
          className="section section-header section-image bg-primary overlay-primary text-white pb-4 pb-md-7"
          data-background="assets/img/hero-1.jpg"
        >
          <div className="container">
            <div className="row justify-content-center mb-4 mb-xl-5">
              <div className="col-12 col-xl-10 text-center">
                <h1 className="display-2">Find Parking In Seconds</h1>
                <p className="lead text-muted mt-4 px-md-6">
                  <span className="font-weight-bold">
                    Parking Just Got A Lot Simpler.
                    {i18n.t("Welcome to React")}
                  </span>{" "}
                  Choose from millions of available spaces, or reserve your
                  space in advance.
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-12">
                <div className="card p-md-2">
                  <div className="card-body p-2 p-md-0">
                    <div
                      autoComplete="off"
                      className="row"
                      //   method='get'
                    >
                      <div className="col-12 col-lg-4">
                        <div className="form-group form-group-lg mb-lg-0">
                          <div className="input-group ">
                            <div className="input-group-prepend">
                              <span className="input-group-text">
                                <span className="fas fa-map-marker-alt" />
                              </span>
                            </div>
                            <select
                              onChange={changePlaceHandler}
                              required
                              className="form-control autocomplete"
                            >
                              <option
                                style={{ display: "none" }}
                                value=""
                                disabled
                                selected
                              >
                                {" "}
                                Select Place
                              </option>
                              <option value='12'>CIVITAVECCHIA</option>
                              <option value='20'>FIUMICINO</option>
                              <option value='30'>MALPENSA</option>
                              <option value='15'>PUNTA RAISI</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4 ">
                        <div className="input-group input-group-lg mb-2 mb-lg-0">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="far fa-calendar-alt" />
                            </span>
                            <DatePicker
                              className="form-control"
                              style={{ width: "900px" }}
                              placeholder="Start Date"
                              selected={startDate}
                              onChange={(date) => setStartDate(date)}
                              selectsStart
                              startDate={startDate}
                              endDate={endDate}
                            />
                          </div>
                          <span></span>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4 mt-2">
                        <span className="form-control">
                          <label>Price/day</label>
                          <span> ${price}</span>
                        </span>
                      </div>

                      <div className="col-12 col-lg-4 mt-1">
                        <div className="input-group input-group-lg mb-3 mb-lg-0">
                          <input
                            onChange={changePriceHandler}
                            className='form-control'
                            placeholder='Bookings'
                            type='number'
                            required
                          />
                        </div>
                      </div>

                      <div className="col-12 col-lg-4">
                        <div
                          className="input-group input-group-lg mb-3 mb-lg-0"
                          style={{ width: "900px" }}
                        >
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="far fa-calendar-alt" />
                            </span>
                            <DatePicker
                              placeholder="End Date"
                              className="form-control datepicker"
                              selected={endDate}
                              onChange={(date) => endDateCalcutaion(date)}
                              // onChange={(date) => setEndDate(date)}
                              selectsEnd
                              startDate={startDate}
                              endDate={endDate}
                            />
                          </div>
                          {/* <input
                            onSelect={(e)=>setEndDate(e.currentTarget.value)}
                            className='form-control datepicker'
                            placeholder='End date'
                            type='text'
                            required
                          /> */}
                        </div>
                      </div>

                      <div className="col-12 col-lg-4 mt-2">
                        <button
                          className="btn btn-lg btn-primary btn-block animate-up-2"
                          onClick={submitHandler}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col">
                <ul className="d-flex flex-wrap justify-content-center list-unstyled mb-0">
                  <li className="mx-xl-4 mx-2 mb-5 mb-md-0">
                    <div className="header-points-items-stying">
                      <span className="header-check-circle-points">
                        <svg
                          width="12"
                          height="9"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 9"
                        >
                          <path
                            d="M4.12393,8.46017l-3.80446,-3.78168c-0.10631,-0.10631 -0.15947,-0.243 -0.15947,-0.41006c0,-0.16706 0.05316,-0.30375 0.15947,-0.41006l0.8429,-0.82013c0.10631,-0.1215 0.23921,-0.18224 0.39867,-0.18224c0.15947,0 0.29996,0.06074 0.42146,0.18224l2.55149,2.5515v0l5.46749,-5.46749c0.1215,-0.1215 0.26198,-0.18225 0.42145,-0.18225c0.15947,0 0.29236,0.06075 0.39867,0.18225l0.8429,0.82012c0.10632,0.10631 0.15947,0.243 0.15947,0.41006c0,0.16707 -0.05315,0.30375 -0.15947,0.41007l-6.72045,6.69767c-0.10631,0.1215 -0.243,0.18225 -0.41006,0.18225c-0.16706,0 -0.30375,-0.06075 -0.41006,-0.18225z"
                            fill="#ffffff"
                            fill-opacity="1"
                          ></path>
                        </svg>
                      </span>
                      <span>Space Availability Guarantee</span>
                    </div>
                  </li>
                  <li className="mx-xl-4 mx-2 mb-5 mb-md-0">
                    <div className="header-points-items-stying">
                      <span className="header-check-circle-points">
                        <svg
                          width="12"
                          height="9"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 9"
                        >
                          <path
                            d="M4.12393,8.46017l-3.80446,-3.78168c-0.10631,-0.10631 -0.15947,-0.243 -0.15947,-0.41006c0,-0.16706 0.05316,-0.30375 0.15947,-0.41006l0.8429,-0.82013c0.10631,-0.1215 0.23921,-0.18224 0.39867,-0.18224c0.15947,0 0.29996,0.06074 0.42146,0.18224l2.55149,2.5515v0l5.46749,-5.46749c0.1215,-0.1215 0.26198,-0.18225 0.42145,-0.18225c0.15947,0 0.29236,0.06075 0.39867,0.18225l0.8429,0.82012c0.10632,0.10631 0.15947,0.243 0.15947,0.41006c0,0.16707 -0.05315,0.30375 -0.15947,0.41007l-6.72045,6.69767c-0.10631,0.1215 -0.243,0.18225 -0.41006,0.18225c-0.16706,0 -0.30375,-0.06075 -0.41006,-0.18225z"
                            fill="#ffffff"
                            fill-opacity="1"
                          ></path>
                        </svg>
                      </span>
                      <span>Satisfaction Guarantee</span>
                    </div>
                  </li>
                  <li className="mx-xl-4 mx-2 mb-5 mb-md-0">
                    <div className="header-points-items-stying">
                      <span className="header-check-circle-points">
                        <svg
                          width="12"
                          height="9"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 12 9"
                        >
                          <path
                            d="M4.12393,8.46017l-3.80446,-3.78168c-0.10631,-0.10631 -0.15947,-0.243 -0.15947,-0.41006c0,-0.16706 0.05316,-0.30375 0.15947,-0.41006l0.8429,-0.82013c0.10631,-0.1215 0.23921,-0.18224 0.39867,-0.18224c0.15947,0 0.29996,0.06074 0.42146,0.18224l2.55149,2.5515v0l5.46749,-5.46749c0.1215,-0.1215 0.26198,-0.18225 0.42145,-0.18225c0.15947,0 0.29236,0.06075 0.39867,0.18225l0.8429,0.82012c0.10632,0.10631 0.15947,0.243 0.15947,0.41006c0,0.16707 -0.05315,0.30375 -0.15947,0.41007l-6.72045,6.69767c-0.10631,0.1215 -0.243,0.18225 -0.41006,0.18225c-0.16706,0 -0.30375,-0.06075 -0.41006,-0.18225z"
                            fill="#ffffff"
                            fill-opacity="1"
                          ></path>
                        </svg>
                      </span>
                      <span>Tried And Trusted Brand</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg pb-lg-6 pb-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4">
                <img
                  className="img-fluid image-lg mb-4"
                  src="https://demo.themesberg.com/spaces/assets/img/illustrations/easy-transaction.svg"
                  alt="northwestern logo"
                />
                <h2 className="h4">Discover Amazing Spaces</h2>
                <p>
                  Find parking anywhere, for now or for later. Compare prices
                  &amp; pick the place that’s best for you.
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4">
                <img
                  className="img-fluid image-lg mb-4"
                  src="https://demo.themesberg.com/spaces/assets/img/illustrations/payment.svg"
                  alt="northwestern logo"
                />
                <h2 className="h4">Reserve, Prepay &amp; Save</h2>
                <p>
                  Book a space in just a few easy clicks. Save up to 20% off
                  standard rates by online booking.
                </p>
              </div>
              <div className="col-12 col-sm-6 col-md-4 text-center mb-4 mb-md-0 px-lg-4">
                <img
                  className="img-fluid image-lg mb-4"
                  src="https://demo.themesberg.com/spaces/assets/img/illustrations/support.svg"
                  alt="northwestern logo"
                />
                <h2 className="h4">Drive, Arrive, Park &amp; Enjoy</h2>
                <p>
                  Enter easily with your online parking. Your space is waiting –
                  pull in and go do your thing.
                </p>
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-12">
                <div className="card rounded border border-light">
                  <div className="card-body p-2 p-md-4">
                    <div className="progress-info info-xl d-block d-md-flex position-relative">
                      <img
                        className="card-img-top rounded-xl amz-banner-img-amz"
                        src="../assets/img/image-office.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-12">
                <h3 className="h4 mb-5">Our Top Car Parks</h3>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                {" "}
                <a
                  href="javascript:void();"
                  className="card img-card fh-400 border-0 outer-bg"
                  data-background-inner="../assets/img/newyork.jpg"
                >
                  <div className="inner-bg overlay-dark" />
                  <div className="card-img-overlay d-flex align-items-center">
                    <div className="card-body text-white p-3">
                      <h5 className="text-uppercase text-center">
                        CIVITAVECCHIA
                      </h5>
                      <p className="text-center">Port of Rome</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                {" "}
                <a
                  href="javascript:void();"
                  className="card img-card fh-400 border-0 outer-bg"
                  data-background-inner="../assets/img/paris.jpg"
                >
                  <div className="inner-bg overlay-dark" />
                  <div className="card-img-overlay d-flex align-items-center">
                    <div className="card-body text-white p-3">
                      <h5 className="text-uppercase text-center">FIUMICINO</h5>
                      <p className="text-center">Rome Airport</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                {" "}
                <a
                  href="javascript:void();"
                  className="card img-card fh-400 border-0 outer-bg"
                  data-background-inner="../assets/img/london.jpg"
                >
                  <div className="inner-bg overlay-dark" />
                  <div className="card-img-overlay d-flex align-items-center">
                    <div className="card-body text-white p-3">
                      <h5 className="text-uppercase text-center">MALPENSA</h5>
                      <p className="text-center">Milan Airport</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-12 col-sm-6 col-lg-3 mb-4 mb-lg-0">
                {" "}
                <a
                  href="javascript:void();"
                  className="card img-card fh-400 border-0 outer-bg"
                  data-background-inner="../assets/img/tokyo.jpg"
                >
                  <div className="inner-bg overlay-dark" />
                  <div className="card-img-overlay d-flex align-items-center">
                    <div className="card-body text-white p-3">
                      <h5 className="font-weight-normal text-uppercase text-center">
                        PUNTA RAISI
                      </h5>
                      <p className="text-center">Palermo airport</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="row mt-6">
              <div className="col-12">
                <h3 className="h4 mb-5">Trending Parkings</h3>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-light mb-4 animate-up-5">
                  <a href="javascript: void();" className="position-relative">
                    <img
                      src="../assets/img/image-office.jpg"
                      className="card-img-top p-2 rounded-xl"
                      alt="YourParadisePark office"
                    />
                  </a>
                  <div className="card-body">
                    <a href="javascript: void();">
                      <h4 className="h5">CIVITAVECCHIA</h4>
                    </a>
                    <div className="d-flex my-4">
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="star fas fa-star text-warning" />
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="badge badge-pill badge-primary ml-2">
                        5.0
                      </span>
                    </div>
                    <ul className="list-group mb-3">
                      <li className="list-group-item small p-0">
                        <span className="fas fa-map-marker-alt mr-2" />
                        New York, Manhattan, USA
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        Old Street (2 mins walk)
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        Shoreditch High Street (10 mins walk)
                      </li>
                    </ul>
                  </div>
              
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-light mb-4 animate-up-5">
                  <a href="javascript: void();" className="position-relative">
                    <img
                      src="../assets/img/cowork-office.jpg"
                      className="card-img-top p-2 rounded-xl"
                      alt="developer desk"
                    />
                  </a>
                  <div className="card-body">
                    <a href="javascript: void();">
                      <h4 className="h5">FIUMICINO</h4>
                    </a>
                    <div className="d-flex my-4">
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="star fas fa-star text-warning" />
                      <span className="badge badge-pill badge-primary ml-2">
                        5.0
                      </span>
                    </div>
                    <ul className="list-group mb-3">
                      <li className="list-group-item small p-0">
                        <span className="fas fa-map-marker-alt mr-2" />
                        California, USA
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        Penny Market Street (15 mins walk)
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        Museum Street (20 mins walk)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="card border-light mb-4 animate-up-5">
                  <a href="javascript: void();" className="position-relative">
                    <img
                      src="../assets/img/meeting-office.jpg"
                      className="card-img-top p-2 rounded-xl"
                      alt="wood office"
                    />
                  </a>
                  <div className="card-body">
                    <a href="javascript: void();">
                      <h4 className="h5">MALPENSA</h4>
                    </a>
                    <div className="d-flex my-4">
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="star fas fa-star text-warning" />{" "}
                      <span className="badge badge-pill badge-primary ml-2">
                        5.0
                      </span>
                    </div>
                    <ul className="list-group mb-3">
                      <li className="list-group-item small p-0">
                        <span className="fas fa-map-marker-alt mr-2" />
                        London, Canary Wharf, UK
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        Stamford Bridge Stadium (5 mins walk)
                      </li>
                      <li className="list-group-item small p-0">
                        <span className="fas fa-bullseye mr-2" />
                        Bluebird Chelsea Pub (15 mins walk)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section section-lg bg-soft">
          <div className="container">
            <div className="row justify-content-center mb-4 mb-lg-5">
              <div className="col-12 col-md-8 text-center">
                <h2 className="h1">
                  <span className="font-weight-bold">How</span> it works?
                </h2>
                <p className="lead mt-3">
                  Your Paradise Park System is economical in terms of time,
                  personnel and cost, but it provides maximum benefit in
                  optimization of high capacity parking areas.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-10 col-lg-6 mx-auto">
                <div className="nav-wrapper">
                  <ul
                    className="nav nav-pills nav-fill flex-column flex-sm-row mb-lg-4 mb-0"
                    id="tab-32"
                    role="tablist"
                  >
                    <li className="nav-item mr-0 mr-sm-2 mr-md-0 mb-3 mb-lg-0">
                      <a
                        className="nav-link flex-sm-fill text-sm-center active"
                        id="tab-find-space"
                        data-toggle="tab"
                        href="#find-space"
                        role="tab"
                        aria-controls="find-space"
                        aria-selected="true"
                      >
                        <span className="far fa-building mr-2" />
                        Find Your Booking Space
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link flex-sm-fill text-sm-center"
                        id="tab-submit-space"
                        data-toggle="tab"
                        href="#submit-space"
                        role="tab"
                        aria-controls="submit-space"
                        aria-selected="false"
                      >
                        <span className="far fa-money-bill-alt mr-2" />
                        After Successfull Booking
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12">
                <div className="tab-content mt-lg-5" id="tabcontentexample-3">
                  <div
                    className="tab-pane fade show active"
                    id="find-space"
                    role="tabpanel"
                    aria-labelledby="tab-find-space"
                  >
                    <div className="row">
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-4 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-primary mb-4 rounded-circle">
                              <span className="fas fa-map-pin" />
                            </div>
                            <h3 className="h5 my-3">1. Book The Service</h3>
                            <p>
                              Fill out the booking form and you will receive a
                              confirmation on your e-mail address.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-4 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-primary mb-4 rounded-circle">
                              <span className="far fa-calendar-check" />
                            </div>
                            <h3 className="h5 my-3">
                              2. Go to the meeting point
                            </h3>
                            <p>
                              Join us at the selected parking, the shuttle will
                              be ready to accompany you.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-md-6 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-4 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-primary mb-4 rounded-circle">
                              <span className="fas fa-mouse-pointer" />
                            </div>
                            <h3 className="h5 my-3">3. Car Delivery</h3>
                            <p>
                              After a quick check of your car you will be issued
                              a copy of the contract so you can enter the
                              terminals.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="submit-space"
                    role="tabpanel"
                    aria-labelledby="tab-submit-space"
                  >
                    <div className="row">
                      <div className="col-12 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-3 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-secondary mb-4 rounded-circle">
                              <span className="fas fa-clipboard-list" />
                            </div>
                            <h3 className="h5 my-3">4. Take Back Your Car</h3>
                            <p>
                              Once you have collected any baggage, call us on
                              331 408 9808 the shuttle will already be outside
                              waiting for you to take you back to the parking
                              lot.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-3 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-secondary mb-4 rounded-circle">
                              <span className="far fa-user" />
                            </div>
                            <h3 className="h5 my-3">5. Review Us</h3>
                            <p>
                              Share your wonderful feedback / comments for
                              others on our facebook pages and google reviews.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-12 col-lg-4">
                        <div className="card border-light mb-4 mb-lg-0 text-center">
                          <div className="card-body p-3 px-xl-4 py-xl-6">
                            <div className="icon icon-shape icon-lg icon-shape-secondary mb-4 rounded-circle">
                              <span className="far fa-money-bill-alt" />
                            </div>
                            <h3 className="h5 my-3">6. Share With Others</h3>
                            <p>
                              Help us to spread out network, so that we can
                              assisst you maximum. A lot of thanks for your
                              precious time for us.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="section bg-white">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-12 col-lg-9 text-center">
                <div className="nav-wrapper">
                  <ul
                    className="nav nav-pills nav-pill-circle flex-sm-row justify-content-center"
                    id="tab-34"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link bg-white text-sm-center avatar-link active"
                        id="tab-link-example-13"
                        data-toggle="tab"
                        href="#link-example-13"
                        role="tab"
                        aria-controls="link-example-13"
                        aria-selected="true"
                      >
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/profile-picture-3.jpg"
                          alt="Bonnie avatar"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link bg-white text-sm-center avatar-link"
                        id="tab-link-example-14"
                        data-toggle="tab"
                        href="#link-example-14"
                        role="tab"
                        aria-controls="link-example-14"
                        aria-selected="false"
                      >
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/profile-picture-1.jpg"
                          alt="Neil avatar"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link bg-white text-sm-center avatar-link"
                        id="tab-link-example-15"
                        data-toggle="tab"
                        href="#link-example-15"
                        role="tab"
                        aria-controls="link-example-15"
                        aria-selected="false"
                      >
                        <img
                          className="rounded-circle"
                          src="../assets/img/team/profile-picture-4.jpg"
                          alt="Christopher avatar"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card">
                  <div className="card-body p-0">
                    <div className="tab-content" id="tabcontentexample-5">
                      <div
                        className="tab-pane fade show active"
                        id="link-example-13"
                        role="tabpanel"
                        aria-labelledby="tab-link-example-13"
                      >
                        <span className="d-block my-3">
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />
                        </span>
                        <blockquote className="blockquote bg-white p-0 p-md-4">
                          I used YourParaisePark's logo creation services along with
                          their website development services. They have been a
                          pleasure to work with and have been responsive to all
                          questions asked.
                          <footer className="blockquote-footer mt-3 text-primary">
                            Bonnie Green
                          </footer>
                        </blockquote>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="link-example-14"
                        role="tabpanel"
                        aria-labelledby="tab-link-example-14"
                      >
                        <span className="d-block my-3">
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />
                        </span>
                        <blockquote className="blockquote bg-white p-0 p-md-4">
                          I have worked with YourParaisePark over the years on a
                          number of projects. I've always found them to be
                          responsive, friendly and up-to-date with all the
                          technology - which everyone knows is constantly
                          changing.
                          <footer className="blockquote-footer mt-3 text-primary">
                            Neil Sims
                          </footer>
                        </blockquote>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="link-example-15"
                        role="tabpanel"
                        aria-labelledby="tab-link-example-15"
                      >
                        <span className="d-block my-3">
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />{" "}
                          <span className="star fas fa-star text-warning" />
                        </span>
                        <blockquote className="blockquote bg-white p-0 p-md-4">
                          YourParaisePark are the best in the business for website
                          design and building. They worked hard to give us
                          exactly what we wanted and more for our website and
                          delivered on time. We would definitely use them again.
                          <footer className="blockquote-footer mt-3 text-primary">
                            Christopher Wood
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="section py-0">
        <div className="container z-2">
          <div className="row position-relative justify-content-center align-items-cente">
            <div className="col-12">
              <div className="card border-light">
                <div className="card-body text-left px-5 py-4">
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <p className="lead mb-4">
                        <h4 className="font-weight-bold">Why Choose Us?</h4>
                      </p>
                      <div className="row mb-4">
                        <div className="col">
                          <ul className="list-group mb-3">
                            <li className="list-group-item text-gray p-0 my-2">
                              <Link href="#">
                                <span className="fas fa-map-marker-alt mr-2" />
                                Professionalism
                              </Link>
                            </li>
                            <li className="list-group-item text-gray p-0 my-2">
                              <Link href="#">
                                <span className="fas fa-map-marker-alt mr-2" />
                                Precision
                              </Link>
                            </li>
                            <li className="list-group-item text-gray p-0 my-2">
                              <Link href="#">
                                <span className="fas fa-map-marker-alt mr-2" />
                                Confidence
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div className="col">
                          <ul className="list-group mb-3">
                            <li className="list-group-item text-gray p-0 my-2">
                              <Link href="#">
                                <span className="fas fa-map-marker-alt mr-2" />
                                Quality price
                              </Link>
                            </li>
                            <li className="list-group-item text-gray p-0 my-2">
                              <Link href="#">
                                <span className="fas fa-map-marker-alt mr-2" />
                                Safety &amp; Security
                              </Link>
                            </li>
                            <li className="list-group-item text-gray p-0 my-2">
                              <Link href="#">
                                <span className="fas fa-map-marker-alt mr-2" />
                                Safety &amp; Security
                              </Link>
                            </li>
                            <li className="list-group-item p-0 mt-2">
                              <Link href="#">
                                Book Now
                                <span className="fas fa-arrow-right fa-xs ml-2" />
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-7 mt-5 mt-md-0 text-md-right d-none d-sm-block">
                      <img
                        src="https://demo.themesberg.com/spaces/assets/img/illustrations/world-map.svg"
                        alt="pic"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer pb-5 bg-primary text-white pt-9 mt-n9">
        <div className="container">
          <div className="row mt-6">
            <div className="col-xl-3 mb-3 mb-xl-0">
              <img
                src="https://demo.themesberg.com/spaces/assets/img/brand/light.svg"
                height={30}
                className="mb-3"
                alt="Your Paradise Park logo"
              />
              <p>Your Paradise Park | Your Vacation Starts With Us.</p>
            </div>
            <div className="col-6 col-xl-2 mb-5 mb-xl-0">
              <span className="h5">Hot Links</span>
              <ul className="footer-links mt-2">
                <li>
                  <Link to="#">Blog</Link>
                </li>
                <li>
                  <Link to="#">Products</Link>
                </li>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-xl-3 mb-5 mb-xl-0">
              <span className="h5">Other</span>
              <ul className="footer-links mt-2">
                <li>
                  <Link to="#">
                    Documentation{" "}
                    <span className="badge badge-sm badge-secondary ml-2">
                      v3.0
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="#">Changelog</Link>
                </li>
                <li>
                  <Link to="#">Support</Link>
                </li>
                <li>
                  <Link to="#">License</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-xl-4 mb-5 mb-xl-0">
              <span className="h5">Get the app</span>
              <p className="text-muted font-small mt-2">
                It's easy. Just select your device.
              </p>
              <button className="btn btn-sm btn-white mb-xl-0 mr-2 mr-lg-2">
                <span className="d-flex align-items-center">
                  <span className="icon icon-brand mr-2">
                    <span className="fab fa-apple" />
                  </span>{" "}
                  <span className="d-inline-block text-left">
                    <small className="font-weight-normal d-block">
                      Available on
                    </small>{" "}
                    App Store
                  </span>
                </span>
              </button>{" "}
              <button className="btn btn-sm btn-white">
                <span className="icon icon-brand mr-2">
                  <span className="fab fa-google-play" />
                </span>{" "}
                <span className="d-inline-block text-left">
                  <small className="font-weight-normal d-block">
                    Available on
                  </small>{" "}
                  Google Play
                </span>
              </button>
            </div>
          </div>
          <hr className="my-3 my-lg-5" />
          <div className="row">
            <div className="col mb-md-0">
              <Link to="#" className="d-flex justify-content-center">
                <img
                  src="https://demo.themesberg.com/spaces/assets/img/themesberg.svg"
                  height={25}
                  className="mb-3"
                  alt="YourParaisePark Logo"
                />
              </Link>
              <div
                className="d-flex text-center justify-content-center align-items-center"
                role="contentinfo"
              >
                <p className="font-weight-normal font-small mb-0">
                  Copyright © Your Paradise Park{" "}
                  <span className="current-year">2021</span>. All rights
                  reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
     
      {/* <MessengerCustomerChat
        pageId="101621921567417"
        appId="932788690836898"
       
      /> */}
       <MessengerCustomerChat
        pageId="355101831978110"
        appId="1028615251278695"
       
      />
    </>
  );
};

export default HomePage;
