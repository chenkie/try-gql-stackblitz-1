import React from 'react';

export default ({ contact }) => (
  <div className="contact-card">
    <h2>
      {contact.firstName} {contact.lastName}
    </h2>
    <div className="bio">
      <img src={contact.image} />
      <p>{contact.description}</p>
    </div>
  </div>
);
