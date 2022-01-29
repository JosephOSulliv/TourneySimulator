import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export const TourneyHome = ({}) => {
    return(
        <div className={'root-container'}>
            <div className={'content-container'}>
                <form>
                    <label>Name: </label>
                    <input type={"text"} id={"name"} name={"name"}></input>
                </form>
            </div>
        </div>
    );
}