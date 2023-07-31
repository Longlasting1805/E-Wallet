import React, { useState } from "react";
import imgUrl from './assets/com.jpg'
import { useNavigate } from "react-router-dom";

export const Moredetails = (props) => {

    const [fullname, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [relationship, setRelationship] = useState('');
    const [bvn, setBvn] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
       
    }

    const navigate = useNavigate()

      return(
        <div className="root">
            <div className="details-div">
            <img className="details-img" src={imgUrl}alt="Italian Trulli"/>
            </div>

            

            <div className="details">
            <p className="more-details">More Details about you!</p>
            <p className="nextkin">Next of Kin</p>
                <input className="fullname" value={fullname}  onChange={(e) => setFullName(e.target.value)} placeholder="full name"/>
                <input className="email" value={email}  onChange={(e) => setEmail(e.target.value)} placeholder="email"/>
                <input className="phonenumber" value={phonenumber}  onChange={(e) => setPhonenumber(e.target.value)} placeholder="phone number"/>
                <input className="relationship" value={relationship}  onChange={(e) => setRelationship(e.target.value)} placeholder="relationship"/>
            <div>
             <p className="bvn">BVN</p>
             <input className="bvn-tag" value={bvn}  onChange={(e) => setBvn(e.target.value)} placeholder="bvn"/>
            </div>
            <button className="continue">Continue</button>
            <div className="prev">
            <a href="" onClick={() => navigate('/completeregistration')} className="prev" >Prev</a>
            </div>
            
            </div>
           


        </div>
        
        
      )

}