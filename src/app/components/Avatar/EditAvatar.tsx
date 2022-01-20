import React from 'react';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { Theme, makeStyles, withStyles, createStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { editavatar } from 'app/assets/Icons';
import { Box } from '@material-ui/core';
import { SmallLabel } from '../Typography/Typography';

interface AvatarInterface {
  icon?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiBadge-anchorOriginBottomRightCircular' : {
        right: 0,
        bottom: 0,
        transform: 'translate(-50%, -50%)',
        transformOrigin: 0,
        top: '50%',
        left: '50%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        height: '100%',
        width: '100%',
        borderRadius: '50%',
    }
    },
    input: {
      display: 'none',
    },
    avatar: {
      height: 86,
      width:86,

    },
    typo:{
      color:'#fff',
      marginTop:'8px'
    },
    img:{
      marginTop:'10px'
    }

  }),
);




  const EditAvatar: React.FC<AvatarInterface> = ({ icon }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Badge
        overlap="circular"
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        badgeContent={
          <div className={classes.root}>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
      </label>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <Box display="flex" flexDirection="column" alignItems="center">
          <img src={editavatar} alt=""  className={classes.img}   />
          <SmallLabel text="Edit"  className={classes.typo} />
          </Box>
        </IconButton>
      </label>
    </div>
        }
      >
        <Avatar alt="" src={icon} className={classes.avatar} />
      </Badge>
    </div>
  );
}

export default EditAvatar
