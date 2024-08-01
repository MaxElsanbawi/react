import {useFormik} from "formik"
 import { useEffect } from "react";
function Contact() {
    useEffect(() =>{
        document.title="Contact"
        },[]);
    function isSubmet(value){
        console.log("isSubmet" , value)
    }
let formik=  useFormik({
    initialValues:{
        name:'',
        age:'',
        email:'',
        password:''
    },
    onSubmit:isSubmet
})

    return (
        <section className=" textc pb-2">
            <div>
                <h1 className=' flex flex-wrap justify-center font-bold text-5xl pt-5'>
                    conatct section
                </h1>
            </div>
            <div className=' flex flex-wrap justify-center p-5 '><div className="b-r1  m-3"></div>
                <div>
                    <i className="fa-solid fa-star"></i>
                </div><div className="b-r1  m-3"></div>
            </div>

<form  onSubmit={formik.handleSubmit}>
            <div className="container1">
                <div className="row1">
                    

                    <div className=" w-3/4 mx-auto  ">
                        <div className="relative my-4">
                            <input type="text" id="name" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="name" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
                            <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">userName :</label>
                        </div>
                        <div className="relative my-4">
                            <input type="text" id="age" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="age" placeholder=" "onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age}  />
                            <label htmlFor="age" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">uage :</label>
                        </div>
                        <div className="relative my-4">
                            <input type="email" id="email" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="email" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}/>
                            <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">email :</label>
                        </div>
                        <div className="relative my-4">
                            <input type="text" id="password" className="block rounded-t-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" name="password" placeholder="" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password}/>
                            <label htmlFor="password" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">password :</label>
                        </div>
                        <button type="submit" className="focus:outline-none text-white bg-green-500 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-500 dark:hover:bg-green-500 dark:focus:ring-green-500">send massage</button>
                    </div>
                </div>
            </div></form>
        </section>
    )
}

export default Contact;