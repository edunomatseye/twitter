import React, {useState, useRef} from 'react'
import "./TweetBox.css"
import { Avatar, Button } from "@mui/material"

import db from './firebase'
import { collection, addDoc } from "firebase/firestore"

function TweetBox({
  tweetRef
}) {

  const [tweetMessage, setTweetMessage] = useState("")

  const sendTweet = async e => {
    e.preventDefault()
    try {
      const docRef = await addDoc(collection(db, "posts"), {
        displayName: "Edun Omatseye",
        username: "edun_omatseye",
        verified: true,
        text: tweetMessage,
        timestamp: Date.now(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    } finally {
      setTweetMessage("")
    }
  }
 


  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar />
                <input 
                  value={tweetMessage} 
                  placeholder="What's happening?" 
                  type="text"
                  ref={tweetRef}
                  onChange={(e) => {setTweetMessage(e.target.value)}} 
                />
                {/* <input placeholder="Enter Image URL" type="text" /> */}
            </div>
            <Button onClick={sendTweet} variant="outlined">Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox