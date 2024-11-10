import React from "react";
import "./insta.css";
import CommentSection from "./CommentSection.js";
import Post from "./demopost.json";
import InstagramPost from "./InstagramPost.js";

// Task 1: Import the necessary modules here and assign them to the appropriate variables used below. Remember that JSON files are also treated like modules.

function App() {

  return (
    <div className="app">
      {posts.map((post, index) => (
        <Post 
          // Task 2: Pass down the data of each JSON object to this child component.
        />
      ))}
      <InstagramPost />
      <CommentSection />
    </div>
  );
}

export default App;
