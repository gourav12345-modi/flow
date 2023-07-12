import React, { useEffect, useState } from "react";
import "../css/dashboard.css";
import Navigation from "../component/Navigation";
import Sidebar from "../component/Sidebar";
import TaskBoard from "../component/TaskBoard";
import { useSelector } from "react-redux";

export default function Dashbord() {
  const [allBoardsData, setAllBoardsData] = useState([])

  const boards = useSelector((state) => state.boards.boards) || []
  const tasks = useSelector((state) => state.tasks.tasks) || []
  const comments = useSelector((state) => state.comments.comments) || []

  useEffect(() => {
    const allTaskData = []
    tasks.forEach((task) => {
      // filter out all comments for the current task using task.comments which holds id of comments
      const taskComments = comments.filter((comment) => task.comments.includes(comment._id))
      allTaskData.push({ ...task, comments: taskComments })
    })

    const allBoardData = []
    boards.forEach((board) => {
      // filter out all tasks for the current board using board.tasks which holds id of tasks
      const boardTasks = allTaskData.filter((task) => board.tasks.includes(task._id))
      allBoardData.push({ ...board, tasks: boardTasks })
    })
    setAllBoardsData(allBoardData)
  }, [boards, tasks, comments])

  return (
    <div className="dashboard">
      <Navigation isAuth={true} />
      <div className="dashboardAndSidebarContainer">
        {/* <Sidebar /> */}
        <div className="taskBoardContainer">
          {/* <TaskBoard tasks={todo} type={0} />
          <TaskBoard tasks={inProgress} type={1} />
          <TaskBoard tasks={done} type={2} /> */}
          {
            allBoardsData.map((board) => (
              <TaskBoard {...board} />
            ))
          }
        </div>
      </div>
    </div>
  );
}
