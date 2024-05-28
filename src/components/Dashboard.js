import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CreateTaskModal from './Modals/CreateTaskModal';
import { setTasks } from '../redux/actions';

const Dashboard = () => {


    const [openCreateTask, setOpenCreateTask] = React.useState(false);
    const [allTasks, setAlltasks] = React.useState([])
    const stateData = useSelector((state)=>state)
    const {tasks} = stateData.taskReducer
    console.log(tasks)
    const dispatch = useDispatch()

    const handleOpenTask = () => {
        setOpenCreateTask(true);
    };

    const handleCloseTask = () => {
        setOpenCreateTask(false);
    };

    useEffect(()=>{
        const userName = sessionStorage.getItem('userName')
        const tasks = JSON.parse(sessionStorage.getItem(userName))
        console.log('all tasks are', tasks)
        setAlltasks(tasks)
    },[])
    return (
        <div>Dashboard
            <CreateTaskModal handleOpenTask={handleOpenTask} handleCloseTask={handleCloseTask} openCreateTask={openCreateTask}></CreateTaskModal>
            <div>
                <p>Total Tasks</p>
                <p>Completed Tasks</p>
                <p>Pending Tasks</p>
            </div>
            <div className='column'>
            <button onClick={handleOpenTask} > Create Task + </button>
            </div>
            <div>
                <h1>showing all tasks</h1>
                {allTasks.map((item)=>{return (
                    <li>
                        {item.taskName}
                    </li>
                )})}
            </div>
        </div>

    )
}

export default Dashboard
