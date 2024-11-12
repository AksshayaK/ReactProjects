import { RouteObject } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Category from "./pages/category";



const AppRoutes:RouteObject[] = [
    {
        path:"/",
        element: (
            <AuthRoute allow={true}>
                <Home />
            </AuthRoute>
        )
           
    },
    {
        path: "/login",
        element: (
            <AuthRoute allow={false}>
                <Login />
            </AuthRoute>
        )
           
    },
    {
        path: "/category/:name",
        element:(
            <AuthRoute allow={true}>
                <Category />
            </AuthRoute>
        )
           
    }
];

export default AppRoutes;