import styled from 'styled-components'
import moment from 'moment'
import pix from "../assets/IMG_20210510_220010_405.jpg"
import viddy from "../assets/video.mp4"


const Body = () => {

  const data = Array.from({length:10})
  return (
    <div>
      <Container>
       {data?.map((props)=>(
         <Card>
         <Top>
           <Image src={pix}/>
           <Video src={viddy} controls playsInline loop autoPlay muted/>
           <Time>{moment(new Date().getTime()).format("LT")}</Time>
         </Top>
         <Bottom>
           <Avatar/>
           <ChannelTitle></ChannelTitle>
           <ChannelName></ChannelName>
         </Bottom>
       </Card>
       ))}
      </Container>
    </div>
  )
}

export default Body;
const ChannelTitle = styled.img``
const ChannelName = styled.img``
const Avatar = styled.img``

const Bottom = styled.div`
width:100%;
height:24.5%;
background-color: greenyellow;
`

const Time =styled.div`
color:white;
font-weight:550px;
padding:5px;
background-color:rgba(0,0,0,0.7);
position:absolute;
bottom:10px;
right:10px;`

const Video =styled.video`
position: absolute;
top:0;
left:0;
opacity:0;
width:100%;
height:100%;
object-fit:cover;
object-position:center;
transition:all ease-in 350ms;`

const Image =styled.img`
width:100%;
height:100%;
object-fit:cover;
object-position:center;
transition:all ease-in 350ms;`

const Top = styled.div`
height:73%;
width:100%;
position:relative;
&:hover{
  ${Video}{
    opacity:1;
  }
}`

const Card = styled.div`
width:345px;
height:324px;
display: flex;
flex-direction: column;
justify-content: space-between;
margin:0px 20px 20px 0px;
`

const Container  = styled.div`
  width:100%;
  height:100%;
  background-color: yellow;
  display:flex;
  flex-wrap:wrap;
  margin-top:20px;
`