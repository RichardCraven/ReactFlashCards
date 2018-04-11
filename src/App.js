import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        topic : ['React','Angular','General']
      }
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="control-field">
          <ControlField/>
        </div>
        <footer className="App-footer"></footer>
      </div>
    );
  }
}

class FlashCard extends React.Component {
  render() {
      return (
        <div className="flash-card noselect" onClick={this.props.onClick}>
          {this.props.value}
        </div>
        );
  }
};

class ControlField extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
        cards: {
          React :  [
           ['describe state vs props','props are read-only by their owning component, any component can change its own state or even a different components state if it wants to'],
           ['what is a pure component?',"a component that only rerenders on a change to state or props"],
           ['what does super() do?','it calls the parents constructor function, can pass arguments'],
          ],
          Angular : [
            ['what is a controller for?', 'for putting data on the scope (not processing lengthy business logic). Ideally the controller should just perform translation, coordinate work to the service and spit back the answer to the UI'],
            ['what is a service?', 'holds a reference to any object'],
            ['what is a factory?', 'is a function which returns an object'],
            ['what is a provider?', 'a function which returns a fuction'],
          ],
          General : [
            ['(Architecture) what is "business logic"?', 'put your business logic in your domain model'],
            ['(Architecture) where do you put your "application logic"?', 'in the application layer'],
            ['(Architecture) what is the "application layer"?', 'translates back and forth between the UI, and the domain layer, effectively hiding the domain from the rest of the system'],
            ['(Architecture) what is the "domain layer"?','for validation involving business logic (tedious shit)'],
            ['(Basic) what are immutable values?', 'values that cannot be changed. ex: strings, numbers'],
            ['(Flexbox) how do you align columns to the left?', 'align-items : left'],
            ['(Flexbox) how do you move "row" elements to the right?', 'justify-content : right'],
            ['(General) what is the domain name registrar', 'Icann is the recognized US company that determines who gets to sell domain names. They kinda own the internet'],
            ['(General) what is a DNS server/DNS solution?', 'The entity one level below the registrar, like GoDaddy or Route 53 that is trusted to manage domain names'],
            ['(General) what is a pem file', 'an encryption key/certificate for SSH'],
            ['(Architecture) What is REST?', 'Representational State Transfer is an architecture style using stateless protocol and standard operations like CRUD for the HTTP protocol, to have a client/server separation of concerns. Component interaction is the dominant factor in user-perceived performance and network efficiency.'],
            ['(General) what is SSH', 'secure shell/ secure communication layer to communicate with another computer over the internet'],
            ['(General) old school was Apache and PHP', 'NGinX and Node.js NGinX creates a reverse proxy which routes the URL to the right server port'],
            ['learn to use a shell text editor like VIM or NANO','ok'],
            ['(General) what does array.map() do', 'creates a new array with the results of calling a provided function on every element in the calling array'],
            ['(General) what does array.filter() do', 'creates a new array with all elements that pass the test implemented by the provided function'],
          ],
          General2 : [
            ['(General) what is a weak reference?', 'is there is no other reference to the object besides its definition, it can be garbage collected'],
            ['(General) what is a WeakSet?', 'references to objects in the collection are held weakly (will be garbage collected if there is no reference to them). A WeakSet.length will always return 0'],
            ['how can you (shallow) clone an object?', 'let clone = Object.assign({},originalObject)'],
            ['how can you deep clone an object?', 'let deepClone = JSON.parse(JSON.stringify(originalObject));']
          ],
          Computer_Science : [
            ['(Algorithms) what are the benefits of a merge sort vs a quick sort?', 'Merge Sort is stable. Merge sort does more moves but fewer compares than quick sort. If the compare overhead is greater than move overhead, then merge sort is faster. One situation where compare overhead may be greater is sorting an array of indices or pointers to objects, like strings.'],
            ['(Data Structures) Pros and cons of an ARRAY?','Optimal for indexing; bad at searching, inserting, and deleting (except at the end).'],
            ['(Data Structures) Pros and cons of a LINKED LIST?', 'Designed to optimize insertion and deletion, slow at indexing and searching.'],
            ['What makes Circular Linked List?', 'when the tail references the head'],
            ['Whats are Stacks?','(LIFO) data structures made with a linked list by having the head be the only place for insertion and removal'],
            ['What is a queue?', '(FIFO) data structure, made with a doubly linked list that only removes from head and adds to tail'],
            ['What is an application for a pre-order tree traversal?', 'Can duplicate an entire tree if you duplicate each node and edge as you go'],
            ['What is an application for an in-order tree traversal?', 'Commonly used on binary search trees because it returns values from the underlying set in order, according to the comparator that set up the binary search tree'],
            ['What is an application for a post-order tree traversal?', 'Traversal while deleting or freeing nodes and values can delete or free an entire binary tree']
          ]
        },
        topics : ["React","Angular", "General","General2","Computer_Science"],
        current_topic : 0,
        front_or_back: true
      };
      this.state.cardIndex = Math.floor(Math.random() * Math.floor(this.state.cards[this.state.topics[this.state.current_topic]].length));
      this.cachedCards = JSON.parse(JSON.stringify(this.state.cards));
    }
  nextCard(){
    let cards = JSON.parse(JSON.stringify(this.state.cards)),
    new_set = cards[this.state.topics[this.state.current_topic]], num;
    if(!this.state.front_or_back){new_set.splice(this.state.cardIndex, 1)};
    let cachedIndex = this.state.cardIndex;

    if(!this.state.cards[this.state.topics[this.state.current_topic]].length){
      alert('YOU ALL DONE!')
      this.setState({
        front_or_back: true
      });
      // cards[this.state.topics[this.state.current_topic]] = this.cachedCards[this.state.topics[this.state.current_topic]]
      return
    }
    num = Math.floor(Math.random() * Math.floor(this.state.cards[this.state.topics[this.state.current_topic]].length));
    while(num === cachedIndex && this.state.cards[this.state.topics[this.state.current_topic]].length > 1){
      num = Math.floor(Math.random() * Math.floor(this.state.cards[this.state.topics[this.state.current_topic]].length))
    };
    this.setState({
      cards : cards,
      front_or_back : true,
      cardIndex : num
    });
  }

  flipCard(i) {
      let front_or_back = false;
      this.setState({
        front_or_back : front_or_back
      });
      if(!this.state.front_or_back){
        this.nextCard();
      }
  }

  switchTopics() {
      let current_topic = this.state.current_topic,
          index;
      current_topic++
      if(current_topic > 4){
        current_topic = 0;
      }
      index = Math.floor(Math.random() * Math.floor(this.state.cards[this.state.topics[current_topic]].length))
      this.setState({
        current_topic: current_topic,
        front_or_back : true,
        cardIndex : index
      });
  }

  resetCards(){
    let cards = JSON.parse(JSON.stringify(this.state.cards)),
        newCardSet = JSON.parse(JSON.stringify(this.cachedCards));

    cards[this.state.topics[this.state.current_topic]] = newCardSet[this.state.topics[this.state.current_topic]];
    this.setState({
      cards : cards
    })
  }

  renderCard() {
    let front_or_back = null;
    if(!this.state.cards[this.state.topics[this.state.current_topic]].length){
      return  (
        <div>
           <FlashCard
              value = {'NO MORE CARDS FOR THIS TOPIC'}
              onClick={() => this.resetCards()}
           />
           <div className='reset-text noselect'> Click to reset </div> 
        </div>
      );
    }
    this.state.front_or_back ? front_or_back = 0 : front_or_back = 1;
    return  (
         <FlashCard
            value = {this.state.cards[this.state.topics[this.state.current_topic]][this.state.cardIndex][front_or_back]}
            onClick={() => this.flipCard()}
         /> 
    );
  }  

  render() {
      return (
        <div>
          <p className='topic'>TOPIC</p>
          <p className='top-text'>{this.state.topics[this.state.current_topic]}</p>
          <div className='inline-block'>
              <SwitchButton
               onClick={() => this.switchTopics()}
              />
              <NextButton
               onClick={() => this.nextCard()}
              />
              {this.renderCard()}
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

function SwitchButton(props) {
  return (
    <button className="switch-button" onClick={props.onClick}>
      SWITCH TOPICS
    </button>
  );
}

export default App;
