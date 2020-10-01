import React from "react";
/*
const Order = (props)=>{
  return (
    <>
      <h1> Order Created By ..: {props.user} </h1>
      <h2> Delivered @ {props.loc}</h2>
      <hr />
    </>
  );
}
  
function Order(props) {
  

  return (
    <>
      <h1> Order Created By: {props.user} </h1>
      <h2> Delivered @ {props.loc}</h2>
      <hr />
    </>
  );
  
}
*/
class Order extends React.Component {
  render() {
    return (
      <>
        <h1>Created By: {this.props.user} </h1>
        <h1>Delivered @ {this.props.loc}</h1>
      </>
    );
  }
}

export default Order;
// createing functinal component
// return one element
// for interpreting JSX element , required import react
// react is responsible for interpreting jsx elements
