import React from 'react'
import "./TweetBox.css"
import { Avatar, Button } from "@mui/material"

function TweetBox() {
  return (
    <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
                <Avatar />
                <input placeholder="What's happening?" type="text" />
                {/* <input placeholder="Enter Image URL" type="text" /> */}
            </div>
            <Button variant="outlined">Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox