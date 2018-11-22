import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation'
import Char from './Char/Char'

class App extends Component {

  state = {
    name: "what what hush hush"
  }

  nameChangeHandler = event => {
    // copy state
    const copiedState = {...this.state}
    // insert new value into copied state
    copiedState.name = event.target.value
    // update state
    this.setState({name:copiedState.name})
  }

  deleteCharHandler = (index) => {
    const text = this.state.name.split('')
    text.splice(index, 1)
    const updatedText = text.join('')
    this.setState({name: updatedText})
  }

  render() {
    const charList = this.state.name.split('').map((singleChar, index) => 
      <Char
          key={index}
          clicked={() => this.deleteCharHandler(index)}
          singleCh={singleChar}
      />
    )
    return (
      <div className="App">
        <input onChange={event => this.nameChangeHandler(event)} value={this.state.name} />
        <Validation charCount={this.state.name.length} />
        {charList}
      </div>
    );
  }
}

export default App;
