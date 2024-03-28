import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Navi from './components/navigation.jsx';
import Bsc from './components/bsc.jsx';
import StudentHome from './components/studenthome.jsx';
import Teach from './components/teacher.jsx';
import TeachLog from './components/teacherlogin.jsx';
import TeacherRegister from './components/teacherregister.jsx';
import Admin from './components/admin.jsx';
import Addnotes from './components/addnotes.jsx';
import Viewnotes from './components/viewnotes.jsx';
import Viewstudents from './components/viewstudents.jsx';
import Viewteacher from './components/viewteacher.jsx';
import Adminlogin from './components/adminlogin.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/bsc" element={<Bsc />} />
    <Route path="/studenthome" element={<StudentHome />} />
    <Route path="/teacher" element={<Teach/>} />
    <Route path="/teacherlogin" element={<TeachLog/>} />
    <Route path="/teacherregister" element={<TeacherRegister/>} />
    <Route path="/admin" element={<Admin/>} />
    <Route path="/addnotes" element={<Addnotes/>}/>
    <Route path="/viewnotes" element={<Viewnotes/>}/>
    <Route path="/viewstudents" element={<Viewstudents/>}/>
    <Route path="/viewteacher" element={<Viewteacher/>}/>
    <Route path="/adminlogin" element={<Adminlogin/>}/>

    


    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
