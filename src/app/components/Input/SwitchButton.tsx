import { FormControl, FormControlLabel, FormGroup, Switch } from "@mui/material";
import React from "react";
import { SwitchBox } from "./style";

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
