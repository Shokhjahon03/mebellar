
import {  useState } from 'react'
import 'react-router-dom'
import './App.css'
import { BrowserRouter,Link, Route, Routes } from 'react-router-dom'
// import logo from './assets/lg.jpg'
import Aboute from './components/pages/Aboute'
import Home from './components/pages/Home'
import Notfound from './components/additionPages/notfound'
import Contact from './components/pages/Contact'
import AddProduct from './components/pages/AddProduct'
import Creat from './components/pages/Creat'
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
      <nav className="w-full h-[80px]  flex items-center justify-between bg-[#CED2CF] fixed top-0 left-0">
         <div className="container">
           <div className="navbar w-full flex justify-around flex-wrap relative md:justify-between">
              <Link to='/'>
                <i className=' font-black text-[40px] bx bxl-xing'></i>
                <p className='font-black'>MEBEL</p>
              </Link>
              <ul className={`navigat   ${x ? 'hidden':'absolute top-[80px] bg-[#8DDCA4] rounded-xl pt-[20px] pb-[20px] gap-[20px] left-[-15px] w-[150px] flex flex-col items-center justify-around md:hidden'}`}>
                <Link onClick={y} to="/">Home <i className='bx bxs-home' ></i></Link>
                <Link onClick={y} to='/abut' >About <i className='bx bx-hard-hat' ></i></Link>
                <Link onClick={y}>Add product <i className='bx bx-cart-add' ></i></Link>
                <Link onClick={y} to='/contact'>Contact <i className='bx bxs-contact' ></i></Link>
                <Link onClick={y}>Creative <i className='bx bxl-creative-commons' ></i></Link>
              </ul>
              <ul className=' hidden navbar md:flex md:w-[1000px] items-center justify-between'>
              <Link to="/" className=' flex items-center  justify-between w-[100px] font-black hover:underline hover:decoration-4'>Home <i className=' text-[30px] bx bxs-home' ></i></Link>
                <Link  to='/abut' className=' flex items-center  justify-between w-[100px] font-black hover:underline hover:decoration-4'>About <i className=' text-[30px] bx bx-hard-hat' ></i></Link>
                <Link to='/add'  className=' flex items-center  justify-between w-[150px] font-black  hover:underline hover:decoration-4'>Add product <i className=' text-[30px] bx bx-cart-add' ></i></Link>
                <Link to='/contact' className=' flex items-center  justify-between w-[110px] font-black hover:underline hover:decoration-4'>Contact <i className=' text-[30px] bx bxs-contact' ></i></Link>
                <Link to='/creat' className=' flex items-center  justify-between w-[120px] font-black hover:underline hover:decoration-4'>Creative <i className=' text-[30px] bx bxl-creative-commons' ></i></Link>
              </ul>
              <button onClick={y}  className='menu_btn md:hidden'><i className='bx bx-menu text-[#21976A] text-[35px]'></i></button>
           </div>
         </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/abut' element={<Aboute/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/add' element={<AddProduct/>}/>
        <Route path='/creat' element={<Creat/>}/>
        <Route path='/*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
