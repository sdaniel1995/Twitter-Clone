import React, { useState } from 'react'
import { Avatar, Button } from '@material-ui/core'
import db from '../../services/firebase'
import '../../css/TweetBox.css'

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState('')
    const [tweetImage, setTweetImage] = useState('')

    const sendTweet = (e: any) => {
        e.preventDefault()
        db.collection('posts').add({
            displayName: 'Shane Daniel',
            username: 'im_a_dada',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
        })
        setTweetMessage('')
        setTweetImage('')
    }

    return (
        <div className="tweetBox">
            <form action="">
                <div className="tweetBox--input">
                    <Avatar src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"/>
                    <input type="text" placeholder="What's happening?" value={tweetMessage} onChange={e => setTweetMessage(e.target.value)}/>
                </div>
                <input className="tweetBox-imageInput" type="text" placeholder="Optional: Enter image URL" value={tweetImage} onChange={e => setTweetImage(e.target.value)} />
                <Button type="submit" onClick={sendTweet} className="tweetBox-tweetButton">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox
