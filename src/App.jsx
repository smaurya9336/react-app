import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './mainapp/Home';
import './App.css';
import About from './mainapp/About';
import Registration from './mainapp/Registration';
import Login from './mainapp/Login';
import Adlogin from './mainapp/Adlogin';
import UserDash from './userApp/UserDash';

function App() {
  return (
    <>
    <div class="container-fluid">
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home /> } />
    <Route path="/about" element={<About /> } />
    <Route path="/registration" element={<Registration />} />
     <Route path='/login' element={<Login />} />
     <Route path='/adlogin' element={<Adlogin/>} />
     <Route path='/userDash' element={<UserDash/>} />
   </Routes>
   </BrowserRouter>
   </div>
  </>
  )
}

export default App
