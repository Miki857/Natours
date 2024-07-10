import React from 'react';
import nat8 from "./img/nat-8.jpg";
import nat9 from "./img/nat-9.jpg";

const PopUp = () => {
  return (
    <div className='popup' id='popup'>
        <div className='popup__content'>
            <a href="#section-tours" className='popup__close'>&times;</a>
            <div className='popup__content__1'>
                <img src={nat8} alt="Photo 1" />
                <img src={nat9} alt="Photo 2" />
            </div>
            <div className='popup__content__2'>
                <div className='u-center-text u-margin-bottom-small'>
                    <h2 className='heading-secondary'>
                        Start booking now
                    </h2>
                </div>
                <div className='popup__content__2__text'>
                    <h3>Important &ndash; Please read these terms before booking</h3>
                    <p className='popup__content__2__text u-margin-top-small'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur recusandae deserunt ipsum minus laboriosam iure ea impedit soluta beatae voluptate illum, sequi rem laudantium sed modi blanditiis distinctio non nesciunt.
                    </p>
                </div>

                <button className='btn--green u-margin-top-small cursor-pointer'>Book now</button>
            </div>
        </div>
    </div>
  )
}

export default PopUp