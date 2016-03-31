import React, { Component } from 'react';
import { Link } from 'react-router';

class HomePage extends Component {

    componentWillMount() {
        console.log('HomePage willMount.');
    }

    render() {
        return (
            <div>
                <h1>This is the Home Page.</h1>
                <Link to="p"> child page </Link>
            </div>
        );
    }
}

export default HomePage;