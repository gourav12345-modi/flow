import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { register } from '../api'
import Navigation from '../component/Navigation'
import '../css/signup.css'
import { loginUser, registerUser } from '../actions/userActions';
import { CLEAR_LOG_DATA } from '../constants';

export default function Login() {
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.userInfo);
  useEffect(() => {
    console.log("use effect ")
    return () => {
      dispatch({type: CLEAR_LOG_DATA })
    }
  },[])

  const [formData, setFormData] = useState({
    email:"",
    password:"",
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    dispatch( loginUser(formData) );
  }
  return (
    message==='User LoggedIn'?( <Redirect to="/"/> ) : (<div>
      <Navigation isAuth={false} />
      <div className="signupFormContainer">
        <h1>Login</h1>
        <p className={error?"error":"notVisible"}>{error?error:"Welcome"}</p>
       
          
        <form onSubmit={handleFormSubmit}  >
          
          <div> 
        <i className="far fa-envelope"></i> <input type="email" name="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>

          </div>
          <div>
          <i className="fas fa-lock"></i> <input type="password" name="password" id="password" value={formData.password} onChange={(e)=> setFormData({...formData, password: e.target.value})}/>

          </div>
          <button type="submit">{loading? "Hangon...":"Login"} </button>
        </form>
      <h3>Don't have account ? <Link to='/register'>Signup</Link> </h3> 
      </div>
</div>)
  )
}
