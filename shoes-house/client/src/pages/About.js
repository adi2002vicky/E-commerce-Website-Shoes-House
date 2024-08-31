import { Button } from "antd";
import React from "react";
import Layout from "./../components/Layout/Layout";
const About = () => {
  return (
    <Layout title={"About us- shoes house"}>
<div>
  <div id="about" className="container-fluid">
    <div className="row">
      <div className="col-sm-12">
        <h2 style={{textAlign:"center",marginTop:"4px"}}>About - shoes house</h2><br />
        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-grey">
    <div className="row">
      <div className="col-sm-4">
      <img
            src="/images/c.gif"
            alt="contactus"
            style={{ width: "100%",
    margin: "auto",
    display: "block"}}
          />
      </div>
      <div className="col-sm-8">
        <h2 style={{textAlign:"center",marginTop:"4px"}}>Our Values</h2><br />
        <h4><strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br />
        <p><strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
  </div>
  {/* Container (Services Section) */}
  <div id="services" className="container-fluid text-center">
    <h2 style={{textAlign:"center",marginTop:"4px"}}>SERVICES</h2>
    <h4>What we offer</h4>
    <br />
    <div className="row slideanim">
      <div className="col-sm-4">
        <span className="glyphicon glyphicon-off logo-small" />
        <h4>POWER</h4>
        <p>Lorem ipsum dolor sit amet..</p>
      </div>
      <div className="col-sm-4">
        <span className="glyphicon glyphicon-heart logo-small" />
        <h4>LOVE</h4>
        <p>Lorem ipsum dolor sit amet..</p>
      </div>
      <div className="col-sm-4">
        <span className="glyphicon glyphicon-lock logo-small" />
        <h4>JOB DONE</h4>
        <p>Lorem ipsum dolor sit amet..</p>
      </div>
    </div>
    <br /><br />
    <div className="row slideanim">
      <div className="col-sm-4">
        <span className="glyphicon glyphicon-leaf logo-small" />
        <h4>GREEN</h4>
        <p>Lorem ipsum dolor sit amet..</p>
      </div>
      <div className="col-sm-4">
        <span className="glyphicon glyphicon-certificate logo-small" />
        <h4>CERTIFIED</h4>
        <p>Lorem ipsum dolor sit amet..</p>
      </div>
      <div className="col-sm-4">
        <span className="glyphicon glyphicon-wrench logo-small" />
        <h4 style={{color: '#303030'}}>HARD WORK</h4>
        <p>Lorem ipsum dolor sit amet..</p>
      </div>
    </div>
  </div>
</div>

    </Layout>
  );
};


export default About;
