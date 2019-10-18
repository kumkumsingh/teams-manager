import React from 'react'


export default function TeamDetails(props) {
    if (!props.team.name) return 'Loading'
    console.log('checking prop',props.team)
    return (
        <div>
            <p>List of Players</p>
            { props.team.name && <ul>{props.team.players.map( (data,index) => {
                return <li key={index}>{data.name}</li>
            })}</ul>}

        </div>
    )
}
