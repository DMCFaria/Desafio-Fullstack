import styled from "styled-components";

export const STYLEDDASHBOARD = styled.div`
    display: flex;
    flex-direction: column;
  .outside {
    display: flex;
    border: 1px solid white;
    min-width: 75vw;
    max-height: 70vh;
    min-height: 70vh;
    margin-top: 3vh;
    justify-content: center;
    overflow: auto;
  }
  .create {
    max-width: 80px;
    align-self: flex-end;
    margin-top: 12vh;
  }
`;
