import React, { Component } from 'react';
import { Link } from 'react-router';

class FramePage extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log('FramePage willMount.');
    }

    render() {
        return (
            <div>
                <h1>I'm a header.<Link to="/">Go Home</Link></h1>


                <hr />
                { this.props.children }
            </div>
        );
    }
}

export default FramePage;