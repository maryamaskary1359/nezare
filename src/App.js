import React from "react";
import {useRoutes} from 'react-router-dom'
import Footer from "./component/Footer/Footer";
import NavBar from "./component/Navbar/Navbar";
import Topbar from "./component/Topbar/Topbar";
import routes from "./routes";

function App() {
  const router=useRoutes(routes)
  return (

  <>
  <Topbar/>
  <NavBar/>
    {router}
  <Footer/>
  </>
 );
}

export default App;
