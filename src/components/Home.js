import React from "react";
import jsr from "../assets/team22/campus.jpg";

import Ex from "./ex";
const Home = props => (
  <div>
    <div className="homepic">
      <img src={jsr} alt="National insitute of technology , Jamshedpur " className="logo-img" />
    </div>
    <h1 className="elegantshadow">The Institute Speaks</h1>
    <Ex />
  </div>
);

export default Home;
