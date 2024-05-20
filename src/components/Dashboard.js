import React, { useEffect } from 'react'
import CreateTaskModal from './Modals/CreateTaskModal';
const Dashboard = () => {


    const [openCreateTask, setOpenCreateTask] = React.useState(false);


    const handleOpenTask = () => {
        setOpenCreateTask(true);
    };

    const handleCloseTask = () => {
        setOpenCreateTask(false);
    };

    useEffect(()=>{
        
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
        </div>

    )
}

export default Dashboard