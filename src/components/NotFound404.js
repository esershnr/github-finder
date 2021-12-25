import React from 'react'
import WarningIcon from '@material-ui/icons/Warning';
import 'aos/src/sass/aos.scss'


const NotFound404 = () => {
    return (
        <>
            <div className="container text-white text-center d-flex align-items-center justify-content-center" style={{minHeight: '90vh'}}>
                <div data-aos='zoom-in' className='d-flex flex-column align-items-center'>
                    <WarningIcon style={{fontSize: '125', color: '#fc5c9c'}} />
                    <h1>ERROR 404</h1>
                    <h3>PAGE NOT FOUND</h3>
                </div>
            </div>
        </>
    )
}

export default NotFound404