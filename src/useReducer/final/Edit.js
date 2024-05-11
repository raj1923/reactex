import React from "react";
import { useState } from "react";
const Editdata =({id, name, email, address,updateddata})=>
    {
        console.log(id,"namedata");
        const [namedata, setname] = useState(name || " ")
        const [emaildata, setemail] = useState(email || " ")
        const [adddata, setadd] = useState(address || "")
        return<div>
            <input type="text" name="fname" id="fname" value={namedata} onChange={(e)=> setname(e.target.value)}></input>
            <input type="text" name="gmail" id="gmail" value={emaildata} onChange={(e)=> setemail(e.target.value)}></input>
            <input type="text" name="gmail" id="gmail" value={adddata} onChange={(e)=> setadd(e.target.value)}></input>
            <button onClick={()=>updateddata(id, namedata,adddata, emaildata )}> Update</button>
        </div>
    }

export default Editdata;