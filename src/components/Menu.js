import React from "react";
import Grid from "@material-ui/core/Grid";
import MenuItem from "./MenuItem";
import { makeStyles } from "@material-ui/core/styles";
const Menu = () => {
  //creating dummy data to be displayed
  const data = [
    {
      imageUrl: "https://www.mealful.ca/img/60f90dc08b564.jpg",
      foodName: "Cobb Salad",
      chef: "Freshii-Scotia Square",
      tags: ["Organic", "Fitness Food"],
      description:
        "Salad with field greens, hard boiled egg, avocado, bacon, aged cheddar, tom...",
    },
    {
      imageUrl: "https://www.mealful.ca/img/60c577ca00021.jpg",
      foodName: "Cobb Salad",
      chef: "Freshii-Scotia Square",
      tags: ["Organic", "Fitness Food"],
      description:
        "Salad with field greens, hard boiled egg, avocado, bacon, aged cheddar, tom...",
    },
    {
      imageUrl: "https://www.mealful.ca/img/60eb6c5f981ce.jpg",
      foodName: "Cobb Salad",
      chef: "Freshii-Scotia Square",
      tags: ["Organic", "Fitness Food"],
      description:
        "Salad with field greens, hard boiled egg, avocado, bacon, aged cheddar, tom...",
    },
    {
      imageUrl: "https://www.mealful.ca/img/60c5773c2d283.jpg",
      foodName: "Cobb Salad",
      chef: "Freshii-Scotia Square",
      tags: ["Organic", "Fitness Food"],
      description:
        "Salad with field greens, hard boiled egg, avocado, bacon, aged cheddar, tom...",
    },
    {
      imageUrl: "https://www.mealful.ca/img/60cb830e753eb.jpg",
      foodName: "Cobb Salad",
      chef: "Freshii-Scotia Square",
      tags: ["Organic", "Fitness Food"],
      description:
        "Salad with field greens, hard boiled egg, avocado, bacon, aged cheddar, tom...",
    },
    {
      imageUrl: "https://www.mealful.ca/img/60f2540094c13.jpg",
      foodName: "Cobb Salad",
      chef: "Freshii-Scotia Square",
      tags: ["Organic", "Fitness Food"],
      description:
        "Salad with field greens, hard boiled egg, avocado, bacon, aged cheddar, tom...",
    },
  ];
  //defining styles for the jsx elements
  const useStyles = makeStyles((theme) => ({
    root: {
        width: "80%",
        marginLeft: "10em",
        marginTop: "2em",
        marginBottom: "2em"
    }
  }));
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      {data.map((value, key) => (
        <Grid item xs={4} key={key}>
          <MenuItem item={value} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Menu;
