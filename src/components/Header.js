import React from "react";
import { Link } from "react-router-dom";
// import GoogleAuth from "./GoogleAuth"; //switch with GoogleAuthRedux
import GoogleAuthRedux from "./GoogleAuthRedux";

const Header = () => {
  return (
    <div className="ui secondary pointing menu">
      <Link to="/" className="item">
        Streamer
      </Link>
      <div className="right menu">
        <Link to="/" className="item">
          All Streams
        </Link>
        {/* <GoogleAuth /> */}
        <GoogleAuthRedux />
      </div>
    </div>
  );
};

export default Header;
//GoogleAuth is designed to manage state with react//
//GoogleAuthRedux is designed to manage state with redux//
