import React, { createContext } from "react";

export const Userdata = createContext();

const intidata ={
    name:"rajesh",
    age:"40"
}


export const Usercontextprovider =({children})=>
{
    return <Userdata.Provider value={intidata}>
        {children}
    </Userdata.Provider>
}

