import styled from 'styled-components'
import logo from '../Images/netflix-logo-png-2583.png'
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";



const Header = styled.div `
background-color: #00000069;
height: 80px;
width: 100vw;
display: flex;
justify-content: space-around;
align-items: center;
`
const Img = styled.img `
width: 150px;
`

const Nav = styled.nav `
display: flex;
justify-content: space-between;
`
const Ul = styled.ul `
display: flex;
gap: 20px;
padding: 16px;

`
const Li = styled.li `
list-style: none;
color: white;
font-size: 20px;
`
const Menager = styled.div`
`
const Profile = styled.div `
`

function NavBar (){
    return (
    
        <Header>
            <Img src={logo} alt="logo netflix" />
            <Nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Ul>
                <Li className="nav-item active">Home</Li>
                <Li className="nav-item active">TV Shows</Li>
                <Li className="nav-item active">Movies</Li>
              </Ul>
            </Nav>
            <Menager>
            <button><CiSearch size={30}/></button>
            <button><FaHeart size={30}/>My List</button>
            <button><IoIosNotifications size={30}/></button>
            <Profile>
                <img src="" alt="" />
                <span>Camilly</span>
                <span><IoMdArrowDropdown size={30}/></span>
            </Profile>
            </Menager>
        </Header>

    )
}

export default NavBar;