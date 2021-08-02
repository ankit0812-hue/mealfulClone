import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
const MenuNav = () => {
  // initilizing useState hook for maintaining application state
  const [toggle, setToggle] = useState("Lunch");
  //defining styles for the jsx elements
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexGrow: 1,
      width: "80%",
      marginLeft: "10em",
    },
    toggleButton: {
      display: "flex",
      width: "80%",
      justifyContent: "flex-end",
      margin: "10px"
    },
    selectedOption: {
      backgroundColor: "black",
      color: "white",
      width: "120px",
      borderRadius: "20px",
      "&:hover": {
        backgroundColor: "black",
      }
    },
    btn: {
      width: "120px",
      borderRadius: "20px"
    }
  }));
  //arrow function for handle toggling of the button while clicking
  const handleClick = () =>{
    if(toggle==="Lunch") {
      setToggle("Dinner");
    }
    else {
      setToggle("Lunch");
    }
  }
  //defining classes to be used as styling classes.
  const classes = useStyles();
  //returning jsx template for the navbar
  return (
    <div className={classes.root}>
      <h1>{toggle} Menu</h1>
      <div className={classes.toggleButton}>
        <Button className={toggle==="Lunch"?classes.selectedOption:classes.btn} onClick={handleClick}>Lunch</Button>
        <Button className={toggle==="Dinner"?classes.selectedOption:classes.btn} onClick={handleClick}>Dinner</Button>
      </div>
    </div>
  );
};

export default MenuNav;
