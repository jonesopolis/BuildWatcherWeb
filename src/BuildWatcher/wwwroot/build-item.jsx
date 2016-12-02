import React from 'react';

class BuildItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4 col-lg-4">
                <div className="card">
                    <h3 className="card-header">{this.props.build.friendlyName}</h3>
                    <div className="card-block">
                        <h4 className="card-title">{this.props.build.name}</h4>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        );
    }
}


export default BuildItem