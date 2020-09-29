import React from "react";

function Order(props) {
  return (
    <>
      <h1> Order Created By: {props.user} </h1>
      <h2> Delivered @ {props.loc}</h2>
      <hr />
    </>
  );
}

export default Order;
// createing functinal component
// return one element
