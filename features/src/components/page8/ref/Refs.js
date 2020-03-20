import React, { useState, useRef, useEffect } from "react";

function Refs() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const ageRef = useRef(0);
  const submitRef = useRef(null);
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  const firstNameKeydown = e => {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  };
  const lastNameKeydown = e => {
    if (e.key === "Enter") {
      ageRef.current.focus();
    }
  };
  const ageNameKeydown = e => {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  };
  const submitNameKeydown = e => {
    alert("submitted");
  };
  return (
    <div>
      <h3>useRef, forwardRef</h3>
      <div>
        <form>
          <div>
            <label>First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              ref={firstNameRef}
              onKeyDown={firstNameKeydown}
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              ref={lastNameRef}
              onKeyDown={lastNameKeydown}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              placeholder="Enter Age"
              ref={ageRef}
              onKeyDown={ageNameKeydown}
            />
          </div>
          <br />
          <input
            type="submit"
            value="submit"
            ref={submitRef}
            onKeyDown={submitNameKeydown}
          />
        </form>
      </div>
    </div>
  );
}

export default Refs;
