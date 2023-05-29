import React, { useReducer } from "react";
import reducer from './reducer';

const AppContext = React.createContext();

const initialState = {
    currentFile: null,
    files: []
}


const AppContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
    )
}

export default AppContextProvider;