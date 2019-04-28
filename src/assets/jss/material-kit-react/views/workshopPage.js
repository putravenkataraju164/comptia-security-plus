import { container, title, cardTitle } from "assets/jss/material-kit-react.js";

import imagesStyle from "assets/jss/material-kit-react/imagesStyles.js";
import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const workshopPageStyle = {
  container,
  ...imagesStyle,
  main: {
    paddingTop: "50px",
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    borderRadius: "0px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  cardTitle: {
    ...cardTitle
  },
  cardDate:  {
    paddingRight: "20px"
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  section: {
    padding: "20px 0 50px",
    textAlign: "left"
  },
  socials: {
    marginTop: "0",
    width: "100%",
    transform: "none",
    left: "0",
    top: "0",
    height: "100%",
    lineHeight: "41px",
    fontSize: "20px",
    color: "#999"
  },
  navWrapper: {
    margin: "20px auto 50px auto",
    textAlign: "center"
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px"
  }
};

export default workshopPageStyle;
