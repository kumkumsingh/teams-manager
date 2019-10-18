import React, { Component } from 'react'
import TeamDetails from './TeamDetails'
import { fetchTeam } from '../actions/teams'
import { connect } from 'react-redux'
class TeamDetailsContainer extends Component {
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchTeam(id)
    }
    render() {
        return (
            <div>
                <TeamDetails team={this.props.team} />
            </div>
        )
    }
}
const mapStateToProps = state => ({
    team: state.team
})
export default connect(mapStateToProps, { fetchTeam })(TeamDetailsContainer)