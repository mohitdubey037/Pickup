import { ContentBox } from "app/components/CommonCss/CommonCss";
import styled from "styled-components";

export const ContactDetailsBox = styled(ContentBox)`
    width: 350px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    justify-content:space-between;
    padding:24px;
    margin-left:12px;
    @media (max-width: 960px) {
        width: 100%;
        order:1;
        margin-left:0;
      }
`

export const ContactFlex = styled.div`
   display:flex;
   margin-bottom:16px;
   @media (max-width: 960px) {
  flex-direction:column;
  }
`

export const ContactForm = styled.div`
@media (max-width: 960px) {
    order:2;
    margin-top:20px;
  }
  `