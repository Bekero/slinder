import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  onLogout,
} from "../store/user.actions.js";

import { Login, Signup } from "../pages/login-signup";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export function AuthUser({ scrollTop }) {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userModule.user);

  useEffect(() => {

  }, [user])
  const onUserController = () => {
    navigate("/login");
  };

  const logout = () => {
    dispatch(onLogout());
  };

  const onGoToProfile = () => {
    navigate('/profile')
  }

  return (
    <div className="top-side-nav-container" style={{ backgroundColor: `rgb(40,40,40,${scrollTop / 100})` }}>


      <div className="log-section">
        {user?.username ? <button className="logout-btn" onClick={logout}>Logout</button>
          :
          <button className='user-icon' onClick={onUserController}>Login In</button>
        }
      </div>
      {/* style={{ backgroundImage: `url(${currPerson.img})` }} */}
      {user?.username &&
        <div onClick={() => onGoToProfile()} className="user-profile">
          <div style={{ backgroundImage: `url(${user?.img})` }}
            className="img-container"></div>
          <div>
            {user.username}
          </div>
        </div>}
    </div>
  );
}
