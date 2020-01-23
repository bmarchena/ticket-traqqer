import React, { Component } from 'react';
import './index.css';

class ViolationCard extends Component {
    render() {
        return (
            <div className="violationCard">
                <div className="violationCardHeader">
                    <p>{this.props.violationDate}, {this.props.violationTime}</p>
                </div>
                <div className="violationCardContent">
                    <p>Violation: {this.props.violationType}</p>
                    <p>Fine: ${this.props.violationFine}</p>
                </div>
                <div className="violationCardFooter">
                    <a href={this.props.violationSummons} target="_blank">View Summons</a>
                </div>
            </div>
        )
    }
}

export default ViolationCard;