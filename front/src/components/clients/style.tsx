import { styled } from "styled-components";

export const STYLEDCLIENT = styled.li`
  gap: 30px;
  border-bottom: 1px solid WHITE;
  color: white;
  margin-top: 20px;
  padding-bottom: 25px;
  
  .hidden {
    display: none;
  }
  h1 {
    margin: 10px;
  }
  h2 {
    margin: 30px;
    font-weight: bolder;
  }
  Span {
    font-weight: lighter;
  }
  div {
    display: flex;
    min-width: 90%;
    min-height: 20%;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px;
    padding-left: 10px;
    padding-right: 10px;
    border: 1px solid grey;
  }
  
form{
    display: flex;
    gap: 5px;
    flex-direction: column;
}
.button{
  margin: 0;
  padding: 2px;
  cursor: pointer;
  background-color:whitesmoke;
  color: black;
}


`;

export const STYLEDUL = styled.ul`
  display: flex;
  flex-direction: column;
`;
