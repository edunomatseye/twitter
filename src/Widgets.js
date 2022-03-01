import React from 'react'
import SearchIcon from "@mui/icons-material/Search"
import {TwitterTweetEmbed, TwitterTimelineEmbed} from "react-twitter-embed"
import "./Widgets.css"

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets__input">
          <SearchIcon className="widgets__searchIcon" />
          <input placeholder="Search Posterr" type="text" />
        </div>

        <div className="widgets__widgetContainer">
          <h2>What's happening</h2>

          <TwitterTweetEmbed tweetId={"1075743117591150592"} />

          <TwitterTimelineEmbed 
            sourceType="profile"
            screenName="edun_omatseye"
            options={{ height: 400 }}
          />
        </div>
    </div>
  )
}

export default Widgets