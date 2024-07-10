import React from 'react';
import logo from "./img/logo-white.png";

const Header = () => {
  return (
    <header className='header'>
        <div className='header__logo'>
            <img src={logo} alt="logo" />
        </div>

        <div className='header__textBox grid-center gap-01'>
            <h1 className='headingPrimary'>
                <span className='headingPrimary__main'>Outdoors</span>
                <span className='headingPrimary__sub'>is where life happens</span>
            </h1>

            <button className='button cursor-pointer'>discover our tours</button>
        </div>
    </header>
  )
}

export default Header