import React, { useContext } from 'react'
import User from './User'
import Loading from './Loading'
import GithubContext from '../context/githubContext'

const Users = () => {
    const context = useContext(GithubContext)
    const {users, loading} = context

    if(loading){
        return <Loading />
    } else {
        return (
            <div className='container mt-3 mb-4'>
                <div className="row">
                    {users.map(user => (
                        <User user={user} key={user.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Users
