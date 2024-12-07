import React from "react";
import { useLocation } from "react-router-dom"; 

export default function DetailsGot() {
    const location = useLocation();
    const { user } = location.state || {};

    if (!user) {
        return <h2>No user details available.</h2>;
    }

    return (
        <div>
            <h2>Username: {user.username}</h2>
            <h2>Fullname: {user.fullname}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    );
}
