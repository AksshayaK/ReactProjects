import { ReactNode, createContext, useState } from "react";
import { AddType } from "../types/addType";
import React from "react";


interface ChildrenProps {
    children:ReactNode;
}

export const AddContext = createContext<AddType|null>(null);

export const AddContextProvider: React.FC<ChildrenProps> = ({ children }) => {
    const [showAdd, setShowAdd] = useState<boolean>(false);
    const [id, setId] = useState<number>(0);
  
    // The value provided to the context
    const value: AddType = { showAdd, setShowAdd, id, setId };
  
    // Wrap the children in the AddContext.Provider and pass the value
    return <AddContext.Provider value={value}>{children}</AddContext.Provider>;
  };