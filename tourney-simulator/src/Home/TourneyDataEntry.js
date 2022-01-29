import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const TourneyDataEntry = ({}) => {
    return(
        <form className='tourney-entry-form'>
            <label for={'Bracket Title'}>Bracket Name: </label>
            <input type={"text"} id={"name"} name={"name"}></input>
            <br/>
            <label for={'Bracket Size'}>Bracket Size: </label>
            <input type={"number"} id={"size"} name={"size"}></input>
            <br/>
            <input type={'submit'} value={'Submit'}></input>
        </form>
    );
}
function CreateTourney() {
    return (
        <div className={'bracket'}>

        </div>
    )
}