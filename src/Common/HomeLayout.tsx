import SideBar from '../HomePages/SideBar'
import LandingPage from '../HomePages/LandingPage'
import Header from '../Block/Header'
import styled from "styled-components"


const HomeLayout = () => {
  return (
    <div>
      <Header/>
      <Hold>
        <SideBar/>
        <Holder>
        <LandingPage/>
        </Holder>
      </Hold>
    </div>
  )
}

export default HomeLayout;
const Holder = styled.div`
  width:calc(100% - 70px);
`

const Hold = styled.div`
display:flex;
/* justify-content:space-between */
`