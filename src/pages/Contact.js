import React from "react";

function Contact() {
  return (
    <div className="container">
      <div className="card">
        <h2>Contact Us</h2>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </div>
    </div>
  );
}

export default Contact;