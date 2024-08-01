function Footer(){
    return(
        <section className="">
            {/* main footet */}
            <main className="  bg-slate-700  pt-20 pb-32  row1 ">
            <div className="sm:w-1/3  px-28 py-8 sm:p-0">
            <div className=" container1 card1 row1 flex-col items-center">
                <h3 className="text-2xl  font-bold pb-2">
                LOCATION
                </h3>
                <span  className=" text-xl pb-2 text-center">
                2215 John Daniel Drive
                </span>
                <span className="text-xl ">
                Clark, MO 65243
                </span>
            </div>
            </div>
            <div className="sm:w-1/3  px-28 py-8 sm:p-0">
            <div className=" container1 card1 row1 flex-col items-center">
                <h3 className="text-3xl  font-bold pb-2 text-center">
                AROUND THE WEB
                </h3>
                <div className="row1">
                    <span className="  br  m-1 "> <i className="fa-brands fa-facebook" ></i> </span>
                    <span className="  br  m-1 "> <i className="fa-brands fa-twitter" ></i> </span>
                    <span className="  br m-1 "> <i className="fa-brands fa-linkedin" ></i> </span>
                    <span className="  br m-1 "> <i className="fa-solid fa-globe"></i> </span>
                </div>
                </div>
            </div>
            <div className="sm:w-1/3  px-28 py-8 sm:p-0">
            <div className=" container1 card1 row1 flex-col items-center text-center">
                <h3 className="text-2xl  font-bold pb-3">
                ABOUT FREELANCER
                </h3>
                <span  className=" text-lg">
                Freelance is a free to use, licensed Bootstrap theme created by Route
                </span>
                
            </div>
            </div>
            </main>
            {/* footer footer */}
            <footer>
            <div className="bg-footer text-center py-8">
                <p >
                Copyright © Your Website 2021
                </p>
            </div>
            </footer>
        </section>
    )
}

export default Footer;