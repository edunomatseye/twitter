import React, {useEffect, useState} from 'react'
import "./Feed.css"
import {useParams, useNavigate} from 'react-router-dom'
import Post from './Post'
import FlipMove from "react-flip-move";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useRecoilState } from 'recoil'
import { postsAtom, filteredPostsAtom } from './_state'
import Button from '@mui/material/Button';

const url = 'http://localhost:3001'
function Feed({children}) {
  const navigate = useNavigate()
  const initPostConfig = {
    showAllPost: true,
    postLabel: "following"
  }

  const [posts, setPosts] = useRecoilState(postsAtom)
  const [filteredPosts, setFilteredPosts] = useRecoilState(filteredPostsAtom)

  //LOCAL state
  const [postConfig, setPostConfig] = useState(initPostConfig)
  const {username} = useParams();

  useEffect(()=>{
    const fetchPosts= async()=> {
      try{
        const r = await fetch(`${url}/posts`)
        const p = await r.json()
        setPosts(p)
      }catch(e){
        console.error(e)
      }
    }
    fetchPosts()
  },[setPosts]);

  useEffect(()=> {
    setFilteredPosts(posts)
  }, [posts, setFilteredPosts])
  
  const togglePost=()=> {
    const showAllPost = !postConfig.showAllPost
    const postLabel = showAllPost? "following": "All Posts"
    
    //get all filtered post (following)
    const following = posts.filter((e, i, arr)=>{
      return e.following === true
    })
    //set filtered post
    showAllPost? setFilteredPosts(posts): setFilteredPosts(following)
    setPostConfig({postLabel, showAllPost})
  }

  return (
    <div  className="feed">
      {/* Header */}
      <div className="feed__header">
        { typeof(username) === "string"
        ? <div className="feed__arrowbutton"><ArrowBackIcon /> <span onClick={()=> navigate(-1)}> @{username}</span></div>
        : <h2>Home</h2> 
        }
        <Button onClick={togglePost}>{postConfig.postLabel}</Button>
      </div>

      {/**TweetBox */}
      {/* <TweetBox /> */}
      {children}

      {/** Post */}
      <FlipMove>
        {filteredPosts.map((post) => (
          <Post
            key={post.id}
            postProp={post}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed