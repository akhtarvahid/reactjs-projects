import profImg from "../assets/profile.png";
import skillImg from "../assets/skills.jpg";
import projImg from "../assets/project.png";
import contImg from "../assets/contact.jpg";

export const getImage = item => {
  switch (item.icon) {
    case "profile":
      return profImg;
    case "skills":
      return skillImg;
    case "project":
      return projImg;
    case "contact":
      return contImg;
    default:
      return "";
  }
};
