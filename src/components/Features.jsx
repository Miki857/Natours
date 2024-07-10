import React from 'react'

const Features = () => {
  return (
    <section className='section-features grid-center'>
        <div className='feature__cards'>
            <div className='card'>
                <i className='card--icon icon-basic-world'></i>
                <h3 className='card--title heading-tertiary'>Explore the world</h3>
                <p className='cart--text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ullam inventore eveniet laborum totam in explicabo nemo! Ipsum.
                </p>
            </div>

            <div className='card'>
                <i className='card--icon icon-basic-compass'></i>
                <h3 className='card--title heading-tertiary'>Meet Nature</h3>
                <p className='cart--text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ullam inventore eveniet laborum totam in explicabo nemo! Ipsum.
                </p>
            </div>

            <div className='card'>
                <i className='card--icon icon-basic-map'></i>
                <h3 className='card--title heading-tertiary'>Find your way</h3>
                <p className='cart--text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ullam inventore eveniet laborum totam in explicabo nemo! Ipsum.
                </p>
            </div>

            <div className='card'>
                <i className='card--icon icon-basic-heart'></i>
                <h3 className='card--title heading-tertiary'>Live a healthier life</h3>
                <p className='cart--text'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad ullam inventore eveniet laborum totam in explicabo nemo! Ipsum.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Features