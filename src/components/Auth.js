import { observer } from "mobx-react-lite";
import {useContext, useState} from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {Context} from '../index';
import '../components/pages/css/Auth.css';

const Auth=observer(()=>{
    const navigate = useNavigate();
    const {user}=useContext(Context)
    const [name,setName]=useState('')
    const [password,setpassword]=useState('')
    const onSubmit=()=>{
        if(name=='Admin'&&password=='12345678'){
          user.setIsAuth(true)

          navigate('/profile')

          localStorage.setItem('name', name);
          localStorage.setItem('password',password)
          console.log('прошло успешно')

        }
        else{
            user.setIsAuth(false)
            console.log('fail')
            alert("Имя пользователя или пароль введены неверно")
        }
    }
    return(
       
        <>
        <form>
        <div className="auth_text">Авторизация на сайте</div>
        <input
         placeholder="введите название"
         value={name}
         onChange={(e)=>setName(e.target.value)}
         /> 
        
        <input placeholder="введите пароль"
        value={password}
        type="password"
        onChange={(e)=>setpassword(e.target.value)}
        />
        <button onClick={onSubmit}>отправить</button>
        </form>
        
        </>
    )
})
export default Auth;