import React from "react";
import DropDown from "../DropDown/DropDown";
function Add() {
  return (
    <div>
      <section className="wrapper">
        <div className="top">أَمْثَال</div>
        <div className="bottom" aria-hidden="true">
          أَمْثَال
        </div>
      </section>

      <DropDown />
    </div>
  );
}
export default Add;
