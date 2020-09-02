import React from 'react';
import Button from '@material-ui/core/Button';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export default function IconLabelButtons() {
  const classes = useStyles();

  return (
    <div>
   
      {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
      <Button
      startIcon={<Icon>send</Icon>}
        variant="contained"
        color="primary"
        className={classes.button}
        
      >
        Send
      </Button>
     
    </div>
  );
}
