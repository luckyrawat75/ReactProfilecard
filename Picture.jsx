import React from "react";
import "./App.css";


const user = {
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGQzKMGwfQzNTuYMmUO7YoMNBY8Q1TfxskmQ&s',

}

const Photo = () => {
    return (
        <>
            <div className="image5">
                <img src={user.imgUrl} />
            </div>
        </>
    )
}
export default Photo;