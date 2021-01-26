import React from "react";
import "./Sidebar.css";
import { SidebarOption } from "./SidebarOption";
import StarRateIcon from "@material-ui/icons/StarRate";
import SnoozeIcon from "@material-ui/icons/Snooze";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import SendIcon from "@material-ui/icons/Send";
import DraftsIcon from "@material-ui/icons/Drafts";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";

export const Sidebar = () => {
  const history = useHistory();
  return (
    <div className="sidebar">
      <div onClick={() => history.push("/")} className="options">
        <SidebarOption Icon={StarRateIcon} title="Starred" />
      </div>
      <div onClick={() => history.push("/hi")} className="options">
        <SidebarOption Icon={SnoozeIcon} title="Snoozed" />
      </div>
      <div onClick={() => history.push("/hello")} className="options">
        <SidebarOption Icon={LabelImportantIcon} title="Important" />
      </div>
      <div onClick={() => history.push("/bye")} className="options">
        <SidebarOption Icon={SendIcon} title="Sent" />
      </div>
      <div  className="options">
        <SidebarOption Icon={DraftsIcon} title="Drafts" />
      </div>
      <div  className="options">
        <SidebarOption Icon={ExpandMoreIcon} title="More" />
      </div>
      
    </div>
  );
};
