import React from 'react';
import Switch from '@material-ui/core/Switch';
import { SwitchBox } from './style';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

export default function Switches() {
  const [state, setState] = React.useState({
    checkedA: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <SwitchBox>
      {/* <Switch
        checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
        label="Start"
          labelPlacement="start"
      /> */}
          <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
        <FormControlLabel
          value="top"
          control={<Switch color="primary" />}
          label="Receive Notification"
          labelPlacement="top"
        />
       
      </FormGroup>
    </FormControl>

    </SwitchBox>
  );
}
