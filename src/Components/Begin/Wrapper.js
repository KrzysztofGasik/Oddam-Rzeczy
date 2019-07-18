import React, { Component } from "react";
import bear from "../../../img/barrett-ward.jpg";

const BgAfterLog = {
    backgroundImage: `url(${bear})`,
    backgroundSize: "cover",
    backgroundPosition: "right bottom",
    backgroundRepeat: 'no-repeat',
    height: '100%'
  };

export const Wrapper = ({children}) => (
    <section className="begin__wrapper__after" id="Begin" style={BgAfterLog}>{children}</section>
)