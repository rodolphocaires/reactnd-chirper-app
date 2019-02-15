import React, { Component } from 'react'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        return (
            <div>
                <LoadingBar />
                {this.props.loading
                    ? null
                    : <Dashboard />}
            </div>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: !authedUser
    }
}

export default connect(mapStateToProps)(App)