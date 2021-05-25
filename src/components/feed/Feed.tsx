import React, { useState, useEffect } from 'react'
import TweetBox from './TweetBox'
import Post from './Post'
import db from '../../services/firebase'
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
            {posts.map(post =>(
                <Post displayName={post.displayName}
                username={post.username} 
                verified={post.verified} 
                text={post.text}
                avatar={post.avatar}
                image={post.image}
                />
            ))}
        </div>
    )
}

export default Feed
