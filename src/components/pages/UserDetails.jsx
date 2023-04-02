import React from "react";

const UserDetails = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "between",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <ul style={{ color: "white" }}>
        {Object.values([]).map((el, idx) => {
          if (typeof el !== "object") {
            return <li key={idx}>{el}</li>;
          }
        })}
      </ul>
      <ol style={{ color: "white" }}>
        {Object.values([]).map((el, idx) => {
          if (typeof el !== "object") {
            return <li key={idx}>{el}</li>;
          }
        })}
      </ol>
    </div>
  );
};

export default UserDetails;
