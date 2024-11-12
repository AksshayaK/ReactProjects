import React from "react";
import * as S from './CategoryStyle';
import {Link} from "react-router-dom";


interface CategoryItemProps {
    name:string;
    color:string;
}

const CategoryItem:React.FC<CategoryItemProps> = ({name,color}) => {
    return (<Link to={"/category/"+name} style={{textDecoration:'none'}}>
        <S.Category>
            <S.ColorTag color={color}></S.ColorTag>
            <S.ListName>{name}</S.ListName>
        </S.Category>
    </Link>);
}

export default CategoryItem;
