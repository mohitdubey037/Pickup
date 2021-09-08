import React from 'react';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Dropdowncomponent } from './style';
export default function Dropdown() {
    return (
        <Dropdowncomponent>
              <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params}  variant="outlined" />}
            />

        </Dropdowncomponent> 
           

    )
}
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },

]