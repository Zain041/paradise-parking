import React from 'react'

const AccordionFour = () => {
    return (
        <div>
              <div className='col-lg-8 sm-col-12'>
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
                </div>
        </div>
    )
}

export default AccordionFour
