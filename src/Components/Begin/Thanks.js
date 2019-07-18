import React, { Component, Fragment } from "react";
import decoration from "../../../img/decoration.png";

export const Thanks = () => {
  return (
    <div className="begin__screen_thanks">
      <p>
        Dziękujemy za przesłanie formularza. Na maila prześlemy wszelkie
        informacje o odbiorze
      </p>
      <img src={decoration} />
    </div>
  );
};
