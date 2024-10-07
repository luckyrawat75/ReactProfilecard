import React from "react";
import "./App.css";

const data = {
    logo1: 'https://bst.icons8.com/wp-content/uploads/2024/06/facebook_secondary_logo_on_blue_background.webp',
    logo2: 'https://cdn.pixabay.com/photo/2021/06/15/12/14/instagram-6338393_1280.png',
    logo3: 'https://cdn-icons-png.freepik.com/256/15707/15707874.png?semt=ais_hybrid',
    logo4: 'https://cdn-icons-png.flaticon.com/512/3938/3938028.png',



}

const Picnow = () => {
    return (
        <>
            <div className="icon">
                <img src={data.logo1} />
                <img src={data.logo2} />
                <img src={data.logo3} />
                <img src={data.logo4} />


            </div>
        </>
    )
}
export default Picnow;