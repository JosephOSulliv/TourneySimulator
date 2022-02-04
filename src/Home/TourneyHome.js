import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { TourneyDataEntry } from './TourneyDataEntry';
import { TourneyCreator } from './TourneyCreator';

export const TourneyHome = ({}) => {
    const [makeTourney] = useState(false);
    return(
        <div className={'root-container'}>
            <div className={'content-container'}>
                Welcome, create a Tournament Bracket!
                <TourneyDataEntry/>
                <div className={'add-competitors'}>

                </div>
                <div className={'bracket-container'}>
                    <br></br>
                    ----<br></br>
                    ----

                </div>
            </div>
        </div>
    );

    function renderTournament(makeTourney) {
        if(makeTourney){
            return (
                <TourneyCreator/>
            );
        }
    }

    // <form>
    //                 <label>Name: </label>
    //                 <input type={"text"} id={"name"} name={"name"}></input>
    //             </form>
}