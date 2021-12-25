import React, {useContext} from 'react'
import alert from '../../node_modules/bootstrap/js/src/alert'
import AlertContext from '../context/alertContext'

const Alert = () => {
    const {alert} = useContext(AlertContext)
    return (
        alert !== null && (
        <div className="container my-2">
            <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
                {alert.msg}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        </div>
        )
    )
}

export default Alert
