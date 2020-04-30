import React, { Component } from "react";
import Location from "./Location.jsx";
import Social from "./Social.jsx";
import "./Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <div className="border" />
      <div className="contact-container" id="location" id="contact"> 
        <Location />
        <Social />
        </div>
        </>
    );
  }
}

export default Contact;
