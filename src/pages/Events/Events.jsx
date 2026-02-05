import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import './Events.css';

const Events = () => {
    return (
        <div className="container mx-auto px-6 py-32 text-white">
            <h1 className="text-4xl font-bold mb-8">Events</h1>
            <nav className="flex gap-4 mb-8">
                <Link to="flagship" className="text-st-red hover:underline">Flagship</Link>
                <Link to="technical" className="text-st-red hover:underline">Technical</Link>
                <Link to="nontech" className="text-st-red hover:underline">Non-Technical</Link>
            </nav>
            <Outlet />
        </div>
    );
};

export default Events;
