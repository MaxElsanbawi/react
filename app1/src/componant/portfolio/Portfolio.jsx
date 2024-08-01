import "./Portfolio.css"
import {useEffect} from "react"
import Img1 from '../../assets/photo/poert1.png'
import Img2 from '../../assets/photo/port2.png'
import Img3 from '../../assets/photo/port3.png'
import { useState } from 'react'
function Portfolio(){
  useEffect(() =>{
    document.title="Portfolio"
    },[]);

let [imgOne,setImgOne] = useState(false)
let [imgThree,setImgThree] = useState(false)
let [imgTwo,setImgTwo] = useState(false)
    return(
        <section className="textc">
        <div>
          <h1 className=' flex flex-wrap justify-center font-bold text-5xl e pt-5'>
          portfolio component
          </h1>
        </div>
        <div className=' flex flex-wrap justify-center p-5 '><div className="b-r1 m-3"></div>
          <div>
            <i className="fa-solid fa-star "></i>
          </div><div className="b-r1 m-3"></div>
        </div>
        
        <div className="container1">
            <div className="row1">
              <div className="md:w-1/3 p-5 port " onClick={()=>
                setImgOne(true)
              }> 
                <div className="  relative truncate" >
                  <div className="lear "> <i className="fa-solid fa-plus text-8xl"></i> </div>
                <img src={Img1} className=' rounded  w-100 truncate  ' alt="Portfolio1" />
                </div>
                
              </div>
              <div className="md:w-1/3 p-5 port" onClick={()=>
                setImgTwo(true)
              } >
                <div className="  relative truncate" >
                  <div className="lear "> <i className="fa-solid fa-plus text-8xl"></i> </div>
                <img src={Img2} className=' rounded  w-100 truncate  ' alt="Portfolio2" />
                </div>
              </div>
              <div className="md:w-1/3 p-5 port" onClick={()=>
                setImgThree(true)
              } >
                <div className="  relative truncate" >
                  <div className="lear "> <i className="fa-solid fa-plus text-8xl"></i> </div>
                <img src={Img3} className=' rounded  w-100 truncate  ' alt="Portfolio3" />
                </div>
              </div>
              <div className="md:w-1/3 p-5 port" onClick={()=>
                setImgOne(true)
              }>
                <div className="  relative truncate" >
                  <div className="lear "> <i className="fa-solid fa-plus text-8xl"></i> </div>
                <img src={Img1} className=' rounded  w-100 truncate  ' alt="Portfolio1" />
                </div>
              </div>
              <div className="md:w-1/3 p-5 port" onClick={()=>
                setImgTwo(true)
              } >
                <div className="  relative truncate" >
                  <div className="lear "> <i className="fa-solid fa-plus text-8xl"></i> </div>
                <img src={Img2} className=' rounded  w-100 truncate  ' alt="Portfolio2" />
                </div>
              </div>
              <div className="md:w-1/3 p-5 port" onClick={()=>
                setImgThree(true)
              } >
                <div className="  relative truncate" >
                  <div className="lear "> <i className="fa-solid fa-plus text-8xl"></i> </div>
                <img src={Img3} className=' rounded  w-100 truncate  ' alt="Portfolio3" />
                </div>
              </div>
            </div>
        </div>
{/* model */}
        <div className={imgOne ?'fixed inset-0   flex bg-black bg-opacity-25   backdrop-blur-sm justify-center items-center z-50 ':" hidden" } 
        onClick={()=>
          setImgOne(false)
        }>
              <img src={Img1} className="w-40s rounded" alt="" />

              </div>
        <div className={imgTwo ?'fixed inset-0   flex bg-black bg-opacity-25   backdrop-blur-sm justify-center items-center z-50':" hidden" } 
        onClick={()=>
          setImgTwo(false)
        }>
              <img src={Img2}className="w-40s rounded" alt="" />

              </div>
        <div className={imgThree ?'fixed inset-0   flex bg-black bg-opacity-25   backdrop-blur-sm justify-center items-center z-50':" hidden" } 
        onClick={()=>
          setImgThree(false)
        }>
              <img src={Img3}className="w-40s rounded" alt="" />

              </div>
        </section>
    )
}

export default Portfolio;
