import React,{ createContext, useState } from "react";
import { AuthType } from "../types/authType";
import { ChildrenProps } from "../types/authType";



export const AuthContext = createContext<AuthType|null>(null);


export const AuthProvider:React.FC<ChildrenProps> = ({children}) => {
    const emailId = localStorage.getItem('@Project:email');
    const userObj = emailId?{email:emailId}:{email:""};

    const [userData,setUserData] = useState(userObj);

    return (<AuthContext.Provider value={{userData,setUserData}}>{children}</AuthContext.Provider>);

}