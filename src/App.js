
import './App.css';
import Auth from '../src/components/Auth'
import Nav from '../src/components/Nav';
import Home from '../src/components/pages/Home';
import Info from '../src/components/pages/Info';
import Profile from './components/pages/Profile';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import moment from 'moment';
import Calendar from '../src/components/pages/Calendar'
import React from "react";

const App=observer(()=>{
  moment.updateLocale('en', {week: {dow: 1}});  
  return (
    <>
    <BrowserRouter>
      <Nav/>
      <Routes>
          <Route exact path="/info" element={<Info/>}/>
          <Route  path="/login" element={<Auth/>}/>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path='/calendar' element={ <Calendar/>}/>
          <Route exact path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
  );
})

export default App;
