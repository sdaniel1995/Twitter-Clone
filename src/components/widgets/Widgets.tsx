import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'
import '../../css/Widgets.css'

const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets-input">
                <SearchIcon className="widgets-searchIcon"/>
                <input type="text" placeholder="Search Twitter"/>
            </div>
            <div className="widgets-widgetContainer">
                <h2>What's happening</h2>
                <TwitterTweetEmbed tweetId={"1209928117432848385"}/>
                <TwitterTimelineEmbed sourceType="profile" screenName="DaProdigi" options={{ height: 400 }}/>
                <TwitterShareButton url={"https://facebook.com/cleverprogrammer"} options={{ text: "#reactjs is awesome", via: "cleverqazi"}}/>
            </div>
        </div>
    )
}

export default Widgets
