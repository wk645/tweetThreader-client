import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Homepage from './features/HomePage/HomePage';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Homepage} />
                <Route render={() => <Redirect to="/" />} />
            </div>
        );
    }
}

export default App;
