import React from 'react'
import TweetBox from './TweetBox'
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
        </div>
    )
}

export default Feed
