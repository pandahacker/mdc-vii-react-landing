import React from 'react';

//create your first component
export const NavBar = props => {

    const menu = [
        {label: 'Home', url: '#'},
        {label: 'About', url: '#'},
        {label: 'Services', url: '#'},
        {label: 'Contact', url: '#'}
    ];

    const items = menu.map(item => (
        <li className="nav-item" key={item.label}>
            <a className="nav-link" href={item.url}>
                {item.label}
            </a>
        </li>
    ));

    return(
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand " href="#">Start Bootstrap</a>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {items}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};
