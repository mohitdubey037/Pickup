import styled from "styled-components";

 
export const DasboardWrapper = styled.div`
height: 100vh;
background: #fece3e;

display: flex;
`;

export const LeftDashboard = styled.div`
  background: #fece3e;
  height: inherit;
  padding: 15px;
  text-align: left;
  color: #343434;
  height : 100%;

  `;

export const RightDashboard = styled.div`
  flex:1;
  height: inherit;
  background: #fafafa;
  border-radius: 40px 0px 0px 0px;
  `;

export const ParentLink = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 21px;
`;

export const ChildLink = styled.div`
font-size: 16px;
line-height: 19px;
`;


export const Container=styled.div`
width:100%;
height:100vh;
`

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
}
`;

export const Center = styled.div`
display:flex;
flex-direction:column;
justify-content: center;
`