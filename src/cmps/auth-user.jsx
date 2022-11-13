import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  onLogout,
} from "../store/user.actions.js";

import { Login, Signup } from "../pages/login-signup";
import { useDispatch, useSelector } from "react-redux";

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

  return (
    <div className='app-header' style={{ backgroundColor: `rgb(40,40,40,${scrollTop / 100})` }}>
      <div className='app-header-top-bar'>
        <div className='user-bar'>
          {user?.username ? <button className="logout-btn" onClick={logout}>Logout</button>
            :
            <button className='user-icon' onClick={onUserController}>Login In</button>
          }

          {user?.username && <div className="username">{user.username}</div>}
        </div>
      </div>
    </div>
  );
}