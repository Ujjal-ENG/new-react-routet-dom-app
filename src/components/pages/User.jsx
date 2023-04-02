import React from "react";

const User = (props) => {
  const { name, email, address, company } = props.data;

  return (
    <div
      style={{
        border: "2px solid red",
        padding: "5px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        margin: "10px",
        color: "white",
      }}
    >
      <h1>{name}</h1>
      <h4>{email}</h4>
      <div
        style={{
          display: "flex",
          justifyContent: "between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <ul style={{ color: "white" }}>
          {Object.values(address).map((el, idx) => {
            if (typeof el !== "object") {
              return <li key={idx}>{el}</li>;
            }
          })}
        </ul>
        <ol style={{ color: "white" }}>
          {Object.values(company).map((el, idx) => {
            if (typeof el !== "object") {
              return <li key={idx}>{el}</li>;
            }
          })}
        </ol>
      </div>
    </div>
  );
};

export default User;
