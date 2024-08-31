import React from 'react'
import Layout from '../components/Layout/Layout'
import {BiMailSend,BiPhoneCall} from 'react-icons/bi';
import logo from '../assets/logo1.png';
const Contact = () => {
  return (
    <Layout title={"Connect with us - Engage Commerce"}>
       <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src={logo}
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            For any query and information about products feel free to call anytime, we are 24 X 7
            available
          </p>
          <p className="mt-3">
            <BiMailSend/> : 
          </p>
          <p className="mt-3">
            <BiPhoneCall /> 
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact