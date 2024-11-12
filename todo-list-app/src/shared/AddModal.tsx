import React, { useContext, useState } from "react";
import * as S from './AddModalStyles';
import { TaskListContext } from "../contexts/taskContext";
import { TaskListType, TaskProps } from "../types/taskType";
import { CategoryContext } from "../contexts/categoryContext";
import { CategoryContextType } from "../types/categoriesType";
import { AddContext } from "../contexts/addContext";
import { AddType } from "../types/addType";


const AddModal: React.FC = () => {
    const { addTask } = useContext(TaskListContext) as TaskListType;
    const { categList } = useContext(CategoryContext) as CategoryContextType;
    const { setShowAdd } = useContext(AddContext) as AddType;

    const [taskName, setTaskName] = useState("");
    const [taskCatgry, setTaskCatgry] = useState(categList.findIndex((cat) => cat.name == 'None'));

    const handleTyping = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setTaskName(evt.target.value);
    }

    const handleCancel = () => {
        setShowAdd(false);
    }

    const handleAdd = () => {
        const newTask: TaskProps = {
            id: Math.random(),
            title: taskName,
            category: categList[taskCatgry].name,
            done: false,
            color: categList[taskCatgry].color
        }

        setShowAdd(false);
        addTask(newTask);
    }

    
    const handleChange = () => {
        var e = document.getElementById("select") as HTMLSelectElement;
        setTaskCatgry(Number(e.options[e.selectedIndex].value));
    }
    return (
        <S.Background>
            <S.Container>
                <S.Text>Insert Name</S.Text>
                <S.TitleInput placeholder="Task Name" onChange={handleTyping} value={taskName} />
                <S.Text>Select a category</S.Text>
                <S.Select id="select" onChange={handleChange}>
                  {categList.map((cat) =><option value={cat.id}>{cat.name}</option>)}
                </S.Select>
                <S.Buttons>
                    <S.CancelBtn onClick={handleCancel}>Cancel</S.CancelBtn>
                    <S.DeleteBtn onClick={handleAdd}>Add</S.DeleteBtn>
                </S.Buttons>
            </S.Container>
        </S.Background>
    );
}

export default AddModal;