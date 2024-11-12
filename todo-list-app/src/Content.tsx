import { useRoutes } from "react-router-dom";
import AppRoutes from "./AppRoutes";



const Content = () => {
    const content = useRoutes(AppRoutes);
    return content;
}

export default Content;