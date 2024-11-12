import React,{ useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext";
import { AuthType } from "../types/authType";
import * as S from './loginStyles';
import { Link } from "react-router-dom";
import Logo from '../Img/Logo.png';




const Login:React.FC = () => {
   const {setUserData} = useContext(AuthContext) as AuthType;
   const [email,setEmail] = useState("");

   const handleLogin = () => {
     localStorage.setItem('@Project:email',email);
     setUserData({'email':email});
   }

   const handleEmail = (evt:React.ChangeEvent<HTMLInputElement>) => {
     setEmail(evt.target.value);
   }

   return (
     <S.Page>
        <S.LeftSide>
            <S.Img src={Logo}></S.Img>
        </S.LeftSide>
        <S.RightSide>
            <S.Title>Welcome to Task ToDo List App</S.Title>
            <S.Subtitle>Please insert your information to access your tasks</S.Subtitle>
            <S.FieldName>Email</S.FieldName>
            <S.InputField value={email} id="email" onChange={handleEmail} placeholder="Insert your email"></S.InputField>
            <S.FieldName>Password</S.FieldName>
            <S.InputField placeholder="Insert your password" type="password"></S.InputField>
            <S.KeepSigned><S.Checkbox/><S.Subtitle>Remember Me</S.Subtitle></S.KeepSigned>
            <Link to="/"><S.SignIn onClick={handleLogin}>Sign In</S.SignIn></Link>
        </S.RightSide>
     </S.Page>
   );
}

export default Login;