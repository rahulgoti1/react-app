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

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Insight', age: 500 },
        { name: 'BitBucket', age: 28 },
        { name: newName, age: 40 }
      ]
    })
  }

  changeNameHandler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 500 },
        { name: 'Test2', age: 28 },
        { name: 'Test3', age: 40 }
      ]
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }


    return (
      <div className="App" >
        <h1>Hi, I am react create app!!</h1>
        <h1>This is really working!!</h1>

        <button style={style} onClick={this.switchNameHandler.bind(this, 'New Name')}>Switch name</button>
        <button onClick={() => this.switchNameHandler('Please')}>Switch name</button>

        {this.state.persons.map(person =>
          <Person
            key={person.name}
            name={person.name}
            age={person.age}
            click={this.switchNameHandler.bind(this, person.age)}
            changed={this.changeNameHandler}
          >
          </Person>)}

      </div>

      // React.createElement('div', { className: 'App' },
      //   React.createElement('h1', null, 'I am Rahul!!'))
    );
  }
}

export default App;
