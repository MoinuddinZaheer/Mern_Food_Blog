import React from 'react'
import "../styles/Signin.css"
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa';
import { BsLockFill} from 'react-icons/bs';


const Signin = () => {
    return (
  <div>

 <div className='heading'>
             <h2 className='title'>FOOD BLOG</h2>
             <p className='newuser'>New User? 
             <Link to='/signup'>
             Sign Up
             </Link>
             </p>
             
             </div>
             

        <div className='Signin'>

            <div className='main'>

                
                <img src="/images/bg.png" alt="" width={650}/>

                <div className='formdiv'>
                  
                    <form>
                        <div className='greeting'>
                        <h1 className='welcome'>Welcome Back!</h1>
                    <p className='con'>Login to continue</p>
                        </div>
                        <div className='emaildiv' >
                            <FaUserCircle size={20} className='userlogo'/>
                        <input  type="text" placeholder='Enter Your Email'  required/>
                        </div>

                        <div className='password'>
                        <BsLockFill size={20} className='userlogo'/>
                        <input type="text" placeholder='Enter Your Password' required />
                        </div>
                        
                        <button>LOGIN</button>
                    </form>
                </div>
            </div>

        </div>
        </div>
    )
}

export default Signin