import React from "react";
import "./App.css";
import ContactAppOne from "./components/ContactAppOne";

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
          <a href="/" className="navbar-brand">
            React Contact App
          </a>
        </nav>

        <ContactAppOne />
      </div>
    );
  }
}
export default App;
