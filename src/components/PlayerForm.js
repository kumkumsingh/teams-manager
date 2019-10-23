import React from 'react'

export default function PlayerForm(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <label>Player Name:</label>
                <input value={props.values.name} name="name" onChange={props.onChange} />
                <label>Player Number:</label>
                <input value={props.values.number} name="number" onChange={props.onChange} />
                <input type="submit" />
            </form>
        </div>
    )
}
