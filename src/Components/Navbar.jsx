import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store) => store?.user || null);
  // console.log(user);


  return (
    <div>
      <div className="navbar bg-info-content shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">DevBuddy</a>
        </div>
        {user && <div className="flex gap-2">
          <div className="my-auto -mr-4"> Welcome💗, {user?.firstName}</div>
          <div className="dropdown dropdown-end mx-8">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="profile-user"
                  src= {user.photoUrl}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default Navbar;
