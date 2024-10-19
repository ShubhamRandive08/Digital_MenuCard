import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx' 
import './index.css'
import Home from './Home.jsx'
import Props_Hooks from './Props_Hooks.jsx'
import Hooks from './Hooks.jsx'
import Op_Num from './Op_Num.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom' // Used for the router
import Login  from './Login.jsx'
import Navb from './Navb.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import Prbs from './Prbs.jsx'
// import Api_Call from './api_call.jsx'
import Upt_Food_Group from './Upt_Food_Group.jsx'
import Food_Post_Api from './Food_Post_Api.jsx'
import Menu_Api_Test from './Menu_Api_Test.jsx'
import NavbarDigiMenu from './NavbarDigiMenu.jsx'
import Food_group from './Food_group.jsx'
import Menu from './MenuCard.jsx'
import Qtymast from './Qtymast.jsx'
import MenuTable  from './MenuTable.jsx'
import UptFoodGrp from './UptFoodGrp'
import UptQtyMast from './UptQtyMast'
import UptMenuTable from './UptMenuTable.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Prbs></Prbs> */}
    {/* <App /> */}
    {/* <Home/> */}
    {/* <Props_Hooks/> */}
    {/* <Hooks></Hooks> */}
    {/* <Op_Num></Op_Num> */}
    {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/hook' element={<Hooks></Hooks>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/apicall' element={<Api_Call></Api_Call>}></Route>
      </Routes>
    </BrowserRouter> */}
    {/* <Navb></Navb> */}
    {/* <Api_Call/> */}
    {/* <Login/> */}
    {/* <Upt_Food_Group/> */}
    {/* <Food_Post_Api/> */}
    {/* <Menu_Api_Test/> */}
    {/* <NavbarDigiMenu /> */}
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
        <Route path='/Food_group' element={<Food_group></Food_group>}></Route>
        <Route path='/Qtymast' element={<Qtymast></Qtymast>}></Route>
        <Route path='/MenuTable' element={<MenuTable></MenuTable>}></Route>
        <Route path='/Menucard' element={<Menu></Menu>}></Route>
        <Route path='/UptFoodGrp' element={<UptFoodGrp></UptFoodGrp>}></Route>
        <Route path='/UptQtyMast' element={<UptQtyMast />}></Route>
        <Route path='/UptMenuTable' element={<UptMenuTable />}></Route>
        
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
