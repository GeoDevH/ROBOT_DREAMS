import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className="container text-center mt-5 container-style">
      <div className="card card-style">
        <div className="card-body">
          <h1 className="card-title">About project</h1>
          <p className="card-text">
          This project is called Task Scheduler. Its functionality is that it has two main buttons: Create Task and About. By clicking the "About" button, the user goes to the page and sees what you see. Clicking the Create Task button creates a task that you can edit, change the color, rename the Task Title, and delete.
          Below is the calendar. By clicking on the desired number, you can add a task for a certain date, edit a previously added task, delete a task from the plan, view all tasks for the selected day, etc.
          The project is still under development, if you want to support the project, make your donation on the card number: 5186 7435 6264 8205
          </p>
          <span className="author">© Created by Heorhii</span>
        </div>
      </div>
    </div>
  );
};

export default About;
