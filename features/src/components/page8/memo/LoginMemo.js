import React from "react";
const LoginMemo = props => {
  // console.log(props);
  return (
    <React.Fragment>
      <button onClick={props.onLogout}>Logout</button>
      <button onClick={props.onLogin}>Login</button>
      <p>{props.random}</p>
    </React.Fragment>
  );
};

export default React.memo(LoginMemo);
