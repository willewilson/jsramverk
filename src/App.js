import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from
'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Report from './components/pages/Report';
import { WeekOne, WeekTwo, WeekThree, WeekFour, WeekFive, WeekSix} from './components/pages/week/Week';

function App() {
    return (
        <>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/reports' component={Report} />
                <Route path='/week/1' component={WeekOne} />
                <Route path='/week/2' component={WeekTwo} />
                <Route path='/week/3' component={WeekThree} />
                <Route path='/week/4' component={WeekFour} />
                <Route path='/week/5' component={WeekFive} />
                <Route path='/week/6' component={WeekSix} />
            </Switch>
        </Router>
        </>
    );
}

export default App;
