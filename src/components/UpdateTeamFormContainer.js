import React, { Component } from 'react'
import UpdateTeamForm from './UpdateTeamForm'
import { connect } from 'react-redux'
import { UpdateTeam } from '../actions/teams'

class UpdateTeamFormContainer extends Component {
    // componentDidMount() {

    //     this.props.UpdateTeam(2, 'deccon')

    // }
    state = {
        name: ""
    };

    onChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    onSubmit = event => {
        console.table(this.state);
        event.preventDefault();
        const teamId = this.props.teamId
        const name = this.state
        this.props.UpdateTeam(teamId, name)
        this.setState({
            name: ""
        });
    };
    render() {
        //console.log('props in updateteamform', this.props)
        return (
            <div>
                {/* {console.log('checking props in update form container', this.props.teamId)} */}
                <UpdateTeamForm onSubmit={this.onSubmit}
                    onChange={this.onChange}
                    values={this.state} />
            </div>
        )
    }
}
// const mapStateToProps = state => {

//     return {
//         upDatedTeam: state.team
//     }

// }
export default connect(null,{ UpdateTeam })(UpdateTeamFormContainer)