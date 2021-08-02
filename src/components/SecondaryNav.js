import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const SecondaryNav = () => {
     //defining styles for the jsx elements
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffdb76",
      fontSize: "18px",
      minHeight: "74px",
    },
  }));
  //defining classes to be used as styling classes.
  const classes = useStyles();
  //returning jsx template for the navbar
  return (
    <div className={classes.root}>
      <b>Note:</b> Slot time for lunch is from 12:30pm to 3:00pm and slot time
      for dinner is from 6:00pm to 8:30pm. You can schedule or modify your
      orders 4 hours prior to the slot time.
    </div>
  );
};
//exporting the component for further use
export default SecondaryNav;
