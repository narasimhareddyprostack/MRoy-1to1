import React, { Component } from "react";
import ChildOrder from "./ChildOrder";

class ParentOrder extends Component {
  message = " Welcome to PSA";
  employee = {
    employee_id: 101,
    employee_Name: "Manasi Roy",
    employee_Email: "MR@gmail.com",
  };
  constructor(props) {
    super(props);

    this.state = {
      employee_Salary: "3000USD",
    };
  }

  // salary_hike() {
  //   this.setState({ employee_Salary: "4000USD" });
  // }
  salary_hike = () => {
    this.setState({ employee_Salary: "4000USD" });
  };

  iwantsalary_Hike() {
    alert("I Want");
  }

  render() {
    return (
      <div>
        <ChildOrder message_props={this.message} employee={this.employee} />
        <hr />

        {/* <button onClick={this.salary_hike.bind(this)}> Get Hike </button>  */}
        {/* <button onClick={() => this.salary_hike()}> Get Hike </button> */}

        <button onClick={this.salary_hike}>Get Hike </button>
        <button onClick={this.iwantsalary_Hike}>I want Salary </button>

        <h4> {this.state.employee_Salary}</h4>
      </div>
    );
  }
}
export default ParentOrder;
// event click - always use function only
// not functin call
