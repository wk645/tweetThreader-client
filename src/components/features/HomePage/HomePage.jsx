import React from 'react';
import HomeTimeline from '../HomeTimeline/HomeTimeline';

class Homepage extends React.Component {
    render() {
        return (
            <div className="Homepage">
                <p>Homepage here</p>
                <HomeTimeline />
            </div>
        );
    }
}

export default Homepage;
