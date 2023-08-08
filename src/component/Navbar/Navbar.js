import React ,{useState}from 'react'
import { DropdownSubmenu, NavDropdownMenu} from "react-bootstrap-submenu";
import { Nav ,NavDropdown,Navbar} from 'react-bootstrap';
import {LinkContainer } from 'react-router-bootstrap'
import {useNavigate ,Navigate} from 'react-router-dom' 
import {CourseData} from './../../component/data'
import './Navbar.css'


export default function NavBar() {
  const [toggle, setToggle] = useState(false)
   const [searchValue,setSsearchValue]=useState('')
   const [courses,setCourses]=useState(CourseData)
    const navigate=useNavigate()

    function emptyValue(){
      setSsearchValue('')
    }
    const searchBtn=(event)=>{

      let link=courses.find(course=>course.name==searchValue)
      let hasCourse=courses.some(course=>course.name==searchValue)
     console.log(link);
      if(hasCourse ){
        navigate(`/${link.course}/${searchValue}`)
      }else if(searchValue.trim()==''){
   
        event.preventDefault()
      }else{
        navigate('/error')
      }
      emptyValue()
    }
  return (
   <div className="main-head">
    <div className="container-fluid ">
    <Navbar collapseOnSelect expand="md" >
      <LinkContainer  to='/'>
       <Navbar.Brand className='brand'>
      <img src="./images/logo/logonomy.jpeg" alt="logo" className="nav-imag" />
      </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <LinkContainer to='/'>
        <Nav.Link >خانه</Nav.Link>
      </LinkContainer>
        <NavDropdownMenu title="موسیقی" id="موسیقی" alignRight
      renderMenuOnMount={true}>
        <LinkContainer to='music/ارف'>
       <NavDropdown.Item >موسیقی کودک (ارف)</NavDropdown.Item>
       </LinkContainer>
          <LinkContainer to='music/تنبک'>
          <NavDropdown.Item >تنبک</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to='music/دف'>
          <NavDropdown.Item >دف</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to='music/کاخن'>
          <NavDropdown.Item >کاخن</NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to='music/سنتور'>
         <NavDropdown.Item >سنتور</NavDropdown.Item>
         </LinkContainer>
         <LinkContainer to='music/گیتار'>
         <NavDropdown.Item href="#action/3.1">گیتار</NavDropdown.Item>
         </LinkContainer>
         <LinkContainer to='music/ستار'>
         <NavDropdown.Item href="#action/3.1">ستار</NavDropdown.Item>
         </LinkContainer>
     </NavDropdownMenu>
     
       <LinkContainer  to='/gallery'>
       <Nav.Link >گالری</Nav.Link>
       </LinkContainer>
       <LinkContainer to='/contac'>
       <Nav.Link href="#features" className='nav-link__about'>ارتباط با ما</Nav.Link>
       </LinkContainer>
      </Nav>
      <div className="main-header__left  ">
        <div className={toggle ? 'shearchbar toggle': 'shearchbar'}>
          <input type="text" className=" shearchbar-input" placeholder="چی دوست داری یاد بگیری ؟" list="datalistName"
          value={searchValue}
          onChange={(event)=>setSsearchValue(event.target.value)}
          />
         <datalist id="datalistName">
          <option value="تنبک"></option>
          <option value="ارف"></option>
          <option value="گیتار"></option>
          <option value="دف"></option>
          <option value="سنتور"></option>
          <option value="کاخن"></option>
          <option value="ستار"></option>
         </datalist>
         
          <a  className="btn search-btn  "
          onClick={()=>{
           setToggle(!toggle)
            searchBtn()
          }}
           >
            <i className="fas fa-search search-icon "></i>
          </a>
        </div>
            <div>
            <a href="#" className=" main-header__cart-btn  ">
                <i className="fas fa-shopping-cart main-header__cart-icon"></i>
              </a>
              <a href="#" className="  main-header__profile  ">
                <span className=" main-header_profile-text">ورود/ثبت نام</span>
              </a>
            </div>  
      </div>
    </Navbar.Collapse>
    </Navbar>
  </div>
  </div>
  )
}
