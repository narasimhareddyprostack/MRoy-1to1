import React from "react";

export default function ChildOrder(props) {
  return (
    <div>
      <h1>{props.message_props}</h1>
      <h2>
        Employee Name : {props.employee.employee_Name} , Emp Email:
        {props.employee.employee_Email}
      </h2>
    </div>
  );
}

/*
import React, { Component } from "react";

class ChildOrder extends Component {
  render() {
    //const { user, email, mailStatus } = this.props;

    //unpacking the object properties
    //extracting the object properties
    return (
      <div>
        <h1>{this.props.message}</h1>
        <h2> Employee : {this.props.employee.employee_Name}</h2>
        <h3>Employee Sal - p: {this.props.emp_sal.employee_Salary}</h3>
      </div>
    );
  }
}

export default ChildOrder;
*/
