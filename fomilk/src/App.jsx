import React, { useState } from 'react'
import DashBoard from './components/DashBoard'
import SideBar from './components/SideBar'
import Class from './components/Class'
import User from './components/User'
import Money from './components/Money'
import {BrowserRouter,Routes, Route, Navigate} from 'react-router-dom'
import AddUser from './components/AddUser'
import EditUser from './components/EditUser'


function App() {
  let [user, setUser]=useState([{
    id:1,
    name:"hilal",
    email:'hilal@gmail.com',
    num:'9278973429',
    batch:'B5'
  },
  {
    id:2,
    name:"yuva",
    email:'yuva@gmail.com',
    num:'9278973429',
    batch:'B5'
  },
  {
    id:3,
    name:"Betty",
    email:'betty@gmail.com',
    num:'9278973429',
    batch:'B5'
  },
  {
    id:4,
    name:"archie",
    email:'archie@gmail.com',
    num:'9278973429',
    batch:'B5'
  }
])
  return <>
  <div id="wrapper">
  <BrowserRouter>
  <SideBar/>
  <Routes>
    <Route path='/dashboard' element={<DashBoard user={user} setUser={setUser} />} />
    <Route path='/add-user' element={<AddUser user={user} setUser={setUser}/>}/>
    <Route path='/edit-user/:id' element={<EditUser user={user} setUser={setUser}/>} />
    <Route path='/user' element={<User/>} />
    <Route path='/class' element={<Class/>} />
    <Route path='/money' element={<Money/>} />
    <Route path='*' element={<Navigate to='/dashboard'/> }/>

  </Routes>
  </BrowserRouter>
  </div>
  </>
}

export default App