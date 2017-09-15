import {Form, Field} from 'simple-react-forms';
import React, {Component} from 'react';

class SimpleFormDemo extends Component {
    state = {
        city: '',
        stateName: '',

    }
  onClickHandler () {
    let formValues = this.refs['simpleForm'].getFormValues()
    this.setState({
        city: formValues.city,
        stateName: formValues.state
    })
    console.log("city=" + this.state.city)
    console.log("state=" + this.state.stateName)
    }
  render () {
    {this.state.city  &  this.state.city
      }
      
    return (
    <div>
        {this.state.city &&
      <h2>city={this.state.city}</h2>}
      {this.state.stateName &&
      <h2>state={this.state.stateName}</h2>}

      <Form ref='simpleForm'>
          <Field
            name='city'
            label='Enter City name'
            type='text'
          />
          <Field
            name='state'
            label='Enter State name'
            type='text'
          />
      </Form>
      <button onClick={this.onClickHandler.bind(this)}>Submit</button>
    </div>

    );
  }
}

export default SimpleFormDemo