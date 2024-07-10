import React from 'react';
import logo1x from "./img/logo-green-1x.png";
import logo2x from "./img/logo-green-2x.png";
import logo_small1x from "./img/logo-green-small-1x.png";
import logo_small2x from "./img/logo-green-small-2x.png";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__logo-box'>
            <picture className='footer__logo-box__logo'>
                <source srcSet={logo_small1x + " 1x, " + logo_small2x + " 2x"}
                        media='(max-width: 600px)'/>
                <img srcSet={logo1x + " 1x, " + logo2x + " 2x"} src={logo1x} alt="logo"/>
            </picture>
        </div>

        <div className='footer-content'>
            <div className='footer-content__navigation u-margin-top-medium'>
                <ul className='footer-content__navigation__list'>
                    <li className='footer-content__navigation__list__item'>
                        <a href="#" className='link'>Company</a>
                    </li>
                    <li className='footer-content__navigation__list__item'>
                        <a href="#" className='link'>Contact us</a>
                    </li>
                    <li className='footer-content__navigation__list__item'>
                        <a href="#" className='link'>Carrers</a>
                    </li>
                    <li className='footer-content__navigation__list__item'>
                        <a href="#" className='link'>Privacy policy</a>
                    </li>
                    <li className='footer-content__navigation__list__item'>
                        <a href="#" className='link'>Terms</a>
                    </li>
                </ul>
            </div>

            <p className='footer-content__copyright u-margin-top-medium'>
                This Website was built by <a href="https://portfolio-mc.netlify.app/" target='_blank' className='link'>Miguel Castillo</a>
            </p>
        </div>
    </footer>
  )
}

export default Footer