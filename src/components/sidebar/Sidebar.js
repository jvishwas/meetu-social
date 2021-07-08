import React from "react";
import "./sidebar.css";
import CloseFriend from "../closeFriends/CloseFriend";
import {
  RssFeed,
  Chat,
  VideoLibrary,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutlined,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="sidebarWrapper">
          <ul className="sidebarList">
            <li className="sideListItem">
              <RssFeed className="sidebarIcon" />
              <span className="sidebarListItemText">Feed</span>
            </li>
            <li className="sideListItem">
              <Chat className="sidebarIcon" />
              <span className="sidebarListItemText">Chat</span>
            </li>
            <li className="sideListItem">
              <VideoLibrary className="sidebarIcon" />
              <span className="sidebarListItemText">Videos</span>
            </li>
            <li className="sideListItem">
              <Group className="sidebarIcon" />
              <span className="sidebarListItemText">Groups</span>
            </li>
            <li className="sideListItem">
              <Bookmark className="sidebarIcon" />
              <span className="sidebarListItemText">Bookmark</span>
            </li>
            <li className="sideListItem">
              <HelpOutline className="sidebarIcon" />
              <span className="sidebarListItemText">Questions</span>
            </li>
            <li className="sideListItem">
              <WorkOutlined className="sidebarIcon" />
              <span className="sidebarListItemText">Jobs</span>
            </li>
            <li className="sideListItem">
              <Event className="sidebarIcon" />
              <span className="sidebarListItemText">Events</span>
            </li>
            <li className="sideListItem">
              <School className="sidebarIcon" />
              <span className="sidebarListItemText">Courses</span>
            </li>
          </ul>
          <button className="sidebarButton">Show More</button>
          <hr className="sidebarHr" />
          <h4 className="sidebarCloseFriend">Mutual Friends</h4>
          <ul className="sideFriendList">
            {Users.map((u) => (
              <CloseFriend user={u} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
