import React from'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Header from './Header';
import Footer from './footer';
import Home from './Home/Home';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Route exact path ="/" component={Home}/>
            <Footer/>
        </BrowserRouter>
    )
}
export default Routing;