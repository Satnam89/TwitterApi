import React, { Component } from 'react';
import './App.css';
import Tweets from './Tweets/Tweets';
//import axios from 'axios';
//import TweetsList from './Tweets/TweetsList';


class App extends Component {
  /*
  state = {
    flag: true,
  }

  handleClick = (e)=> {
    this.setState({
      flag:!this.state.flag,
    })
  }

  render(){
    var searchName = "HillaryClinton"
    var printName = "Hillary Clinton"
    if(this.state.flag) {
      searchName ="realDonaldTrump";
      printName ="Donald Trump";
    }
    return (
      <div className="App">
        <h1>Twitter API </h1>
        <h2>{printName} Tweets </h2>
        <button onClick={this.handleClick}>SwitchLeader</button>
        <TweetsList searchName={searchName}/>
      </div>
    );
    */
   render(){
     return(
      <div>
         <Tweets/>
      </div>
     )
   }
  

}

export default App;
