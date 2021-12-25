import React, {useReducer} from "react";
import AlertContext from "./alertContext";
import alertReducer from "./alertReducer";

const AlertState = (props) => {
    const initialState = null

    const [state, dispatch] = useReducer(alertReducer, initialState)

    const setAlert = (msg, type) => {
        dispatch({
            type: 'SET_ALERT',
            payload: {msg, type}
        })

        setTimeout(() => {
            dispatch({
                type: 'REMOVE_ALERT'
            })
        }, 10000);
    }

    const removeAlert = () => {
        dispatch({
            type: 'REMOVER_ALERT'
        })
    }

    return <AlertContext.Provider value={{
        alert: state,
        setAlert,
        removeAlert
    }}>
        {props.children}
    </AlertContext.Provider>
}

export default AlertState

