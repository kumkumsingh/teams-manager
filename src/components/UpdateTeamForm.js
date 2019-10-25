import React from 'react'

export default function UpdateTeamForm(props) {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <label>change Team Name</label>
                {/* {name in strings has to be same as the name in the table} */}
                <input name="name" value={props.values.name1} onChange={props.onChange}></input>
                <input type="submit"></input>
            </form>
        </div>
    )
}
