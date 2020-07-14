import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector } from 'react-redux';

import '../../sass/navigation.scss'

const Navbar = () => {
  const mentorStatus = useSelector(state => state.authReducer.user.isMentor)
  const currentMentor = useSelector(state => state.mentorReducer.mentor)

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
          <Link
          to={`${url}/mentor/${currentMentor.mentor_name}/profile`}
          replace
        >
         Mentor Profile
        </Link>
          <a href="">Resources</a>
          <a href="">View Mentees</a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
