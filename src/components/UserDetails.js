import React, { useEffect, useContext } from 'react'
import Loading from './Loading'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import LinkIcon from '@material-ui/icons/Link'
import GithubContext from '../context/githubContext'
import GitHubIcon from '@material-ui/icons/GitHub'
import 'aos/src/sass/aos.scss'


const UserDetails = ( {match} ) => {

    const context = useContext(GithubContext)
    const {getUser, getUserRepos, user, repos, loading} = context


    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
    }, [])

    const {name, avatar_url, location, html_url, bio, blog, followers, following, public_repos} = user;
    if(loading){
        return <Loading />
    } else {
        return (
            <div className='container mt-3'>
                <div className="row">
                    <div className="col-md-3 mb-3">
                        <div data-aos='fade-right' className="card bg-dark text-white">
                        <img src={avatar_url} alt="User Profile Pic" className='card-img-top'/>
                        <div className="card-body d-grid gap-2">
                            <div className='d-grid'>
                                <span className="badge bg-primary m-1">Followers: {followers}</span>
                                <span className="badge bg-danger m-1">Following: {following}</span>
                                <span className="badge bg-success m-1">Public Repos: {public_repos}</span>
                            </div>    
                            <h5 className="card-text">{name}</h5>
                            <p className='d-flex'><LocationOnIcon /> {location}</p>
                            <div className='d-grid gap-2'>
                            <a href={html_url} className='btn btn-warning btn-sm d-flex justify-content-center align-items-center'>
                                <GitHubIcon/> <span className='ms-1'>Github</span>
                            </a>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-9 mb-5">
                        <div data-aos='fade-left' className="card bg-dark text-white">
                            <div className="card-body">
                                {
                                    bio && 
                                    <>
                                        <h3>About</h3>
                                        <p>{bio}</p>
                                        <hr className='my-5' />
                                    </>
                                }
                                {
                                    blog &&
                                    <>
                                        <h3>Blog</h3>
                                        {blog}
                                        <hr className='my-5' />
                                    </>
                                }

                                {
                                    repos.length > 0 &&
                                    <>
                                    <h3>Repositories</h3>
                                        {repos.map(rep => (
                                            <div data-aos='fade-in' key={rep.id}>
                                                <ul className="list-group list-group-flush">
                                                    <li className="list-group-item my-1 bg-secondary text-white lgi-cus">
                                                        <div className='d-flex justify-content-between text-uppercase'>
                                                            <a className='nav-link text-white'>{rep.name}</a>
                                                            <a href={rep.html_url} className='btn btn-dark btn-sm ms-2 d-flex justify-content-center align-items-center'><LinkIcon /></a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        ))}
                                    </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserDetails
