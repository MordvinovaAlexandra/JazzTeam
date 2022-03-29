import Header from "./Header";
import Monitor from "./Monitor";
import Calendar from "./Calindar";
import {useState} from 'react'
import moment from "moment";
import { useEffect } from "react";


const totalDays = 42;
const url='http://localhost:3001';

function AppCalendar(){
    moment.updateLocale('en', {week: {dow: 1}});  
    const [today,setToday]=useState(moment())
    const [events,setEvents]=useState([])
    const StartDay=today.clone().startOf('month').startOf('week');
    const startDayQuery=StartDay.clone().format('X')
    const endDayQuery=StartDay.clone().add(42,'days').format('X');
    
useEffect(()=>{
    fetch(`${url}/events?date_gte=${startDayQuery}&date_lte=${endDayQuery}`)
    .then(res=>res.json())
    .then(res=>{setEvents(res); console.log('prishlo',res)})
},[today])

const PrevHandler=()=>setToday(prev=>prev.clone().subtract(1,'month')) 
const TodayHandler=()=>setToday(moment())
const NextHandler=()=>setToday(prev=>prev.clone().add(1,'month'))
return(
<>
        <Header url={url}/>
        <div className="cl">
        <Monitor 
            PrevHandler={PrevHandler}
            TodayHandler={TodayHandler}
            NextHandler={NextHandler}
            today={today} />
        <Calendar
            url={url}
            StartDay={StartDay} 
            today={today}
            totalDays={totalDays}
            events={events}
        />
</div>
        </>
       
    )
}
export default AppCalendar;