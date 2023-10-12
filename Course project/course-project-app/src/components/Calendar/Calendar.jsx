import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import Modal from 'react-modal';
import './Calendar.css'

const MyCalendar = () => {
  const localizer = momentLocalizer(moment);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const [newEvent, setNewEvent] = useState({ title: '', start: '', end: '' });
  const [events, setEvents] = useState([]);
  const [eventIdCounter, setEventIdCounter] = useState(2);

  const handleEventClick = (event) => {
    setEditingEvent(event);
    setNewEvent(event);
    setModalIsOpen(true);
  };

  const handleDateSelect = ({ start, end }) => {
    setNewEvent({
      title: '',
      start,
      end,
    });
    setModalIsOpen(true);
  };

  const handleModalSave = () => {
    if (newEvent.title.trim() !== '') {
      const updatedEvents = events.map((event) =>
        event.id === (editingEvent ? editingEvent.id : newEvent.id) ? newEvent : event
      );
      setEvents(editingEvent ? updatedEvents : [...updatedEvents, { ...newEvent, id: eventIdCounter }]);
      setEditingEvent(null);
      setModalIsOpen(false);
      setNewEvent({ title: '', start: '', end: '' });
      setEventIdCounter(eventIdCounter + 1);
    } else {
      alert('Please, enter task name.');
    }
  };

  const handleModalDelete = () => {
    if (editingEvent) {
      const updatedEvents = events.filter((event) => event.id !== editingEvent.id);
      setEvents(updatedEvents);
      setEditingEvent(null);
      setModalIsOpen(false);
      setNewEvent({ title: '', start: '', end: '' });
    }
  };

  const handleModalClose = () => {
    setModalIsOpen(false);
    setNewEvent({ title: '', start: '', end: '' });
    setEditingEvent(null);
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        className="calendar-style"
        onSelectEvent={handleEventClick}
        selectable
        onSelectSlot={handleDateSelect}
      />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        contentLabel={editingEvent ? 'Edit Event' : 'Create Event'}
        appElement={document.getElementById('root')}
      >
        <h2>{editingEvent ? 'Edit task' : 'Task title'}</h2>
        <input
          type="text"
          placeholder="Task name"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <button onClick={handleModalSave}>
          {editingEvent ? 'Update' : 'Create'}
        </button>
        {editingEvent && (
          <button onClick={handleModalDelete} style={{ marginLeft: '1rem', color: 'red' }}>
            Delete
          </button>
        )}
        <button onClick={handleModalClose}>Cancel</button>
      </Modal>
    </div>
  );
};

export default MyCalendar;
