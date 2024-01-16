import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const SignUp = () => {

    const [udata,setUdata] = useState({
        fname:"",
        email:"",
        mobile:"",
        password:"",
        cpassword:""
    }) 

    const addData= (e) => {
        const {name,value} = e.target;
        setUdata(()=>{
            return{
                ...udata,
                [name]:value
            }
        })
    }

    console.log(udata);
    
  return (
    <section>
    <div className = 'sign_container'>
        <div className='sign_header'>
            <img src="data:image/png;base64,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" alt="" />
        </div>
        <div className='sign_form'>
            <form>
                <h1>Register</h1>
            <div className='form_data'>
            <label htmlFor="fname">Your name</label>
            <input type="text" 
            onChange={addData}
            value={udata.fname}
            name="fname" id="fname" />
            </div>
            <div className='form_data'>
            <label htmlFor="email">Email</label>
            <input type="text" 
            onChange={addData}
            value={udata.email}
            name="email" id="email" />
            </div>
            <div className='form_data'>
            <label htmlFor="number">Mobile</label>
            <input type="text" 
            onChange={addData}
            value={udata.mobile}
            name="mobile" id="mobile" />
            </div>
            <div className='form_data'>
            <label htmlFor="password">Password</label>
            <input type="password" 
            onChange={addData}
            value={udata.password}
            name="password" placeholder="At least 6 char" id="password" />
            </div>
            <div className='form_data'>
            <label htmlFor="cpassword">Password again</label>
            <input type="password"
            onChange={addData}
            value={udata.cpassword} 
            name="cpassword" id="cpassword" />
            </div>

            <button className='signin_btn'>Continue</button>

            <div className='signin_info'>
                <p>Already have an Account?</p>
                <NavLink to="/login">Signin</NavLink>
            </div>
            </form>
        </div>

        
        </div>
        </section>
  )
}

export default SignUp