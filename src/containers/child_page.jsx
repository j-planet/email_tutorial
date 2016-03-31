import React, { Component } from 'react';

class ChildPage extends Component {

    componentWillMount() {
        console.log('ChildPage willMount.');
    }

    render() {
        return <h1>This is the Child Page.</h1>;
    }
}

export default ChildPage;