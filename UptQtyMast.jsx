import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom' // Used for the router
import Card from 'react-bootstrap/Card'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import React from "react";
import './UptQtyMast.css'

export default function UptQtyMast() {
    const navigate = useNavigate();
    const [qid,setQid] = useState(0)
    const [qtytype,setQtyType] = useState(0)


    useEffect(()=>{
        api()
    },[1])


    function api(){
        const qid = localStorage.getItem('qtyid');
        // alert(qid)
        axios.post('http://localhost:5000/qtymastbyid',{
            "id" : qid
        }).then(
            responce =>{
                setQid(responce.data.qty[0].qid)
                setQtyType(responce.data.qty[0].qtytype)
            }
        )
    }

    function uptData(){
        // const id = localStorage.getItem('qtyid');
        // alert(id)

        axios.put('http://localhost:5000/uptQtymast',{
                "id": localStorage.getItem('qtyid'),
                "qtytype": document.getElementById('qname').value    
        }).then(
            responce=>{
                if(responce.data.stutas == '200')
                    alert(responce.data.message)
                else
                    alert(responce.data.message)
            }
        )
        navigate('../Qtymast')
    }

    function back(){
        const r = confirm("Do you want to cancle?")

        if(r){
            navigate('/QtyMast')
        }else
            return false
    }

    return (
        <>
            <Card className="CrdMain">
                <Card.Header as="h2" className="uptHeader">
                    UPDATE QUANTITY TYPE
                </Card.Header>
                <form >
                    <input type="text" name="" value={qid} className="input" id="qid" required />
                    <input type="text" name="" className="input" id="qname" placeholder="Enter new Quantity type" required />


                    <button className="uptQty" onClick={uptData}>UPDATE</button>
                    <button className="canQty" onClick={back}>CANCLE</button>

                </form>
            </Card>

        </>
    )
}