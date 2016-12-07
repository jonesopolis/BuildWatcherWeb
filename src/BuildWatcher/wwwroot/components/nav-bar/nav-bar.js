import React, { PropTypes } from 'react'
import { Modal, Popover, Tooltip, OverlayTrigger, Button } from 'react-bootstrap'
import BuildsListContainer from '../../containers/builds-list-container'

class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = { showModal: false };
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render() {
        const popover = (
            <Popover id="modal-popover" title="popover">
                very popover. such engagement
            </Popover>
        );
        const tooltip = (
            <Tooltip id="modal-tooltip">
                wow.
            </Tooltip>
        );
        return (
            <div>
                <nav className="navbar navbar-dark bg-inverse">
                    <div className="container">
                        <a className="navbar-brand" href="#">Build Watcher</a>

                        <span className="navbar-text float-sm-right float-md-right text-muted">{this.props.username}</span>

                        <button type="button" id='add-build' onClick={this.open}
                            className="btn btn-outline-success float-sm-right float-md-right navbar-btn">Add Build</button>
                    </div>
                </nav>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Available Builds</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BuildsListContainer />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>

            </div>
        )
    }
}

NavBar.propTypes = {
    username: PropTypes.string.isRequired
}

export default NavBar
