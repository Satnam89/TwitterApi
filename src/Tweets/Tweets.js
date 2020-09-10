import React, { Component } from 'react';
import TweetsList from './TweetsList';

class Tweets extends Component {

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
          <div >
            <h1>Twitter API </h1>
            <h2>{printName} Tweets </h2>
            <button onClick={this.handleClick}>SwitchLeader</button>
            <TweetsList searchName={searchName}/>
          </div>
        );
      }
}

export default Tweets;