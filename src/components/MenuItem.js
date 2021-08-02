import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
const MenuItem = ({ item }) => {
  //defining styles for the jsx elements
  const useStyles = makeStyles((theme) => ({
      root: {
       "&:hover": {
           cursor: "pointer",
           boxShadow: "0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
       }
      },

    image: {
      width: "100%",
      height: "100%",
    },
    chip: {
      margin: "5px",
      border: "1px solid #52cb01",
      color: "#52cb01",
    },
    scheduleButton: {
      backgroundColor: "black",
      color: "white",
      width: "90%",
      borderRadius: ".5rem",
      "&:hover": {
          backgroundColor: "black",

      }
    },
  }));
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent>
        <img src={item.imageUrl} alt="food" className={classes.image}></img>
        <h2>{item.foodName}</h2>
        <h5>by {item.chef}</h5>
        {item.tags.map((value, key) => (
          <Chip
            label={value}
            key={key}
            variant="outlined"
            className={classes.chip}
          ></Chip>
        ))}
        <p>{item.description}</p>
        <Button className={classes.scheduleButton}>Schedule Meal</Button>
      </CardContent>
    </Card>
  );
};

export default MenuItem;
