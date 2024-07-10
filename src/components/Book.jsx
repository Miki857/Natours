import React from 'react'

const Book = () => {
  return (
    <section className='section-book grid-center'>
        <div className='book'>
            <form className='book__form' action='#'>
                <div className='u-center-text u-margin-bottom-medium'>
                    <h2 className='heading-secondary'>
                        Start booking now
                    </h2>
                </div>

                <div className='book__form-group'>
                    <input type="text" className='book__form-group__input' placeholder='Full Name' id='name' required/>
                    <label htmlFor="name" className='book__form-group__label'>Full Name</label>
                </div>
                <div className='book__form-group'>
                    <input type="email" className='book__form-group__input' placeholder='Email address' id='email' required/>
                    <label htmlFor="email" className='book__form-group__label'>Email address</label>
                </div>

                <div className='book__form-group'>
                    <div className='book__form-group__radio-group'>
                        <input type="radio" className='book__form-group__radio-group__input' name='size' id='small' defaultChecked/>
                        <label htmlFor="small" className='book__form-group__radio-group__label'>
                            <span className='radio-button'></span>
                            Small tour group
                        </label>
                    </div>
                    <div className='book__form-group__radio-group'>
                        <input type="radio" className='book__form-group__radio-group__input' name='size' id='large'/>
                        <label htmlFor="large" className='book__form-group__radio-group__label'>
                            <span className='radio-button'></span>
                            Large tour group
                        </label>
                    </div>
                </div>

                <button className='btn--green cursor-pointer'>Next step &rarr;</button>
            </form>
        </div>
    </section>
  )
}

export default Book