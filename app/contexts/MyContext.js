'use client'

import { createContext} from "react";
import { useState } from "react";
 export const AllContext = createContext();

 export const ContextProvider = ({children}) =>{
    const [list, setList] = useState("user")
    const [detail, setDetail] = useState(null)
    const [status, setStatus] = useState(null)
    return (
        <AllContext.Provider value={ {list, setList, detail, setDetail, status, setStatus}}>
            {children}
        </AllContext.Provider>
    );
};