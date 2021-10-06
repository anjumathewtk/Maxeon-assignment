import React, { useState } from "react";
import {
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
} from "reactstrap";

import { X } from "react-feather";

//Chat Logo
import chatlogo from "../../assets/SparrowBird.png";

//Chat confirm Widjet
import { ChatConfirm } from "./ChatConfirm";

//Style
import "./chatwidget.css";

export const ChatWidjet = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // to store the dropdown state
  const toggle = () => setDropdownOpen((prevState) => !prevState); // to change the dropdown state
  return (
    <div>
      <Dropdown
        direction="top"
        isOpen={dropdownOpen}
        toggle={toggle}
        className="chat"
      >
        <DropdownToggle className="Chat-ico">
          {!dropdownOpen ? (
            <img src={chatlogo} alt="" className="chat-icon" />
          ) : (
            <X size={16} className="btn-close" />
          )}
        </DropdownToggle>
        <DropdownMenu className="chat-menu">
          <ChatConfirm />
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};
