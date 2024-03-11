import { FC, useState, useEffect } from "react";
import styled from "styled-components";


interface iProps {
  Avatar: any;
}

const Avatars: FC<iProps> = ({ Avatar }) => {

  return (
    <div>
      <Avatar src={Avatar} />
    </div>
  );
};

export default Avatars;

const Avatar = styled.img`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: darkorange;
  object-fit: contain;
  cursor:pointer

`;