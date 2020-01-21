import React, {Component} from 'react';
import ViolationCard from './ViolationCard.js';
import './App.css';

class UserProfile extends Component{
    render() {
        return (
            <div className="userProfile">
                <div className="userProfileHeading">
                <p>Hello, 'USERNAME'. You currently have 'NUMBER' recorded violations on plate no. 'PLATENUMBER'.</p>
                <p>Here are your recorded violations, by most recent:</p>
                </div>
                <div className="userProfileViolations"> 
                    <ViolationCard violationDate="12/25/2019" violationType="EXPIRED MUNI MTR" violationTime="12:00AM" violationFine="55" violationSummons="http://nycserv.nyc.gov/NYCServWeb/ShowImage?searchID=VDBSQk1FMUVUWHBQVkdjeVQwRTlQUT09&locationName=_____________________"/>
                    <ViolationCard violationDate="12/25/2019" violationType="DOUBLE PARKING" violationTime="2:55AM" violationFine="70" violationSummons="http://nycserv.nyc.gov/NYCServWeb/ShowImage?searchID=VDBSQk1FMUVUWHBQVkdjeVQwRTlQUT09&locationName=_____________________" />
                    <ViolationCard violationDate="10/2/2019" violationType="NO STOPPING" violationTime="12:00AM" violationFine="55" violationSummons="http://nycserv.nyc.gov/NYCServWeb/ShowImage?searchID=VDBSQk1FMUVUWHBQVkdjeVQwRTlQUT09&locationName=_____________________" />
                    <ViolationCard />
                    <ViolationCard />
                </div>
            </div>
        )
    }
}

export default UserProfile;