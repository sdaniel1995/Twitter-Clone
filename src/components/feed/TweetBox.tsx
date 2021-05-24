import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import '../../css/TweetBox.css'

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox--input">
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-"/>
                    <input type="text" placeholder="What's happening?" />
                </div>
                <input className="tweetBox-imageInput" type="text" placeholder="Optional: Enter image URL" />
                <Button className="tweetBox-tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
