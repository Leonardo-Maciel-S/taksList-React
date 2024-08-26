import React, { Component } from "react";


import './Main.css'

import Form from "./Form"
import Tasks from "./task"

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    errors: [],
    index: -1
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'))

    if(!tasks) return

    this.setState({ tasks })
  }

  componentDidUpdate(prevProps, prevState) {
    const [tasksList] = this.state.tasks

    if(prevState.tasks === tasksList) return

    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }

  hundleInput = (e) => {
    this.setState({
      newTask: e.target.value
    })

  }

  hundleSubmit = (e) => {
    e.preventDefault()
    const { tasks, index} = this.state
    let { newTask } = this.state
    newTask = newTask.trim()
    const newTasks = [...tasks]

    if (newTask === '') {
        return
    }

    if(tasks.indexOf(newTask) !== -1) {
        return
    }

    if(index === -1) {
        this.setState({
            newTask: '',
            tasks:  [...tasks, newTask]
        })
    } else {
        newTasks[index] = newTask

        this.setState({
            tasks: [...newTasks],
            index: -1
        })
    }
  }

  handleEdit = (e, index) => {
    const { tasks } = this.state

    this.setState({
        index,
        newTask: tasks[index],
    })
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state

    const newTasks = [...tasks]
    newTasks.splice(index, 1)

    this.setState({
        tasks: newTasks
    })
  }


  render() {
    const {newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form
            hundleSubmit={this.hundleSubmit}
            hundleInput={this.hundleInput}
            newTask={newTask}
        />

        <Tasks tasks={tasks} handleEdit={this.handleEdit} handleDelete={this.handleDelete}/>

      </div>
    );
  }
}

