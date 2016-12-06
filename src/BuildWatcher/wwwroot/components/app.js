import React from 'react';
import BuildsContainer from '../containers/builds-container';
import NavBarContainer from '../containers/nav-bar-container';

class App extends React.Component {
    constructor(props) {
        super(props);  
    }

    render() {
        return (
            <div>
                <NavBarContainer />

                <div className="container body-content">

                    <BuildsContainer />

                    <hr />
                    <footer>
                        <p>&copy; 2016</p>
                    </footer>

                </div>
            </div>
        );
    }
}

export default App;

