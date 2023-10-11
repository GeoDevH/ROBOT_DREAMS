import React, { useState } from 'react';
import './Navigation.css';
import Card from '../Card/Card';
import About from '../About/About';
import { v4 as uuidv4 } from 'uuid';

const Navigation = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [cards, setCards] = useState([]);
    const [prevCards, setPrevCards] = useState([]);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const handleCreateTask = () => {
        if (prevCards.length > 0) {
            setCards(prevCards);
            setPrevCards([]);
        } else {
            const newCard = {
                id: uuidv4(),
            };
            setCards((prevCards) => [...prevCards, newCard]);
        }
    };
    
    const handleDeleteCard = (cardId) => {
        setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
    };

    const handleShowAbout = () => {
        setPrevCards(cards);
        setCards([]);
    };

    return (
        <div className={`${isSidebarOpen ? 'open' : ''}`}>
            <button className="menu-button" onClick={toggleSidebar}>
                {isSidebarOpen ? 'Hide' : 'Menu'}
            </button>
            <nav className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <div className="sidebar-header">
                    <h3>Menu</h3>
                </div>
                <ul className="list-unstyled components">
                    <li className="active">
                        <button className="button-nav active" onClick={handleCreateTask}>
                            Create Task
                        </button>
                    </li>
                    <li>
                        <button className="button-nav" onClick={handleShowAbout}>
                            About
                        </button>
                    </li>
                </ul>
            </nav>
            <div className="card-container card-setting">
                {cards.map((card) => (
                    <Card key={card.id} id={card.id} onDelete={() => handleDeleteCard(card.id)} />
                ))}
                {cards.length === 0 && <About />}
            </div>
        </div>
    );
};

export default Navigation;
