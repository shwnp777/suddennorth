import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import Head from 'next/head'

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";




// Sections for this page
import PortfolioGrid from "../components/Portfolio/PortfolioGrid";




const dashboardRoutes = [];

const useStyles = makeStyles(styles);



export default function Portfolio(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Head>
        <title>Sudden North | Portfolio</title>
      </Head>
      <Header
        color="white"
        routes={dashboardRoutes}x
        brand="Sudden North"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
    <Parallax className={classes.parallaxDiv} filter responsive image={require("assets/img/loginBg.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>Our Portfolio</h1>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <PortfolioGrid />
        </div>
      </div>
      <Footer />
    </div>
  );
}