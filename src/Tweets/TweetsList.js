
import React, { Component } from 'react';
import axios from 'axios';
import TweetsSummary from './TweetsSummary';
//import TweetsSummary from './TweetsSummary';
import {connect} from 'react-redux';

class Tweetslist extends Component {

    state = {
        tweets:null
    }

    componentDidUpdate(prevProps){
        console.log("componentDidUpdate");
        if(this.props.searchName !== prevProps.searchName) {
            this.componentDidMount();
        }
    }
    
    componentDidMount() {
        console.log("componentDidMount");
        const searchName = this.props.searchName;
        const token = "AAAAAAAAAAAAAAAAAAAAAPDJHQEAAAAA3Axxk5U%2FfRCWdeENS8caZjkHP%2FU%3DG3CQW8AWaGFod57XnTepdsKcgaQQE7QLJUlbFpWPoiOcGz3s5z";
        const uri = "https://api.twitter.com/2/tweets/search/recent?query=from:"+ searchName;

        axios.get(uri, {
            headers: { 'Authorization': 'Bearer ' + token }
        }).then(
            response => {
                //console.log(response.data);
                this.setState({
                    tweets: response.data
                })
                //return response.data;
            }
        );
    }

    render() {
    console.log("Render called Tweetslist")
    console.log(this.props);
    this.props.addTweets(this.state.tweets);
    const tweetsProp = this.props.tweets;
    const tweets = tweetsProp ? <h1>{tweetsProp.data.map(tweet => {
        return (
            <div>
                <TweetsSummary key={tweet.id} tweet={tweet}/>
            </div>
        )
    })}: </h1>:<h1>Loading...</h1>

        return (
            <div>{tweets}</div>
        )
    }
}
const mapStatetoProps = (state, ownProps) => {
    //console.log("mapStatetoProps");
    //console.log(state);
    return {
        tweets:state.tweets
    }
}

const mapDispatchtoProps = (dispatch) => {
    //const tweets=this.state.tweets;
    return {
        addTweets: (tweets) => {dispatch({type: 'ADD_TWEETS',tweets:tweets}) }
    }
}



export default connect(mapStatetoProps,mapDispatchtoProps) (Tweetslist);