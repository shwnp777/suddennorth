import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import { Chat } from '@material-ui/icons';

import Head from 'next/head';

// @material-ui/icons

// core components
import Header from 'components/Header/Header.js';
import Footer from 'components/Footer/Footer.js';
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Button from 'components/CustomButtons/Button.js';
import HeaderLinks from 'components/Header/HeaderLinks.js';
import Parallax from 'components/Parallax/Parallax.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPage.js';
import logo from 'assets/img/logos/lightlogo.png';

// Sections for this page
import ProductSection from 'pages-sections/LandingPage-Sections/ProductSection.js';
import TeamSection from 'pages-sections/LandingPage-Sections/TeamSection.js';
import WorkSection from 'pages-sections/LandingPage-Sections/WorkSection.js';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Index(props) {
	const classes = useStyles();
	const { ...rest } = props;
	return (
		<div>
			<Head>
				<title>Sudden North</title>
			</Head>
			<Header
				color='white'
				routes={dashboardRoutes}
				x
				brand='Sudden North'
				rightLinks={<HeaderLinks />}
				fixed
				{...rest}
			/>
			<Parallax filter responsive image={require('assets/img/hike.jpg')}>
				<div className={classes.container}>
					<GridContainer>
						<GridItem xs={12} sm={12} md={6}>
							<img
								src={logo}
								alt='Sudden North Logo'
								className={classes.homeLogo}
							/>
							<h2>Your Journey Starts With Us!</h2>
							<br />
							<Button
								color='info'
								size='lg'
								href='https://www.linkedin.com/suddennorth'
								target='_blank'
								rel='noopener noreferrer'
							>
								<Chat className={classes.icons} />
								Learn More
							</Button>
						</GridItem>
					</GridContainer>
				</div>
			</Parallax>
			<div className={classNames(classes.main, classes.mainRaised)}>
				<div className={classes.container}>
					<ProductSection />
				</div>
			</div>
			<Footer />
		</div>
	);
}
