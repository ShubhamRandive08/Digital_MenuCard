import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card'
import axios from 'axios'
import './UptFoodGrp.css'
import React from "react";
import { useNavigate } from "react-router-dom";
export default function UptFoodGrp() {
    const navigate = useNavigate();

    const [gid, setData] = useState(0)
    const [fname,setName] = useState([])

    useEffect(()=>{
        api();
    },[])

    function apiall(){
        axios.get('http://localhost:5000/qtymast')
        .then(response =>{{
            const r = response.data.qtymast
            setData(r)
        }})
    }


    function api(){
        const storedId = localStorage.getItem('foodId');
        // alert(storedId)
        axios.post('http://localhost:5000/foodgroupById',{
            "id" : storedId
        })
        .then(
            responce =>{
                // console.log(responce.data.food_group[0])
                const fid = responce.data.food_group[0].gid;
                const f_name = responce.data.food_group[0].gname;

                setData(fid)
                setName(f_name)

            }
        )
    }

    function uptFoodGrp(){
        const id = document.getElementById('fid').value;
        const fname = document.getElementById('fname').value

        axios.put('http://localhost:5000/uptFoodGroup',{
            "id" : id,
            "gname" : fname
        }).then(
            responce =>{
                // console.log(responce.data)
                if(responce.data.status == 200)
                    alert(responce.data.message)
                else
                    alert(responce.data.message)
            }
        )
        apiall();
        navigate('../Food_group')
    }

    function back(){

        const r = confirm('Do you want to cancle update?')
        
        if(r)
            navigate('/Food_group')
        else
            return false
    }

    return (
        <>
            <Card className="CrdMain">
                <Card.Header as="h2" className="uptHeader">
                    UPDATE FOOD GROUP
                </Card.Header>
                <form >
                    <input type="text" name=""  value={gid} className="inputBoxUpt" id="fid"  required />
                    <input type="text" name=""   className="inputBoxUpt" id="fname" placeholder="Enter new Food Group" required />
                    

                    <button className="up" onClick={uptFoodGrp}>UPDATE</button>
                    <button className="can" onClick={back}>Cancle</button>

                </form>
            </Card>
        </>
    )
}