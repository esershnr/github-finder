import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container">
                    <div className='navbar-brand d-flex'>
                    <Link to="/" className="navbar-brand d-flex align-items-center"><GitHubIcon/><span className='ms-2 position-relative'> Github Finder <span style={{fontSize:'10px'}}>By Eser Şahiner</span></span></Link>
                    </div>
                    <ul className="navbar-nav justify-content-end">
                        <li className="nav-item">
                            <Link to='/about' className='nav-link'>About</Link>
                        </li>
                    </ul>
                    </div>
            </nav>
    )
}

export default Navbar