import {Context} from '../../index';
import { observer } from "mobx-react-lite";
import {useContext} from 'react';
import '../pages/css/Auth.css';
import '../pages/css/info.css';
import gor1 from'../img/горы.jpeg';

const Info=observer(()=>{
   
    return(
        <>
         <div className="container">
        <div className="a_1">
            <div>
                <div className="b">Горная природа<br/>На Западе </div>
                <div className="b_2">Горы занимают почти четвертую часть от всей поверхности Земли. Это удивительные объекты природы 
                    
                    
                    
                </div>
                <div className="b_3">Узнать больше</div>
                <div className="b_4"></div>
            </div>
            <div className="bl_2">
                <img className="img" src={gor1}/>
            </div>
        </div>
     
      <div className="con">
      <div className="ic">
        <div className="circle">
            
        </div>
        <div className="pr">Ландшафт</div>
        <div className="pr_2">Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod incididunt up</div>
       
      </div>
      <div className="ic">
        <div className="circle circle2">
           
        </div>
        <div className="pr pr2">Ландшафт </div>
        <div className="pr_2 pr_22">Lorem, ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod incididunt up</div>
       
      </div>
     
    </div>
    </div>
        </>
    )
})
export default Info;