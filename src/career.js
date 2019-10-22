import React from "react";
import Typography from "@material-ui/core/Typography";
import Nav from "./components/nav.js";
import CareerNav from "./components/career_nav.js";

function Career() {
  
  return (
    <div>
      <Nav />
      <Typography variant="h1" component="h3" gutterBottom="true">
        Career
      </Typography>
      <CareerNav />
    </div>
  );
}

export default Career;
