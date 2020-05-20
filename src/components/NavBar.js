import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa'
import {NavLink} from "react-router-dom"

class NavBar extends Component {
    onDeleteTask = () => {
        this.props.onDeleteTask()
    }
    render(){
        return(
            <footer className="d-flex justify-content-between bg-secondary p-3" id="mainFooter">
                <div className="btn-group">
                    <NavLink to="/" className="btn btn-outline-dark bg-light"><FaListAlt/></NavLink>
                    <NavLink to="/completed" className="btn btn-outline-dark bg-light"><FaCheckSquare/></NavLink>
                    <NavLink to="/add-task" className="btn btn-outline-dark bg-light"><FaPlusSquare/></NavLink>
                </div>
                <button className="btn btn-outline-dark bg-light" onClick={this.onDeleteTask.bind(this)}><FaTrash/></button>
            </footer>
        )
    }
}
export default NavBar;