
import { useEffect } from "react";
function About() {
    useEffect(() =>{
        document.title="About"
        },[]);
    return (
        <>
            <section className="bg-home">
                <div className="pt-32">
                    <h1 className=' flex flex-wrap justify-center font-bold text-5xl text-white pt-5'>
                        about component
                    </h1>
                </div>
                <div className=' flex flex-wrap justify-center p-5 '><div className="b-r m-3"></div>
                    <div>
                        <i className="fa-solid fa-star text-white"></i>
                    </div><div className="b-r m-3"></div>
                </div>
                <div className="container1  flex-row  flex-row">
                    
                    <div className="flex flex-wrap">
                        <div className="sm:w-1/2  w-10/12 py-10 sm:py-0">
                            <p>
                                Freelancer is a free bootstrap theme created by Route. 
                                The download includes the complete source files including 
                                HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                    
                    
                    
                    
                        <div className="sm:w-1/2  w-10/12 py-10 sm:py-0">
                            <p>
                                Freelancer is a free bootstrap theme created by Route. 
                                The download includes the complete source files including 
                                HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default About;