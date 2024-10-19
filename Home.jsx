import MyImage from './assets/leap.webp'; // This is used for the take an image from the folder
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Navb from './Navb';
import React from "react";
import axios from 'axios'
import NavbarDigiMenu from './NavbarDigiMenu';
import './Home.css'
import { useEffect, useState } from 'react';
export default function Home(){
    const [menuCount, setMenuCount] = useState(0)
    const [FoodCount, setFoodCount] = useState(0)
    const [QtyCount, setQtyMastCount] = useState(0)

    useEffect(()=>{
        api1();
        api2();
        api3();

    })
    
    // Call the api for the count the number of the menu
    function api1(){
        axios.get('http://localhost:5000/countMenu')
        .then(response =>{
            const l = response.data.menucard.length
            setMenuCount(l);
        })
    }


    // Call the api for the count the number of the qtymast
    function api2(){
        axios.get('http://localhost:5000/countQtyMast')
        .then(response =>{
            const l = response.data.qtymast.length
            setQtyMastCount(l);
        })
    }


    // Call the api for the count the number of the foodgroup
    function api3(){
        axios.get('http://localhost:5000/countFoodGroup')
        .then(response =>{
            const l = response.data.food_group.length
            setFoodCount(l);
        })
    }
    return(
        <>
        <NavbarDigiMenu/>
        {/* <img src={MyImage} alt="" /> */}
        {/* <button onClick={alrt}>Click Me</button> */}
        <div className="divs">
        <Card className='card1'>
            <Card.Header as="h1">
                Qtymast Count
            </Card.Header>
            <Card.Body className='ttl1'>
            {QtyCount}
            </Card.Body>
        </Card>

        <Card className='card2'>
            <Card.Header as="h1">
                Menu Count
            </Card.Header>
            <Card.Body className='ttl1'>
            {menuCount}
            </Card.Body>
        </Card>

        <Card className='card3'>
            <Card.Header as="h1">
                Food Group Count
            </Card.Header>
            <Card.Body className='ttl1'>
                 {FoodCount}
            </Card.Body>
        </Card>
        </div>
        </>
    )
}