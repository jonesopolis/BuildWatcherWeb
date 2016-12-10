import React, { PropTypes } from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'

class BuildItem extends React.Component {
    constructor(props) {
        super(props);
    
        this.unsubscribe = this.unsubscribe.bind(this);
    }

    unsubscribe() {
        this.props.unsubscribeFromBuild(this.props.build.name);
    }

    render() {

        const popoverHoverFocus = (
            <Popover id="popover-trigger-hover-focus" title="Popover bottom">
                <strong>Holy guacamole!</strong> Check this info.
            </Popover>
        );

        return (
            <div className="col-md-4 col-lg-4">
                <div className="card">
                    <div className='card-header'>
                        <span>{this.props.build.friendlyName}</span>
                        <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={popoverHoverFocus}>
                            <Button bsSize="xsmall" style={{ float: 'right' }} onClick={this.unsubscribe}>...</Button>
                        </OverlayTrigger>
                    </div>
                    <div className="card-block">
                        <p className="card-text">{this.props.build.name}</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div >
        );
    }
}

BuildItem.propTypes = {
    build: PropTypes.any.isRequired,
    unsubscribeFromBuild: PropTypes.func.isRequired
}

export default BuildItem