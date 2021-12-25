import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import {Link} from 'react-router-dom'
import 'aos/src/sass/aos.scss'

const About = () => {
    return (
        <div className='container my-3'>
            <div className="row">
                <div data-aos='fade-right' className="col-md-6">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <div className="card-title d-flex flex-column align-items-center">
                                <h1>About</h1>
                                <Link to="/" className="navbar-brand text-white d-flex align-items-center"><GitHubIcon/><span className='ms-2'> Github Finder App <span style={{fontSize:'10px'}}>By Eser Şahiner</span></span></Link>
                            </div>
                            <hr/>
                            <div className="card-text w-50 m-auto">
                                <p>This app created by Me, while i was learning the basics of React.js Framework. This app was just a simple project of the course nevertheless i redesigned the app during the course. And now i am presenting it to you.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div data-aos='fade-left' className="col-md-6">
                    <div className="card bg-dark text-white">
                        <div className="card-body">
                            <div className="card-title d-flex flex-column align-items-center">
                                <h1>About Me</h1>
                                <h3>Eser Şahiner</h3>
                            </div>
                            <hr/>
                            <div className="card-text w-50 m-auto">
                                <p>Hi my name is Eser, born in 1999 in Istanbul. Graduated from Beykent University Faculty Of Communication New Media Department in 2021.</p>
                            </div>
                            <div className="my-3">
                            <div className="card-title w-50 m-auto">
                                <h5>Web Development Skills</h5>
                            </div>
                            <ul class="list-group w-50 m-auto">
                                <li class="list-group-item list-group-item-dark">HTML</li>
                                <li class="list-group-item list-group-item-dark">CSS/SCSS</li>
                                <li class="list-group-item list-group-item-dark">JS</li>
                                <li class="list-group-item list-group-item-dark">ReactJS</li>
                            </ul>
                            </div>
                            <div className="my-3">
                            <div className="card-title w-50 m-auto">
                                <h5>Other Skills</h5>
                            </div>
                            <ul class="list-group w-50 m-auto">
                                <li class="list-group-item list-group-item-dark">Adobe Photoshop</li>
                                <li class="list-group-item list-group-item-dark">Adobe Illustrator</li>
                                <li class="list-group-item list-group-item-dark">Adobe AfterEffects</li>
                                <li class="list-group-item list-group-item-dark">Adobe Premiere Pro</li>
                            </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About