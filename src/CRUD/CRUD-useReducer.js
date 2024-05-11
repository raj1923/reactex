import React, { useEffect, useReducer, useState } from "react";

import Editdata from "./Edit";
import Popup from "./Popup";
const reducer =(state, action)=>
    {
        console.log(state,"statedata")
        console.log(action,"updatedtata")
            if(action.type === "Dataupload")
                {
                    return {
                        ...state,
                        userdata: action.payload

                    }
                }

            if(action.type === "DELETE")
                {
                    return{
                        ...state,
                    isdelete : action.playload,

                    }
                   
                }
            if(action.type === "EDITDATA")
                {
                    
                    return{
                        ...state,
                        isEdit: action.playload

                    }
                }

            if(action.type === "UPDATEDATA")
                {

                    const userupdate = state.userdata.map((eachdata)=>
                    {   

                        if(action.playload.id === eachdata.id)
                            
                            {
                                return{
                                    id: action.playload.id,
                                    name: action.playload.name,
                                    email: action.playload.email,
                                    address: {city:  action.playload.adddata}
                                }
                            }
                        else{

                            return eachdata
                        }

                        



                    });
                    return{

                        ...state,
                        userdata : userupdate
                    }

                }

                if(action.type === "ISYESDEL")
                    {
                        const deldata = state.userdata.filter((eachdata)=>
                            {
                               return action.playload.id !== eachdata.id
                            })
                            return{
                                ...state,
                                userdata :deldata
                            }


                    }

                    if(action.type === "NoDELETE")
                        {
                            return{
                                ...state,
                                isdelete : action.playload
                            }
                        }

                   

            
      

        return state;
    }


const Index =()=>
    {


        const startingdata = {

            userdata :[],
            iserror : {status: false, mgs: ""},
            isEdit : {status: false, id : "", name: "", email: ""},
            isdelete : {status: false, id: ""},
            isyes: { state:false, id: ""},
            isno: {state:false, }
        }

        
        const [state, dispatch] = useReducer(reducer, startingdata) 

        const updateddata =(id, name, adddata,email)=>
            {
                console.log(adddata, "address")
                dispatch(
                    {
                        type:"UPDATEDATA",
                        playload: {id, name, adddata, email }
                    }
                )

                dispatch({
                    type:"EDITDATA",
                    playload: { status: false, id:"" ,name: "", email: "", address: "" }})


            }


        const yesdelete =()=>
        {
           
            dispatch({type:"ISYESDEL", playload:{status: false, id: state.isdelete.id}});
            dispatch({type:"DELETE", playload: {id : "", status: false}})
        }

        const nodelete =()=>
            {
                dispatch({type:"NoDELETE", playload: {id : "", status: false}})

            }



        useEffect(()=>
        {
            datacollection ("https://jsonplaceholder.typicode.com/users")
        }, [ ])

        const datacollection = async(urldata)=>
            {
                dispatch({type:"ERROR", playload:{status: false, mgs: ""} })
                try{
                const responce = await fetch(urldata);
                const data = await responce.json();
                dispatch({type:"Dataupload", payload:data});
                dispatch({type:"ERROR", playload:{status: false, mgs: ""} })
                
                }
                catch(error){
                    dispatch({type:"ERROR", playload: {status: true, mgs: error}})

                }

            }

    
        console.log(state,"afterdata")

        return <div>
            <h1>HELLO</h1>
           
                        {state.isEdit?.status && <Editdata id={state.isEdit.id}name= {state.isEdit.name} email={state.isEdit.email} address = {state.isEdit.address} updateddata = {updateddata} />}
                        
                       <table style={{border:"4px", width:"50%", height:"30px"}}>
                        <thead>
                        <tr style={{textAlign:"center"}}>
                            <th>S.no</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                        </thead>
                        {
                            state.userdata.map((eachdata, index)=>
                            {
                                return <tr style={{textAlign:"center"}}  key={index}>
                                    <td>{index}</td>
                                    <td>{eachdata.name}</td>
                                    <td>{eachdata.email}</td>
                                    <td>{eachdata.address.city}</td>
                                    <td><button onClick={()=> dispatch({type:"DELETE", playload: {id :eachdata.id, status: true}})}>Delete</button></td>
                                    <td><button onClick={() => dispatch({
                                        type:"EDITDATA",
                                        playload: { status: true, id:eachdata.id ,name: eachdata.name, email: eachdata.email, address: eachdata.address.city }})}>Edit</button></td>
                                </tr>
                            })
                        }
                        
                       </table>

                       <div>
                        {
                            state.isdelete.status &&  <Popup yesdelete ={yesdelete} nodelete={nodelete}></Popup>
                        }
                       
                       </div>

           
        </div>

    }



    export default Index;