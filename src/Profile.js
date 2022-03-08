import React, { useEffect, useState, useCallback } from 'react'
import './Profile.css'
import DateRangeIcon from '@mui/icons-material/DateRange';
import {Link} from 'react-router-dom'
import logo from './images/avatar.jpeg'
import { useParams } from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import Button from '@mui/material/Button';
import { useRecoilState, useRecoilValue } from 'recoil';
import { profileAtom, userAtom } from './_state'

const url = "http://localhost:3001"
function Profile() {
  const {username} = useParams()
  const user = useRecoilValue(userAtom)
  const [profile, setProfile] = useRecoilState(profileAtom)
 
  const [postsCount, setPostsCount] = useState(0)
  const [followingCount, setFollowingCount] = useState(0)
  const [followedCount, setFollowedCount] = useState(0)

  const toggleFollowing=  useCallback(()=>{
    const toggledFollow = !profile.following
    const updatedProfile = {...profile, following: toggledFollow}
    
    fetch(`${url}/profiles/${profile.id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({following: toggledFollow})
    })
        .then(response => response.json())
        .then(d => {setProfile(updatedProfile)})
        .catch(err => {console.log("Custome error", err)})
  }, [profile, setProfile])

  //get current profile
  useEffect(()=> {
    const getCurrentProfile =async ()=> {
        try {
            const resp = await fetch(`${url}/profiles`)
            const profiles = await resp.json()
            const currentProfile = profiles.filter(u => u.username === username)
            setProfile(currentProfile[0])
        }catch(e){
            console.log(e)
        }
    }
    getCurrentProfile()
  }, [username, setProfile])

  //get total numner of tweets
  useEffect(()=> {
    const getPostCount = async ()=> {
        try {
            const resp = await fetch(`${url}/posts?username=${username}`)
            const data = await resp.json()
            setPostsCount(data.length)
        }catch(e){
            console.log(e)
        }
    }
    getPostCount()
  }, [username, setPostsCount])

  //get all following count 
  useEffect(()=> {
    const getFollowingCount = async ()=> {
        try {
            const resp = await fetch(`${url}/posts?username=${username}&following=true`)
            const data = await resp.json()
            setFollowingCount(data.length)
        }catch(e){
            console.log(e)
        }
    }
    getFollowingCount()
  }, [username, setFollowingCount])

  //get all followed count 
  useEffect(()=> {
    const getFollowedCount = async ()=> {
        try {
            const resp = await fetch(`${url}/posts?username=${username}&followed=true`)
            const data = await resp.json()
            setFollowedCount(data.length)
        }catch(e){
            console.log(e)
        }
    }
    getFollowedCount()
  }, [username, setFollowedCount])

  return (
    <div className="profile">
        <div>
            <div className="profile__unfollow">
                <div id="profile-bg"></div>
                <div className="profile__image_button">
                    <Link to="#" id="profile-link">
                        <img src={logo} id="profile-img" alt="profile" />
                    </Link>
                    {(user.username !== profile.username) && <Button onClick={toggleFollowing} variant="contained">{profile.following? "Unfollow": "Follow"}</Button>}
                    
                </div>
            </div>

            <div id="profile-marg">
                <div id="profile-name">
                    <Link to="#">{profile.displayName}</Link>
                </div>
                <div>
                    <Link to="#">@<span>{profile.username}</span></Link>
                </div>
                <div className="calender">
                    <DateRangeIcon />
                        <span>
                        {(new Date(profile.timestamp).toString()).slice(0,16)} {" - "}
                        
                        Joined <ReactTimeAgo date={profile.timestamp || 1646226676124} locale="en-US"/>
                        </span>
                </div>
            </div>

            
            <div id="profile-state">
                <ul id="profile-Arrange">
                    <li id="profile-details">
                        <Link to="#">
                            <span className="d-block" id="profile-label">Tweets</span>
                            <span id="profile-number">
                                {postsCount}
                            </span>
                        </Link>
                    </li>
                    <li id="profile-details">
                        <Link to="#">
                            <span className="d-block" id="profile-label">Following</span>
                            <span id="profile-number">
                                {followingCount}
                            </span>
                        </Link>
                    </li>
                    <li id="profile-details">
                        <Link to="#">
                            <span className="d-block" id="profile-label">Followers</span>
                            <span id="profile-number">
                                {followedCount}
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Profile