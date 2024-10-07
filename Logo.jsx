import React from "react";
import "./App.css";


const Cls = {
    log1: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814047_640.png',
    log2: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/instagram-3814056_1280.png',
    log3: 'https://png.pngtree.com/png-clipart/20191121/original/pngtree-share-icon-isolated-on-background-png-image_5104425.jpg',

}
const Symbol = () => {
    return (
        <>
            <div className="top">


                <span><img src={Cls.log1} />60K</span>
                <span><img src={Cls.log2} />20K</span>
                <span><img src={Cls.log3} />12K</span>
            </div>
        </>
    )
}
export default Symbol;