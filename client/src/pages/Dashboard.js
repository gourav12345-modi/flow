import React from 'react'
import '../css/dashboard.css';
import Navigation from '../component/Navigation'
import Sidebar from '../component/Sidebar'
import TaskBoard from '../component/TaskBoard';
import data from '../data.js'


export default function Dashbord() {
  const todo = data.filter((x) => x.status===0);
  const inProgress = data.filter((x) => x.status===1);
  const done = data.filter((x) => x.status===2);
  return (
    <div className="dashboard">
      <Navigation isAuth={true}/>
      <div className="dashboardAndSidebarContainer">
        <Sidebar/>
        <div className="taskBoardContainer">
         <TaskBoard tasks={todo} type={0}/>
         <TaskBoard tasks={inProgress} type={1}/>
         <TaskBoard tasks={done} type={2}/>
        </div>
      </div>
      
    </div>
  )
}
