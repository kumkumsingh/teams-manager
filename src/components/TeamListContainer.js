import React from 'react'
import { loadTeams } from '../actions/teams'
import { connect } from 'react-redux'
import TeamsList from '../components/TeamsList'

// import CreateTeamFormContainer from './CreateTeamFormContainer'

class TeamsListContainer extends React.Component {
    componentDidMount() {
        console.log('checking props', this.props)
        this.props.loadTeams()

    }

    render() {

        return (
            <div>
                <TeamsList teams={this.props.teams} />
                {/* <CreateTeamFormContainer /> */}

            </div>
        )

    }
}

const mapStateToProps = state => {
    console.log(state); // check what the state is
    return {
      teams: state.teams, // check react devtools, if the component has props.teams
      loggedIn: state.auth !== null
    };
  };

export default connect(mapStateToProps, { loadTeams })(TeamsListContainer)