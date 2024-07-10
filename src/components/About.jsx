import React from 'react';
import img1 from "./img/nat-1.jpg";
import img2 from "./img/nat-2.jpg";
import img3 from "./img/nat-3.jpg";

const About = () => {
  return (
    <section className='section-about'>
        <div className='u-center-text u-margin-bottom-medium'>
            <h2 className='heading-secondary'>
                Exciting tours for adventurous people
            </h2>
        </div>

        <div className='about-grid'>
            <div className='about-grid__text'>
                <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
                <p className='paragraph'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, temporibus totam. Eveniet quisquam, unde officiis, facere fuga aliquam ut fugiat voluptates quis ratione veniam ipsum cupiditate accusantium accusamus, consectetur numquam.
                </p>
                
                <h3 className="heading-tertiary u-margin-bottom-small">Live adventures like you never have before</h3>
                <p className='paragraph'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, non illum repellendus doloremque quas ad distinctio accusamus laborum ducimus officiis cupiditate vel. Dolor amet quaerat unde quo labore molestiae inventore!
                </p>

                <button className='btn-text cursor-pointer'>Learn More &rarr;</button>
            </div>
            <div className='about-gallery'>
                <div className="composition"><img src={img1} alt="Photo 1" className="composition__photo composition__photo--p1" /></div>
                <div className="composition"><img src={img2} alt="Photo 2" className="composition__photo composition__photo--p2" /></div>
                <div className="composition"><img src={img3} alt="Photo 3" className="composition__photo composition__photo--p3" /></div>
            </div>
        </div>
    </section>
  )
}

export default About