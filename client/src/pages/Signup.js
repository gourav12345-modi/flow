import React, { useEffect, useState } from 'react'
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { register } from '../api'
import Navigation from '../component/Navigation'
import '../css/signup.css'
import { registerUser } from '../actions/userActions';
import { CLEAR_LOG_DATA } from '../constants';

export default function Signup() {
  const dispatch = useDispatch();
  const { error, loading, message } = useSelector((state) => state.userInfo);
  useEffect(() => {
    return () => {
      dispatch({type: CLEAR_LOG_DATA })
    }
  },[])

  const [formData, setFormData] = useState({
    name:"",
    email:"",
    password:"",
  })

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    dispatch( registerUser(formData) );
  }
  return (
    message==='User created'?( <Redirect to="/login"/> ) : (<div>
      <Navigation isAuth={false} />
      <div className="signupFormContainer">
        <h1>Signup</h1>
        <p className={error?"error":"notVisible"}>{error?error:"Welcome"}</p>
       
          
        <form onSubmit={handleFormSubmit}  >
          <div>
        <i className="far fa-user"></i> <input type="text" name="name" id="name" value={formData.name} onChange={(e)=> setFormData({...formData, name: e.target.value}) } />
          </div>
          <div> 
        <i className="far fa-envelope"></i> <input type="email" name="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})}/>

          </div>
          <div>
          <i className="fas fa-lock"></i> <input type="password" name="password" id="password" value={formData.password} onChange={(e)=> setFormData({...formData, password: e.target.value})}/>

          </div>
          <button type="submit"  disabled={loading?true: false }>{loading? "Hangon...":"Signup"} </button>
        </form>
      <h3>Already have an account ? <Link to='/login'>Signup</Link> </h3> 
      </div>
</div>)
  )
}
