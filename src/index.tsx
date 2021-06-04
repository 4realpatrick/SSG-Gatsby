import React from "react";
import { render } from "react-dom";
import style from "./style.module.scss";

// 组件interface
interface ILetsCodeProps {}
// 组件
const LetsCode: React.FC<ILetsCodeProps> = ({}) => {
  return <div className={style.content}>Let's Code</div>;
};
render(<LetsCode />, document.querySelector("#app"));
