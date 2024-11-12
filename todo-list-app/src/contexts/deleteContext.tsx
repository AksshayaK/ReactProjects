import React,{ ReactNode, createContext, useState } from "react";
import { DeleteType } from "../types/deleteType";



export interface ChildrenProps {
    children:ReactNode;
}

export const DeleteContext = createContext<DeleteType|null>(null);

export const DeleteContextProvider:React.FC<ChildrenProps> = ({children}) => {
    const [showDelete,setShowDelete] = useState(false);
    const [id,setId] = useState(0);
    const contextProps:DeleteType = {showDelete,setShowDelete,id,setId};
    return (<DeleteContext.Provider value={contextProps}>{children}</DeleteContext.Provider>);

}