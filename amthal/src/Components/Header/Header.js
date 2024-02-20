import React from "react";
import DropDown from "../DropDown/DropDown";
function Add() {
  return (
    <div>
      <section class="wrapper">
        <div class="top">أَمْثَال</div>
        <div class="bottom" aria-hidden="true">
          أَمْثَال
        </div>
      </section>
      <div>
        <DropDown />
      </div>
    </div>
  );
}
export default Add;
