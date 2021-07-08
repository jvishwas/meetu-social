import React from "react";
import "./feed.css";
import Share from "../share/Share";
import Post from "./posts/Post";
import { Posts } from "../../dummyData";

function Feed() {
  return (
    <div className="feed">
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p} />
      ))}
    </div>
  );
}
export default Feed;
