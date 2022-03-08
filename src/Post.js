import React, {useState, forwardRef, useCallback} from 'react'
import { Avatar } from "@mui/material"

import PublishIcon from '@mui/icons-material/Publish';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import ReactTimeAgo from 'react-time-ago'
import {Link} from 'react-router-dom'

import "./Post.css"

const url = "http://localhost:3001"
const Post = forwardRef(
    function Post({postProp}, ref) {
        const [post, setPost] = useState(postProp)

        const toggleQuoted = useCallback(()=>{
            const toggledQuoted = !post.quoted
            const updatedProfile = {...post, quoted: toggledQuoted}
            
            fetch(`${url}/posts/${post.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({quoted: toggledQuoted})
            })
                .then(response => response.json())
                .then(d => {setPost(updatedProfile); console.log(d)})
                .catch(err => {console.log("Custome error", err)})
            }, [post]
        )

        const toggleRetweet = useCallback(()=>{
            const toggledRetweet = !post.retweeted
            const updatedProfile = {...post, retweeted: toggledRetweet}
            
            fetch(`${url}/posts/${post.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({retweeted: toggledRetweet})
            })
                .then(response => response.json())
                .then(d => {setPost(updatedProfile); console.log(d)})
                .catch(err => {console.log("Custome error", err)})
            }, [post]
        )

        const toggleLove = useCallback(()=>{
            const toggledLove = !post.love
            const updatedProfile = {...post, love: toggledLove}
            
            fetch(`${url}/posts/${post.id}`, {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({love: toggledLove})
            })
                .then(response => response.json())
                .then(d => {setPost(updatedProfile); console.log(d)})
                .catch(err => {console.log("Custome error", err)})
            }, [post]
        )

        return (
            <div className="post" ref={ref}>
                <div className="post__avatar">
                    <Avatar />
                </div>
                <div className="post__body">
                    <div className="post__header">
                        <div className="post__headerText">
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            {post.retweeted && <span className="post__retweet"><RepeatIcon /> <h4> Retweeted</h4></span>}
                            {post.quoted && <span className="post__retweet"><ChatBubbleOutlineIcon /> <h4> Quoted</h4></span>}
                        </div>
                            <h3>
                                <Link to={`/profile/${post.username}`}>{post.displayName}{" "}</Link>
                                <span className="post__headerSpecial">
                                    {post.verified && <VerifiedIcon className="post__badge" />} 
                                    {"  "}  @{post.username} {" . "} 
                                    <ReactTimeAgo date={post.timestamp} locale="en-US"/>
                                </span>
                            </h3>
                        </div>
                        <div className="post__headerDescription">
                            <p>{post.text}</p>
                        </div>
                        <img src={post.image} alt="" />
                        <div className="post__footer">
                            <ChatBubbleOutlineIcon color={post.quoted ? "primary":""} onClick={toggleQuoted} fontSize="small" />
                            <RepeatIcon color={post.retweeted ? "primary":""} onClick={toggleRetweet} fontSize="small" />
                            <FavoriteBorderIcon color={post.love ? "primary":""} onClick={toggleLove} fontSize="small" />
                            <PublishIcon fontSize="small" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
);

export default Post