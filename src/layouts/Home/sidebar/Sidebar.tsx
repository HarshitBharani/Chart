import React, { useState } from "react";

import { Link } from "react-router-dom";

export const Sidebar = () => {
  const [displaySidebar, setDisplaySidebar] = useState("hidden");
  return (
    <div>
      <div
        className={`fixed h-[50px] w-[250px]  bg-blue-600 max-[750px]:w-full `}
      >
        <svg
          onClick={() => setDisplaySidebar("block")}
          className="absolute top-2 left-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="30px"
          height="30px"
        >
          <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z" />
        </svg>
      </div>
      <div
        className={`fixed h-full w-[250px] z-10 bg-blue-600 max-[750px]:${displaySidebar} w-full `}
      >
        <ul className="flex p-6 ml-3 flex-col">
          <li className="mb-10 text-3xl">
            {" "}
            <Link to="/contacts" onClick={() => setDisplaySidebar("hidden")}>
              Contacts
            </Link>
          </li>
          <li className="mb-10 text-3xl">
            <Link
              to="/charts-and-Maps"
              onClick={() => setDisplaySidebar("hidden")}
            >
              Charts and Maps
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
