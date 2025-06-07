import React from 'react';

const data = [
    {
        title: "John Wick",
        year: 2014,
        genre: "Action",
    },
    {
        title: "The Matrix",
        year: 1999,
        genre: "Sci-Fi",
    },
];

const card = data.map((item) => {

    return (
        <div className="card">
            <h2>{item.title}</h2>
            <p>Year: {item.year}</p>
            <p>Genre: {item.genre}</p>
        </div>
    );
}

);

export default card;