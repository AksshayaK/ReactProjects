import React,{ ReactNode, createContext, useState } from "react";
import { CategoryContextType, CategoryProps } from "../types/categoriesType";




interface ChildrenProps {
    children:ReactNode;
}

export const CategoryContext = createContext<CategoryContextType|null>(null);

export const CategoryContextProvider:React.FC<ChildrenProps> = ({children}) => {
    const [categList,setCategList]  = useState<CategoryProps[]>([
        {
            id:0,
            name:"None",
            color:"#afafaf"
        },
        { 
            id:1,
            name:"Home",
            color:"#FF9C9C"
        },
        {
            id:2,
            name:"School",
            color:"#FFD79C"
        },
        {
            id:3,
            name:"Shopping List",
            color:"#9CD0FF"
        }
    ]);

    return (<CategoryContext.Provider value={{categList,setCategList}}>{children}</CategoryContext.Provider>);

}