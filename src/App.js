import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {

  state = {
    usernames : [
      {name: "user1"}
    ]
  }

  nameChangeHandler = (event) => {
    this.setState({
      usernames : [
        {name: event.target.value}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput changename={this.nameChangeHandler} name={this.state.usernames[0].name}/>
        <UserOutput name={this.state.usernames[0].name}/>
        <UserOutput name={this.state.usernames[0].name}/>
      </div>
    );
  }
}

export default App;
