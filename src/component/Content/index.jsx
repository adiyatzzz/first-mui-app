import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import CoffeeCard from "../CoffeeCard";
import CoffeList from "../../API/data";

const useStyle = makeStyles({
  content: {
    marginTop: "30px",
  },
});

export default function Content() {
  const classes = useStyle();
  return (
    <Grid container spacing={3} className={classes.content}>
      {CoffeList.map((d) => {
        return (
          <Grid item xs={12} sm={6} md={4}>
            <CoffeeCard
              title={d.title}
              subtitle={d.price}
              avatarSrc={d.avatarUrl}
              description={d.description}
              imgSrc={d.imageUrl}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
