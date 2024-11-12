export interface TaskProps {
    id: number;
    title: string;
    done: boolean;
    category: string;
    color: string;
}

export type TaskListType = {
    taskList:TaskProps[],
    doneTasks:TaskProps[],
    inProgressTasks:TaskProps[],
    addTask:(task:TaskProps) => void;
    checkTask:(id:number) => void;
    deleteTask:(id:number) => void;
}
