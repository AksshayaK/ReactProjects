import React,{ useContext } from "react";
import { DeleteType } from "../types/deleteType";
import { DeleteContext } from "../contexts/deleteContext";
import { TaskListType } from "../types/taskType";
import { TaskListContext } from "../contexts/taskContext";
import * as S from './TaskCardStyles';
import Edit from '../Img/edit.svg';
import Erase from '../Img/erase.svg';



interface TaskCardProps {
    id:number;
    name:string;
    list:string;
    color:string;
    done:boolean;
}


const TaskCard:React.FC<TaskCardProps> = ({id,name,list,color,done}) => {

    const {setShowDelete,setId} = useContext(DeleteContext) as DeleteType;
    const {checkTask} = useContext(TaskListContext) as TaskListType;

    const handleCheck = () => {
        checkTask(id);
    }

    const handleDelete = () => {
        setShowDelete(true);
        setId(id);
    }

    return (<S.Container>
        <S.CheckField>
            <S.CheckboxRing onClick={handleCheck}><S.CheckFill done={done}/></S.CheckboxRing>
        </S.CheckField>
        <S.Description>
            <S.Name done={done}>{name}</S.Name>
            <S.ListBelong>
                <S.ColorTag color={color}/>
                <S.ListName>{list}</S.ListName>
            </S.ListBelong>
        </S.Description>
        <S.Icon src={Edit}/><S.Icon src={Erase} onClick={handleDelete}/>
    </S.Container>);

}

export default TaskCard;