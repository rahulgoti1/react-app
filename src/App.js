import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Rahul', age: 24 },
      { name: 'Bruce', age: 28 },
      { name: 'Cyrus', age: 40 }
    ],
    work: 'Remote'
  }

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'Insight', age: 500 },
        { name: 'BitBucket', age: 28 },
        { name: 'Redis', age: 40 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am react create app!!</h1>
        <h1>This is really working!!</h1>

        <button onClick={this.switchNameHandler}>Switch name</button>
        <button onClick={() => this.switchNameHandler()}>Switch name</button>

        {this.state.persons.map(person => <Person key={person.name} name={person.name} age={person.age}></Person>)}

      </div>

      // React.createElement('div', { className: 'App' },
      //   React.createElement('h1', null, 'I am Rahul!!'))
    );
  }
}

export default App;
