import React from 'react'
import { Avatar } from "@mui/material"

    
import PublishIcon from '@mui/icons-material/Publish';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import "./Post.css"

function Post({
    displayName,
    username,
    verified,
    text,
    image,
    avatar,
    timestamp
}) {
  return (
    <div className="post">
        <div className="post__avatar">
            <Avatar />
        </div>
        <div className="post__body">
            <div className="post__header">
                <div className="post__headerText">
                    <h3>
                        Edun Omatseye 
                        <span className="post__headerSpecial">
                            <VerifiedIcon className="post__badge" />
                        </span>
                    </h3>
                </div>
                <div className="post__headerDescription">
                    <p>I challenge you to build a nice application with me</p>
                </div>
                <img src={''} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post