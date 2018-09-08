import React, { Component } from 'react';
import './App.css';

import QuestionList from './QuestionList';
import SelectionControl from './SelectionControl';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Trivia!</h1>
        <div className="questionsContainer">
          <QuestionList />
          <SelectionControl />
        </div>
      </div>
    );
  }
}

export default App;
