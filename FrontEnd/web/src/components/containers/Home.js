import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from './../../actions';

import {HomeView} from './../views/Home'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <HomeView component={this} />
  }
}

// mapping

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
}

const mapStateToProps = (state, ownProps) => {
  return {
    widgets: state.widgets,
    counter: state.counter,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);