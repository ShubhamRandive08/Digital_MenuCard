import { useEffect, useState } from "react";
import NavbarDigiMenu from "./NavbarDigiMenu";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' // Used for the router
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './Qtymast'

export default function Qtymast(){
    const navigate = useNavigate();


    const [dataM,setData] = useState([])
    const [newQtyType, setQtyType] = useState("")

    useEffect(()=>{
        api();
    },[])

    function api(){
        axios.get('http://localhost:5000/qtymast')
        .then(response =>{{
            const r = response.data.qtymast
            setData(r)
        }})
    }

    // Insert the new qty type into the table
    const handleNewFood = (e) =>{
        setQtyType(e.target.value)
    }
    function addQtyType(){
        axios.post('http://localhost:5000/insertQty',{
                qtytype : newQtyType
        }).then(response =>{
            console.log(response.data)
            alert('Quantity type add successfully')
            api();
        })
    }

    function delApi(id){
        // alert(id);
        const r = confirm("Are You Sure To Delete Record? ID NO. : " + id)

        if(r == true){
            axios.delete('http://localhost:5000/delqtymast',{
                data : {"id" : id }
            }).then(response =>{
                alert(response.data.message)
                api();
            })
        }else{
            false
            api()
        }

    }
    
    function uptQtymast(id){
        localStorage.setItem('qtyid',id);
        navigate('/UptQtyMast')
        api();
    }
    return(<>
        <NavbarDigiMenu/>
        <Card>
            <Card.Header as="h1" className="headerS">
                Quantity Master
            </Card.Header>
            <form action="">
            <input type="text" onChange={handleNewFood} className="addBtnInput" name="" id="" placeholder="Enter the new Quantity type" required/>
            <button className="addBtn" onClick={addQtyType}>ADD QTY TYPE</button>
            </form>
            <Card.Body>
                 <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Quantity Type</th>
                            <th>Created At</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                    {dataM.map((item,index) =>{ // map method can be used for the attach the db data into the table format
                            return(
                                <tr>
                                    <td>{item.qid}</td>
                                    <td>{item.qtytype}</td>
                                    <td>{item.created_at}</td>
                                    <td><button className="delBtn" onClick={()=>delApi(item.qid)}>Delete</button></td>
                                    <td><button className="uptBtn" onClick={()=>uptQtymast(item.qid)}>Update</button></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table> 
            </Card.Body>
        </Card>

        
    </>)
}