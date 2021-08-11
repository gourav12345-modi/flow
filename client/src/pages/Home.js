import React from 'react'
import { refreshToken } from '../api'
import Navigation from '../component/Navigation'

export default function Home() {
  const handelClick = () => {
    const {data} = refreshToken();
    console.log(data);
  }
  return (
    <div>
      <Navigation isAuth={false} />
      <button onClick={handelClick}>Refress</button>
      Home
    </div>
  )
}
