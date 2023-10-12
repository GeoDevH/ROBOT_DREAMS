import React, { useState } from 'react';
import './Card.css';
import Task from '../Task/Task';

const Card = ({ onDelete, id }) => {
  const [backgroundColor, setBackgroundColor] = useState(generateRandomColor());
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [isAddingTask, setIsAddingTask] = useState(false);
  const [taskText, setTaskText] = useState('Task Title');
  const [cardId] = useState(id);

  function generateRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  }

  const handleColorChange = () => {
    setBackgroundColor(generateRandomColor());
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleEdit = () => {
    setIsEditingTitle(true);
  };

  const handleBackFromEdit = () => {
    setIsEditingTitle(false);
  };

  const handleBackFromTask = () => {
    setIsAddingTask(false);
  };

  const handleTaskTextChange = (event) => {
    setTaskText(event.target.value);
  };

  const handleAddTask = () => {
    setIsAddingTask(true);
  };

  return (
    <div className="col-md-4 card-container">
      <div className="card my-4" style={{ backgroundColor: backgroundColor }}>
        <div className="card-content">
          {isEditingTitle ? (
            <>
              <input
                type="text"
                value={taskText}
                onChange={handleTaskTextChange}
                className="task-input"
              />
              <button className="btn btn-info my-3" onClick={handleBackFromEdit}>
                Back
              </button>
            </>
          ) : isAddingTask ? (
            <>
              <Task cardId={cardId} />
              <button className="btn btn-info my-3" onClick={handleBackFromTask}>
                Back
              </button>
            </>
          ) : (
            <>
              <h2 className="card-title">{taskText}</h2>
              <button className="btn btn-info my-3" onClick={handleEdit}>
                Edit
              </button>
            </>
          )}
          <button className="btn btn-danger" onClick={handleDelete}>
            Delete
          </button>
          <button className="btn btn-secondary" onClick={handleColorChange}>
            Change Color
          </button>
          {!isAddingTask && (
            <button className="btn btn-primary" onClick={handleAddTask}>
              Task list
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
