import React from "react";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import { useNavigate } from "react-router-dom";


export default function UptMenuTable(){ 
    const navigate = useNavigate(); // This is use for the navigate one page to another page

    useEffect(() =>{
        menuById()
    },[])


    function menuById(){
        axios.post('http://localhost:5000/menuById',{
            "id" : localStorage.getItem('menuid')
    }).then(
        responce =>{
            // console.log(responce.data)
            document.getElementById('mname').value = responce.data.menu[0].menu_name;
            document.getElementById('mprice').value = responce.data.menu[0].menu_price;
            document.getElementById('fgid').value = responce.data.menu[0].gid;
            document.getElementById('qtid').value = responce.data.menu[0].qid;

        }
    )
    }

    // Update the menu form the menu card
    function uptManu(){
        axios.put('http://localhost:5000/menuUpt',{
            "menu_name": document.getElementById('mname').value,
            "menu_price": document.getElementById('mprice').value,
            "gid": document.getElementById('fgid').value,
            "qid": document.getElementById('qtid').value,    
            "mid": localStorage.getItem('menuid')
        
        }).then(
            responce =>{
                // console.log(responce.data)
                alert(responce.data.message)
            }
        )
        navigate('../MenuTable')

    }

    
    function back(){
        const r = confirm('Do you wand to cancel?')

        if(r == true)
            navigate('/MenuTable')
        else
            return false
    }

    return(
        <>
        <Card className="CrdMain">
                <Card.Header as="h2" className="uptHeader">
                    UPDATE FOOD GROUP
                </Card.Header>
                <form >
                    <input type="text" name=""  value={localStorage.getItem('menuid')} className="inputBoxUpt" id=""  required />
                    <input type="text" name=""   className="inputBoxUpt" id="mname" placeholder="Enter new Menu Name" required />
                    <input type="text" name=""   className="inputBoxUpt" id="mprice" placeholder="Enter new Menu price" required />
                    <input type="text" name=""   className="inputBoxUpt" id="fgid" placeholder="Enter new Food Group ID" required />
                    <input type="text" name=""   className="inputBoxUpt" id="qtid" placeholder="Enter new Quantity type ID" required />


                    

                    <button className="up" onClick={uptManu}>UPDATE</button>
                    <button className="can" onClick={back}>Cancle</button>

                </form>
            </Card>
        </>
    )
}