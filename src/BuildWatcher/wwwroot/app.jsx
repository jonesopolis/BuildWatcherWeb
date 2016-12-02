import Styles from './site.css'

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Builds from './builds.jsx';
import NavBar from './nav-bar.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            builds: []
        };
    }

    componentDidMount() {
        axios({
            url: '/api/builds',
            method: 'get',
            headers: { 'Content-type': 'text/html; charset=UTF-8' }
        }).then(s => this.setState({ builds: s.data }), e => alert('error getting builds'));
    }

    render() {
        return (
            <div>
                <NavBar />

                <div className="container body-content">

                    <Builds builds={this.state.builds} />

                    <hr />
                    <footer>
                        <p>&copy; 2016</p>
                    </footer>

                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

