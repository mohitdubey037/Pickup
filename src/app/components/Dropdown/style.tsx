import styled from "styled-components";

export const Dropdowncomponent = styled.div `
&>div.MuiAutocomplete-root{    
    width:311px !important;    
    &> div.MuiFormControl-root{
        & > div.MuiInputBase-root{
            padding:0;
            height: 42px;
        }
        & > div > div >button.MuiAutocomplete-clearIndicator {
            display:none;
        }
    }
}
`