import React from "react";
import Switch from "@material-ui/core/Switch";
import { SwitchBox } from "./style";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function Switches({ value, setIsChecked }) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <SwitchBox>
      <FormControl component="fieldset">
        <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={
              <Switch
                color="primary"
                checked={value}
                // checked={value}
                onChange={handleChange}
              />
            }
            label="Receive Notification"
            labelPlacement="top"
          />
        </FormGroup>
      </FormControl>
    </SwitchBox>
  );
}
