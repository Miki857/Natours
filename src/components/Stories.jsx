import React from 'react';
import nat8 from "./img/nat-8.jpg";
import nat9 from "./img/nat-9.jpg";
import video from "./img/video.mp4";
import video2 from "./img/video.webm";

const Stories = () => {
  return (
    <section className='section-stories'>
        <div className='bg-video'>
            <video className='bg-video__content' autoPlay loop muted>
                <source src={video} type='video/mp4'/>
                <source src={video2} type='video/webp'/>
                Your browser is not supported!
            </video>
        </div>
        
        <div className='u-center-text u-margin-bottom-medium'>
            <h2 className='heading-secondary'>
                We make people genuinely happy
            </h2>
        </div>

        <div className='story'>
            <figure className='story__figure'>
                <img src={nat8}alt="Nat-8" className='story__figure-img'/>
                <figcaption className='story__figure-caption'>Mary Smith</figcaption>
            </figure>

            <div className='story-text'>
                <h3 className='story-text__title'>I had the best week ever with my family</h3>
                <p className='story-text__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut cum quisquam facere ullam, architecto porro dolorem maiores atque rerum, id sapiente impedit, magnam eos doloribus sit incidunt. Facilis, quis ipsum!</p>
            </div>
        </div>

        <div className='story'>
            <figure className='story__figure'>
                <img src={nat9}alt="Nat-8" className='story__figure-img'/>
                <figcaption className='story__figure-caption'>jack Wilson</figcaption>
            </figure>

            <div className='story-text'>
                <h3 className='story-text__title'>WOW! My life is completely different now</h3>
                <p className='story-text__description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci magni voluptatem molestias beatae, maiores consequuntur quod? Vel sint ducimus odio error, nulla atque nisi nobis rem quia repellendus officiis et?</p>
            </div>
        </div>

        <button className='btn-text cursor-pointer'>Read all stories &rarr;</button>
    </section>
  )
}

export default Stories