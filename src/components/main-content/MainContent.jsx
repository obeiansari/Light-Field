import React from 'react'
import "./mainContent.css"
import cardTop from '../../assets/images/main-content/card-top.svg'
import shield from '../../assets/images/main-content/shield.svg'
import thunder from '../../assets/images/main-content/thunder.svg'

function MainContent() {
    return (
        <div className='container'>
            <div className='main-content'>
                <div className='card'>
                    <div className='card-top-section'>
                        <label className='card-top-section-label'>Add your bank account to start accepting <span className='font-weight-bold'>online payments.</span></label>
                        <div className='card-top-image-section'>
                            <img className='shield-logo' src={shield} />
                            <span className='verical-line'></span>
                            <img className='thunder-logo' src={thunder} />
                        </div>
                        <button className='card-top-section-button'>HOW IT WORKS</button>
                        <img className='card-top-image' src={cardTop} />
                    </div>
                    <div className='card-bottom-section'>
                        <form className='card-bottom-form'>

                            <div className='font-weight-bold'>Verify using</div>
                            <div className='radio-buttons'>
                                <div className='radio-button'>
                                    <input
                                        type="radio"
                                        name='verify'
                                        value=""
                                        className='upi'
                                    />
                                    <label>UPI ID</label>
                                </div>
                                <div className='radio-button'>

                                    <input
                                        type="radio"
                                        value=""
                                        name='verify'
                                        defaultChecked={true}
                                        className='bankDetails'
                                    />
                                    <label>Bank details</label>
                                </div>
                            </div>

                            <div className='form-control-container'>
                                <div className='form-control'>

                                    <label>Account Holder Name <span className='red'>*</span></label>
                                    <input
                                        className=''
                                        name=''
                                        defaultValue='Raj Kumar'
                                    />
                                </div>
                                <div className='form-control'>


                                    <label>Account Number <span className='red'>*</span></label>
                                    <input
                                        className=''
                                        type='number'
                                        name=''
                                        defaultValue='02290410000000023'
                                    />
                                </div>
                                <div className='form-control'>


                                    <label>IFSC Code <span className='red'>*</span></label>
                                    <input
                                        className=''
                                        type='text'
                                        name=''
                                        defaultValue='JAKA0NISHAT'
                                    />
                                </div>
                            </div>
                            <div className='bank'>
                                <span>
                                    Bank Name: HDFC Bank
                                </span>
                                <span>Branch: Srinagar</span>
                            </div>
                            <div className='checkbox'>
                                <input 
                                    type='checkbox'
                                    name='terms'
                                    defaultChecked={true}
                                />
                                <label className='text-gray'>I accept all <span className='text-primary'>terms & conditions</span></label>
                            </div>
                        </form>

                    </div>
                </div>
                <button className='verify-btn'>Verify Bank Account</button>
            </div>
        </div>
    )
}

export default MainContent