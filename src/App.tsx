import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {AboutPage} from './pages/AboutPage';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Portfolio} from './pages/Portfolio';

import {projects} from './resources';

console.log(projects);

declare function mainScript(): void;

class App extends React.Component<any, any> {
    render() {
        return (
            <>
                <Router>
                    <Header/>
                    <Switch>
                        <Route path="/portfolio">
                            <Portfolio/>
                        </Route>
                        <Route path="/">
                            <AboutPage/>
                        </Route>
                    </Switch>
                </Router>
                <Footer/>
            </>
        );
    }

    componentDidMount() {
        mainScript();
    }
}

export default App;
