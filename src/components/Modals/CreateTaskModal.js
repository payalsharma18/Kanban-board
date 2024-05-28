import * as React from 'react';
import { useRef , useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { setTasks } from '../../redux/actions'; 

export default function FormDialog({ openCreateTask, handleCloseTask }) {

    const [taskName, setTaskName] = useState('');
    const [stage, setStage] = useState('');
    const [priority, setPriority] = useState('');
    const [date, setDate] = useState('');
    const inputRef = useRef();
    const dispatch = useDispatch();
    const stateData = useSelector((state)=>state)
    console.log(stateData);

    // const handleSubmitTask = (event) => {
    //     event.preventDefault();
    //     // const id =  JSON.parse(sessionStorage.getItem('userDetails', 'userDetails.users.id'));
    //     const taskDetails = {taskName : taskName , priority: priority, stage:stage , date : date };
    //     const prevtaskDetails = JSON.parse(sessionStorage.getItem('taskDetails'))|| [];
    //     const updatedTaskDetails = [...prevtaskDetails , taskDetails]
    //     sessionStorage.setItem('tasks' , JSON.stringify(updatedTaskDetails));
    //     handleCloseTask();
    // }
    const handleSubmitTask = (event) => {
        event.preventDefault();
        const taskDetails = {taskName : taskName , priority: priority, stage:stage , date : date };
        // added below
        const userName = sessionStorage.getItem('userName')
        const prevtaskDetails = JSON.parse(sessionStorage.getItem(userName)) || [];
        console.log(prevtaskDetails);
        const updatedTaskDetails = [...prevtaskDetails , taskDetails]
        sessionStorage.setItem(userName , JSON.stringify(updatedTaskDetails));
        dispatch(setTasks(updatedTaskDetails))
        // added above
        handleCloseTask();
    }

    return (
        <React.Fragment>
            <Dialog
                open={openCreateTask}
                onClose={handleCloseTask}
            >
                <DialogTitle>Add New Task</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="taskName"
                        name="TaskName"
                        label="Name of the Task"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(event)=>{
                            setTaskName(event.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="stage"
                        name="stage"
                        label="Stage"
                        type="text"
                        fullWidth
                        variant="standard"
                        onChange={(event)=>{
                            setStage(event.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="priority"
                        name="priority"
                        label="Priority"
                        type="priority"
                        fullWidth
                        variant="standard"
                        onChange={(event)=>{
                            setPriority(event.target.value)
                        }}
                    />
                    <TextField
                        autoFocus
                        required
                        margin="dense"
                        id="date"
                        name="date"
                        label="Due Date"
                        type="date"
                        fullWidth
                        variant="standard"
                        inputRef={inputRef}
                        onClick={()=>{
                            inputRef.current.showPicker()
                        }}
                        onChange={(event)=>{
                            setDate(event.target.value)
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseTask}>Cancel</Button>
                    <Button type="submit" onClick={handleSubmitTask}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
