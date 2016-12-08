import React, { PropTypes } from 'react';
import NavBarContainer from '../containers/nav-bar-container';
import BuildItem from './build-item'

class App extends React.Component {
    constructor(props) {
        super(props);        
        props.getBuilds();
        props.setUsername();
    }

    render() {
        let builds = this.props.subscribedBuilds.map(b => <BuildItem key={b.name} build={b} />);
        
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
    getBuilds: PropTypes.func.isRequired,
    setUsername: PropTypes.func.isRequired
}

export default App;
