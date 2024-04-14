import React from "react";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <button
          onClick={() => {
            window.location.href = "./register";
          }}
        >
          Sign Up
        </button>
        <button
          onClick={() => {
            window.location.href = "./login";
          }}
        >
          Log In
        </button>
      </ul>
    </nav>
  );
};

export default NavBar;
