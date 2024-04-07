import React, { useContext } from "react";

import { Userdata } from "../../context/contextdata";
const Subchildcomponent =()=>
{
 const data= useContext(Userdata)
 console.log(data)
    
    return<div>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        <h2>HEllo</h2>
        <h3>fsdfsf</h3>
    </div>
}

export default  Subchildcomponent ;
