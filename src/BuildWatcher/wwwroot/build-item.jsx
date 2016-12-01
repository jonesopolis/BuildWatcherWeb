import React from 'react';
import ReactDOM from 'react-dom';

class BuildItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4 col-lg-4">
                <div className="card">
                    <h3 className="card-header">@build.FriendlyName</h3>
                    <div className="card-block">
                        <h4 className="card-title">Special title treatment</h4>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<BuildItem />, document.getElementById('app'));
export default BuildItem