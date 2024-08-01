

import Homeimg from './assets/photo/home.svg'
import { useEffect } from 'react'
function Home() {
useEffect(() =>{
document.title="Home"
},[]);
  return (
    <>
      <section className=" bg-home  ">
        <div className="pt-32">
        <div className=' flex flex-wrap justify-center '>
          <img src={Homeimg} alt="" className=" w-60" />
        </div>
        <div>
          <h1 className=' flex flex-wrap justify-center font-bold text-5xl text-white pt-5'>
            start Framework
          </h1>
        </div>
        <div className=' flex flex-wrap justify-center p-5 '><div className="b-r m-3"></div>
          <div>
            <i className="fa-solid fa-star text-white"></i>
          </div><div className="b-r m-3"></div>
        </div>
        <div className='flex flex-wrap justify-center'>
          <h2 className="text-white">Graphic Artist - Web Designer - Illustrator</h2>
        </div>
        </div>
      </section>
    </>
  )
}

export default Home
