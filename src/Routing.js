import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Ticket from './Components/Ticket';
import Rides from './Components/Rides';
import Facilities from './Components/Facilities';
import Location from './Components/Location';

export default class Routing extends Component {
    render() {
        return (
            <div>
                
                <BrowserRouter>
                    <Navigation />
                    <Route path="/" exact component={Home} />
                    <Route path="/Home" component={Home} />
                    <Route path="/Ticket" component={Ticket}/>
                    <Route path="/Rides" component={Rides}></Route>
                    <Route path="/Facilities" component={Facilities} ></Route>
                    <Route path="/Location" component={Location} ></Route>
                    <Footer/>
                </BrowserRouter>
                
            </div>
        )
    }
}
