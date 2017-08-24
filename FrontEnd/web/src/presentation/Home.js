import React from 'react';

export const HomeView = (props) => {
  let component = props.component;
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h1>Counter:</h1>
          <h2>{component.props.counter}</h2>
          <h3>Widgets:</h3>
          <ul>
            {component.props.widgets.map((widget, index) => {return <Widget widget={widget} key={index} />;})}
          </ul>
          <h4>Add Widget:</h4>
          <WidgetForm onFormSubmit={component.onFormSubmit.bind(component)} onFormUpdate={component.onFormUpdate.bind(component)} newWidget={props.newWidget} />
        </div>
      </div>
    </div>
  )
}

const Widget = (props) => {
  let widget = props.widget;
  return (
    <li>{widget.title}: {widget.text}</li>
  )
}

const WidgetForm = (props) => {
  return (
    <form onSubmit={(e) => {props.onFormSubmit(e)}}>
      <div className="form-group">
        <label htmlFor="title">title</label>
        <input type="text" className="form-control" id="title" value={props.newWidget.title} onChange={(e) => {props.onFormUpdate(e, "title")}} />
      </div>
      <div className="form-group">
        <label htmlFor="text">text</label>
        <textarea className="form-control" id="text" value={props.newWidget.text} onChange={(e) => {props.onFormUpdate(e, "text")}}></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit <i className="material-icons right">send</i></button>
    </form>
  )
}