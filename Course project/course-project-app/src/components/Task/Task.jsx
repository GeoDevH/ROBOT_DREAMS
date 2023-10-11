import React, { useState, useEffect } from 'react';
import './Task.css';

const Task = ({ cardId }) => {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState('');

  useEffect(() => {
    getAllTasks();
  }, [cardId]);

  const API_URL = `https://course-project-app-e8f86-default-rtdb.europe-west1.firebasedatabase.app/Schedular${cardId}.json`;

  const getAllTasks = () => {
    if (cardId) {
      fetch(API_URL)
        .then(response => response.json())
        .then(data => {
          if (data) {
            const taskList = Object.keys(data).map(key => ({ ...data[key], id: key }));
            setTasks(taskList);
          }
        })
        .catch(error => console.error('Error fetching data:', error));
    }
  };

  const addTask = () => {
    if (newTaskText) {
      fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify({ title: newTaskText, completed: false }),
      })
        .then(response => response.json())
        .then(() => {
          setNewTaskText('');
          getAllTasks();
        })
        .catch(error => console.error('Error adding task:', error));
    }
  };

  const handleTaskUpdate = (taskId, updatedTask) => {
    fetch(`${API_URL.replace('.json', `/${taskId}.json`)}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedTask),
    })
      .then(response => response.json())
      .then(() => {
        const updatedTasks = tasks.map(task =>
          task.id === taskId ? { ...task, ...updatedTask } : task
        );
        setTasks(updatedTasks);
      })
      .catch(error => console.error('Error updating task:', error));
  };

  const deleteTask = taskId => {
    fetch(`${API_URL.replace('.json', `/${taskId}.json`)}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(() => {
        const updatedTasks = tasks.filter(task => task.id !== taskId);
        setTasks(updatedTasks);
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  const toggleCompleteTask = taskId => {
    const taskToUpdate = tasks.find(task => task.id === taskId);
    const updatedTask = { ...taskToUpdate, completed: !taskToUpdate.completed };
    handleTaskUpdate(taskId, updatedTask);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTaskText}
        onChange={e => setNewTaskText(e.target.value)}
      />
      <button className="add-task" onClick={addTask}>
        Add Task
      </button>

      <div id="tasks">
        {tasks.map(task => (
          <div key={task.id} className="form-check">
            <label className="form-check-label form-check-label-style">
              <input
                type="checkbox"
                className="form-check-input form-check-input-style"
                checked={task.completed}
                onChange={() => toggleCompleteTask(task.id)}
              />
              <span className={`task-title ${task.completed ? 'completed' : ''}`}>
                {task.title}
              </span>
            </label>
            <button onClick={() => deleteTask(task.id)} className="btn-close btn-form">
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task;
