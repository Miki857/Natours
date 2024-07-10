import React from 'react'

const Tours = () => {
  return (
    <section className='section-tours' id='section-tours'>
        <div className='u-center-text u-margin-bottom-medium'>
            <h2 className='heading-secondary'>
                Most popular tours
            </h2>
        </div>
        
        <div className='tour__cards'>
            <div className='tour-card__container'>
                <div className='tour-card'>
                    <div className='card__side card__side--front'>
                        <div className='card__picture card__picture-1'></div>
                        <h3 className='card__title card__title-1'><span>Explore the world</span></h3>
                        <div className='card__details grid-center'>
                            <ul>
                                <li>3 days tour</li>
                                <li>Up to 30 people</li>
                                <li>2 tour guides</li>
                                <li>Sleep in cozy hotels</li>
                                <li>Difficult: easy</li>
                            </ul>
                        </div>
                    </div>

                    <div className='card__side card__side--back card__side--back-1'>
                        <div className='cart__cta flex-column align-center gap-02'>
                            <div className='cart__price'>
                                <p className='cart__price--text'>Only</p>
                                <p className='cart__price--price'>$297</p>
                            </div>
                            <a href='#popup' className='btn--cta cursor-pointer'>Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='tour-card__container'>
                <div className='tour-card'>
                    <div className='card__side card__side--front'>
                        <div className='card__picture card__picture-2'></div>
                        <h3 className='card__title card__title-2'><span>The forest hiker</span></h3>
                        <div className='card__details grid-center'>
                            <ul>
                                <li>7 days tour</li>
                                <li>Up to 40 people</li>
                                <li>6 tour guides</li>
                                <li>Sleep in provided tents</li>
                                <li>Difficult: medium</li>
                            </ul>
                        </div>
                    </div>

                    <div className='card__side card__side--back card__side--back-2'>
                        <div className='cart__cta flex-column align-center gap-02'>
                            <div className='cart__price'>
                                <p className='cart__price--text'>Only</p>
                                <p className='cart__price--price'>$497</p>
                            </div>
                            <a href='#popup' className='btn--cta cursor-pointer'>Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='tour-card__container'>
                <div className='tour-card'>
                    <div className='card__side card__side--front'>
                        <div className='card__picture card__picture-3'></div>
                        <h3 className='card__title card__title-3'><span>The snow adventurer</span></h3>
                        <div className='card__details grid-center'>
                            <ul>
                                <li>5 days tour</li>
                                <li>Up to 15 people</li>
                                <li>3 tour guides</li>
                                <li>Sleep in provided tents</li>
                                <li>Difficult: hard</li>
                            </ul>
                        </div>
                    </div>

                    <div className='card__side card__side--back card__side--back-3'>
                        <div className='cart__cta flex-column align-center gap-02'>
                            <div className='cart__price'>
                                <p className='cart__price--text'>Only</p>
                                <p className='cart__price--price'>$897</p>
                            </div>
                            <a href='#popup' className='btn--cta cursor-pointer'>Book now!</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button className='btn--green cursor-pointer u-margin-top-medium'>Discover all tours</button>
    </section>
  )
}

export default Tours