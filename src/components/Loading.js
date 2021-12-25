import React from 'react'
import loading from './loading.png'
import 'aos/src/sass/aos.scss'

export const Loading = () => {
    return (
        <div data-aos='fade-in' className='loading'>
            <p>Loading...</p>
            <img src={loading} alt="Loading..." />
        </div>
    )
}

export default Loading;
