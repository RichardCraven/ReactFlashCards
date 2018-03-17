import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to my FLASHCARDS APP</h1>
        </header>
        <div className="control-field">
          <ControlField/>
        </div>
      </div>
    );
  }
}

class FlashCard extends React.Component {
  render() {
      return (
        <div className="flash-card" onClick={this.props.onClick}>
          {this.props.value}
        </div>
        );
  }
};

class ControlField extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        cards: [
          ['describe state vs props','gotta have my props'],
          ['describe immutability','you the mutability'],
          ['what is a pure component','its a component thats pure'],
          ['describe MVC','where my opium pipe?']
        ],
      };
      this.state.tracker = Array(this.state.cards.length).fill(false)
      this.cardIndex = Math.floor(Math.random() * Math.floor(this.state.cards.length));
    }
  nextCard(){
    let available = this.state.cards.filter(function(value, index){
            if(!this.state.tracker[index]){
              return value
            }
            // return !this.state.tracker[index]
        }, this),
        tracker = Array(available.length).fill(false);
    // console.log('available is :', available, 'len gth is ', available.length)
    if(!available.length){
      alert('YOU ALL DONE!')
      return
    }
    this.cardIndex = Math.floor(Math.random() * Math.floor(available.length))
  // console.log(this.cardIndex)
    this.setState({
      cards: available,
      tracker: tracker
    });
  }

  flipCard(i) {
      let cards = this.state.cards.slice(),
            tracker = this.state.tracker.slice();
      tracker[i] = true;
      this.setState({
        tracker: tracker,
        cards: cards
      });
    }

  renderCard(index) {
    console.log(this.state.tracker[index] ? this.state.cards[index][1] : this.state.cards[index][0])
    return  (
         <FlashCard
            value = {this.state.tracker[index] ? this.state.cards[index][1] : this.state.cards[index][0]}
            onClick={() => this.flipCard(index)}
         /> 
    );
  }  

  render() {
      return (
        <div>
          <p>YO HOMES</p>
          <div className='inline-block'>
              {this.renderCard(this.cardIndex)}
              <NextButton
               onClick={() => this.nextCard()}
              />
          </div>
        </div>
        );
  }
};

function NextButton(props) {
  return (
    <button className="next-button" onClick={props.onClick}>
      NEW CARD
    </button>
  );
}

export default App;
