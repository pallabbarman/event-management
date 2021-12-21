import React from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import Services from '../../Home/Services/Services';

const Book = () => (
    <section>
        <div>
            <Sidebar />
        </div>
        <div className="dashboard">
            <Services />
        </div>
    </section>
);

export default Book;
