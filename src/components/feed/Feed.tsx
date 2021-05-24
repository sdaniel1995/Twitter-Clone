import React from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import '../../css/Feed.css'

const Feed = () => {
    return (
        <div className="feed">
            {/* Header */}
            <div className="feed-header">
                <h2>Home</h2>
            </div>

            {/* TweetBox */}
            <TweetBox/>

            {/* Post */}
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed
