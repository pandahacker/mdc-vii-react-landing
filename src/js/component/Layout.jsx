import React from 'react';


import {NavBar} from './NavBar.jsx';
import {Jumbotron} from './Jumbotron.jsx';
import {Cards} from './Cards.jsx';
import {Footer} from './Footer.jsx';

export const Layout = () => {
    return(
        <div>
            <NavBar />
            <Jumbotron />
            <Cards />
            <Footer />
        </div>
    );
};