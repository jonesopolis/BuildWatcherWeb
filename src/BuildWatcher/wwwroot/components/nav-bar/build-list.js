import React, { PropTypes } from 'react'
import { Modal, Popover, Tooltip, OverlayTrigger, Button } from 'react-bootstrap'
import { some } from 'underscore'

class BuildList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let buildListItems = this.props.builds.map((b) => {

            let item = some(this.props.subscribedBuilds, (s) => s === b.name)
                        ? ''
                        : <button className='btn btn-sm btn-primary col-md-6' onClick={() => this.props.subscribeToBuild(b.name)}>+</button>;
            

            return (
                <tr key={b.name}>
                    <td></td>
                    <td>{b.friendlyName}</td>
                    <td>
                        {item}
                    </td>
                </tr>
            )
        });

        return (
            <table className="table table-striped table-hover table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Build</th>
                        <th>Subscribe</th>
                    </tr>
                </thead>
                <tbody>
                    { buildListItems }
                </tbody>
            </table>
        )
    }
}

BuildList.PropTypes = {
    builds: PropTypes.any.isRequired,
    subscribedBuilds: PropTypes.arrayOf(PropTypes.string).isRequired,
    subscribeToBuild: PropTypes.func.isRequired
}

export default BuildList