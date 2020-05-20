import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Switch, Route} from "react-router-dom"
import uniqueid from "uniqueid"

import ToDoList from "./components/ToDoList"
import AddTask from "./components/AddTask"
import NavBar from "./components/NavBar"
import initialData from "./initialData"
//import Fetching from "./components/Fetching"

class App extends React.Component {
    state={
        tasks: initialData
        //fetching: true
    }
    /*componentDidCatch = () => {
        let delay = Math.floor(Math.random()*5000)

        setTimeout(()=>{
            this.setState({ 
                fetching: false,
                tasks : initialData
            })
        },delay)
    }*/
    onToggleCompleted = (taskId) => {
        let taskUpdated = this.state.tasks.find(task => task.id === taskId)
        taskUpdated.completed= !taskUpdated.completed

        this.setState(previousState => (
            previousState.tasks.map(task => {
                if(task.id === taskId) {
                    return taskUpdated
                }else{ 
                    return task
                }
            })
        ))
    }
    onAddTask = (newTaskName) => {
        let newTask ={
            id: uniqueid(),
            name: newTaskName,
            completed: false
        }
        this.setState((previousState)=>({
            tasks: [...previousState.tasks, newTask]
        }))
    }
    onDeleteTask = () =>{
        this.setState(previousState=>{
            let newState =  previousState.tasks.filter(task => !task.completed)
            return{
                tasks: newState
            }
        })
    }   

    render() { 
        return ( 
            <section id="todo">
                {/*this.state.fetching? <Fetching />: null*/}
                <BrowserRouter>
                    <Switch>
                        <Route path="/add-task" render={(props)=> <AddTask {...props} onAddTask={this.onAddTask}/>}/>
                        <Route path="/:filter?" render={(props)=> <ToDoList {...props} tasks={this.state.tasks} onToggleCompleted={this.onToggleCompleted}/>}/>
                    </Switch>
                    <NavBar onDeleteTask={this.onDeleteTask}/>
                </BrowserRouter>
            </section>
         );
    }
}
 
export default App;