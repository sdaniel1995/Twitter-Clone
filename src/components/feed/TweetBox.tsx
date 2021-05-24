import React from 'react'
import { Avatar, Button } from '@material-ui/core'
import '../../css/TweetBox.css'

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox--input">
                    <Avatar src="https://kajabi-storefronts-pro/"/>
                </div>
                <Button>Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
