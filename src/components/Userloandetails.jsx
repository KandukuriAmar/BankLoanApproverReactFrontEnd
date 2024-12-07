// import React, { useState } from 'react';
// import Header from './Header';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom";

// export default function Userloandetails() {
//     const [loandetails, setLoandetails] = useState({
//         fullname: "",
//         loanType: "",
//         email: "",
//         phoneNumber: "",
//         document: null
//     });

//     const handleChange = (e) =>{
//         console.log(`Userloandetails entering: {${e.target.name}: ${e.target.value}}`);
//         setLoandetails({
//             ...loandetails,
//             [e.target.name] : e.target.value,
//         })
//     }

//     const navigate = useNavigate();

//     const handleSubmit = async(e) =>{
//         e.preventDefault();
//         console.log("moving to axios...")
//         console.log(loandetails);
//         const responce = await axios.post("http://localhost:9090/loandetails",{
//             loandetails,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         console.log("after to axios...")
//         console.log(loandetails);


//         if(responce.status == 200){
//             alert("Loan Details Submitted Successfully");
//             navigate("/home");
//         }
//         else{
//             alert("Failed to Submit Loan Details");
//             navigate("/userloandetails");
//         }
//         console.log(loandetails);
//         console.log("full complete to axios...")
//     }
//   return (
//     <div>
//       <Header />

//       <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
//             <label>Fullname:</label>
//             <input type="text" id="fullname" name="fullname" style={{color: 'black'}} placeholder="fullname" onChange={handleChange} value={loandetails.fullname || ''} required/><br/><br/>

//             <label>Loan Type:</label>
//             <select name="loanType"  style={{color: 'black'}} onChange={handleChange} value={loandetails.loanType || ''} required>
//                 <option value="personalloans">Personal Loans</option>
//                 <option value="homeloans">Home Loans</option>
//                 <option value="agricultureloans">Agriculture Loans</option>
//                 <option value="educationloans">Education Loans</option>
//             </select><br/><br/>

//             <label>Email:</label>
//             <input type="text" id="email" name="email" placeholder="email" style={{color: 'black'}} onChange={handleChange} value={loandetails.email || ''} required/><br/><br/>

//             <label>Phone Number:</label>
//             <input type="text" id="phonenumber" name="phoneNumber" placeholder="phonenumber" style={{color: 'black'}} onChange={handleChange} value={loandetails.phoneNumber || ''} required/><br/><br/>

//             <label>Documents For Loan (Image):</label>
//             <input type="file" id="document" name="document" style={{color: 'black'}} onChange={handleChange} value={loandetails.document || ''} required/><br/><br/>

//             <button type="submit" >Submit</button>
//         </form>
//     </div>
//   )
// }

import React, { useState } from 'react';
import Header from './Header';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Userloandetails() {
    const [loandetails, setLoandetails] = useState({
        fullname: "",
        loanType: "",
        email: "",
        phoneNumber: "",
        document: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        console.log(`Userloandetails entering: {${name}: ${value || files[0]}}`);
        setLoandetails({
            ...loandetails,
            [name]: files ? files[0] : value,
        });
    }

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("moving to axios...");
        
        const formData = new FormData();
        formData.append("fullname", loandetails.fullname);
        formData.append("loanType", loandetails.loanType);
        formData.append("email", loandetails.email);
        formData.append("phoneNumber", loandetails.phoneNumber);
        formData.append("document", loandetails.document);

        try {
            // http://localhost:2000/user/loandetails
            const response = await axios.post("http://localhost:9090/loandetails", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
            if (response.status === 200) {
                alert("Loan Details Submitted Successfully");
                navigate("/home");
            } else {
                alert("Failed to Submit Loan Details");
            }
        } catch (error) {
            console.error("There was an error submitting the loan details:", error);
            alert("Failed to Submit Loan Details");
        }
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
                <label>Fullname:</label>
                <input type="text" id="fullname" name="fullname" placeholder="fullname" onChange={handleChange} value={loandetails.fullname || ''} required/><br/><br/>

                <label>Loan Type:</label>
                <select name="loanType" onChange={handleChange} value={loandetails.loanType || ''} required>
                    <option value="">Select Loan Type</option>
                    <option value="personalloans">Personal Loans</option>
                    <option value="homeloans">Home Loans</option>
                    <option value="agricultureloans">Agriculture Loans</option>
                    <option value="educationloans">Education Loans</option>
                </select><br/><br/>

                <label>Email:</label>
                <input type="email" id="email" name="email" placeholder="email" onChange={handleChange} value={loandetails.email || ''} required/><br/><br/>

                <label>Phone Number:</label>
                <input type="text" id="phonenumber" name="phoneNumber" placeholder="phonenumber" onChange={handleChange} value={loandetails.phoneNumber || ''} required/><br/><br/>

                <label>Documents For Loan (Image):</label>
                <input type="file" id="document" name="document" onChange={handleChange} required/><br/><br/>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
