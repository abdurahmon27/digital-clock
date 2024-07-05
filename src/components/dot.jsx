import React from 'react';
import './dot.css';

const Dot = ({ active }) => {
    return <div className={`dot ${active ? 'active' : ''}`}></div>;
};

export default Dot;