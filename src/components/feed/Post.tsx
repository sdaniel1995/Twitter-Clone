import React from 'react'

import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorderOutlined'
import PublishIcon from '@material-ui/icons/Publish'

import '../../css/Post.css'

const Post = ({ displayName, username, verified, text, image, avatar }: any) => {
    return (
        <div className="post">
            <div className="post-avatar">
                <Avatar src="#"/>
            </div>
            <div className="post-body">
                <div className="post-header">
                    <div className="post-headerText">
                        <h3>Shane{" "} <span className="post-headerSpecial"><VerifiedUserIcon className="post-badge"/>@im_a_dada</span></h3>
                    </div>
                    <div className="post-headerDescription">
                        <p>I challenge you to build a twitter clone with React</p>
                    </div>
                </div>
                <img src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" alt="" />
                <div className="post-footer">
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <RepeatIcon fontSize="small"/>
                    <FavoriteBorderIcon fontSize="small"/>
                    <PublishIcon fontSize="small"/>
                </div>
            </div>
        </div>
    )
}

export default Post
