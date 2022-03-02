import React, {useState, useEffect} from 'react'
import "./Feed.css"
import TweetBox from './TweetBox'
import Post from './Post'

import db from "./firebase";
import FlipMove from "react-flip-move";
import { collection, getDocs } from 'firebase/firestore';

function Feed({
  tweetRef
}) {

  // using Firebase firestore
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   // Get a list of cities from your database
  //   const getPosts = async () =>{
  //     const postsCollection = collection(db, 'posts');
  //     const postSnapshot = await getDocs(postsCollection);
  //     const postList = postSnapshot.docs.map(doc => doc.data());
  //     return postList;
  //   }

  //   getPosts().then(posts => {setPosts(posts)})
  // }, [posts]);

  const { posts, isLoading, isError } = usePosts()


  return (
    <div  className="feed">
      {/* Header */}
      <div className="feed__header">
          <h2>Home</h2>
      </div>

      {/**TweetBox */}
      <TweetBox tweetRef={tweetRef} />

     
      {/** Post */}
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            text={post.text}
            avatar={post.avatar}
            image={post.image}
            timestamp={post.timestamp}
          />
        ))}
      </FlipMove>
    </div>
  )
}

export default Feed