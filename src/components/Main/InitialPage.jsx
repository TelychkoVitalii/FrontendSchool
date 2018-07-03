import React, { Component } from 'react';
import '../../styles/InitialPage.css';

const quotes = [
    {
        quote: 'We build our computer (systems) the way we build our cities: over time, without a plan, on top of ruins.',
        author: 'Ellen Ullman'
    },
    {
        quote: 'No one in the brief history of computing has ever written a piece of perfect software. It\'s unlikely that you\'ll be the first.',
        author: 'Andy Hunt'
    },
    {
        quote: 'One of the best programming skills you can have is knowing when to walk away for awhile',
        author: 'Oscar Godson'
    },
    {
        quote: 'Knowledge is power.',
        author: 'Francis Bacon'
    },
    {
        quote: 'Code is like humor. When you have to explain it, it’s bad.',
        author: 'Cory House'
    },

];

class InitialPage extends Component {

    render() {
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        return (
            <div className='initialBlock'>
                <q>{randomQuote.quote}</q>
                <div className='author'>{randomQuote.author}</div>
            </div>
        );
    }
}

export default InitialPage;