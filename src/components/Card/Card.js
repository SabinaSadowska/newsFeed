import React from "react";
import "./card.sass";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  root: {
    maxWidth: 500,
    margin: "2% ",
  },
};

function CardComponent(props) {
  const { imgPath, title, classes, text, articlePath } = props;

  return (
    <div className="card">
      <a className="card_link" href={props.articlePath} target="_blank">
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image={imgPath}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {text}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </div>
  );
}

export default withStyles(styles)(CardComponent);
