import styled from 'styled-components'
import data from "../Props/genres.json"
import Genreslide from '../Props/Genreslide';

const Genres = () => {
  return (
    <div>
      <Container>
        <Wrapper>
        {
          data?.map((props)=>(
            <Genreslide text={props.text} bcc={props.bcc} cl={props.cl}/>
          ))
        }
        </Wrapper>
      </Container>
    </div>
  )
}

export default Genres;
const Wrapper=styled.div`
width:97%;
display: flex;
/* flex-direction: column; */
height:100%;
justify-content: flex-start;
  align-items: center;
/* background-color:grey; */
`


const Container = styled.section`
  width:calc(100vw - 80px);
  /* background-color: green; */
  height:45px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
`