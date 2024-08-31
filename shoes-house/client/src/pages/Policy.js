import React from "react";
import Layout from "./../components/Layout/Layout";

const Policy = () => {
  return (
    <Layout>
      <div className="row contactus ">
      <h1 style={{textAlign:"center",marginTop:"4px"}}>POLICY OF COMPANY</h1>s
        <div className="col-md-6 ">
        <img
            src="/images/termify-process.svg"
            alt="contactus"
            style={{ width: "50%",
    margin: "auto",
    marginTop:"10px",
    display: "block"}}
          />
        </div>
        <div className="col-md-6" style={{marginTop:"10px"}}>
          <p>1. With Termify you can easily generate and download your customized and up to date Terms & Conditions</p>
          <p>2. With Termify you can easily generate and download your customized and up to date Terms & Conditions</p>
          <p>3. With Termify you can easily generate and download your customized and up to date Terms & Conditions</p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
