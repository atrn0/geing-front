import React from "react";
import me from "../me.jpg"

const Header = () => {
  return (
    <div className="Header">
      <h2>あたらんの質問箱</h2>
      <img src={me} alt="me" />
    </div>
  )
}

export default Header
