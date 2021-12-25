import React, {useState, useEffect, useReducer} from 'react'
import ReactDOM from 'react-dom'
import '../styles/main.scss'
import CloseIcon from '@material-ui/icons/Close';


const notesReducer = (state, action) => {
    switch(action.type){
        case 'POPULATE_NOTES':
            return action.notes
        case 'ADD_NOTES':
            return [
                ...state,
                {title:action.title, body:action.body}
            ]
        case 'REMOVE_NOTES':
            return state.filter((note) => note.title !== action.title )
        default:
            return state
    }
}

const NoteApp = () => {

    // const [notes, setNotes] = useState([]);
    const [notes, dispatch] = useReducer(notesReducer, []);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    useEffect(() => {
        const notesData = JSON.parse(localStorage.getItem('notes'))
        if(notesData){
            // setNotes(notesData);
            dispatch({type: 'POPULATE_NOTES', notes: notesData})
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes])

    function addNote(e){
        e.preventDefault();
        if(title){
            // setNotes(
            //     [
            //         ...notes,
            //         {title, body}
            //     ]
            // )
            dispatch({
                type: 'ADD_NOTES', 
                title,
                body
            })
            setTitle('')
            setBody('')
        }
    }

    const removeNote = (title) => {
        // setNotes(notes.filter((note) => note.title !== title ))
        dispatch({
            type: 'REMOVE_NOTES',
            title
        });
    }

    return (
        <div className='container p-5'>
            <div className="card mb-3">
                <div className="card-header">Notes</div>
                {
                    notes && (
                        <table className="table table-sm table-striped mb-0">
                            <tbody>
                                {
                                    notes.map((note, index) => (
                                        <tr key={index}>
                                            <td style={{width:'47%'}}>{note.title}</td>
                                            <td style={{width:'50%'}}>{note.body}</td>
                                            <td style={{width:'3%'}}>
                                                <button onClick={() => removeNote(note.title)} className="btn btn-sm btn-danger"><CloseIcon/></button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
                }
            </div>
            <div className="card mb-3">
                <div className="card-header">Add a new note</div>
                <div className="card-body">
                    <form onSubmit={addNote}>
                        <div className="form-group mb-2">
                            <input onChange={(e) => setTitle(e.target.value)} value={title} className='form-control' />
                        </div>
                        <div className="form-group mb-2">
                            <textarea className='form-control' value={body} onChange={(e) => setBody(e.target.value)} cols="30" rows="10"></textarea>
                        </div>
                        <div className="d-grid gap-2 my-2">
                            <button className="btn btn-primary">Add Note</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(<NoteApp/>, document.getElementById('root'));