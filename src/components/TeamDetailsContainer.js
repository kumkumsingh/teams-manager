import React, { Component } from 'react'
import TeamDetails from './TeamDetails'
import { fetchTeam } from '../actions/teams'
import { deleteTeam } from '../actions/teams'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import CreatePlayerFormContainer from './CreatePlayerFormContainer'
import UpdateTeamFormContainer from './UpdateTeamFormContainer'
class TeamDetailsContainer extends Component {
    state = {
        deleted: false
    }
    componentDidMount() {
        const id = this.props.match.params.id
        this.props.fetchTeam(id)
        console.log('checking props', this.props)
    }
    onDelete = () => {
        console.log('checking this.props.match.params.id ', this.props.match.params.id)
        console.log('checking this.props.match.params.id ', this.props.team.id)
        this.props.deleteTeam(this.props.team.id)
        this.setState({ deleted: true })
    }
    render() {
        if (this.state.deleted) {
            return <Redirect to="/teams" />;
        }
        return (
            <div>
                {this.props.loggedIn ? (
                    <CreatePlayerFormContainer teamId={this.props.team.id} />
                ) : (

                    // this.props.history.push('/login') also possible
                    this.props.history.push('/')
                        // <Link to="/login">Please log in to add players to this team.</Link>
                    )}
                <TeamDetails team={this.props.team}
                    onDelete={this.onDelete} />

                <UpdateTeamFormContainer teamId={this.props.team.id }/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    team: state.team,
    loggedIn: state.auth !== null
})
export default connect(mapStateToProps, { fetchTeam, deleteTeam })(TeamDetailsContainer)