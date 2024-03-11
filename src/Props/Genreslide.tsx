import styled from 'styled-components'

interface iGenres{
    text:string
    bcc:string
    cl:string
}

const Genreslide:React.FC<iGenres> = ({text, bcc, cl}) => {
  return (
    <div>
        <Card bcc={bcc} cl={cl}>{text}</Card>
    </div>
  )
}

export default Genreslide;

const Card = styled.div<{bcc?:string, cl:string}>`
  border-radius: 7px;
  padding:6px 11px;
  background-color: ${({bcc})=>bcc};
  color:${({cl})=>cl};
  margin-right:4px;
  display: flex;
  cursor:pointer;
  transition: all 350ms;
  &:hover{
    background-color: #ded7d7;
  }
  
`