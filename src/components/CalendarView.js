import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
const CalendarView = () => {
  //defining styles for the jsx elements
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      justifyContent: "space-between",
      width: "80%",
      marginLeft: "10em",
      borderBottom: "1px solid #161616",
      padding: "10px"
    },
    dateContainer: {
        width: "140px",
        "&:hover" : {
            backgroundColor: "rgb(219, 219, 219)",
            cursor: "pointer",
            borderRadius: ".7rem",
            color: "white"
        }
    },
    currentDate: {
        backgroundColor: "black",
        color: "white",
        borderRadius: ".7rem",
    }

  }));
  //defining classes to be used as styling classes.
  const classes = useStyles();
  //returning jsx template for the navbar
  return (
    <div className={classes.root}>
      <div className={classes.dateContainer}>
        <p>Sun</p>
        <h2>01</h2>
      </div>
      <div className={clsx(classes.dateContainer,classes.currentDate)}>
        <p>Mon</p>
        <h2>02</h2>
      </div>
      <div className={classes.dateContainer}>
        <p>Tue</p>
        <h2>03</h2>
      </div>
      <div className={classes.dateContainer}>
        <p>Wed</p>
        <h2>04</h2>
      </div>
      <div className={classes.dateContainer}>
        <p>Thu</p>
        <h2>05</h2>
      </div>
      <div className={classes.dateContainer}>
        <p>Fri</p>
        <h2>06</h2>
      </div>
      <div className={classes.dateContainer}>
        <p>Sat</p>
        <h2>07</h2>
      </div>
    </div>
  );
};

export default CalendarView;