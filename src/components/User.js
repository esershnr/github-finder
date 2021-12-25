import React from 'react'
import {Link} from 'react-router-dom'
import GitHubIcon from '@material-ui/icons/GitHub'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import 'aos/src/sass/aos.scss'

const User = (props) => {
    const {login, avatar_url, html_url} = props.user
    return (
            <div data-aos='fade-in' className="col-md-4 col-sm-6 col-lg-3 col-xl-2">
                <div className="card mt-2 bg-dark text-white">
                    <img src={avatar_url} alt="PP" className="img-fluid" />
                    <div className="card-body">
                        <h5 className="card-title text-uppercase text-center mb-4">{login}</h5>
                        <div className="d-grid">
                            
                            <Link to={`/user/${login}`} className='btn btn-secondary btn-sm my-1 d-flex justify-content-center align-items-center'><AccountCircleIcon/> <span className='ms-1'>Profile</span></Link>
                            
                            <a href={html_url} className='btn btn-warning btn-sm d-flex justify-content-center align-items-center'>
                                <GitHubIcon style={{textAlign:'center'}}/> <span className='ms-1'>Github</span>
                            
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
    
}

export default User
