import React from 'react'
import Login from './Login';
import Header from './Header';
export default function LoanApprover() {
  return (
    <div>
        <Header />
        <Login name="LoanApprover" loginType="approver"/>   
    </div>
  )
}
