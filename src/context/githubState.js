import React, { useReducer, useEffect } from 'react'
import GithubReducer from './githubReducer'
import GithubContext from './githubContext'
import Axios from 'axios'
import AOS from 'aos'

const GithubState = (props) => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    useEffect(() => {
        setLoading()
        setTimeout(() => {
            Axios.get('https://api.github.com/users').then(res => {
                dispatch({
                    type: 'GET_FIRST',
                    payload: res.data
                })
            })
        }, 1000);
        AOS.init({duration:1000})
    }, [])

    const getUser = (username) => {
        setLoading()
        setTimeout(() => {
            Axios.get(`https://api.github.com/users/${username}`).then(res => {
                dispatch({
                    type: 'SET_USER',
                    payload: res.data
                })
            });
        }, 1000);
    }

    const getUserRepos = (username) => {
        setLoading()
        setTimeout(() => {
            Axios.get(`https://api.github.com/users/${username}/repos`).then(res => {
                dispatch({
                    type: 'GET_REPOS',
                    payload: res.data
                })
            });
        }, 1000);
    }

    const searchUsers = (keyword) => {
        setLoading()
        setTimeout(() => {
            Axios.get(`https://api.github.com/search/users?q=${keyword}`).then(res => {
            dispatch({
                type: 'SEARCH_USERS',
                payload: res.data.items
            })
        })
        }, 1000);
    }

    const clearResults = () => {
        dispatch({
            type: 'CLEAR_USERS'
        })
    }

    const setLoading = () => {
        dispatch({type: 'SET_LOADING'})
    }

    return <GithubContext.Provider 
            value={{
                users: state.users,
                user: state.user,
                repos: state.repos,
                loading: state.loading,
                alert: state.alert,
                searchUsers,
                clearResults,
                getUser,
                getUserRepos
            }}>
        {props.children}
    </GithubContext.Provider>   
}

export default GithubState