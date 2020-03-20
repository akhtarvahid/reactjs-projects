import React from "react";
import Profile from "../components/profile/Profile";
import Skills from "../components/skills/Skills";
export const renderComponent = name => {
  switch (name) {
    case "profile":
      return <Profile />;
    case "skills":
      return <Skills />;
    default:
      return <div>...</div>;
  }
};
