import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { Grid } from "react-bootstrap";
import Styleguides from "../Components/Styleguides";

/* -----------------    COMPONENT     ------------------ */

class Dashboard extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <Grid>
        <Styleguides />

      </Grid>
    );
  }
}

/* -----------------    CONTAINER     ------------------ */

export default connect(null)(Dashboard);
