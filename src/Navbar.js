import React, { useState } from "react";
import "./Navbar.css";
import { IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { SidebarOption } from "./SidebarOption";
import StarRateIcon from "@material-ui/icons/StarRate";
import SnoozeIcon from "@material-ui/icons/Snooze";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";

export const Navbar = () => {
  const history = useHistory();
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <>
      <div className="navbar">
        <div className="navbar__header">
          <div className="navbar__headerLeft">
            <IconButton onClick={showSidebar}>
              <MenuIcon className="navbar__headerLeftIcon" />
            </IconButton>
          </div>
          <div className="navbar__headerRight">
            <h3>details</h3>
          </div>
        </div>
        <div className={sidebar ? "sidebar--active" : "sidebar"}>
          <div
            onClick={() => {
              history.push("/");
              setSidebar(!sidebar);
            }}
            className="options"
          >
            <SidebarOption Icon={StarRateIcon} title="Starred" />
          </div>
          <div
            onClick={() => {
              history.push("/hi");
              setSidebar(!sidebar);
            }}
            className="options"
          >
            <SidebarOption Icon={SnoozeIcon} title="Snoozed" />
          </div>
          <div
            onClick={() => {
              history.push("/hello");
              setSidebar(!sidebar);
            }}
            className="options"
          >
            <SidebarOption Icon={LabelImportantIcon} title="Important" />
          </div>
          <div
            onClick={() => {
              history.push("/bye");
              setSidebar(!sidebar);
            }}
            className="options"
          >
            <SidebarOption Icon={SendIcon} title="Sent" />
          </div>
          <div
            onClick={() => {
              history.push("/test");
              setSidebar(!sidebar);
            }}
            className="options"
          >
            <SidebarOption Icon={DraftsIcon} title="Drafts" />
          </div>
          <div
            onClick={() => {
              history.push("/testing");
              setSidebar(!sidebar);
            }}
            className="options"
          >
            <SidebarOption Icon={ExpandMoreIcon} title="More" />
          </div>
        </div>
      </div>
    </>
  );
};
