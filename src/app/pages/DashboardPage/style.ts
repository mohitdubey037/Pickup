import styled from "styled-components";

export const DasboardWrapper = styled.div`
	display: flex;
	background: #fece3e;
  width:100%;
`


export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Overlay = styled.div`
position: fixed;
/* display: none; */
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
z-index: 2;
cursor: pointer;
display:flex;
justify-content: center;
align-items: center;

`;

export const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
