import styled from "styled-components"
import {RxHamburgerMenu} from "react-icons/rx"
import logo from "../assets/youtubeLogo.jpg"
import {GoSearch} from "react-icons/go"
import {HiMicrophone} from "react-icons/hi"
import {BiVideoPlus} from "react-icons/bi"
import {BsBell} from "react-icons/bs"
import {useState} from 'react'
import SideBar from "../HomePages/SideBar"

const Header = () => {
  const [see, setSee] = useState<boolean> (false)
const Seer = ()=>{
  setSee(!see)
}
  return (
    <div>
      <Container>
        <Wrapper>
          <Left>
            <div onClick={Seer}><Menu /></div>
            <Logo>
              <img src={logo} alt="Youtube_logo"/>
              <h5>NG</h5>
            </Logo>
          </Left>
          <Center>
            <Div>
              <Input/>
              <Search/>
            </Div>
            <Circle cl="#ebebeb"><HiMicrophone size={20}/></Circle>
          </Center>
          <Right>
            <Circle cl="white"><BiVideoPlus style={{cursor:"pointer"}}size={22}/></Circle>
            
            <Circle cl="white"><BsBell style={{cursor:"pointer"}} size={24}/> </Circle>

            <Profile>J</Profile>
          </Right>
        </Wrapper>
      </Container>
      
    </div>
  )
}

export default Header;
const Profile=styled.div`
color:white;
width:45px;
height:45px;
font-size:16px;
border-radius:50%;
display: flex;
align-items: center;
justify-content: center;
cursor:pointer;
background-color: #dada11;

`

const Right = styled.div`
width:12%;
height:100%;
display: flex;
/* background-color:gold; */
align-items: center;
justify-content: space-between;

`

const Circle = styled.div<{cl:string}>`
width:45px;
height:45px;
border-radius:50%;
display: flex;
align-items: center;
justify-content: center;
background-color:${({cl})=>cl};
&:hover{
    background-color: #b0b0b0;
  }
`

const Input =styled.input`
height:96%;
flex:1;
border-radius:30px;
border-top-right-radius: 0;
border-bottom-right-radius: 0;
border:none;`

const Search = styled(GoSearch)`
font-size:18px;
margin:0px 17px;
`

const Div = styled.div`
width:92%;
display: flex;
align-items: center;
justify-content: center;
padding-left:1px;
padding-right:2px;
padding-bottom:0.5px;
height:69%;
border-radius: 30px;

background-color: #dddddd;
  &:hover{
    background-color: #ded7d7;
  }
`

const Center = styled.div`
width:55%;
height:100%;
/* background-color:goldenrod; */
display: flex;
justify-content: space-between;
align-items: center;
`

const Logo = styled.div`
width:70%;
height:100%;
position: relative;
img{
  width:100%;
  height:100%;
  object-fit: contain;
};
h5{
position:absolute;
top:10px;
right:0;
font-size:10px;
}`

const Menu = styled(RxHamburgerMenu)`
font-size:25px;
`

const Left = styled.div`
width:10%;
height:100%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color:yellow; */
`

const Wrapper = styled.div`
width:97%;
height:100%;
display: flex;
justify-content: space-between;
align-items: center;
/* background-color:green; */
`

const Container = styled.header`
width:100vw;
height:70px;
display: flex;
justify-content: center;
align-items: center;
`