import { useEffect, useState } from "react";
import NavbarDigiMenu from "./NavbarDigiMenu";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' // Used for the router
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

export default function Menu(){
    const [data,setData] = useState([])

    useEffect(()=>{
        api();
    },[])

    // Call the api for the get the data of the menucard
    function api(){
        axios.get('http://localhost:5000/menucard')
        .then(response =>{{
            const r = response.data.menucard
            setData(r)
        }})
    }

    // Delete food group 


    
    return(<>
        <NavbarDigiMenu/>
        <Card>
            <Card.Header as="h1">
                MENU CARD
            </Card.Header>
            <Card.Body>
                 <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>MENU NAME</th>
                            <th>MENU PRICE</th>
                            <th>FOOD GROUP</th>
                            <th>QTY TYPE</th>

                        </tr>
                    </thead>
                    <tbody>
                    {data.map((item,index) =>{
                            return(
                                <tr>
                                    <td>{item.menu_name}</td>
                                    <td>{item.menu_price}</td>
                                    <td>{item.gname}</td>
                                    <td>{item.qtytype}</td>
                                    

                                </tr>
                            )
                        })}
                    </tbody>
                </Table> 
            </Card.Body>
        </Card>
    </>)
}