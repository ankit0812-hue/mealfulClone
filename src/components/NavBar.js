import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../assets/logo.svg";
import Button from '@material-ui/core/Button';
const NavBar = () => {
  //defining styles for the jsx elements
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    logo: {
        height: '90px',
        width: '90px',
    },
    nav: {
        backgroundColor: "white",
        height: "74px"
    },
    linkContainer: {
        flexGrow: 1,
        marginLeft: "20em",
    }
  }));
  //defining classes to be used as styling classes.
  const classes = useStyles();
  //returning jsx template for the navbar
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.nav} elevation={0}>
        <Toolbar>
          <img src={Logo} alt="logo" className={classes.logo}></img>
          <div className={classes.linkContainer}>
          <Button>Buy Meal plan</Button>
          <Button>Schedule Meals</Button>
          <Button>Upcoming</Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
//exporting the component for further use
export default NavBar;
