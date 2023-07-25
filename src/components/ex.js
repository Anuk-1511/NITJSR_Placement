import React from "react";
import vks from "../assets/images/tpo.jpg";
import director from "../assets/images/director.jpg";
import { NavLink } from "react-router-dom";

const Ex = props => (
  <div className="example">
    <div className="blog-card">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${director})` }} />
        <ul className="details">
          <li className="author">Prof. Goutam Sutradhar</li>
          <li className="date">Director</li>
          <li className="tags">
            <ul>
              <li>NIT</li>
              <li>Jamshedpur</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>A vision to follow</h1>
        <h2>Evolving a brand-name takes years of nurturing</h2>
        <p>
          {" "}
          Prof. (Dr.) Goutam Sutradhar currently the Director at the National Institute of Technology, Jamshedpur, since 12th May 2023.{" "}
        </p>
        <p className="read-more">
          <NavLink to="/message/director" exact className="activeclass">
            Read More..
          </NavLink>
        </p>
      </div>
    </div>
    <div className="blog-card alt">
      <div className="meta">
        <div className="photo" style={{ backgroundImage: `url(${vks})` }} />
        <ul className="details">
          <li className="author"></li>
          <li className="date">Training and Placement Officer</li>
          <li className="tags">
            <ul>
              <li>NIT</li>
              <li>Jamshedpur</li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="description">
        <h1>Exploring the skies</h1>
        <h2>The Training and Placement cell </h2>
        <p>
        The Training & Placement Cell, NIT Jamshedpur facilitates the process of placement of students passing out from the Institute besides collaborating with
         leading organizations and institutes in setting up of internship and training program of students.{" "}
        </p>
        <p className="read-more">
          <NavLink to="/message/tpo" exact className="activeclass">
            Read More..
          </NavLink>
        </p>
      </div>
    </div>
  </div>
);

export default Ex;
