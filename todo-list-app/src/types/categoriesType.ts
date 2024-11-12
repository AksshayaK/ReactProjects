

export interface CategoryProps {
    id:number;
    name:string;
    color:string;
}

export type CategoryContextType = {
    categList:CategoryProps[];
    setCategList:(categories:CategoryProps[]) => void;
}