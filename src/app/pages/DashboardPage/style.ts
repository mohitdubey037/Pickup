import styled from "styled-components";

export const DasboardWrapper = styled.div`
	display: flex;
	background: #fece3e;
  width:100%;
  @media (max-width:1023px){
    background: #fff;
  }
`
export const Overlay = styled.div`
position: fixed;
width: 100%;
height: 100%;
top: 0;
left: 0;
right: 0;
bottom: 0;
background-color: rgba(0,0,0,0.5);
z-index: 1000;
cursor: pointer;
display:flex;
justify-content: center;
align-items: center;

`;

