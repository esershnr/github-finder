import React, { useState, useContext } from 'react'
import GithubContext from '../context/githubContext'
import AlertContext from '../context/alertContext'
import SearchIcon from '@material-ui/icons/Search';
import 'aos/src/sass/aos.scss'


const Search = () => {

    const {setAlert} = useContext(AlertContext)

    const {searchUsers, users, clearResults} = useContext(GithubContext)
    
    const [keyword, setKeyword] = useState('')

    const onChange = (e) => {
        var key = e.target.value;
        setKeyword(key);
    }
    const onSubmit = (e) => {0
        e.preventDefault();
        if(keyword === ''){
            setAlert('Arama yapmak için bir kelime giriniz!', 'info');
        } else {
            searchUsers(keyword);
            setKeyword('');
        }
    } 
    return (
        
        <div data-aos='flip-up' className='container my-2'>
            <form onSubmit={onSubmit}>
                <label className="form-label text-white"><h1>Search People</h1></label>
                    <div className="input-group">
                        <input type="text" value={keyword} onChange={onChange} className='form-control' placeholder='Type to search...'/>
                        <div className="input-group-append">
                            <button type='submit' className='btn btn-secondary ms-2'><SearchIcon /></button>
                        </div>
                    </div>
            </form>
            {
            users.length > 0 &&
                <div className="d-grid gap-2 mt-4">
                    <button data-aos='zoom-in' onClick={clearResults} className="btn btn-danger btn-sm" type="button">Clear</button>
                </div>
            }
        </div>
    )
    
}

export default Search
