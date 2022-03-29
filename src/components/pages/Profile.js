import {Context} from '../../index';
import { observer } from "mobx-react-lite";
import {useContext, useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { Navigate } from "react-router-dom";
import {useState} from 'react';
import moment from "moment";
import '../pages/css/Auth.css'
function Profile(){
    const {user}=useContext(Context)
    const [today,setToday]=useState(moment())
    const url='http://localhost:3001';
    const [events,setEvents]=useState([])
    const StartDay=today.clone().startOf('month').startOf('week');
        
    const startDayQuery=StartDay.clone().format('X')
    const endDayQuery=StartDay.clone().add(42,'days').format('X');
   
    useEffect(()=>{
        fetch(`${url}/events?date_gte=${startDayQuery}&date_lte=${endDayQuery}`)
        .then(res=>res.json())
        .then(res=>{setEvents(res); console.log('prishlo',res)})
    },[today])
    return(
        <>
     {
        user.isAuth?
        <div>Имя пользователя:  {localStorage.getItem('name')}<h2> Пароль  :{localStorage.getItem('password')
     }</h2>
     <div className='span-flex'>
          <h1>название событий</h1>  <h1>Учасники</h1>
     </div>
      
     <div className='profile_map'>
         
        <div>{events.map((i)=>(<li>{i.title}</li>))}</div>
        <div>{events.map((i)=>(<li>{i.description}</li>))}</div>
     </div>
      </div>

    :<Navigate to="/login" />}
        </>
    )
}
export default Profile;