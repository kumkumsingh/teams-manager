import React from 'react'


export default function TeamDetails(props) {
    if (!props.team.name) return 'Loading'
    console.log('checking prop', props.team)
    return (
        <div>

            <p>{`Team Name: ${props.team.name}`}</p>
            <p>List of Players</p>
            {props.team.name && <ul>{props.team.players.map((data, index) => {
                return <li key={index}>{data.name}</li>
            })}</ul>}
            <button onClick={props.onDelete}>DeleteTeam</button>

        </div>
    )
}
