import React,{ useContext, useState } from "react";
import { CategoryContext } from "../contexts/categoryContext";
import { CategoryContextType } from "../types/categoriesType";
import * as S from './ExpandSidebarStyle';
import Arrow from '../Img/arrow.svg';
import CategoryItem from "./Category";
import Add from '../Img/add.svg';



interface SidebarItemProps {
   name:string;
   icon:string;
}


const ExpandSidebarItem:React.FC<SidebarItemProps> = ({name,icon}) => {
    const [active,setActive] = useState(false);
    const {categList} = useContext(CategoryContext) as CategoryContextType;

    const handleActivate = () => {
        setActive(!active);
    }

    return (<S.OuterContainer isActive={active}>
        <S.Container isActive={active} onClick={handleActivate}>
            <S.Icon src={icon} />
            <S.Name>{name}</S.Name>
            <S.Arrow isActive={active} src={Arrow}/>
        </S.Container>
        <S.CatArea isActive={active}>
            {categList.map(cat => <CategoryItem name={cat.name} color={cat.color} />)}
            <S.AddArea>
                <S.AddIcon src={Add} />
                <S.AddText>Add New</S.AddText>
            </S.AddArea>
        </S.CatArea>
    </S.OuterContainer>);

}

export default ExpandSidebarItem;