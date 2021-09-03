import React from 'react'
import MaterialSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

function Select() {
    return (
        <div>
 
 <select>

<option>Item one</option>

<option>Item one</option>

<option>Item one</option>

<option>Item one</option>

<option>Item one</option>

<option>Item one</option>

<option>Item one</option>

<option>Item one</option>

<option>Item one</option>

<option>Item one</option>

 </select>
            {/* <MaterialSelect
                placeholder={'s'}
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                onChange={() => { }}
                label="Age"
                value={10}
                style={{width:100}}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </MaterialSelect> */}
        </div>
    )
}

export default Select
