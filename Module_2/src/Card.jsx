import React from 'react';
import data from './data.jsx';


const Cardcomponent = () => {
    return (
        data.map((item) => {
            return (
                <div className="card">
                    <h2>{item.title}</h2>
                    <p>Year: {item.year}</p>
                    <p>Genre: {item.genre}</p>
                </div>
            );
        })
    );
};

export default Cardcomponent;