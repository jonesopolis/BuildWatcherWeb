import React, { PropTypes } from 'react';
import BuildItem from './build-item';

class Builds extends React.Component {
    constructor(props) {
        super(props)
        props.getBuilds()
    }

    render() {
        let rows = this.props.builds.map(b => <BuildItem key={b.name} build={b} />);
        return <div>{rows}</div>;
    }
}

Builds.propTypes = {
    builds: PropTypes.array.isRequired,
    getBuilds: PropTypes.func.isRequired
}

export default Builds