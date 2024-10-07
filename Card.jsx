import React from "react";
import "./App.css";
import Photo from "./Picture";
import Headingfirst from "./Heading";
import Picnow from "./Image";
import Btndata from "./Button";
import Symbol from "./Logo";











const Profile = () => {
    return (
        <>
            <div className="container">
                <Photo />
                <Headingfirst />
                <Picnow />
                <Btndata />
                <Symbol />
            </div>
        </>
    )
}
export default Profile;