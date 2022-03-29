import {NavLink} from 'react-router-dom';
import '../components/pages/css/Auth.css';
import {useContext, useEffect} from 'react';
import {Context} from '../index';
import { observer } from 'mobx-react-lite';
const Nav=observer(()=>{
    const {user}=useContext(Context)
    useEffect(()=>{},[user])
    return(
        <nav>
     
     <NavLink className="nav" to="/">Home</NavLink>
     <NavLink className="nav" to="/info">info</NavLink>
     <NavLink  className="nav" to="/profile">profile</NavLink>
     <NavLink  className="nav" to="/calendar">Calendar</NavLink>

     {user.isAuth?<div className='name'>Имя пользователя : {localStorage.getItem('name')} </div>

    :null}
        </nav>
    )
})
export default Nav