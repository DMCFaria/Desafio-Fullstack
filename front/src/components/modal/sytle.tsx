import { styled } from "styled-components";

export const STYLEDMODAL = styled.div`
  z-index: 99;
  background-color: #0000007f;
  min-width: 100vw;
  min-height: 100vh;
  color: white;
  position: absolute;
  left: 0;

  form {
    background-color: whitesmoke;
    border-radius: 12px;
    gap: 10px;
    color: black;
    padding: 20px;
    font-weight: 600;
    display: flex;
    flex-direction: column;
    margin-top: 30vh;
    margin-left: 20vw;
    max-width: 60vw;
    max-height: 60vh;
    border: 1px solid white;
    opacity: 100%;
  }
  span {
    position: absolute;
    right: 19vw;
    top: 30vh;
    cursor: pointer;
  }
`;
