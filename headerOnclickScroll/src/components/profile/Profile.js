import React from "react";
import skills from "../../utils/skills.json";
import "./Profile.scss";
import HeighlightCorousel from "./HeighlightCorousel";
const Profile = props => {
  return (
    <div className="root">
      <div className="prof-root">
        <div>
          <p className="things">
            I want to <mark className="mark">make things</mark>
          </p>
          <p className="things">
            that <mark className="mark">make a difference</mark>
          </p>
        </div>
        <HeighlightCorousel skills={skills} />
      </div>
    </div>
  );
};

// render() {
//   return (
//     <div style={{ height: "100vh", background: "#e0f2f16e", padding: 50 }}>
//       <div>I want to make things</div>
//       <div>that make a difference</div>
//     </div>
//   );
// }
export default Profile;
