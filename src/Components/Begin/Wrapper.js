import React, { Component } from "react";

const BgAfterLog = {
    backgroundImage: "url('../img/barrett-ward.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "right bottom",
    backgroundRepeat: 'no-repeat',
    height: '100%'
  };

export const Wrapper = ({children}) => (
    <section className="begin__wrapper__after" id="Begin" style={BgAfterLog}>{children}</section>
)