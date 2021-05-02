import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar, IconButton } from "@material-ui/core";
import { Share } from "@material-ui/icons";

export default function CoffeCard(props) {
  const { avatarSrc, title, subtitle, description, imgSrc } = props;

  return (
    <Card>
      <CardHeader
        avatar={<Avatar alt={title} src={avatarSrc} />}
        action={
          <IconButton>
            <Share />
          </IconButton>
        }
        title={title}
        subheader={subtitle}
      />
      <CardMedia image={imgSrc} title={title} style={{ height: "150px" }} />
      <CardContent>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">BUY NOW</Button>
        <Button size="small">OFFER</Button>
      </CardActions>
    </Card>
  );
}
