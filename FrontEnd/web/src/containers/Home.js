import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from './../actions';

import {HomeView} from './../presentation/Home'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.fetchWidgets();
    this.login();
    this.state = {newWidget: {title: "", text: ""}};
  }

  componentWillMount() {
    this.interval = window.setInterval(this.updateCounter.bind(this), 1000);
  }

  componentWillUnmount() {
    window.clearInterval(this.interval);
  }

  updateCounter() {
    this.props.updateCounter(this.props.counter + 1);
  }

  login(){
    this.props.login('paul@audiofu.com', 'blahblah')
  }

  fetchWidgets() {
    if (this.props.widgets.length === 0){
      this.props.fetchWidgets();
    }
  }

  addWidget(widget) {
    this.props.addWidget(widget);
  }

  onFormSubmit(event){
    event.preventDefault();
    var widgets = this.props.widgets;
    widgets.push(this.state.newWidget);
    this.props.setWidgets(widgets);
    this.setState({newWidget: {title: "", text: ""}});
  }

  onFormUpdate(event, attribute){
    var newWidget = this.state.newWidget;
    newWidget[attribute] = event.target.value;
    this.setState(newWidget: newWidget);
  }

  render() {
    return <HomeView component={this} newWidget={this.state.newWidget} />
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