import React from 'react';
import RiseLoader from 'react-spinners/RiseLoader';
import './Spinner.css';

const Spinner = () => (
    <div className="spinner">
        <RiseLoader color="#0ee7c9" size={35} />
    </div>
);

export default Spinner;
