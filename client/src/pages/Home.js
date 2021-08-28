import React from 'react'
import * as api from '../api'
import { Link } from 'react-router-dom'
import Navigation from '../component/Navigation'

export default function Home(props) {
  console.log(props.history)
  const handelClick = () => {
    console.log(props)
  }
  const getData = async () => {
    const { data }  = await api.getAllTask();
    console.log(data)

  }
  return (
    <div>
      <Navigation isAuth={false} />
      <button onClick={handelClick}>Refress</button>
      <button onClick = {getData} > getData </button>
      <Link to='/Dashboard'> Dashboard </Link>
      Home
    </div>
  )
}
