import React, { Component } from 'react';
import {card} from 'reactstrap'

export default class HomeInfo extends Component {
    render() {
        return (
            <div className="info-section">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Job Fields</h5>
                        <p className="card-text">Search a variety of employment fields to fit your interest. Locations include industries such as: tech, law, medical, sales, and more.</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">About We Hiring</h5>
                        <p className="card-text">We Hiring is an employment site designed for simplicity. Narrow search results to show jobs that fit the applicants desired field, location, and wages. </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Locations</h5>
                        <p className="card-text">Search for job postings in locations all over the world. Browse by posting whether the employer is based in a major city, small town, or offers remote work.</p>
                    </div>
                </div>
            </div>
        )
    }
}