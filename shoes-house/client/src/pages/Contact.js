import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
import "../styles/contact.css"
const Contact = () => {
  return (
  <Layout>
     <div className="container">
    <div className="content">
    <div className="left-side">
      <div className="address details">
        <i className="fas fa-map-marker-alt" />
        <div className="topic">Address</div>
        <div className="text-one">ballia up</div>
        <div className="text-two">dehradun uttrakhand</div>
      </div>
      <div className="phone details">
        <i className="fas fa-phone-alt" />
        <div className="topic">Phone</div>
        <div className="text-one">+986546435</div>
        <div className="text-two">+987654321</div>
      </div>
      <div className="email details">
        <i className="fas fa-envelope" />
        <div className="topic">Email</div>
        <div className="text-one">shoeshousegmail.com</div>
        <div className="text-two">info.shoeshousegmail.com</div>
      </div>
    </div>
    <div className="right-side">
      <div className="topic-text">Send us a message</div>
      <p>If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className="input-box">
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className="input-box">
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className="input-box message-box">
        </div>
        <div className="button">
          <input type="button" defaultValue="Send Now" />
        </div>
      </form>
    </div>
  </div>
 </div>
</Layout>
  );
};

export default Contact;
