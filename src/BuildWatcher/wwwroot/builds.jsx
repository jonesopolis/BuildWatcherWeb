import React from 'react';
import BuildItem from './build-item.jsx';

class Builds extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let rows = this.props.builds.map(b => <BuildItem key={b.name} build={b} />);
        return <div>{rows}</div>;
    }
}

export default Builds