import { useEffect, useState } from "react";

const Header=({url})=>{

const [val,setVal]=useState('');
const [but,setBut]=useState('')
const [dat,setDate]=useState(null);
const [filterevent,Setfilterevent]=useState([])
const [cobitie,setSobitie]=useState(null)
const[ychasnic,setYchasnic]=useState(null);
const [openForm,setOpenForm]=useState(false)
const [openevent,setOpenEvent]=useState(false)

const Butt=({url})=>{
  
    fetch('http://localhost:3001/events')
    .then(res=>res.json())
    .then(res=>res.filter(i=>i.title))
    .then(res=>res.filter(i=>i.title.includes(val)))
    .then(res=>Setfilterevent(res))
    setOpenEvent(true)

}
const findData=async()=>{
setDate(Date.parse(dat)/1000)
const y=JSON.parse(JSON.stringify(Date.parse(dat)/1000))
await fetch(`${url}/events`, {
  method: "post",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  
  body: JSON.stringify({
    date: y,
    title: cobitie,
    description:ychasnic
  })
})

}
    return(
    <>
      <div className="header-calenda">
      {but}
        <div>
            <button onClick={()=>setOpenForm(true)} className="btn-header" >Добавить</button>
            <button className="btn-header">Обновить</button>
        </div>
        <div>
        <span class="lupa">&#128269;</span>
            <input value={val} onChange={e => setVal(e.target.value)} className="btn-input" placeholder="События"></input>
            <button  
            style={{color:'black'},
            {border:'1px solid black'}
          }
            onClick={Butt}>искать</button>
        {filterevent.some(i=>i.title.includes(val))?filterevent.map(i=>
         <form>
             <div>{i.title}</div>
             <div>{i.description}</div>
             <div>{i.date}</div>
             <button onClick={()=>setOpenEvent(false)}>Закрыть</button> 
         </form>
        ):
        filterevent.map(i=>
            <form>
              <h1>ничего не найдено</h1>
                <button >Закрыть</button> 
            </form>)}
        </div>
       <div>
           {openForm?<form>
            <input value={dat} onChange={(e)=>setDate(e.target.value)} type="date"></input>
            <input value={cobitie} onChange={e=>setSobitie(e.target.value)} placeholder="введите событие"></input>
            <input value={ychasnic} onChange={e=>setYchasnic(e.target.value)} placeholder="введите учасника"></input>
            <button onClick={findData}>добавить</button>
            <button onClick={()=>setOpenForm(false)}>закрыть</button>
        </form>:null}
       </div>
       </div>
        </>
        
    )
}
export default Header;