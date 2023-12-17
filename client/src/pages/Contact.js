import React from 'react'
import Layout from '../components/layout/layout'
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
    return (
        <Layout>
            <div className="contactus ">
                <div className="col-md-6 ">
                    <img
                        src="Images/Contact.svg"
                        alt="contactus"
                        style={{ width: "79%" }}
                    />
                </div>
                <div className="col-md-4" >
                    <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
                    <p className="text-justify mt-2">
                        Any query and info about product feel free to call anytime we 24X7
                        available.
                    </p>
                    <p className="mt-3">
                        <BiMailSend />  : purecrafts@gmail.com
                    </p>
                    <p className="mt-3">
                        <BiPhoneCall /> : +977989898989
                    </p>
                    <p className="mt-3">
                        <BiSupport /> : 9999999999999 (toll free)
                    </p>
                </div>
            </div>
        </Layout>
    );
};

export default Contact;