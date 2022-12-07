import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';

function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  }

  const nameList = [
    { first: "Bruce", last: "Wayne" },
    { first: "Clark", last: "Kent" },
    { first: "Princess", last: "Diana" }
  ]

  return (
    <div className="App">
      <Greet name="World" messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList name={nameList} />
      <Status status='error' />
      <Heading>Children</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
    </div>
  );
}

export default App;
