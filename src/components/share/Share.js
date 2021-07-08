import React from "react";
import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

function Share() {
  return (
    <>
      <div className="shareContainer">
        <div className="shareWrapper">
          <div className="shareTop">
            <img src="/assets/alexa.jpg" className="shareProfileImg" />
            <input
              placeholder="what's in your mind right now.."
              className="shareInput"
            ></input>
          </div>
          <hr className="shareHr" />
          <div className="shareButton">
            <div className="shareOptions">
              <div className="shareOptionList">
                <PermMedia className="shareIcons" htmlColor="green" />
                <span className="shareItems"> Photo or Video</span>
              </div>
              <div className="shareOptionList">
                <Label className="shareIcons" htmlColor="grey" />
                <span className="shareItems"> Tag</span>
              </div>
              <div className="shareOptionList">
                <Room className="shareIcons" htmlColor="red" />
                <span className="shareItems"> Location </span>
              </div>
              <div className="shareOptionList">
                <EmojiEmotions className="shareIcons" htmlColor="skyblue" />
                <span className="shareItems"> Feeling</span>
              </div>
            </div>

            <button className="shareButton2">Share</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Share;
