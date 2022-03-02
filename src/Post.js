import React, {forwardRef} from 'react'
import { Avatar } from "@mui/material"

import PublishIcon from '@mui/icons-material/Publish';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import ReactTimeAgo from 'react-time-ago'

import "./Post.css"

const Post = forwardRef(
    function Post({
        displayName,
        username,
        verified,
        text,
        image,
        avatar,
        timestamp
    }, ref) {

    
    return (
        <div className="post" ref={ref}>
            <div className="post__avatar">
                <Avatar />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{" "}
                            <span className="post__headerSpecial">
                                {verified && <VerifiedIcon className="post__badge" />} 
                                @{username} {" . "} 
                                <ReactTimeAgo date={timestamp} locale="en-US"/>
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                    <img src={image} alt="" />
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
);

export default Post