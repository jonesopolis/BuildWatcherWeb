import $ from 'jquery';
import 'ms-signalr-client';

import React, { PropTypes } from 'react';
import NavBarContainer from '../containers/nav-bar-container';
import BuildItem from './build-item'

class App extends React.Component {
    constructor(props) {
        super(props);
        props.getAllBuilds();
        props.getSubscribedBuilds();
        props.getUsername();

        this.startSignalR();
    }

    startSignalR() {
        var connection = $.hubConnection('http://localhost:5000');
        var proxy = connection.createHubProxy('buildMonitorHub');
        proxy.on('buildUpdated', (b) => this.props.buildUpdated(b));

        connection.start();
    }

    render() {
        let builds = this.props.subscribedBuilds.map(b => <BuildItem key={b.name} build={b} unsubscribeFromBuild={this.props.unsubscribeFromBuild} />);

        return (
            <div>
                <NavBarContainer />

                <div className='container body-content'>
                    <div className='row'>
                        {builds}
                    </div>

                    <hr />
                    <footer>
                        <p>&copy; 2016</p>
                    </footer>

                </div>
            </div>
        );
    }
}

App.propTypes = {
    builds: PropTypes.array.isRequired,
    subscribedBuilds: PropTypes.array.isRequired,


    getAllBuilds: PropTypes.func.isRequired,
    getSubscribedBuilds: PropTypes.func.isRequired,
    unsubscribeFromBuild: PropTypes.func.isRequired,
    getUsername: PropTypes.func.isRequired,
    buildUpdated: PropTypes.func.isRequired
}

export default App;

