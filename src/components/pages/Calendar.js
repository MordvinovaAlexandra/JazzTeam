
import AppCalendar from '../calendar/AppCalendar';
import { observer } from "mobx-react-lite";
const Calendar= observer(()=>{
    return(
        <>
     <AppCalendar/>
        </>
    )
})
export default Calendar;