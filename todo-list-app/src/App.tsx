
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import { AddContextProvider } from './contexts/addContext';
import { AuthProvider } from './contexts/authContext';
import { CategoryContextProvider } from './contexts/categoryContext';
import { DeleteContextProvider } from './contexts/deleteContext';
import { TaskListContextProvider } from './contexts/taskContext';
import React from "react";
import AppRoutes from './AppRoutes';
import Content from './Content';
import Home from './pages/home';
import Login from './pages/login';
import DummyPage from './pages/dummyPage';

function App() {
 
  return (  
    <AddContextProvider>
      <CategoryContextProvider>
        <DeleteContextProvider>
          <TaskListContextProvider>
          <AuthProvider>
            <BrowserRouter>
           <Content/>
          </BrowserRouter>
          </AuthProvider>
          </TaskListContextProvider>
        </DeleteContextProvider>
      </CategoryContextProvider>
    </AddContextProvider>                  
            
  );
}

export default App;
