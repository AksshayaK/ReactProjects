import React,{ ReactNode, createContext, useState } from "react";
import { TaskListType, TaskProps } from "../types/taskType";

interface ChildrenProps {
    children:ReactNode;
}

export const TaskListContext = createContext<TaskListType|null>(null);

export const TaskListContextProvider:React.FC<ChildrenProps> = ({children}) => {
    const [taskList,setTaskList] = useState<TaskProps[]>([
        {
            id:1,
            title:'Example Task1',
            done:true,
            category:"Home",
            color:"#FF9C9C"
        },
        {
            id:2,
            title:'Example Task2',
            done:false,
            category:"Home",
            color:"#FF9C9C"
        },
        {
            id:3,
            title:'Example Task3',
            done:false,
            category:"Home",
            color:"#FF9C9C"
        }
    ]);

    const [doneTasks,setDoneTasks] = useState<TaskProps[]>(taskList.filter((task:TaskProps) => task.done === true));
    const [inProgressTasks,setInProgressTasks] = useState<TaskProps[]>(taskList.filter((task:TaskProps) => task.done === false));
    
    const addTask = (task:TaskProps) => {
        const newTaskList = [...taskList,task];        
        setTaskList(newTaskList);
        setInProgressTasks(newTaskList.filter((task:TaskProps) => !task.done));
    }

    const checkTask = (id:number) => {
        const updatedTaskList = taskList.map((task) => task.id === id ? { ...task, done: !task.done } : task);
        setTaskList(updatedTaskList);
        setDoneTasks(updatedTaskList.filter((task) => !!task.done));
        setInProgressTasks(updatedTaskList.filter((task) => !task.done));
    }

    const deleteTask = (id: number) => {
        const updatedTaskList = taskList.filter((task) => task.id !== id);
        setTaskList(updatedTaskList);
        setDoneTasks(updatedTaskList.filter((task) => !!task.done));
        setInProgressTasks(updatedTaskList.filter((task) => !task.done));
    }
    const contextProps:TaskListType ={taskList,doneTasks,inProgressTasks,addTask,checkTask,deleteTask};

    return (<TaskListContext.Provider value={contextProps}>{children}</TaskListContext.Provider>);
}