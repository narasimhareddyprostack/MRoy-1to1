import React, { useEffect, useState } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactCard from "./ContactCard";

function ContactAppOne() {
  let [contact, setContact] = useState({
    contacts: null,
    errorMessage: null,
    selectedContact: null,
  });

  useEffect(() => {
    let dataURL =
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
    Axios.get(dataURL)
      .then((response) => {
        setContact({
          ...contact,
          contacts: response.data,
        });
      })
      .catch((err) => {
        setContact({
          ...contact,
          errorMessage: err,
        });
      });
  }, []);
  let pullContact = (contact) => {
    setContact({
      ...contact,
      selectedContact: contact,
    });
  };

  return (
    <React.Fragment>
      {<pre>{JSON.stringify(contact.selectedContact)}</pre>}
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-primary">Contact App</p>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto cupiditate debitis deleniti distinctio, dolor ipsam,
              molestias odio quasi quia, quo quos reprehenderit rerum sed
              tempore totam vel velit vero voluptates!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-9">
            {contact.contacts ? (
              <React.Fragment>
                <ContactList
                  contacts={contact.contacts}
                  pushContact={pullContact}
                />
              </React.Fragment>
            ) : null}
          </div>
          <div className="col-md-3">
            <ContactCard selectedContact={contact.selectedContact} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ContactAppOne;
