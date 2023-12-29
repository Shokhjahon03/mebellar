import { Fragment } from 'react'
import './home.css'
import divan from '../../assets/divan.jpg'
const Home = () => {
  return (
    <Fragment >
     <div className="container">
      <div className="hero w-full flex items-center mt-[100px] flex-wrap justify-between">
        <div className="hero_text w-[400px]">
          <h1 className='text-[60px]'>MEBLLAR DO'KONI</h1>
          <h2>Sizning honadoningiz uchun kerakli mebellar haqida  bizning saytimda tanishing</h2>
        </div>
        <img className=' w-[700px] rounded-3xl' src={divan} alt="" />
      </div>
     </div>
    </Fragment>
  )
}

export default Home
