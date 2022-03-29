import moment from 'moment';
import { useEffect, useState } from 'react';
import '../calendar/css/style.css'
function Calendar({StartDay,totalDays,events}){

    const day=StartDay.clone().subtract(1, 'day');
    const daysArray=[...Array(totalDays)].map(() => day.add(1, 'day').clone())
    const[form,setForm]=useState(false)
    const [title,setTitle]=useState('')
    const [description,setDescription]=useState('')
    const [oldTitle,SetOldtitle]=useState('')
    const [id,setId]=useState('')
    const [data,setData]=useState('')
    const iscurrentDay=(day)=>moment().isSame(day,'day')
  
    const ChengeEvent=(e)=>{
    SetOldtitle(e.id)
     setForm(true)
     setId(e.id)
     setData(e.date)
     console.log(e)
    }

    useEffect(()=>{
        fetch(`http://localhost:3001/events/${id}`,{
            method: 'PUT',
            headers:{
            'Content-Type':'application/json'
            },
            body: JSON.stringify({
                "id": id,
                "title": title,
                "description": description,
                "date": data
              })
        }).then(res=>console.log(res))
    },[title,description])
    
    const SaveEvent=()=>{
        setForm(false)
    }
    const Cancel=(event)=>{
        event.stopPropagation();
        setForm(false)
    }

return(
    <div className='calendar'>
        {daysArray.map((dayItem)=>(
         <div key={dayItem.unix()}  >  
            <div  key={dayItem.unix()} className='cell'>

               {!iscurrentDay(dayItem)? (dayItem.format('D')):(<div className='red'>{dayItem.format('D')}</div>)}

               {events.filter(event=>event.date>=dayItem.format('X')&& event.date<=dayItem.clone().endOf('day').format('X'))
                .map(event=>(
                <div   onClick={(e)=>ChengeEvent(event)} className='blue-i'>
                  <div className="li-title">{event.title}</div>
                  <div className='li-description'>{event.description}</div>
                 {form?
                 
                <form>
                     <input value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder='введите измененное title'></input>
                     <input value={description} onChange={(e)=>{setDescription(e.target.value)}}   placeholder='введите измененное название'></input>
                     <button onClick={()=>SaveEvent}>Cохранить</button>
                     <div><button  onClick={(e)=>Cancel(e)}>закрыть</button></div>
                     <div>
                     </div>
                </form>
                :
                  null
                  }
                </div>
            ))}
        </div>
        </div>
    ))}</div>
)
}
export default Calendar;