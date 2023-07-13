import React, { useState } from 'react'
import Navigation from '../component/Navigation'
import { useSelector } from 'react-redux'
import "../css/pofile_pg.css"
import * as api from "../api"
import Button from '../component/Button'

function Profile() {
    const [error, setError] = useState("")
    const user = useSelector((state) => state.userInfo.user) || {}
    const [makingRequest, setMakingRequest ] = useState(false)
    const [submitBtnContent, setSubmitBtnContent] = useState("Change Password")
    const [showPassword, setShowPassword] = useState({
        existingPassword: false,
        newPassword: false,
        confirmPassword: false
    })
    const [passwordData, setPasswordData] = useState({
        existingPassword: "",
        newPassword: "",
        confirmPassword: ""
    })

    const isPasswordsValid = () => {
        return passwordData.existingPassword.trim() 
        && passwordData.newPassword.trim() 
        && passwordData.confirmPassword.trim() 
        && (passwordData.newPassword.trim() === passwordData.confirmPassword.trim())
    }

    const changePassword = (e) => {
        e.preventDefault()
        setMakingRequest(true)
        setSubmitBtnContent("Changing..")
        if (!isPasswordsValid()) return 
        api.changePassword(passwordData).then((data) => {
            setSubmitBtnContent("Changed!")
            setTimeout(()=> {
                setSubmitBtnContent("Change Password")
                setMakingRequest(false)
            }, 1000)
        }).catch((error) => {
            setError(error?.response?.data?.message || "")
            setSubmitBtnContent("Change Password")
            setMakingRequest(false)
        })
        
    }

    const newPasswordChange = (e) => {
        if ( passwordData.confirmPassword.trim() && (e.target.value.trim() !== passwordData.confirmPassword.trim())) setError("Password is not same as confirm password.")
        else setError("")
        setPasswordData({ ...passwordData, newPassword: e.target.value })
    }
    const confirmPasswordChange = (e) => {
        if (passwordData.newPassword.trim() !== e.target.value.trim()) setError("Password is not same as confirm password.")
        else setError("")
        setPasswordData({ ...passwordData, confirmPassword: e.target.value })
    }

    return (
        <div className="profile-pg">
            <Navigation isAuth={true} />
            <div className='pg-content'>
                <div className="profile-section">
                    <h2>Profile</h2>
                    <div className='profile-content'>
                        <img src={`http://${window.location.hostname}:1300/${user.profilePhoto}`} className='user-image' />
                        <div className='about-user'>
                            <h3 className='user-name'>{user.name}</h3>
                            <h3 className='user-email'>{user.email}</h3>
                        </div>
                    </div>
                </div>

                <div className='change-password-section'>
                    <h2>Change Password</h2>


                   <form className='change-password-content'>
                   <div>
                        {showPassword.existingPassword ? (
                            <i
                                className="fas fa-unlock password-icon"
                                onClick={() => setShowPassword({ ...showPassword, existingPassword: false })}
                            ></i>
                        ) : (
                            <i
                                className="fas fa-lock password-icon"
                                onClick={() => setShowPassword({ ...showPassword, existingPassword: true })}
                            ></i>
                        )}
                        <input
                            type={showPassword.existingPassword ? "text" : "password"}
                            name="existing-password"
                            placeholder="Existing Password"
                            value={passwordData.existingPassword}
                            onChange={(e) =>
                                setPasswordData({ ...passwordData, existingPassword: e.target.value })
                            }
                        />
                    </div>
                    <div>
                        {showPassword.newPassword ? (
                            <i
                                className="fas fa-unlock password-icon"
                                onClick={() => setShowPassword({ ...showPassword, newPassword: false })}
                            ></i>
                        ) : (
                            <i
                                className="fas fa-lock password-icon"
                                onClick={() => setShowPassword({ ...showPassword, newPassword: true })}
                            ></i>
                        )}
                        <input
                            type={showPassword.newPassword ? "text" : "password"}
                            name="confirm-password"
                            placeholder="New Password"
                            value={passwordData.newPassword}
                            onChange={newPasswordChange}
                        />
                    </div>
                    <div>
                        {showPassword.confirmPassword ? (
                            <i
                                className="fas fa-unlock password-icon"
                                onClick={() => setShowPassword({ ...showPassword, confirmPassword: false })}
                            ></i>
                        ) : (
                            <i
                                className="fas fa-lock password-icon"
                                onClick={() => setShowPassword({ ...showPassword, confirmPassword: true })}
                            ></i>
                        )}
                        <input
                            type={showPassword.confirmPassword ? "text" : "password"}
                            name="confirm-password"
                            placeholder="Confirm Password"
                            value={passwordData.confirmPassword}
                            onChange={confirmPasswordChange}
                        />
                    </div>
                    <p className='error'>{error}</p>
                    <Button className="change-password-btn" disabled={!isPasswordsValid || makingRequest} onClick={changePassword}>{submitBtnContent}</Button>
                   </form>

                </div>

            </div>

        </div>
    )
}

export default Profile