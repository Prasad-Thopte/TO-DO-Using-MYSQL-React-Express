import React from 'react'
import axios from 'axios';
import { FaTrash } from "react-icons/fa";
import "../App.css"

class TaskList extends React.Component {
    state = {
        task: " ",
        taskList: []
    }
    componentDidMount() {
        this.getTaskList();

    }
    getTaskList = () => {
        axios
            .get('http://localhost:4000/tasks')
            .then((response) => response.data)
            .then(response => {
                this.setState({ taskList: response });
            });
    };

    onDeleteClick = id => {
        axios.delete(`http://localhost:4000/deleteTask/${id}`)
        this.getTaskList();
        this.setState({task:""})
    };

    onSubmitClick = () => {
        axios.post('http://localhost:4000/addTask', {
            task: this.state.task,

        });
        this.getTaskList();
      
    };

    render() {
        console.log(this.state.taskList);
        return (

            <section className="section-center">
               

                <form className="grocery-form">
                <h3>Todo List</h3>
                    <div className="form-control">
                        <input className="grocery" placeholder="Input your Todo List" value={this.state.task} onChange={e => this.setState({
                            task: e.target.value
                        })} />

                        <button className="submit-btn"
                            onClick={() => this.onSubmitClick()}
                        >Submit</button>

                    </div>
                </form>
                <hr />
                <div className="grocery-container">
                    <div className="grocery-list">
                        {this.state.taskList.map((task) => {
                            const { id, tasks } = task;
                            return ( 
                                <article className="grocery-item" key={id}>
                                    <p className="title" >{tasks}</p>
                                    <p className="btn-container "  >

                                        <button type="button" className="delete-btn" onClick={() => this.onDeleteClick(task.id)}>
                                            <FaTrash />
                                        </button>
                                    </p>
                                </article>
                            );
                        })}

                    </div>


                </div>
            </section>

        )
    }
}
export default TaskList;