import React, { useState } from "react";
import { NavLink, Link, useRouteMatch } from "react-router-dom";

const Navbar = ({ match }) => {
  const [mentorStatus, setMentorStatus] = useState(false);

  //Router hook to establish component URL
  const {url} = useRouteMatch();

  return (
    <div className="navContainer" id={!mentorStatus ? "notMentor" : "mentor"}>
      <nav className="userNav">
        <Link
          to={`${url}/calendar`}
        >
          Calender
        </Link>
        <a href="">Find a Mentor</a>
        <a href="">Notes</a>
        <Link
          to={`${url}/profile`}
          replace
        >
          Profile
        </Link>
      </nav>

      {!mentorStatus ? (
        <Link className="becomeMentor" to="/mentor-registration">
          Become a Mentor
        </Link>
      ) : (
        <nav className="mentorNav">
          <a href="">Mentor Profile</a>
          <a href="">Resources</a>
          <a href="">View Mentees</a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;