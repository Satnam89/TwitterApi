import React, { Component } from 'react';

class TweetsSummary extends Component {

    render() {
        //console.log(this.props.tweet.id)
        return (
        <p>{this.props.tweet.text}</p>
        )
    }
}

export default TweetsSummary;