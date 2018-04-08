import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3
  }),
  hero: {
    minHeight: "50vh",
    minWidth: "100vw",
    backgroundColor: "gray"
  },
  heroImg: {
    height: "auto",
    width: "100%"
  },
  containerContent: {
    position: "absolute",
    right: 0,
    top: "40vh",
    width: "40vw"
  },
  textPri: {
    padding: "1em",
    border: "1px solid tomato",
    width: "max-content",
    display: "block",
    color: "black",
    textDecoration: "none",
    marginTop: "1em"
  },
  textP: {
    width: "25vw"
  },
  imgHero: {
    position: "absolute",
    top: "40vh",
    left: "25%"
  }
});

function ContentHomePage(props) {
  const { classes } = props;
  return (
    <div>
      <div className={classes.imgHero}>
        <img
          alt="imghero"
          src="https://image.flaticon.com/icons/png/128/53/53537.png"
        />
      </div>
      <div className="mobiContent">
        <div className={classes.containerContent}>
          <h1>Get Start</h1>
          <p className={classes.textP}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. . Quo
            dolor deleniti aut mollitia.
          </p>
          <a href="#0" className={classes.textPri}>
            {" "}
            Get start{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

ContentHomePage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ContentHomePage);
