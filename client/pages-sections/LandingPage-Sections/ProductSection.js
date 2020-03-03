import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Computer from '@material-ui/icons/Computer';
import InsertChart from '@material-ui/icons/InsertChart';
import Assignment from '@material-ui/icons/Assignment';
import Web from '@material-ui/icons/Web';
import Lock from '@material-ui/icons/Lock';
// import Assignment from '@material-ui/icons/Assignment';
// core components
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import InfoArea from 'components/InfoArea/InfoArea.js';

import styles from 'assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js';

const useStyles = makeStyles(styles);

export default function ProductSection() {
	const classes = useStyles();
	return (
		<div className={classes.section}>
			<GridContainer justify='center'>
				<GridItem xs={12} sm={12} md={8}>
					<h2 className={classes.title}>Let{"'"}s talk business</h2>
					<h5 className={classes.description}>
						We are Sudden North - the name says it all. We start from where you
						are at and develop the best strategies to move you up! When owning a
						business, every second counts, and we are here to make sure your
						dreams become reality! Join the best business developers today!
					</h5>
				</GridItem>
			</GridContainer>
			<div>
				<GridContainer>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title='Strategy'
							description='The key aspect to any successful business is the right strategy for your talents and market. We have a team with years of experience that can develop the right plan for your journey.'
							icon={InsertChart}
							iconColor='success'
							vertical
						/>
					</GridItem>

					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title='Design'
							description='We build brands as well as build businesses. We have some of the most talented designers to develop the best brand for you.'
							icon={Web}
							iconColor='warning'
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title='Software Development'
							description='We can design and develop any ecommerce site that will drive traffic quickly. However, we can develop full-stack applicatopns with an extentsive database, personalized CRM, or both.'
							icon={Computer}
							iconColor='info'
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title='Marketing'
							description='The key aspect to any successful business is the right strategy for your expertise and market. We have a team with years of experience that can develop the right plan for your journey.'
							icon={InsertChart}
							className={classes.iconSec}
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title='Security'
							description='Cyber Security is the unsung hero of web development. We implement the best security measures possible in order to secure your data.'
							icon={Lock}
							iconColor='primary'
							vertical
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={4}>
						<InfoArea
							title='Management'
							description='Many individuals start a business because they have a talent or vision. However, not all entrepreneurs know how to manage their business to be successful.'
							icon={Assignment}
							iconColor='danger'
							vertical
						/>
					</GridItem>
				</GridContainer>
			</div>
		</div>
	);
}
