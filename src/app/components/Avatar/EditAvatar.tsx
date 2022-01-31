import React from "react";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import {
  Theme,
  makeStyles,
  createStyles,
} from "@material-ui/core/styles";
import { editavatar } from "app/assets/Icons";

interface AvatarInterface {
  icon?: string;
  changeHandler: (e) => void;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    input: {
      display: "none",
    },
    avatar: {
      height: 86,
      width: 86,
      border: '1px solid #ddd',
    },
    root: {
      width: 22,
      height: 22,
      background: '#FECE3E',
      padding:7,
      cursor:'pointer'
    },
  })
);


const EditAvatar: React.FC<AvatarInterface> = ({ icon, changeHandler }) => {
  const classes = useStyles();

  return (
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        badgeContent={
          <>
            <input
              accept="image/*"
              className={classes.input}
              onChange={(e) => changeHandler(e)}
              id="contained-button-file"
              multiple
              type="file"
            />
            <label htmlFor="contained-button-file"></label>
            <input
              accept="image/*"
              className={classes.input}
              id="icon-button-file"
              type="file"
              onChange={(e) => changeHandler(e)}
            />
            <label htmlFor="icon-button-file">
                  <Avatar src={editavatar} alt=""  className={classes.root} />
            </label>
          </>
        }
      >
        <Avatar alt="" src={icon} className={classes.avatar} />
      </Badge>
  );
};

export default EditAvatar;
