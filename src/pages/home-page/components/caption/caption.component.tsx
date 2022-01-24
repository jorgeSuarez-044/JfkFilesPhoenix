import * as React from "react";

const style = require("./caption.style.scss");

export const CaptionComponent = () => (
  <div className={style.caption}>
    <p className={style.title}></p>
    <p className={style.subtitle}></p>
  </div>
);
