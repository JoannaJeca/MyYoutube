import styled from 'styled-components'
import {AiFillHome} from "react-icons/ai"
import { BiScreenshot } from "react-icons/bi";
import { MdOutlineSubscriptions, MdOutlineVideoLibrary } from "react-icons/md";
import {HiDownload} from "react-icons/hi"


const SideBar = () => {
  return (
    <div>
      <Container>
      <Hold>
        <AiFillHome size={23}/>
        <p>Home</p>
       </Hold>
       <Hold>
        <BiScreenshot size={23}/>
        <p>Shorts</p>
       </Hold>
       <Hold>
        <MdOutlineSubscriptions size={23}/>
        <p>Subscriptions</p>
       </Hold>
       <Hold>
        <MdOutlineVideoLibrary size={23}/>
        <p>You</p>
       </Hold>
       <Hold>
        <HiDownload size={23}/>
        <p>Downloads</p>
       </Hold>
      </Container>
    </div>
  )
}

export default SideBar;

const Hold= styled.div`
  width:100%;
  border-radius: 10px;
  height:75px;
  &:hover{
    background-color:  #d0d0d0;
  };
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
p{
    /* text-align:center; */
    font-weight:normal;
    font-size:11px;
  }
`

const Container = styled.section`
  width:70px;
  /* background-color: purple; */
  height:55vh;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
`