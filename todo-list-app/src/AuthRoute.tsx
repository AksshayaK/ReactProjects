import React,{ ReactNode, useContext } from "react";
import { AuthType } from "./types/authType";
import { AuthContext } from "./contexts/authContext";
import { Navigate } from "react-router-dom";



interface ProtectedRouteProps {
    children:ReactNode,
    allow:boolean
}

const AuthRoute:React.FC<ProtectedRouteProps> = ({children,allow}) => {
    const {userData} = useContext(AuthContext) as AuthType;

    if(!!userData?.email === allow)
    {
        return <>{children}</>
    }
    else {
        return <Navigate to="/login" />
    }
}

export default AuthRoute;