"use client";
import React from "react";

import HLeft from "./HLeft";
import HRight from "./HRight";
import HMid from "./HMid";
type Props = {};

function Header({}: Props) {
  return (
    <div className="m-auto sticky top-0 p-5 flex items-center justify-between w-[80%] z-10">
      <HLeft />
      {/* <HMid /> */}
      <HRight />
    </div>
  );
}

export default Header;
