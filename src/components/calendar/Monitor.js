import '../calendar/css/style.css'
const Monitor=({today,PrevHandler,TodayHandler,NextHandler})=>{
    return(
        <>
        <div className="flex">
        <div>
            <button onClick={PrevHandler}>&lt;</button>
            <span>{today.format('MMMM')}</span>
            <span>{today.format('Y')}</span>
            <button onClick={NextHandler}>&#62;</button>
        </div>
        <div className='btn-today'><button onClick={TodayHandler}>сегодня</button></div>
        </div>
        <div>
        <span className='days'>Понедельник</span>
        <span className='days'>Вторник</span>
        <span className='days3'>Среда</span>
        <span className='days3'>Четверг</span>
        <span className='days4'>Пятница</span>
        <span className='days4'>Cуббота</span>
        <span className='days5'>Воскресение</span>
          </div>
        </>
    )
}
export default Monitor