import React from 'react'

export default function(props) {
    return (<div>
    <form onSubmit={props.onSubmit}>
        <label>Team Name</label>
        <input value={props.name} name="name" onChange={props.onChange} />
        <input type="submit"/>

    </form>
    </div>)
}
