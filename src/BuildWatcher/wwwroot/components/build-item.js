import React, { PropTypes } from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap'

class BuildItem extends React.Component {
    constructor(props) {
        super(props);

        console.log(props);

        this.successImg = <img src='../../imgs/success.png' className='build-img' />
        this.failureImg = <img src='../../imgs/failure.png' className='build-img' />
        this.partialSuccessImg = <img src='../../imgs/partial.png' className='build-img' />
        this.inProgressImg = <img src='../../imgs/in-progress.png' className='build-img' />
        this.unknownImg = <img src='../../imgs/unknown.png' className='build-img' />

        this.unsubscribe = this.unsubscribe.bind(this);
        this.popoverHoverFocus = this.popoverHoverFocus.bind(this);
        this.getImg = this.getImg.bind(this);
    }

    unsubscribe() {
        this.props.unsubscribeFromBuild(this.props.build.name);
    }

    getImg(build) {
        switch(build.result.toUpperCase()) {
            case "SUCCESS": return this.successImg;
            case "FAILURE": return this.failureImg;
            case "PARTIALSUCCESS": return this.partialSuccessImg;
            case "INPROGRESS": return this.inProgressImg;
            default: return this.unknownImg;
        }
    }
    popoverHoverFocus(build) {
        return (
            <Popover id="popover-trigger-hover-focus">
                <table className="table table-striped table-hover table-sm">
                    <tbody>
                        <tr>
                            <td>By</td>
                            <td>{build.requestedBy}</td>
                        </tr>
                        <tr>
                            <td>Started</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>Build Time</td>
                            <td>{build.length}</td>
                        </tr>
                        <tr>
                            <td>Result</td>
                            <td>{build.result}</td>
                        </tr>
                    </tbody>
                </table>
            </Popover>
        );        
    }

    render() {
        return (
            <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card">
                    <div className='card-header'>
                        <span>{this.props.build.friendlyName}</span>

                        <a className='btn btn-sm btn-danger float-right' onClick={this.unsubscribe}>-</a>

                    </div>
                    <div className="card-block">

                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-6 build-img-container-lg'>
                                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={this.popoverHoverFocus(this.props.build.latestBuild)}>
                                    {this.getImg(this.props.build.latestBuild)}
                                </OverlayTrigger>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3 build-img-container-sm'>
                                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={this.popoverHoverFocus(this.props.build.secondaryBuild)}>
                                    {this.getImg(this.props.build.secondaryBuild)}
                                </OverlayTrigger>
                            </div>
                            <div className='col-lg-3 col-md-3 col-sm-3 col-xs-3 build-img-container-sm'>
                                <OverlayTrigger trigger={['hover', 'focus']} placement="top" overlay={this.popoverHoverFocus(this.props.build.tertiaryBuild)}>
                                    {this.getImg(this.props.build.tertiaryBuild)}
                                </OverlayTrigger>
                            </div>
                        </div>
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