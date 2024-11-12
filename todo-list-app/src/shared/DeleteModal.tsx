import React,{ useContext } from "react"
import { DeleteContext } from "../contexts/deleteContext"
import { DeleteType } from "../types/deleteType"
import { TaskListContext } from "../contexts/taskContext";
import { TaskListType } from "../types/taskType";
import * as S from './DeleteModalStyle';



const DeleteModal:React.FC = () => {

    const {setShowDelete,id,setId} = useContext(DeleteContext) as DeleteType;
    const {deleteTask} = useContext(TaskListContext) as TaskListType;

    const handleCancel = () => {
        setShowDelete(false);
    }

    const handleConfirm = () => {
        deleteTask(id);
        setId(0);
        setShowDelete(false);
    }

    return (<S.Background>
        <S.Container>
            <S.Text>Are you want to delete this task?</S.Text>
            <S.Buttons>
                <S.CancelButton onClick={handleCancel}>Cancel</S.CancelButton>
                <S.DeletButton onClick={handleConfirm}>Delete</S.DeletButton>
            </S.Buttons>
        </S.Container>
    </S.Background>);
}

export default DeleteModal;