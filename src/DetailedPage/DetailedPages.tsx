import styled from 'styled-components'

const DetailedPages = () => {
  return (
    <div id="detailedpage">
     <Container>
        <Wrapper> 
            <MainVideo>
                <Video>
                    <Vid/>
                    <Hover>Mayorkon-Lose Control (Coke Studio Africa 2023)</Hover>
                </Video>
                <Content></Content>
            </MainVideo>
            <OtherVideos></OtherVideos>
        </Wrapper>
     </Container>
    </div>
  )
}

export default DetailedPages;
const OtherVideos = styled.div``

const Content = styled.div``

const Hover =  styled.div`
width:100%;
height:55px;
background-image: linear-gradient(to bottom, black, #00000078);
top:0;
display: flex;
align-items: center;
font-size:18px;
color:white;
position:absolute;
opacity:0;`

const Vid =  styled.video``

const Video =  styled.div`
width:100%;
height:87%;
background-color:whitesmoke;
&:hover{
  ${Hover}{
  opacity:1
};
};
border-radius:20px;
position:relative;
`

const MainVideo = styled.div`
width:72%;
height:85vh;
background-color:grey`

const Wrapper = styled.div`
width:90%;
height:100%;
margin-top:15px;
background-color:green;
display:flex;`

const Container = styled.section`
width:100%;
height:100%;
/* background-color:yellow; */
display: flex;
justify-content: center;
align-items: center;`