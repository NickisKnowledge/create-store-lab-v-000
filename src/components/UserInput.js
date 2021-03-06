import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      hometown: '',
    };
  }

  handleOnSubmit(event) {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown,
      },
    });

    this.setState({
      username: '',
      hometown: '',
    });
  }

  handleUsernameInput(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleHometownInput(event) {
    this.setState({
      hometown: event.target.value,
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <div>
            <label>Username: </label>
            <input
              type="text"
              value={this.state.username}
              onChange={(event) => this.handleUsernameInput(event)}
            /><br />
            <label>Hometown: </label>
            <input
              type="text"
              value={this.state.hometown}
              onChange={(event) => this.handleHometownInput(event)}
            />
          </div>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default UserInput;
