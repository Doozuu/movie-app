import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Link to="/">Header</Link>
      <h3>Menu</h3>
      <ul>
        <li>
          <Link to={`${process.env.PUBLIC_URL}/todo`}>Todo list</Link>
        </li>
        <li>
          <Link to="/cointracker">Coin Tracker</Link>
        </li>
        <li>
          <Link to="/moviehome">Movie App</Link>
        </li>
      </ul>
    </>
  );
};

export default Main;
