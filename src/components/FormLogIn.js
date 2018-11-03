import React, { Component } from 'react';
import { Email } from './inputs/Email';
import { Password } from './inputs/Password';

class LogInForm extends Component {
  inputs = {
    email: React.createRef(),
    password: React.createRef(),
  }

  state = {
    email: {
      value: '',
      isValid: true,
    },
    password: {
      value: '',
      isValid: true,
    },
  }

  validate(input, value) {
    return false;
  }

  handleOnSubmit = e => {
    e.preventDefault();

    const form = Object.keys(this.state)
      .reduce((form, input) => {
        const value = this.state[input].value;
        const isValid = this.validate(input, value);
        form[input] = {
          value,
          isValid,
        };
        return form;
      }, {});

    this.setState(form);
  }

  handleOnChange = (input, value) => {
    this.setState({
      [input]: {
        value,
        isValid: true,
      }
    });
  }

  handleOnBlur = (input, value) => {
    this.validate(input, value);
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <Email
          ref={this.inputs.email}
          value={this.state.email}
          onChange={value => this.handleOnChange('email', value)}
          onBlur={value => this.handleOnBlur('email', value)}
        />
        <Password
          ref={this.inputs.password}
          value={this.state.password}
          onChange={value => this.handleOnChange('password', value)}
          onBlur={value => this.handleOnBlur('password', value)}
        />
        <button>Log in</button>
      </form>
    );
  }
}

export { LogInForm };
