import { useEffect, useState } from "react";
import NavbarDigiMenu from "./NavbarDigiMenu";
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import './Food_group.css'

export default function MenuTable() {
    // Hooks For All API Passing data
    const [data, setData] = useState([])
    const [newMenu, setMenu] = useState("")
    const [newPrice, setPrice] = useState(0)
    const [newGid, setGid] = useState(0)
    const [newFid, setFid] = useState(0)
    useEffect(() => {
        apiCall();
    }, [])

    //Function for the all foodgroup calling

    function apiCall() {
        axios.get('http://localhost:5000/menu')
            .then(response => {
                {
                    const r = response.data.data
                    // console.log(r)
                    setData(r)
                }
            })
    }

    // Delete food group 

    const [gid, setFGid] = useState(0)

    function delApi(id) {
        setFGid(id)
        alert(gid)

        axios.delete('',)
            .then(response => {
                alert(response.data.message)
            })


    }

    // This process for the inset the new food group into the food group list

    const inputMenu = (e) => {
        setMenu(e.target.value)
    }

    const inputMenuPrice = (e) => {
        setPrice(e.target.value)
    }

    const inputFoodGroupId = (e) => {
        setFid(e.target.value)
    }

    const inputQtyTypeId = (e) => {
        setGid(e.target.value)
    }
    const nFG = {
        "menu_name": newMenu,
        "menu_price": newPrice,
        "qid": newGid,
        "gid": newFid

    }

    function addMenu() {

        axios.post('http://localhost:5000/insertmenu', nFG)
            .then(response => {
                // console.log(response.dada)
                alert("New Menu added Successfully.!")
                apiCall()
            })
    }

    function delMenu(id){

        const r = confirm("Are You Sure To Delete Record? ID NO. : " + id)

        if(r == true){
            axios.delete('http://localhost:5000/delmenu',{
                data : {    "id" : id}
            }).then(response =>{
                alert(response.data.message)
                apiCall()
            })
        }
    }
    

    const navigate = useNavigate();

    function uptMenu(id){
        localStorage.setItem('menuid',id)
        navigate('/UptMenuTable')
        apiCall();
    }
    return (<>
        <NavbarDigiMenu/>
        <Card>

            <Card.Header as="h1" className="headerS">
                MENU TABLE
            </Card.Header>
            <form action="">
                <input type="text" name="" onChange={inputMenu} className="addBtnInput" id="" placeholder="Enter the new Menu Name" required />

                <input type="text" name="" onChange={inputMenuPrice} className="addBtnInput" id="" placeholder="Enter the new Menu Price" required />

                <input type="text" name="" onChange={inputFoodGroupId} className="addBtnInput" id="" placeholder="Enter the new Food Group ID" required />

                <input type="text" name="" onChange={inputQtyTypeId} className="addBtnInput" id="" placeholder="Enter the new Quantity Type ID" required />
                <button className="addBtn" onClick={addMenu}>ADD NEW MENU</button>
            </form>
            <Card.Body>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>MENU NAME</th>
                            <th>MENU PRICE</th>
                            <th>FOOD FROUP ID</th>
                            <th>QUANTITY TYPE ID</th>
                            <th>CREATED AT</th>
                            <th>DELETE</th>
                            <th>UPDATE</th>

                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr>
                                    <th>{item.mid}</th>
                                    <td>{item.menu_name}</td>
                                    <td>{item.menu_price}</td>
                                    <td>{item.gid}</td>
                                    <td>{item.qid}</td>
                                    <td>{item.created_at}</td>
                                    <td><button className="delBtn" onClick={() =>{delMenu(item.mid)}}>Delete</button></td>
                                    <td><button className="uptBtn" onClick={() => {uptMenu(item.mid)}}>Update</button></td>

                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Card.Body>
        </Card>
    </>)
}