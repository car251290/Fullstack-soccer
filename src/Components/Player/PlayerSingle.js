import React from 'react';

const PlayerSingle = (props) => {
    return (
        <div className= "row">
            <div className ="col s12">
                <div className="card">
                    <img src= "soccer.jpeg" alt="soccer Player">
                    </img>
                    <span className ="card-title">{props.player.firstName}
                    {props.player.LastName}</span>
                </div>
                <div className= "card-content">
                    <p>Phone: {props.player.phone} -Email: {props.player.email}</p>
                    <p>Strength: {props.player.strength} -Endurance: {props.player.endurance}</p>
                </div>
                <div className= "card-action">
                    Team : {props.player.team}
                </div>
            </div>
        </div>
    );
}
export default PlayerSingle;