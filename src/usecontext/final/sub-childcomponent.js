import React, { useContext } from "react";

import { Userdata } from "../../context/contextdata";
const Subchildcomponent =()=>
{
 const data= useContext(Userdata)
 console.log(data)
    
    return<div>
        <h1>{data.name}</h1>
        <h1>{data.age}</h1>
        
    </div>
}

export default  Subchildcomponent ;
