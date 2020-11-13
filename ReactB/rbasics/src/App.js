import React from "react";
import "./App.css";
//import Header from "./Components/Header/Header";
//import Footer from "./Components/Footer/Footer";
//import Products from "./Components/Products/Products";
//import "bootstrap/dist/css/bootstrap.min.css";
//import { FormText } from "reactstrap";
//import FormEx from "./FormEx";
import NavBar from "./Components/NavBar";
import ParentOrder from "./CompBasics/ParentOrder";
import Registration from "./Forms/Registration";
import UserLogin from "./Hooks/UserLogin";

function App() {
  return (
    <>
      <UserLogin />
    </>
  );
}

export default App;

//npx create-react-app utility tool
//App.js  - main component file/root component file

//index.js -main file of application
