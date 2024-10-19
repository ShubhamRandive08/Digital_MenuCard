import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";

export default function Food_Post_Api(){
    //Declare the Hooks for interact with the data
    const [id,setId] = useState(0)
    const [qtytype, setQtype] = useState("")

    const  handleId = (e) =>{ // Arrow function for the handle id
        setId(e.target.value)
    }

    const  handleQty = (e) =>{ // Arrow function for the handle qtytype
        setQtype(e.target.value)

    }

    // Create the object for the passing the parameter to the API 

    // Code for the update the qty mast table
    const data ={
        'qtytype' : qtytype ,
        "id" : id
    }

    function api(){ // Actual API is called
        axios.put('http://localhost:5000/uptQtymast',data)
        .then(responce=>{
            console.log(responce.data)

            const sts = responce.data.stutas;

            // Show the result to the End User
            console.log(sts)
            if(sts == 200){
                alert('Quantity Type Update Success')
            }else(
                alert('Quantity Type Update Failed')
            )
        })
    }

    // code for the get the qty mast by the id

     const [qid ,setQid] = useState(0)

    const handleQid = (e) =>{
        setQid(e.target.value)
    }

    const qdata = {
        "id" : qid
    }

    // Methods of the get qty mast by id
    function qtyById(){ 
       axios.get('http://localhost:5000/qtymastbyid',qdata)
       .then(responce =>{
        console.data(responce.data)
       })
    }

    

    // Code for the ADD NEW the food group
    const [foodGroup,setFoodgroup] = useState("")


    const handleFoodGroup = (e) =>{
        setFoodgroup(e.target.value)
    }

    const newFoodGroup ={
        'gname' : foodGroup 
    }

    function addFoodG(){
        axios.post('http://localhost:5000/insert_food_group',newFoodGroup)
    .then(responce =>{
        console.log(responce.data);
    })
    }

    // Code for the update the food group

    const [gid,setGid] = useState(0)
    const [fgname,setGname] = useState("")

     const handleGid = (e) =>{
        setGid(e.target.value)
     }

     const handlegname = (e) =>{
        setGname(e.target.value)
     }

     const uptData = {
            "id" : gid,
            "gname" : fgname 
         
     }

     // Method for the update the food group
     function updateFoodGroup(){
        axios.put('http://localhost:5000/uptFoodGroup',uptData)
        .then(responce =>{
            console.log(responce.data)
            const sts = responce.data.status
            // console.log(sts)

            if(sts == 200){
                alert("Update Success")
            }else{
                alert('Update Failed')
            }
        })
     }

     // Delete the food group 
     const [fid,setFid] = useState(0)

     const handleFid = (e) =>{
        setFid(e.target.value)
     }

     const fgid = {
        "gid" : fid
     }

     function delFood(){
        axios.delete('http://localhost:5000/delfoodgroup',fgid)
        .then(responce=>{
            console.log(responce.data)
        })
     }

     //--------------------------------------------------------------------------------------------

     //Code for the 
    return(<>

        <input type="number" placeholder="Enter the ID" onChange={handleId} name="" id="" /><br/><br/>
        <input type="text" placeholder="Enter the new Food Group Name" onChange={handleQty} name="" id="" /><br/><br/>
        <button onClick={api}>UPDATE QTY MAST</button><br /><br /><br />

        <input type="text" placeholder="Enter New Food Group" onChange={handleFoodGroup} name="" id="" /><br/><br/>
        <button onClick={addFoodG}>ADD FOOD GROUP</button> <br /><br />

        <input type="number" placeholder="Enter the Group ID" onChange={handleGid} name="" id="" /><br/><br/>
        <input type="text" placeholder="Enter the new Food Group Name" onChange={handlegname} name="" id="" /><br/><br/>
        <button onClick={updateFoodGroup}>UPDATE FOOD GROUP</button><br /><br /><br />

        <input type="number" placeholder="Enter QTY MAST Id" onChange={handleQid} name="" id="" /><br/><br/>
        <button onClick={qtyById}>GET DATA BY ID</button> <br /><br />
    </>)
}