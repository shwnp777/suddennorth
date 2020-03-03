import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

// import images for sites 
import sudstart from "../../assets/img/sudstart.png";
import usna from "../../assets/img/usna.png";


import styles from "../../assets/jss/nextjs-material-kit/components/portGridStyle.js";


const useStyles = makeStyles(styles);

export default function PortfolioGrid() {
  const classes = useStyles();

  
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>This is our latest work</h2>
            <h5 className={classes.description}>
              It was very stressful for you to come up with an idea, or put your talent to work. Then, go through quite a bit to establish a business. Now, finding out that it can be very difficult to keep afloat. This is where we come in - We can do it all... except for the ownership!
            </h5>
            </GridItem>
            </GridContainer>
            <div>
            <GridContainer spacing={3}>
                <GridItem xs={12}>
                <Link href="https://suddenstartup.com">
                  <a>
                  <img src={sudstart} alt="..." className={classes.portImage} />
                  </a>
                </Link>
                </GridItem>
                <GridItem xs={6}>
                <img src={usna} alt="..." className={classes.portImage} />
                </GridItem>
                <GridItem xs={6}>
                <img src={sudstart} alt="..." className={classes.portImage} />
                </GridItem>
                <GridItem xs={12}>
                <img src={usna} alt="..." className={classes.portImage} />
                </GridItem>


                <GridItem xs={6} md={4}>
                <img src={sudstart} alt="..." className={classes.portImage} />
                </GridItem>
                <GridItem xs={6} md={4}>
                <img src={usna} alt="..." className={classes.portImage} />
                </GridItem>
                <GridItem sm={12} md={4}>
                <img src={sudstart} alt="..." className={classes.portImage} />
                </GridItem>
            </GridContainer>
         
        </div>
      </div>
    );
  }