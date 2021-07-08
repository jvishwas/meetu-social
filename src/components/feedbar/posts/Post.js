import React, { useState } from "react";
import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../../dummyData";

function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHander = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              src={Users.filter((u) => u.id === post.userId)[0].profilePicture}
              alt="can't found pics"
              className="postProfileImg"
            />
            <span className="postUserName">
              {Users.filter((u) => u.id === post.userId)[0].Username}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}.</span>
          <img src={post.photo} alt="pic not found" className="postImg" />
        </div>
        <div className="postButtom">
          <div className="postButtomLeft">
            <img
              src="/assets/like_2.png"
              alt="not found"
              className="postIcon"
              onClick={likeHander}
            />
            <img
              src="/assets/heart_2.png"
              alt="not found"
              className="postIcon"
              onClick={likeHander}
            />
            <span className="postLikeCounter">{like} People like it</span>
          </div>
          <div className="postButtomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Post;
