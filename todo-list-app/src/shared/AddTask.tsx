import React,{ useContext } from "react";
import { AddContext } from "../contexts/addContext"
import { AddType } from "../types/addType";
import * as S from './AddTaskStyles';
import Add from '../Img/add.svg';


const AddTask:React.FC = () => {
    const {setShowAdd} = useContext(AddContext) as AddType;

    const handleClick = () => {
        setShowAdd(true);
    }
    return (
      <S.Container onClick={handleClick}>
        <S.Icon src={Add}></S.Icon>
        <S.Text>Add a Task</S.Text>
      </S.Container>
    );
}

export default AddTask;