import React, {useState} from 'react'
import "./TweetBox.css"
import { Avatar, Button } from "@mui/material"

import { useRecoilState } from 'recoil'
import { postsAtom } from './_state'

const url = 'http://localhost:3001'
function TweetBox() {

  const [tweetMessage, setTweetMessage] = useState("")
  const [msgLengthLeft, setMsgLengthLeft] = useState(777)
  const [posts, setPosts] = useRecoilState(postsAtom)
 
  const sendTweet = async e => {
    e.preventDefault();
    fetch(`${url}/posts`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'}, 
      body: JSON.stringify({
        displayName: "Edun Omatseye",
        username: "edun_omatseye",
        verified: true,
        text: tweetMessage,
        timestamp: Date.now(),
        retweeted: false,
        quoted: false,
        pure: true,
        followed: false,
        following: false,
        love: false
      })
    })
    .then(resp => resp.json())
    .then(result => {
      setTweetMessage("");
      const newPosts = [...posts, result]
      newPosts.sort((a,b)=> b.timestamp - a.timestamp)
      setPosts(newPosts)
      console.log(result)
    }).catch(console.log)
  }

  const calMsgLength =(e)=> {
    const value = e.target.value;
    const len = 777 - Number(value.length)
    setMsgLengthLeft(len)
  }

  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar />
                <textarea 
                  value={tweetMessage} 
                  placeholder="What's happening?" 
                  type="text"
                  onChange={(e) => {setTweetMessage(e.target.value); calMsgLength(e) }} 
                />
                {" . "}<div style={{color: 'white', backgroundColor: msgLengthLeft>700?'green':'red', borderRadius: 20, padding: 5}}>{msgLengthLeft}</div>
            </div>
            <Button onClick={sendTweet} variant="outlined">Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox