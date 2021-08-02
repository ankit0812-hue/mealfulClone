import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
const Footer = () => {
  //defining styles for the jsx elements
  const useStyles = makeStyles((theme) => ({
    root: {
      width: "80%",
      borderTop: "1px solid #161616",
      marginBottom: "3em",
      marginLeft: "10em",
    },
    social: {
      display: "flex",
      marginTop: "3em",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "5em",
    },
  }));
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.social}>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <IconButton>
          <TwitterIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Footer;
