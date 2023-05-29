import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router";
import { Typography, Button } from "@material-ui/core";

const Dashboard = () => {
  const history = useHistory();

  return (
    <>
      <Typography variant="h4">{`Explore a city with a Local`}</Typography>
      <Typography variant="subtitle1">{`Book experiences, locals, and things to do at exclusive prices`}</Typography>
      <br />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => history.push("/flight-search")}
        style={{backgroundColor: "#ceede5"}}
      >
        {`Search Flights Here`}
      </Button>
    </>
  );
};

Dashboard.propTypes = {
  history: PropTypes.object
};

export default Dashboard;