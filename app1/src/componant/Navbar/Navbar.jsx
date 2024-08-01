import "./Navbar.css"
import { NavLink, Link } from "react-router-dom";
import { useState } from 'react';
function Navbar() {
let [NavBar , setNavBar] = useState(false);

const changeSize =()=>
{
    if(window.scrollY > 50)
    {
        setNavBar(true)
    }
    else
    {
        setNavBar(false)
    }
 
}

window.addEventListener('scroll',changeSize)


    let [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav  className={NavBar ? 'scrole':"noScrole"}>
            <ul className="">
                <li>
                    <Link className=" text-3xl font-bold ps-2  start-0 inline" to="">StartFramework</Link>
                </li>
            </ul>
            <div className="menu   flex lg:hidden   "
                onClick={() => {
                    setMenuOpen(!menuOpen)
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "hidden lg:flex " : " "}>

                <li>
                    <NavLink className="p-2 rounded text-lg ms-1 flex-col lg:ms-0  w-auto mb-1 lg:flex  lg:mb-0 font-bold " to="about">about</NavLink>
                </li>
                <li>
                    <NavLink className="p-2 rounded text-lg ms-1 flex-col lg:ms-0 w-auto mb-1 lg:flex l lg:mb-0 font-bold " to="portfolio">portfolio</NavLink>
                </li>
                <li>
                    <NavLink className="p-2 rounded text-lgl ms-1 lg:ms-0 flex-col w-auto mb-1 lg:flex  lg:mb-0 font-bold " to="contact">contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar; 
