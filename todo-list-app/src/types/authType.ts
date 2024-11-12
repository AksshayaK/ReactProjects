import { ReactNode } from "react";


export interface UserDataProps {
    email:string;
}

export interface ChildrenProps {
   children:ReactNode;
}

export type AuthType = {
    userData:UserDataProps;
    setUserData:(userData:UserDataProps) => void;
}