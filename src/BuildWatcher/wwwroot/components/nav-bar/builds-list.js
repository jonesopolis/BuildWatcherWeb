import React, { PropTypes } from 'react'
import { Modal, Popover, Tooltip, OverlayTrigger, Button } from 'react-bootstrap'

class BuildsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let buildListItems = this.props.builds.map((b) => {
            return (
                <div key={b.name} className='row'>
                    <span className='col-md-6'>{b.friendlyName}</span>
                    <button className='btn btn-primary col-md-2' onClick={() => this.props.subscribeToBuild(b.name)}>+</button>
                </div>
            )
        });

        return (
            <div>{ buildListItems }</div>
        )
    }
}

BuildsList.PropTypes = {
    builds: PropTypes.array.isRequired,
    subscribeToBuild : PropTypes.func.isRequired
} 

export default BuildsList