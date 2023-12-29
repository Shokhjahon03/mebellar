
import {  useState } from 'react'
import 'react-router-dom'
import './App.css'
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom'
import logo from './assets/logo.png'
import Aboute from './components/pages/Aboute'
import Home from './components/pages/Home'
function App() {

let [x,setX]=useState(true)
  let y=()=>{
    if(x!==true){
      setX(true)
      // console.log('salom');test uchun
    }
    if(x!==false){
      setX(false)
      // console.log('xayr');test uchun
    }
}

  return (
    <BrowserRouter>
      <nav className="w-full h-[80px]  flex items-center justify-between  bg-black fixed top-0 left-0">
         <div className="container">
           <div className="navbar w-full flex justify-around flex-wrap relative md:justify-between">
              <Link to='/'><img className=' cursor-pointer w-[50px]  rounded-xl md:w-[50px] sm:w-[60px]' src={logo} alt="img" /></Link>
              <ul className={`navigat   ${x ? 'hidden':'absolute top-[80px] bg-[#8DDCA4] rounded-xl pt-[20px] pb-[20px] gap-[20px] left-0 w-[150px] flex flex-col items-center justify-around md:hidden'}`}>
                <Link onClick={y} to="/">Home <i className='bx bxs-home' ></i></Link>
                <Link onClick={y} to='/abut' >About <i className='bx bx-hard-hat' ></i></Link>
                <Link>Add product <i className='bx bx-cart-add' ></i></Link>
                <Link>Contact <i className='bx bxs-contact' ></i></Link>
                <Link>Creative <i className='bx bxl-creative-commons' ></i></Link>
              </ul>
              <ul className=' hidden navbar md:block'>
              <Link onClick={y} to="/">Home <i className='bx bxs-home' ></i></Link>
                <Link onClick={y} to='/abut' >About <i className='bx bx-hard-hat' ></i></Link>
                <Link>Add product <i className='bx bx-cart-add' ></i></Link>
                <Link>Contact <i className='bx bxs-contact' ></i></Link>
                <Link>Creative <i className='bx bxl-creative-commons' ></i></Link>
              </ul>
              <button onClick={y}  className='menu_btn md:hidden'><i className='bx bx-menu text-[#21976A] text-[40px]'></i></button>
           </div>
         </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/abut' element={<Aboute/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
