import { useEffect, useState } from "react";
import NavbarDigiMenu from "./NavbarDigiMenu";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import axios from 'axios'
import './Food_group.css'
import { useNavigate } from "react-router-dom";


export default function Food_group(){
    // Hooks For All API Passing data
    const [data,setData] = useState([])
    const [newFoodGroup,setFoodGroup] = useState("")
    

    //Function for the all foodgroup calling

    function apiCall(){
        axios.get('http://localhost:5000/foodgroup')
        .then(response =>{{
            const r = response.data.foodgroup
            setData(r)
        }})
    }

    useEffect(()=>{
        apiCall();
    },[])

    // Delete food group 

    const [gid,setGid] = useState(0)

    function delApi(id){
        // alert(id)

        const r = confirm("Are You Sure To Delete Record? ID NO : " + id);


        if(r == true){
            axios.delete('http://localhost:5000/delfoodgroup',{
                data : {"gid" : id}
            })
            .then(response =>{
                alert(response.data.message)
                apiCall();
            })
        }else{
            false
        }
        

    }

    // This process for the inset the new food group into the food group list
    const inputFoodGroup = (e) =>{
        setFoodGroup(e.target.value)
    }

    const nFG = {
        gname : newFoodGroup
    }

    function addFoodGroup(){
        
        axios.post('http://localhost:5000/insert_food_group',nFG)
        .then(response =>{
            // console.log(response.dada)
            alert("Food group added")
            apiCall()
        })
    }

    const navigate = useNavigate();


    function uptFoodGroup(id){
        const r = confirm('Do you want to update Food Group Name')
        // alert(id)
        localStorage.setItem('foodId', id);

        if(r){
            navigate('/UptFoodGrp');
        }else{
            return false
        }
        apiCall();

    }

    return(<>
        <NavbarDigiMenu/>
        <Card>
            
            <Card.Header as="h1" className="headerS">
                FOOD GROUP
            </Card.Header>
            <form action="">
            <input type="text" name=""  onChange={inputFoodGroup} className="addBtnInput" id="" placeholder="Enter the new Food Group" required/>
            <button className="addBtn" onClick={addFoodGroup}>ADD NEW FOOD GROUP</button>
            </form>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>FOOD GROUP NAME</th>
                            <th>DELETE</th>
                            <th>UPDATE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item,index) =>{
                            return(
                                <tr>
                                    <td>{item.gid}</td>
                                    <td>{item.gname}</td>
                                    <td><button className="delBtn" onClick={()=>delApi(item.gid)}>DELETE</button></td>
                                    <td><button className="uptBtn" onClickCapture={()=>uptFoodGroup(item.gid)}>UPDATE</button></td>

                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    </>)
}