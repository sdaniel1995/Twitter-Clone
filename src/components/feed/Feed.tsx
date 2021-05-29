import React, { useState, useEffect } from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../../services/firebase'
import FlipMove from 'react-flip-move'
import '../../css/Feed.css'

const Feed = () => {
    const [posts, setPosts] = useState<Array<any>>([])
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, [])


    return (
        <div className="feed">
            <div className="feed-header">
                <h2>Home</h2>
            </div>
            <TweetBox/>
            <FlipMove>
                {posts.map(post =>(
                    <Post displayName={post.displayName}
                    key={post.text}
                    username={post.username} 
                    verified={post.verified} 
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                    />
                ))}
            </FlipMove>
        </div>
    )
}

export default Feed
