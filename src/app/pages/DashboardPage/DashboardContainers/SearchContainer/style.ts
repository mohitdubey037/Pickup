import styled from "styled-components";
import Paper from "@mui/material/Paper";

// export const SearchFieldsWrapper = styled.div`
//   margin-top: 54px;
//   margin-bottom: 28px;
//   display: flex;
//   gap: 8px;
//   align-items: flex-end;

//   img {
//     align-self: center;
//     cursor: pointer;
//   }
//   input {
//     width: 152px;
//   }
//   button {
//     height: 42px;
//   }
// `;

export const SearchTableTop = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding:12px 24px;
  justify-content: space-between;
  box-sizing:border-box;
  .heading{
    color: #f99746;
  }
`;



export const TabWrapper = styled.div`
  .custom {
    padding: 0px !important;
    background-color: #fff !important;
  }
  .tab-content {
    margin-top: 20px;
    width: 100%;
  }
  .label {
    padding: 6px 0px;
    font-size: 12px;
  }
  .label-text {
    font-weight: bold;
    font-size: 14px;
  }
`;

export const SubTitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubHeader = styled.span`
  font-size: 16px;
  font-weight: 700;
`;

export const HeadSpanBlock = styled.span`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;

  .ShareImageBlock {
    margin-right: 7px;
    height: 16px;
    width: 16px;
  }

  .ShareText {
    color: #1b8af0;
    font-weight: 500;
    font-size: 16px;
  }
`;

export const PaperBlock = styled(Paper)`
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding: 20px 30px;
  .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active {
    color: #FECE3E;
  }
  .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed {
    color: #FECE3E;
  }
`;

export const MapDiv = styled.div`
  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 18px 0px 23px 0px;
  }
`;

export const SecondStepContent = styled(Paper)`
  height: 80px;
  width: 338px;
  display: flex;
`;

export const AvatarDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 11px 0px 13px;
`;

export const NameAndCarDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  .NameSpan {
    font-size: 16px;
    font-weight: 500;
  }
  .NumberSpan {
    font-size: 12px;
  }
`;

export const CallButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 54px;
  Button {
    border-radius: 8px;
  }
`;

export const AdvanceFilterBox = styled.div`
 .heading{
   margin:24px 0;
 }
`;
