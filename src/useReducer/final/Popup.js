import React from "react";

const Popup =({yesdelete, nodelete})=>
    {
        return<div className="popparent">

            <div>
                <h1>Do You want Delete</h1>
            </div>
            <p >If you delete It's Never comes back</p>
            <div>
                <button  id="btn1"onClick={yesdelete}>Yes</button>
                <button id="btn2"onClick={nodelete}>no</button>
            </div>
        </div>
    }

export default Popup;