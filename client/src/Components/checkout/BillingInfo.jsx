import React, { useState } from 'react'
import AccordionOne from './AccordionOne'
import AccordionThree from './AccordionThree'
import AccordionTwo from './AccordionTwo'
import StripeContainer from '../../stripe/StripeContainer'
import PaymentCheckout from './PaymentCheckout'
import AccordionFour from './AccordionFour'

const BillingInfo = () => {
  const [showPage1, setshowPage1] = useState(true)
  const [hideCollapse1, setHideCollapse1] = useState(false)
  const [hideCollapse2, setHideCollapse2] = useState(false)
  const [hideCollapse3, setHideCollapse3] = useState(false)
  const [hideCollapse4, setHideCollapse4] = useState(false)
  const [showPage2, setshowPage2] = useState(false)
  const [showPage3, setshowPage3] = useState(false)
  const [showPage4, setshowPage4] = useState(false)
  const [showPage5, setshowPage5] = useState(false)


  const pageTwo = () => {
    setshowPage1(false)
    setshowPage3(false)
    setshowPage4(false)
    setshowPage2(true)
    setHideCollapse1(true)
  }
  const pageThree = () => {
    setshowPage1(false)
    setshowPage2(false)
    setshowPage4(false)
    setshowPage3(true)
    setHideCollapse2(true)
  }
  const pageFour = () => {
    setshowPage1(false)
    setshowPage3(false)
    setshowPage2(false)
    setshowPage4(true)
    setHideCollapse3(true)
  }
  const pageFive = () => {
    setshowPage1(false)
    setshowPage3(false)
    setshowPage2(false)
    setshowPage4(false)
    setshowPage5(true)
    setHideCollapse4(true)
  } 
  return (
    <>
      <div class="accordion custom-accordion col-lg-8 sm-col-12 " id="custom-accordion-one"  >
        <div class="card mb-0">
          <div class="card-header" id="headingFour">
            <h5 class="m-0">
              <a class="custom-accordion-title d-block py-1"
                data-bs-toggle="collapse"
                href={showPage1 || hideCollapse1 ? "#collapseFour" : ''}
                // href="#collapseFour"

                aria-expanded={showPage1}
                // aria-expanded="true"
                aria-controls="collapseFour">
                <span>
                  <h4 className='mt-2' style={{ display: 'inline' }}>Billing information</h4>
                </span>
                <i
                  class="mdi mdi-chevron-down accordion-arrow mb-3"></i>
              </a>
            </h5>
          </div>

          <div id="collapseFour" style={{ width: '100%' }}
            class={`collapse ${showPage1 ? 'show' : ''}`}
            aria-labelledby="headingFour"
            data-bs-parent="#custom-accordion-one">
            <div class="card-body" >
              <AccordionOne checkoutPageTwo={pageTwo} />
            </div>
          </div>
        </div>
        <div class="card mb-0">
          <div class="card-header" id="headingFive">
            <h5 class="m-0">
              <a class="custom-accordion-title collapsed d-block py-1"
                data-bs-toggle="collapse"
                href={showPage2 || hideCollapse2 ? "#collapseFive" : ''}

                //  href="#collapseFive"
                // aria-expanded="false"

                aria-controls="collapseFive"
              >
                <h4 className='mt-2' style={{ display: 'inline' }}>Additional Services</h4>
                <i
                  class="mdi mdi-chevron-down accordion-arrow"></i>
              </a>
            </h5>
          </div>
          <div id="collapseFive" class={`collapse ${showPage2 ? 'show' : ''}`}
            aria-labelledby="headingFive"
            data-bs-parent="#custom-accordion-one">
            <div class="card-body">
              <AccordionTwo checkoutPageTwo={pageThree} />
            </div>
          </div>
        </div>
        <div class="card mb-0">
          <div class="card-header" id="headingSix">
            <h5 class="m-0">
              <a class="custom-accordion-title collapsed d-block py-1"
                data-bs-toggle="collapse"
                href={showPage3 || hideCollapse3 ? "#collapseSix" : ''}
                aria-expanded="false" aria-controls="collapseSix">
                <h4 className='mt-2' style={{ display: 'inline' }}> Email Verification </h4>
                <i
                  class="mdi mdi-chevron-down accordion-arrow"></i>
              </a>
            </h5>
          </div>
          <div id="collapseSix" class={`collapse ${showPage3 ? 'show' : ''}`} aria-labelledby="headingSix"
            data-bs-parent="#custom-accordion-one">
            <div class="card-body">
              <AccordionThree checkoutPageTwo={pageFour} />
            </div>
          </div>
        </div>
        <div class="card mb-0">
          <div class="card-header" id="headingSeven">
            <h5 class="m-0">
              <a class="custom-accordion-title collapsed d-block py-1"
                data-bs-toggle="collapse"
                href={showPage4 || hideCollapse3 ? "#collapseSeven" : ''}
                aria-expanded="false" aria-controls="collapseSeven">
                <h4 className='mt-2' style={{ display: 'inline' }}> Payment Verification Details</h4>
                <i
                  class="mdi mdi-chevron-down accordion-arrow"></i>
              </a>
            </h5>
          </div>
          <div id="collapseSeven" class={`collapse ${showPage4 ? 'show' : ''}`} aria-labelledby="headingSix"
            data-bs-parent="#custom-accordion-one">
            <div class="card-body">
              <AccordionFour checkoutPageTwo={pageFive} />
            </div>
          </div>
        </div>
        <div class="card mb-0">
          <div class="card-header" id="headingSeven">
            <h5 class="m-0">
              <a class="custom-accordion-title collapsed d-block py-1"
                data-bs-toggle="collapse"
                href={showPage4 ? "#collapseSeven" : ''}
                aria-expanded="false"
                aria-controls="collapseSeven">
                Q. Will you regularly give updates of Hyper ?
                <i
                  class="mdi mdi-chevron-down accordion-arrow"></i>
              </a>
            </h5>
          </div>
          <div id="collapseSeven"
          class={`collapse ${showPage4 ? 'show' : ''}`}
            aria-labelledby="headingSeven"
            data-bs-parent="#custom-accordion-one">
            <div class="card-body">
              <PaymentCheckout />
            </div>
          </div>
        </div>
      </div>




    </>
  )
}

export default BillingInfo
