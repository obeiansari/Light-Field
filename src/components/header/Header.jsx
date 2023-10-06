import React from 'react'
import './header.css'
import leftArrow from "../../assets/images/header/leftArrorw.svg"

const Header = () => {
    return (
        <div className='header'>
            <img className='left-arrow-logo' src={leftArrow}/>
            <label className='header-label'>Payments</label>
        </div> 
    )
}

export default Header