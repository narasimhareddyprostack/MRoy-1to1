import React from "react";

class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  clickContact = (contact) => {
    this.props.pushContact(contact);
  };

  render() {
    return (
      <React.Fragment>
        <table className="table table-hover table-primary text-center table-striped">
          <thead className="bg-primary text-white">
            <tr>
              <th>SNO</th>
              <th>IMAGE</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>EMAIL</th>
              <th>LOCATION</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(this.props).length !== 0 ? (
              <React.Fragment>
                {this.props.contacts.map((contact, index) => {
                  return (
                    <tr
                      onClick={this.clickContact.bind(this, contact)}
                      key={index}
                    >
                      <td>
                        {contact.login.uuid.substr(
                          contact.login.uuid.length - 4
                        )}
                      </td>
                      <td>
                        <img
                          src={contact.picture.large}
                          width="50"
                          height="50"
                        />
                      </td>
                      <td>
                        {contact.name.first} {contact.name.last}
                      </td>
                      <td>{contact.dob.age} Yrs.</td>
                      <td>{contact.email}</td>
                      <td>{contact.location.city}</td>
                    </tr>
                  );
                })}
              </React.Fragment>
            ) : null}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}
export default ContactList;
