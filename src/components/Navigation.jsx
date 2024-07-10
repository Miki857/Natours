import React from 'react'

const Navigation = () => {
  return (
    <div className='navigation'>
        <input type="checkbox" className='navigation__checkbox' id='navi-toggle'/>
        <label htmlFor="navi-toggle" className='navigation__button'>
            <span className='navigation__button__icon'></span>
        </label>

        <div className='navigation__background'></div>
        <nav className='navigation__nav'>
            <ul className='navigation__nav__list'>
                <li className='navigation__nav__list__item'><a href="#" className='navigation__nav__list__link'>About Natous</a></li>
                <li className='navigation__nav__list__item'><a href="#" className='navigation__nav__list__link'>Your benfits</a></li>
                <li className='navigation__nav__list__item'><a href="#" className='navigation__nav__list__link'>Popular Tours</a></li>
                <li className='navigation__nav__list__item'><a href="#" className='navigation__nav__list__link'>Stories</a></li>
                <li className='navigation__nav__list__item'><a href="#" className='navigation__nav__list__link'>Book Now</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navigation