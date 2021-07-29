import React, { useState,useContext } from 'react'
import axios from 'axios'
import { useToasts } from 'react-toast-notifications';
import {contextData} from '../../context/CreateContext'
const AccordionOne = ({ checkoutPageTwo }) => {
    const { addToast } = useToasts()
    const context = useContext(contextData)
    console.log(context)
    let user_email =context.user.email
    console.log(user_email)
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        country: '',
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const checkValidEmail=async()=>{
        if(formData.email===user_email){
            // const res = await axios.get(`/api/verifybooking/${context.user?.id}`)
            // let message = res.data.message;
            // const code=res.data.code
            // if (res) {
            //     // localStorage.setItem('code', JSON.stringify(code));
            //     message.forEach((msgs) => {
            //         addToast(msgs.msg, { appearance: 'info', autoDismiss: true });
            //     });
            // }
            // try {
            //     const res=await axios.post(`/api/formdata`,formData)
            //     console.log(res)
                
            // } catch (error) {
            //     //  addToast('Data not saved', { appearance: 'error', autoDismiss: true });
            //     console.log(error)
            // }
            checkoutPageTwo()
        }else{
            addToast('Invalid Email', { appearance: 'error', autoDismiss: true });
        }
    }
    const submitHandler = async(e) => {
        e.preventDefault();
        
        if (formData.firstName && formData.lastName && formData.email && formData.phone) {
           
            await checkValidEmail()
        } else {
            addToast(`Fields must required`, { appearance: 'error', autoDismiss: true })

        }
        console.log(formData);
    };

    return (
        <div className='row'>
            <div className='col-lg-12 col-sm-12 col-xl-12'>
                <p className='mb-4 text-muted'>
                    Fill the form below in order to send you the
                    order's invoice.
                </p>

                <form onSubmit={submitHandler} autocomplete={true}>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label
                                    htmlFor='billing-first-name'
                                    className='form-label'>
                                    First Name
                                </label>
                                <input
                                    name='firstName'
                                    value={formData.firstName}
                                    onChange={changeHandler}
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter your first name'
                                    id='billing-first-name'
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label
                                    htmlFor='billing-last-name'
                                    className='form-label'>
                                    Last Name
                                </label>
                                <input
                                    name='lastName'
                                    value={formData.lastName}
                                    onChange={changeHandler}
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter your last name'
                                    id='billing-last-name'
                                />
                            </div>
                        </div>
                    </div>{' '}
                    {/* end row */}
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label
                                    htmlFor='billing-email-address'
                                    className='form-label'>
                                    Email Address{' '}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input
                                    name='email'
                                    value={formData.email}
                                    onChange={changeHandler}
                                    className='form-control'
                                    type='email'
                                    placeholder='Enter your email'
                                    id='billing-email-address'
                                />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='mb-3'>
                                <label
                                    htmlFor='billing-phone'
                                    className='form-label'>
                                    Phone{' '}
                                    <span className='text-danger'>*</span>
                                </label>
                                <input
                                    name='phone'
                                    value={formData.phone}
                                    onChange={changeHandler}
                                    className='form-control'
                                    type='text'
                                    placeholder='(xx) xxx xxxx xxx'
                                    id='billing-phone'
                                />
                            </div>
                        </div>
                    </div>{' '}
                    {/* end row */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='mb-3'>
                                <label
                                    htmlFor='billing-address'
                                    className='form-label'>
                                    Address
                                </label>
                                <input
                                    name='address'
                                    value={formData.address}
                                    onChange={changeHandler}
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter full address'
                                    id='billing-address'
                                />
                            </div>
                        </div>
                    </div>{' '}
                    {/* end row */}
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='mb-3'>
                                <label
                                    htmlFor='billing-town-city'
                                    className='form-label'>
                                    Town / City
                                </label>
                                <input
                                    name='city'
                                    value={formData.city}
                                    onChange={changeHandler}
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter your city name'
                                    id='billing-town-city'
                                />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='mb-3'>
                                <label
                                    htmlFor='billing-state'
                                    className='form-label'>
                                    State
                                </label>
                                <input
                                    name='state'
                                    value={formData.state}
                                    onChange={changeHandler}
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter your state'
                                    id='billing-state'
                                />
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='mb-3'>
                                <label
                                    htmlFor='billing-zip-postal'
                                    className='form-label'>
                                    Zip / Postal Code
                                </label>
                                <input
                                    name='zip'
                                    value={formData.zip}
                                    onChange={changeHandler}
                                    className='form-control'
                                    type='text'
                                    placeholder='Enter your zip code'
                                    id='billing-zip-postal'
                                />
                            </div>
                        </div>
                    </div>{' '}
                    {/* end row */}
                    <div className='row'>
                        <div className='col-12'>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Country
                                </label>
                                <select
                                    name='country'
                                    value={formData.country}
                                    onChange={changeHandler}
                                    data-toggle='select2'
                                    title='Country'>
                                    <option value={0}>
                                        Select Country
                                    </option>
                                    <option value='AF'>Afghanistan</option>
                                    <option value='AL'>Albania</option>
                                    <option value='DZ'>Algeria</option>
                                    <option value='AS'>
                                        American Samoa
                                    </option>
                                    <option value='AD'>Andorra</option>
                                    <option value='AO'>Angola</option>
                                    <option value='AI'>Anguilla</option>
                                    <option value='AQ'>Antarctica</option>
                                    <option value='AR'>Argentina</option>
                                    <option value='AM'>Armenia</option>
                                    <option value='AW'>Aruba</option>
                                    <option value='AU'>Australia</option>
                                    <option value='AT'>Austria</option>
                                    <option value='AZ'>Azerbaijan</option>
                                    <option value='BS'>Bahamas</option>
                                    <option value='BH'>Bahrain</option>
                                    <option value='BD'>Bangladesh</option>
                                    <option value='BB'>Barbados</option>
                                    <option value='BY'>Belarus</option>
                                    <option value='BE'>Belgium</option>
                                    <option value='BZ'>Belize</option>
                                    <option value='BJ'>Benin</option>
                                    <option value='BM'>Bermuda</option>
                                    <option value='BT'>Bhutan</option>
                                    <option value='BO'>Bolivia</option>
                                    <option value='BW'>Botswana</option>
                                    <option value='BV'>
                                        Bouvet Island
                                    </option>
                                    <option value='BR'>Brazil</option>
                                    <option value='BN'>
                                        Brunei Darussalam
                                    </option>
                                    <option value='BG'>Bulgaria</option>
                                    <option value='BF'>Burkina Faso</option>
                                    <option value='BI'>Burundi</option>
                                    <option value='KH'>Cambodia</option>
                                    <option value='CM'>Cameroon</option>
                                    <option value='CA'>Canada</option>
                                    <option value='CV'>Cape Verde</option>
                                    <option value='KY'>
                                        Cayman Islands
                                    </option>
                                    <option value='CF'>
                                        Central African Republic
                                    </option>
                                    <option value='TD'>Chad</option>
                                    <option value='CL'>Chile</option>
                                    <option value='CN'>China</option>
                                    <option value='CX'>
                                        Christmas Island
                                    </option>
                                    <option value='CC'>
                                        Cocos (Keeling) Islands
                                    </option>
                                    <option value='CO'>Colombia</option>
                                    <option value='KM'>Comoros</option>
                                    <option value='CG'>Congo</option>
                                    <option value='CK'>Cook Islands</option>
                                    <option value='CR'>Costa Rica</option>
                                    <option value='CI'>
                                        Cote d'Ivoire
                                    </option>
                                    <option value='HR'>
                                        Croatia (Hrvatska)
                                    </option>
                                    <option value='CU'>Cuba</option>
                                    <option value='CY'>Cyprus</option>
                                    <option value='CZ'>
                                        Czech Republic
                                    </option>
                                    <option value='DK'>Denmark</option>
                                    <option value='DJ'>Djibouti</option>
                                    <option value='DM'>Dominica</option>
                                    <option value='DO'>
                                        Dominican Republic
                                    </option>
                                    <option value='EC'>Ecuador</option>
                                    <option value='EG'>Egypt</option>
                                    <option value='SV'>El Salvador</option>
                                    <option value='GQ'>
                                        Equatorial Guinea
                                    </option>
                                    <option value='ER'>Eritrea</option>
                                    <option value='EE'>Estonia</option>
                                    <option value='ET'>Ethiopia</option>
                                    <option value='FK'>
                                        Falkland Islands (Malvinas)
                                    </option>
                                    <option value='FO'>
                                        Faroe Islands
                                    </option>
                                    <option value='FJ'>Fiji</option>
                                    <option value='FI'>Finland</option>
                                    <option value='FR'>France</option>
                                    <option value='GF'>
                                        French Guiana
                                    </option>
                                    <option value='PF'>
                                        French Polynesia
                                    </option>
                                    <option value='GA'>Gabon</option>
                                    <option value='GM'>Gambia</option>
                                    <option value='GE'>Georgia</option>
                                    <option value='DE'>Germany</option>
                                    <option value='GH'>Ghana</option>
                                    <option value='GI'>Gibraltar</option>
                                    <option value='GR'>Greece</option>
                                    <option value='GL'>Greenland</option>
                                    <option value='GD'>Grenada</option>
                                    <option value='GP'>Guadeloupe</option>
                                    <option value='GU'>Guam</option>
                                    <option value='GT'>Guatemala</option>
                                    <option value='GN'>Guinea</option>
                                    <option value='GW'>
                                        Guinea-Bissau
                                    </option>
                                    <option value='GY'>Guyana</option>
                                    <option value='HT'>Haiti</option>
                                    <option value='HN'>Honduras</option>
                                    <option value='HK'>Hong Kong</option>
                                    <option value='HU'>Hungary</option>
                                    <option value='IS'>Iceland</option>
                                    <option value='IN'>India</option>
                                    <option value='ID'>Indonesia</option>
                                    <option value='IQ'>Iraq</option>
                                    <option value='IE'>Ireland</option>
                                    <option value='IL'>Israel</option>
                                    <option value='IT'>Italy</option>
                                    <option value='JM'>Jamaica</option>
                                    <option value='JP'>Japan</option>
                                    <option value='JO'>Jordan</option>
                                    <option value='KZ'>Kazakhstan</option>
                                    <option value='KE'>Kenya</option>
                                    <option value='KI'>Kiribati</option>
                                    <option value='KR'>
                                        Korea, Republic of
                                    </option>
                                    <option value='KW'>Kuwait</option>
                                    <option value='KG'>Kyrgyzstan</option>
                                    <option value='LV'>Latvia</option>
                                    <option value='LB'>Lebanon</option>
                                    <option value='LS'>Lesotho</option>
                                    <option value='LR'>Liberia</option>
                                    <option value='LY'>
                                        Libyan Arab Jamahiriya
                                    </option>
                                    <option value='LI'>
                                        Liechtenstein
                                    </option>
                                    <option value='LT'>Lithuania</option>
                                    <option value='LU'>Luxembourg</option>
                                    <option value='MO'>Macau</option>
                                    <option value='MG'>Madagascar</option>
                                    <option value='MW'>Malawi</option>
                                    <option value='MY'>Malaysia</option>
                                    <option value='MV'>Maldives</option>
                                    <option value='ML'>Mali</option>
                                    <option value='MT'>Malta</option>
                                    <option value='MH'>
                                        Marshall Islands
                                    </option>
                                    <option value='MQ'>Martinique</option>
                                    <option value='MR'>Mauritania</option>
                                    <option value='MU'>Mauritius</option>
                                    <option value='YT'>Mayotte</option>
                                    <option value='MX'>Mexico</option>
                                    <option value='MD'>
                                        Moldova, Republic of
                                    </option>
                                    <option value='MC'>Monaco</option>
                                    <option value='MN'>Mongolia</option>
                                    <option value='MS'>Montserrat</option>
                                    <option value='MA'>Morocco</option>
                                    <option value='MZ'>Mozambique</option>
                                    <option value='MM'>Myanmar</option>
                                    <option value='NA'>Namibia</option>
                                    <option value='NR'>Nauru</option>
                                    <option value='NP'>Nepal</option>
                                    <option value='NL'>Netherlands</option>
                                    <option value='AN'>
                                        Netherlands Antilles
                                    </option>
                                    <option value='NC'>
                                        New Caledonia
                                    </option>
                                    <option value='NZ'>New Zealand</option>
                                    <option value='NI'>Nicaragua</option>
                                    <option value='NE'>Niger</option>
                                    <option value='NG'>Nigeria</option>
                                    <option value='NU'>Niue</option>
                                    <option value='NF'>
                                        Norfolk Island
                                    </option>
                                    <option value='MP'>
                                        Northern Mariana Islands
                                    </option>
                                    <option value='NO'>Norway</option>
                                    <option value='OM'>Oman</option>
                                    <option value='PW'>Palau</option>
                                    <option value='PA'>Panama</option>
                                    <option value='PG'>
                                        Papua New Guinea
                                    </option>
                                    <option value='PY'>Paraguay</option>
                                    <option value='PE'>Peru</option>
                                    <option value='PH'>Philippines</option>
                                    <option value='PN'>Pitcairn</option>
                                    <option value='PL'>Poland</option>
                                    <option value='PT'>Portugal</option>
                                    <option value='PR'>Puerto Rico</option>
                                    <option value='QA'>Qatar</option>
                                    <option value='RE'>Reunion</option>
                                    <option value='RO'>Romania</option>
                                    <option value='RU'>
                                        Russian Federation
                                    </option>
                                    <option value='RW'>Rwanda</option>
                                    <option value='KN'>
                                        Saint Kitts and Nevis
                                    </option>
                                    <option value='LC'>Saint LUCIA</option>
                                    <option value='WS'>Samoa</option>
                                    <option value='SM'>San Marino</option>
                                    <option value='ST'>
                                        Sao Tome and Principe
                                    </option>
                                    <option value='SA'>Saudi Arabia</option>
                                    <option value='SN'>Senegal</option>
                                    <option value='SC'>Seychelles</option>
                                    <option value='SL'>Sierra Leone</option>
                                    <option value='SG'>Singapore</option>
                                    <option value='SK'>
                                        Slovakia (Slovak Republic)
                                    </option>
                                    <option value='SI'>Slovenia</option>
                                    <option value='SB'>
                                        Solomon Islands
                                    </option>
                                    <option value='SO'>Somalia</option>
                                    <option value='ZA'>South Africa</option>
                                    <option value='ES'>Spain</option>
                                    <option value='LK'>Sri Lanka</option>
                                    <option value='SH'>St. Helena</option>
                                    <option value='PM'>
                                        St. Pierre and Miquelon
                                    </option>
                                    <option value='SD'>Sudan</option>
                                    <option value='SR'>Suriname</option>
                                    <option value='SZ'>Swaziland</option>
                                    <option value='SE'>Sweden</option>
                                    <option value='CH'>Switzerland</option>
                                    <option value='SY'>
                                        Syrian Arab Republic
                                    </option>
                                    <option value='TW'>
                                        Taiwan, Province of China
                                    </option>
                                    <option value='TJ'>Tajikistan</option>
                                    <option value='TZ'>
                                        Tanzania, United Republic of
                                    </option>
                                    <option value='TH'>Thailand</option>
                                    <option value='TG'>Togo</option>
                                    <option value='TK'>Tokelau</option>
                                    <option value='TO'>Tonga</option>
                                    <option value='TT'>
                                        Trinidad and Tobago
                                    </option>
                                    <option value='TN'>Tunisia</option>
                                    <option value='TR'>Turkey</option>
                                    <option value='TM'>Turkmenistan</option>
                                    <option value='TC'>
                                        Turks and Caicos Islands
                                    </option>
                                    <option value='TV'>Tuvalu</option>
                                    <option value='UG'>Uganda</option>
                                    <option value='UA'>Ukraine</option>
                                    <option value='AE'>
                                        United Arab Emirates
                                    </option>
                                    <option value='GB'>
                                        United Kingdom
                                    </option>
                                    <option value='US'>
                                        United States
                                    </option>
                                    <option value='UY'>Uruguay</option>
                                    <option value='UZ'>Uzbekistan</option>
                                    <option value='VU'>Vanuatu</option>
                                    <option value='VE'>Venezuela</option>
                                    <option value='VN'>Viet Nam</option>
                                    <option value='VG'>
                                        Virgin Islands (British)
                                    </option>
                                    <option value='VI'>
                                        Virgin Islands (U.S.)
                                    </option>
                                    <option value='WF'>
                                        Wallis and Futuna Islands
                                    </option>
                                    <option value='EH'>
                                        Western Sahara
                                    </option>
                                    <option value='YE'>Yemen</option>
                                    <option value='ZM'>Zambia</option>
                                    <option value='ZW'>Zimbabwe</option>
                                </select>
                            </div>
                        </div>
                    </div>{' '}
                    {/* end row */}
                    <div className='mt-4 row'>
                        {/* end col */}
                        <div className='col-sm-12 '>
                            <div className='text-sm-end'>
                                <button
                                    onClick={submitHandler}
                                    className='btn btn-danger'
                                    type='submit'>
                                    <i className='mdi mdi-truck-fast me-1' />{' '}
                                    Next
                                </button>
                            </div>
                        </div>{' '}
                    </div>{' '}
                </form>
            </div>
        </div>
    )
}

export default AccordionOne
