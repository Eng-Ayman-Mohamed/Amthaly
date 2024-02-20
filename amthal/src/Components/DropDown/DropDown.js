// import inbox from "./img/envelope.png";
// import settings from "./img/settings.png";
// import help from "./img/question.png";
// import logout from "./img/log-out.png";

import user from "./img/user.png";
import edit from "./img/edit.png";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
function DropDown() {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div className="menu-container" ref={menuRef}>
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <img src={user} alt=""></img>
      </div>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <ul>
          <DropdownItem img={user} text={"مُدَوَّنَتِي"} />
          <Link to={"/add"}>
            <DropdownItem img={edit} text={"أَضِفْ أَمْثَال"} />
          </Link>
          {/* <DropdownItem img={inbox} text={"Inbox"} />
          <DropdownItem img={settings} text={"Settings"} />
          <DropdownItem img={help} text={"Helps"} />
          <DropdownItem img={logout} text={"Logout"} /> */}
        </ul>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  return (
    <li className="dropdownItem">
      <img src={props.img} alt=""></img>
      <a> {props.text} </a>
    </li>
  );
}

export default DropDown;
