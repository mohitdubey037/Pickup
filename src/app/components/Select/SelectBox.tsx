import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import { MenuLabel, SelectBoxStyle, SmallLabeltext } from './style';
import { dropdown } from 'app/assets/Icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

export default function SelectBox() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

  return (
  
   
      <SelectBoxStyle>
        <InputLabel id="demo-simple-select-placeholder-label-label">
          Heading
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          value={age}
          onChange={handleChange}
          displayEmpty
          className={classes.selectEmpty}
        >
          <MenuItem value="">
            <span>Select</span>
          </MenuItem>
          <MenuItem value={10}><MenuLabel text="Ten" /><SmallLabeltext text="Can place orders and view reports of self account" /></MenuItem>
          <MenuItem value={20}><MenuLabel text="Twenty" /><SmallLabeltext text="Can place orders and view reports of self account" /></MenuItem>
          <MenuItem value={30}><MenuLabel text="Thirty" /><SmallLabeltext text="Can place orders and view reports of self account"/></MenuItem>
        </Select>
        <img src={dropdown} alt="" className="dropdownicon" />
        <FormHelperText>Error message</FormHelperText>
      </SelectBoxStyle>
     
  );
}
