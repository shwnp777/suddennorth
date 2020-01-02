import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Computer from "@material-ui/icons/Computer";
import InsertChart from "@material-ui/icons/InsertChart";
import Assignment from "@material-ui/icons/Assignment";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Let{"'"}s talk business</h2>
          <h5 className={classes.description}>
            It was very stressful for you to come up with an idea, or put your talent to work. Then, go through quite a bit to establish a business. Now, finding out that it can be very difficult to keep afloat. This is where we come in - We can do it all... except for the ownership!
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Strategy"
              description="The key aspect to any successful business is the right strategy for your expertise and market. We have a team with years of experience that can develop the right plan for your journey."
              icon={InsertChart}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Software Development"
              description="We can design and develop any ecommerce site that will drive traffic quickly. However, we can develop full-stack applicatopns with an extentsive database, personalized CRM, or both."
              icon={Computer}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Management Training"
              description="Finance, Marketing, and Human Resources are only a few of the expert areas within our team. We can show your team how to run an effecient, well-rounded organization."
              icon={Assignment}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
