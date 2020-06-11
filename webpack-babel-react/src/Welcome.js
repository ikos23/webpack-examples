import React from "react";

export default function Welcome(props) {
  const user = props.name || "User";
  return (
    <>
      <h2>Hello, {user} 😎</h2>
      <h4>Today is {new Date().toISOString()}</h4>
    </>
  );
}
