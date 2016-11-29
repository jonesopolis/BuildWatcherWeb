import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        var hatClass = 'hat ' + this.props.type;
        return (
            <div>{hatClass}</div>
        );
    }
}

export default Modal;