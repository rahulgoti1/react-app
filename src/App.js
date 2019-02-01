import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: "1", name: 'Rahul', age: 24 },
      { id: "2", name: 'Bruce', age: 28 },
      { id: "3", name: 'Cyrus', age: 40 }
    ],
    work: 'Remote'
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: 'Insight', age: 500 },
        { name: 'BitBucket', age: 28 },
        { name: newName, age: 40 }
      ],
      showPerson: false
    })
  }

  changeNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (index) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPerson
    this.setState({
      showPerson: !doesShow
    })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((person, index) =>
            <Person
              key={person.id}
              name={person.name}
              age={person.age}
              // click={this.switchNameHandler.bind(this, person.age)}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.changeNameHandler(event, person.id)}
            >
            </Person>)}
        </div>
      );
    }


    return (
      <div className="App" >
        <h1>Hi, I am react create app!!</h1>
        <h1>This is really working!!</h1>

        {/* <button style={style} onClick={this.switchNameHandler.bind(this, 'New Name')}>Switch name</button> */}
        {/* <button onClick={() => this.switchNameHandler('Please')}>Switch name</button> */}
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>

        {persons}
      </div>

      // React.createElement('div', { className: 'App' },
      //   React.createElement('h1', null, 'I am Rahul!!'))
    );
  }
}

export default App;
