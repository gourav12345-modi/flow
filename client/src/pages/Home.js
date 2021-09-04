import React from 'react'
import * as api from '../api'
import { Link } from 'react-router-dom'
import Navigation from '../component/Navigation'
import '../css/home.css'

export default function Home(props) {
  
  return (
    <div class="home">
      <Navigation />
      <div className="intro-text">
      <h3>Welcome To Flow</h3>
      <p>Organize your task with flow...</p>
      </div>
    </div>
  )
}
