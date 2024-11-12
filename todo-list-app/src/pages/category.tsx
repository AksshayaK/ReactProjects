import { Link, useParams } from "react-router-dom"
import { TaskListContext } from "../contexts/taskContext";
import React, { useContext, useState } from "react";
import { TaskListType } from "../types/taskType";
import { DeleteType } from "../types/deleteType";
import { DeleteContext } from "../contexts/deleteContext";
import { AddContext } from "../contexts/addContext";
import { AddType } from "../types/addType";
import { AuthType } from "../types/authType";
import { AuthContext } from "../contexts/authContext";
import * as S from './categoryStyles';
import DeleteModal from "../shared/DeleteModal";
import AddModal from "../shared/AddModal";
import AddTask from "../shared/AddTask";
import Logo from "../Img/Logo.png";
import SidebarItem from "../shared/SidebarItem";
import TaskFill from "../Img/taskFill.png";
import ExpandSidebarItem from "../shared/ExpandSidebarItem";
import Folder from '../Img/folder.svg';
import Settings from '../Img/settings.svg';
import Logout from '../Img/logout.svg';
import FilterTag from "../shared/FilterTag";
import Filter from "../Img/filter.svg";
import TaskCard from "../shared/TaskCard";




const CategoryPage: React.FC = () => {

    const { name } = useParams<string>();
    const { taskList, doneTasks, inProgressTasks } = useContext(TaskListContext) as TaskListType;
    const { showDelete } = useContext(DeleteContext) as DeleteType;
    const { showAdd } = useContext(AddContext) as AddType;
    const [displayList, setDisplayList] = useState(0);
    const masterList = [taskList.filter(task => task.category === name), doneTasks.filter(task => task.category === name), inProgressTasks.filter(task => task.category === name)];
    const [allActive, setAllActive] = useState(true);
    const [doneActive, setDoneActive] = useState(false);
    const [notDoneActive, setNotDoneActive] = useState(false);
    const { setUserData } = useContext(AuthContext) as AuthType;

    const handleAll = () => {
        setDisplayList(0);
        setAllActive(true);
        setDoneActive(false);
        setNotDoneActive(false);
    }

    const handleDone = () => {
        setDisplayList(1);
        setAllActive(false);
        setDoneActive(true);
        setNotDoneActive(false);
    }

    const handleNotDone = () => {
        setDisplayList(2);
        setAllActive(false);
        setDoneActive(false);
        setNotDoneActive(true);
    }

    const handleLogout = () => {
        localStorage.removeItem('@Project:email');
        setUserData({ email: "" });
    }

    return (<S.Page>
        <S.Sidebar>
            <S.Img src={Logo} />
            <S.Tabs>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <SidebarItem icon={TaskFill} name="Tasks" isActive={false}></SidebarItem>
                </Link>
                <ExpandSidebarItem icon={Folder} name="Categories"></ExpandSidebarItem>
                <SidebarItem icon={Settings} name="Settings" isActive={false}></SidebarItem>
            </S.Tabs>
            <Link to="/login" style={{ textDecoration: 'none' }} onClick={handleLogout}>
                <SidebarItem icon={Logout} name="Logout" isActive={false}></SidebarItem>
            </Link>
        </S.Sidebar>
        <S.Main>
            <S.Header>{name}</S.Header>
            <S.TitleAndFilter>
                <S.Title onClick={handleDone}>Tasks</S.Title>
                <S.FilterField>
                    <div onClick={handleAll}><FilterTag name="All" active={allActive} /></div>
                    <div onClick={handleDone}><FilterTag name="Done" active={doneActive} /></div>
                    <div onClick={handleNotDone}><FilterTag name="In Progress" active={notDoneActive} /></div>
                    <S.FilterIcon src={Filter} />
                </S.FilterField>
            </S.TitleAndFilter>
            {masterList[displayList].map(task =><TaskCard id={task.id} name={task.title} list={task.category} color={task.color} done={task.done} />)}
            <AddTask />
        </S.Main>
        {showDelete && <DeleteModal/>}
        {showAdd && <AddModal />}
    </S.Page>);
}

export default CategoryPage;