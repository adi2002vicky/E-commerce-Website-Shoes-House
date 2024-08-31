import React from "react";
import { Link } from "react-router-dom";
import Layout from "./../components/Layout/Layout";

const Pagenotfound = () => {
  return (
    <Layout>
      <div className="pnf">
      <img
            src="/images/p1.png"
            alt="contactus"
            style={{ width: "25%", marginTop:"10px", marginBottom:"18px",
    margin: "auto",
    display: "block"}}/>
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <Link to="/"><button type="button" class="btn btn-outline-danger">Home</button></Link>
      </div>
    </Layout>
  );
};

export default Pagenotfound;
