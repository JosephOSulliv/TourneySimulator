import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { TourneyDataEntry } from './TourneyDataEntry';

export const TourneyHome = ({}) => {
    return(
        <div className={'root-container'}>
            <div className={'content-container'}>
                Welcome, create a Tournament Bracket!
                <TourneyDataEntry/>
                <div className={'bracket-container'}>
                    <br></br>
                    ----<br></br>
                    ----
                </div>
            </div>
        </div>
    );

    // <form>
    //                 <label>Name: </label>
    //                 <input type={"text"} id={"name"} name={"name"}></input>
    //             </form>
}